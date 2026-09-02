import { motion } from 'motion/react';
import { Trophy, Award, GraduationCap, Medal, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

export default function AchievementsSection() {
  const handleBadgeClick = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4FF00', '#FFFFFF', '#0A0A0A']
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="achievements" className="py-24 bg-[#0A0A0A] relative z-10 border-t border-[#262626] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#262626]">
          <div className="flex items-start gap-4">
            <span className="text-6xl sm:text-7xl font-serif-display italic text-[#D4FF00] leading-none select-none">
              04
            </span>
            <div>
              <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#D4FF00] font-bold block mb-1">
                // Honors, Distinctions &amp; Scholastics
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-white uppercase tracking-tight">
                ACADEMIC &amp; COMPETITIVE ACCOLADES.
              </h2>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md leading-relaxed">
            National scientific assessments, inter-school engineering &amp; sports championships, and premier scholastic standing.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-[#D4FF00]" />
            <h3 className="text-xs font-mono-code uppercase text-zinc-300 tracking-wider font-bold">
              Formal Scholastic Record
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#121212] border border-[#262626] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-2">
                    <span className="text-[#D4FF00] font-bold">{edu.duration}</span>
                    <span className="px-2 py-0.5 bg-[#1a1a1a] text-zinc-300 border border-[#262626]">
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-base font-syne font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-xs text-zinc-400 font-sans">{edu.institution}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#262626] flex justify-between items-center">
                  <span className="text-xs font-mono-code text-zinc-500">Academic Score</span>
                  <span className="text-sm font-mono-code font-bold text-[#D4FF00]">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              onClick={handleBadgeClick}
              onMouseEnter={() => sound.playHover()}
              className="p-5 bg-[#121212] border border-[#262626] hover:border-[#D4FF00] transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code text-zinc-400 mb-2">
                  <span className="text-zinc-500 uppercase">{ach.category}</span>
                  <span className="text-zinc-400">{ach.year}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-[#D4FF00] group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-syne font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                    {ach.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#262626] flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-zinc-500 truncate max-w-[160px]">
                  {ach.organization}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono-code font-bold bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
                  {ach.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
