import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';
import GenerativeParticleCanvas from './components/canvas/GenerativeParticleCanvas';
import ExecutiveResumeModal from './components/ExecutiveResumeModal';
import CommandPalette from './components/CommandPalette';
import { ThemeMode } from './types';
import { sound } from './utils/audioSynth';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('cyber-editorial');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative min-h-screen bg-[#0A0A0A] text-[#F0F0F0] selection:bg-[#D4FF00] selection:text-black ${
      theme === 'cyber-editorial' ? 'editorial-grid' : 'editorial-dots'
    }`}>
      {/* Editorial Background Giant Monogram Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.035] pointer-events-none z-0">
        <div className="absolute -top-24 -left-16 text-[32rem] sm:text-[45rem] font-syne font-black leading-none select-none tracking-tighter text-white">
          A
        </div>
        <div className="absolute top-[45%] -right-16 text-[30rem] sm:text-[42rem] font-serif-display italic leading-none select-none tracking-tighter text-[#D4FF00]">
          V
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Vertical Rotated Editorial Badge */}
      <div className="fixed left-[-60px] top-1/2 -translate-y-1/2 rotate-90 origin-center text-[9px] font-mono-code font-bold uppercase tracking-[0.6em] text-zinc-600 hidden 2xl:block pointer-events-none z-40 select-none">
        QUANTITATIVE LAB &bull; VERMA.2024-26
      </div>

      {/* Interactive Background Canvas */}
      <GenerativeParticleCanvas />

      {/* Fixed Navigation Header */}
      <Header
        currentTheme={theme}
        onThemeChange={setTheme}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResumeModal={() => setIsResumeOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeOpen(true)} />
        <ResearchSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
      </main>

      {/* Footer & Contact Dispatch */}
      <Footer />

      {/* Modals & Command Overlays */}
      <ExecutiveResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleSound={toggleSound}
      />
    </div>
  );
}

