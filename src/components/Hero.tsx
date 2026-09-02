import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Award, Brain, BarChart3, ChevronDown, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden text-left">
      {/* Editorial Watermark Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[300px] bg-[#D4FF00]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Top Editorial Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#262626] text-xs font-mono-code text-zinc-300">
            <span className="w-2 h-2 bg-[#D4FF00] animate-ping" />
            <span className="font-bold">NALSAR UNIVERSITY OF LAW, DoMS</span>
            <span className="text-zinc-500 font-normal">(BBA 2023–26)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] border border-[#D4FF00]/40 text-xs font-mono-code text-[#D4FF00] font-bold">
            <Award className="w-3.5 h-3.5" /> AIR 27 CSIR KAMP-NASTA
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] border border-[#262626] text-xs font-mono-code text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-[#D4FF00]" /> Published Peer-Reviewed Researcher
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Main Title & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-7xl lg:text-[5.75rem] font-syne font-black leading-[0.88] uppercase tracking-tighter text-white"
              >
                QUANTITATIVE <br />
                <span className="text-[#D4FF00]">PRECISION.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-baseline gap-3 pt-2"
              >
                <span className="text-3xl sm:text-5xl font-serif-display italic text-zinc-300">
                  Behavioral
                </span>
                <span className="text-4xl sm:text-6xl font-syne font-black tracking-tight uppercase text-white">
                  INSIGHT.
                </span>
              </motion.div>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-xl">
              Hello, I&apos;m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. Merging{' '}
              <span className="text-[#D4FF00] font-semibold underline decoration-[#D4FF00]/40 underline-offset-4">
                financial econometrics
              </span>
              ,{' '}
              <span className="text-white font-medium underline decoration-white/40 underline-offset-4">
                behavioral investor modeling
              </span>
              , and{' '}
              <span className="text-[#D4FF00] font-medium underline decoration-[#D4FF00]/40 underline-offset-4">
                full-stack data strategy
              </span>{' '}
              to transform complex energy, market, and consumer systems into empirical clarity.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#research"
                onClick={() => sound.playCyberZap()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D4FF00] text-black font-mono-code font-bold uppercase tracking-wider text-xs transition neo-brutal-btn"
              >
                <Brain className="w-4 h-4 text-black" /> Launch Research Labs
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sound.playSuccess();
                  onOpenResumeModal();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141414] border border-[#262626] hover:border-[#D4FF00] text-white font-mono-code uppercase tracking-wider text-xs transition hover:bg-[#1a1a1a]"
              >
                View High-Density CV
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Highlight Rail */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l-2 border-[#D4FF00] pl-6 py-2 space-y-6">
              <div className="flex items-baseline gap-4 group">
                <span className="text-5xl font-serif-display italic text-[#D4FF00] shrink-0">01</span>
                <div>
                  <h3 className="text-xs uppercase font-mono-code font-bold tracking-widest text-[#D4FF00] mb-0.5">
                    Peer-Reviewed Research
                  </h3>
                  <p className="text-base sm:text-lg font-syne font-bold text-white leading-snug">
                    LCOE Renewable Energy &amp; Behavioral Finance Labs
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-4 group opacity-85 hover:opacity-100 transition-opacity">
                <span className="text-5xl font-serif-display italic text-zinc-500 shrink-0 group-hover:text-[#D4FF00] transition-colors">02</span>
                <div>
                  <h3 className="text-xs uppercase font-mono-code font-bold tracking-widest text-zinc-400 mb-0.5">
                    Industry Deployment
                  </h3>
                  <p className="text-base sm:text-lg font-syne font-bold text-white leading-snug">
                    Finlyt (OPDSure) &amp; Ladli Foundation Analytics
                  </p>
                </div>
              </div>

              <div className="flex items-baseline gap-4 group opacity-85 hover:opacity-100 transition-opacity">
                <span className="text-5xl font-serif-display italic text-zinc-500 shrink-0 group-hover:text-[#D4FF00] transition-colors">03</span>
                <div>
                  <h3 className="text-xs uppercase font-mono-code font-bold tracking-widest text-zinc-400 mb-0.5">
                    Scholastic Distinction
                  </h3>
                  <p className="text-base sm:text-lg font-syne font-bold text-white leading-snug">
                    AIR 27 CSIR KAMP &amp; 9.42 CGPA Foundation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stat Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 bg-[#121212] border border-[#262626] hover:border-[#D4FF00]/60 transition group"
            >
              <span className="text-3xl sm:text-4xl font-mono-code font-black text-white group-hover:text-[#D4FF00] transition-colors">
                {stat.value}
              </span>
              <p className="text-xs font-mono-code uppercase font-bold tracking-wider text-zinc-300 mt-1">{stat.label}</p>
              <span className="text-[11px] font-mono-code text-zinc-500 block mt-0.5">{stat.detail}</span>
            </div>
          ))}
        </div>

        {/* Live Editorial Marquee Ticker */}
        <div className="w-full overflow-hidden border-y border-[#262626] py-3.5 bg-[#141414]">
          <div className="animate-marquee whitespace-nowrap text-xs font-mono-code uppercase tracking-widest text-zinc-300">
            <span className="mx-6 flex items-center gap-2 font-bold text-white">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> Levelized Cost of Energy (LCOE)
            </span>
            <span className="mx-6 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> Behavioral Finance &amp; Risk Tolerance (N=139)
            </span>
            <span className="mx-6 flex items-center gap-2 font-bold text-white">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> Power BI &amp; SQL Financial Analytics
            </span>
            <span className="mx-6 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> DRDO Bio-Digester Smart Infrastructure
            </span>
            <span className="mx-6 flex items-center gap-2 font-bold text-white">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> SPSS Moderated-Mediation Modeling
            </span>
            <span className="mx-6 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#D4FF00]" /> Equity Research &amp; Financial Modeling
            </span>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-600">
        <span className="text-[9px] font-mono-code uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#D4FF00]" />
      </div>
    </section>
  );
}
