import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, FileText, Command } from 'lucide-react';
import { sound } from '../utils/audioSynth';
import { ThemeMode } from '../types';

interface HeaderProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenCommand: () => void;
  onOpenResumeModal: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Header({
  currentTheme,
  onThemeChange,
  onOpenCommand,
  onOpenResumeModal,
  soundEnabled,
  onToggleSound
}: HeaderProps) {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-[#262626] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Editorial Logo / Monogram */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={() => sound.playClick()}
            className="group flex flex-col text-decoration-none text-left"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-[0.3em] text-zinc-400">
                NALSAR DoMS &bull; BBA '26
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
            </div>
            <span className="font-serif-display italic text-2xl sm:text-3xl text-white tracking-tight border-b-2 border-[#D4FF00] pb-0.5 group-hover:text-[#D4FF00] transition-colors">
              Anshuman Verma.
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono-code uppercase tracking-widest text-zinc-300">
          <a
            href="#research"
            onClick={() => sound.playClick()}
            className="hover:text-[#D4FF00] transition-colors"
          >
            01. Research Lab
          </a>
          <a
            href="#experience"
            onClick={() => sound.playClick()}
            className="hover:text-[#D4FF00] transition-colors"
          >
            02. Experience
          </a>
          <a
            href="#skills"
            onClick={() => sound.playClick()}
            className="hover:text-[#D4FF00] transition-colors"
          >
            03. Matrix
          </a>
          <a
            href="#achievements"
            onClick={() => sound.playClick()}
            className="hover:text-[#D4FF00] transition-colors"
          >
            04. Accolades
          </a>
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="hover:text-[#D4FF00] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Time & Terminal Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-[#141414] border border-[#262626] text-[11px] font-mono-code text-zinc-300">
            <Terminal className="w-3 h-3 text-[#D4FF00]" />
            <span>{timeString} IST</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sound.playClick();
            }}
            title={soundEnabled ? 'Mute procedural audio synthesizer' : 'Unmute audio synthesizer'}
            className={`p-2 border text-xs transition ${
              soundEnabled
                ? 'bg-[#141414] border-[#D4FF00]/50 text-[#D4FF00]'
                : 'bg-[#101010] border-[#262626] text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick Command Launcher */}
          <button
            onClick={() => {
              sound.playCyberZap();
              onOpenCommand();
            }}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-xs font-mono-code text-zinc-200 transition"
          >
            <Command className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span className="hidden sm:inline">Cmd+K</span>
          </button>

          {/* Editorial Acid Button */}
          <button
            onClick={() => {
              sound.playSuccess();
              onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#D4FF00] hover:bg-white text-black text-xs font-mono-code uppercase font-bold tracking-wider transition neo-brutal-btn"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Executive CV</span>
            <span className="sm:hidden">CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
