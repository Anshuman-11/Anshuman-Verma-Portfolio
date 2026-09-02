import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

export default function ExperienceSection() {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] relative z-10 border-t border-[#262626] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#262626]">
          <div className="flex items-start gap-4">
            <span className="text-6xl sm:text-7xl font-serif-display italic text-[#D4FF00] leading-none select-none">
              02
            </span>
            <div>
              <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#D4FF00] font-bold block mb-1">
                // Industry &amp; Field Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-white uppercase tracking-tight">
                FIELD DEPLOYMENT.
              </h2>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md leading-relaxed">
            Corporate financial auditing, DRDO bio-digester infrastructure planning, and data pipeline optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveExpId(exp.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`w-full p-4 text-left border transition relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#181818] border-[#D4FF00] shadow-xl'
                      : 'bg-[#121212] border-[#262626] hover:border-zinc-500'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-zinc-400 mb-1">
                    <span className="uppercase">{exp.type}</span>
                    <span className="text-zinc-500">{exp.duration}</span>
                  </div>
                  <h3 className="text-sm font-syne font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                    {exp.organization}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5 truncate">{exp.role}</p>
                  {exp.impactScore && (
                    <div className="mt-2 text-[10px] font-mono-code text-[#D4FF00] flex items-center gap-1 font-bold">
                      <Zap className="w-3 h-3" /> {exp.impactScore}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Dossier */}
          <div className="lg:col-span-8 bg-[#121212] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#262626]">
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-mono-code font-bold bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30 mb-2">
                    {activeExp.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">{activeExp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-zinc-400 mt-1">
                    <span className="flex items-center gap-1 text-white font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                      {activeExp.organization}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {activeExp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {activeExp.location}
                    </span>
                  </div>
                </div>

                {activeExp.impactScore && (
                  <div className="bg-[#181818] px-3.5 py-2 border border-[#262626] text-right">
                    <span className="text-[10px] font-mono-code text-zinc-400 block uppercase">
                      Quantified Milestone
                    </span>
                    <span className="text-xs font-mono-code font-bold text-[#D4FF00]">
                      {activeExp.impactScore}
                    </span>
                  </div>
                )}
              </div>

              {/* Bulleted Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400">
                  Key Responsibilities &amp; Direct Outcomes:
                </h4>
                <div className="space-y-2.5">
                  {activeExp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-sans leading-relaxed">
                      <div className="w-5 h-5 bg-[#181818] border border-[#262626] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[#D4FF00]" />
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="pt-6 mt-6 border-t border-[#262626]">
              <span className="text-xs font-mono-code uppercase text-zinc-500 block mb-2">
                Applied Tooling &amp; Frameworks:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeExp.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono-code bg-[#181818] text-zinc-300 border border-[#262626]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
