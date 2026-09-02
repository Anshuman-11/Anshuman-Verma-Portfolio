import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, BrainCircuit, Palette, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-[#D4FF00]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-white" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4 text-[#D4FF00]" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-zinc-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#D4FF00]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#262626]">
          <div className="flex items-start gap-4">
            <span className="text-6xl sm:text-7xl font-serif-display italic text-[#D4FF00] leading-none select-none">
              03
            </span>
            <div>
              <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#D4FF00] font-bold block mb-1">
                // Quantitative &amp; Strategic Competency
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-white uppercase tracking-tight">
                THE SKILLS MATRIX.
              </h2>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md leading-relaxed">
            Proficiencies across econometrics, database engineering, executive dashboard development, and creative production.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = idx === selectedCategory;
            return (
              <button
                key={idx}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 border text-left transition flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[#181818] border-[#D4FF00] shadow-xl text-white'
                    : 'bg-[#121212] border-[#262626] text-zinc-400 hover:border-zinc-500'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span className="text-xs font-syne font-bold truncate">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {SKILL_CATEGORIES[selectedCategory].skills.map((skill, i) => (
            <div
              key={i}
              className="p-4 bg-[#121212] border border-[#262626] hover:border-[#D4FF00]/50 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span className="text-sm font-syne font-bold text-white">{skill.name}</span>
                </div>
                <span className="text-xs font-mono-code font-bold text-[#D4FF00]">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-900 overflow-hidden border border-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="h-full bg-[#D4FF00]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications Bar */}
        <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#262626]">
            <Award className="w-5 h-5 text-[#D4FF00]" />
            <h3 className="text-lg font-syne font-bold text-white">
              Professional Executive Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#161616] border border-[#262626] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono-code text-[#D4FF00] uppercase block mb-1 font-bold">
                    Verified Credential
                  </span>
                  <h4 className="text-sm font-syne font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">{cert.focus}</p>
                </div>
                <span className="text-[11px] font-mono-code text-zinc-500 mt-4 block">
                  Issuer: {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
