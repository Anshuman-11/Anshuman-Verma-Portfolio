import { useState, useEffect } from 'react';
import { Search, Zap, BookOpen, Briefcase, Award, Mail, FileText, Volume2, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleSound: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResume,
  onToggleSound
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playCyberZap();
        if (isOpen) onClose();
        else {
          // Open
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'lcoe',
      title: 'Launch LCOE Renewable Energy Simulator',
      category: 'Research Lab',
      icon: Zap,
      color: '#D4FF00',
      action: () => {
        window.location.hash = '#research';
        onClose();
      }
    },
    {
      id: 'risk',
      title: 'Launch Behavioral Risk Tolerance Engine (N=139)',
      category: 'Behavioral Finance',
      icon: Zap,
      color: '#D4FF00',
      action: () => {
        window.location.hash = '#research';
        onClose();
      }
    },
    {
      id: 'experience',
      title: 'Explore Finlyt (OPDSure) & Ladli Foundation Experience',
      category: 'Experience',
      icon: Briefcase,
      color: '#FFFFFF',
      action: () => {
        window.location.hash = '#experience';
        onClose();
      }
    },
    {
      id: 'accolades',
      title: 'View AIR 27 CSIR & Scholastic Honors',
      category: 'Accolades',
      icon: Award,
      color: '#D4FF00',
      action: () => {
        window.location.hash = '#achievements';
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'Open Executive 1-Pager CV & Print',
      category: 'Resume',
      icon: FileText,
      color: '#FFFFFF',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Contact',
      icon: Mail,
      color: '#D4FF00',
      action: () => {
        sound.playSuccess();
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 }, colors: ['#D4FF00', '#FFFFFF', '#0A0A0A'] });
        onClose();
      }
    },
    {
      id: 'sound',
      title: 'Toggle Audio Synthesizer Feedback',
      category: 'System',
      icon: Volume2,
      color: '#D4FF00',
      action: () => {
        onToggleSound();
        sound.playClick();
        onClose();
      }
    }
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-20 px-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#121212] border border-[#262626] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#262626] gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Type a command or jump to section (e.g. LCOE, Risk, CV, Finlyt)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono-code"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono-code text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    sound.playClick();
                    item.action();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full flex items-center justify-between p-3 hover:bg-[#181818] transition text-left group border border-transparent hover:border-[#262626]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 flex items-center justify-center bg-[#181818] border border-[#262626]"
                      style={{ color: item.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-syne font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                        {item.title}
                      </p>
                      <span className="text-[10px] font-mono-code text-zinc-500">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono-code text-zinc-600 group-hover:text-[#D4FF00]">
                    Jump &rarr;
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-[#0C0C0C] border-t border-[#262626] flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
          <span>Navigation: Select with click or enter</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
