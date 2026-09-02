import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Brain, Zap, ShoppingCart, Award, ExternalLink, ChevronRight, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';
import LcoeSimulator from './research/LcoeSimulator';
import RiskToleranceLab from './research/RiskToleranceLab';
import EcommerceModelLab from './research/EcommerceModelLab';

export default function ResearchSection() {
  const [activeProjectTab, setActiveProjectTab] = useState<string>(PROJECTS[0].id);

  const selectedProject = PROJECTS.find((p) => p.id === activeProjectTab) || PROJECTS[0];

  return (
    <section id="research" className="py-24 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#262626]">
          <div className="flex items-start gap-4">
            <span className="text-6xl sm:text-7xl font-serif-display italic text-[#D4FF00] leading-none select-none">
              01
            </span>
            <div>
              <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#D4FF00] font-bold block mb-1">
                // Empirical Research &amp; Papers
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-white uppercase tracking-tight">
                THE RESEARCH LAB.
              </h2>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-sans max-w-md leading-relaxed">
            Peer-reviewed econometric models, behavioral psychometrics, and quantitative consumer frameworks with interactive live simulators.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {PROJECTS.map((proj) => {
            const isActive = proj.id === activeProjectTab;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  sound.playClick();
                  setActiveProjectTab(proj.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 text-left border transition relative overflow-hidden ${
                  isActive
                    ? 'bg-[#181818] border-[#D4FF00] shadow-xl'
                    : 'bg-[#121212] border-[#262626] hover:border-zinc-500'
                }`}
              >
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-[#D4FF00]"
                  />
                )}
                <div className="flex items-center justify-between text-[11px] font-mono-code text-zinc-400 mb-1.5">
                  <span className="uppercase">{proj.category}</span>
                  <span className="text-zinc-500">{proj.year}</span>
                </div>
                <h3 className="text-xs font-syne font-bold text-white line-clamp-2 leading-snug">
                  {proj.title}
                </h3>
                {proj.hasInteractiveLab && (
                  <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-mono-code text-[#D4FF00] font-bold">
                    <Zap className="w-2.5 h-2.5" /> Interactive Lab Active
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Research Detail & Embedded Simulator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Embedded Live Simulator if available */}
            {selectedProject.hasInteractiveLab && (
              <div>
                {selectedProject.labType === 'lcoe' && <LcoeSimulator />}
                {selectedProject.labType === 'risk-tolerance' && <RiskToleranceLab />}
                {selectedProject.labType === 'ecommerce' && <EcommerceModelLab />}
              </div>
            )}

            {/* Deep-Dive Methodology & Paper Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left">
              {/* Left Column: Scope & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono-code font-bold bg-[#1e1e1e] text-zinc-300 border border-[#333333]">
                      {selectedProject.category}
                    </span>
                    {selectedProject.paperReference && (
                      <span className="px-2.5 py-0.5 text-[11px] font-mono-code font-bold bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
                        Peer-Reviewed: {selectedProject.paperReference}
                      </span>
                    )}
                    {selectedProject.institution && (
                      <span className="text-xs font-mono-code text-zinc-400">
                        {selectedProject.institution}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-zinc-300 font-sans mt-3 leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                {/* Key Empirical Findings */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400">
                    Key Empirical Findings:
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.findings.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <Check className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono-code bg-[#1a1a1a] text-zinc-300 border border-[#2a2a2a]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Quantitative Metrics & Methodologies */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#181818] border border-[#262626] flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-mono-code text-zinc-400 uppercase">
                        {metric.label}
                      </span>
                      <div className="my-1">
                        <span className="text-xl font-mono-code font-bold text-white">
                          {metric.value}
                        </span>
                      </div>
                      {metric.detail && (
                        <span className="text-[10px] font-mono-code text-zinc-500">
                          {metric.detail}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Methodologies */}
                <div className="bg-[#181818] p-4 border border-[#262626]">
                  <h4 className="text-xs font-mono-code uppercase text-[#D4FF00] mb-2.5 font-bold">
                    Econometric &amp; Research Toolkit:
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono-code text-zinc-300">
                    {selectedProject.methodologies.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#D4FF00]" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
