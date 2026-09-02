import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Zap, Sun, Wind, Droplets, Flame, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/audioSynth';

interface TechConfig {
  name: string;
  icon: typeof Sun;
  defaultCapex: number; // Rs. Lakh / MW
  defaultOpex: number; // Rs. Lakh / MW / yr
  capacityFactor: number; // %
  lifeYears: number;
  color: string;
}

const TECHS: Record<string, TechConfig> = {
  solar: {
    name: 'Solar PV (Utility Scale)',
    icon: Sun,
    defaultCapex: 380, // Rs. 3.8 Cr/MW
    defaultOpex: 4.5,
    capacityFactor: 21,
    lifeYears: 25,
    color: '#D4FF00'
  },
  wind: {
    name: 'Onshore Wind',
    icon: Wind,
    defaultCapex: 580, // Rs. 5.8 Cr/MW
    defaultOpex: 8.5,
    capacityFactor: 32,
    lifeYears: 25,
    color: '#FFFFFF'
  },
  hydro: {
    name: 'Small Hydro Power',
    icon: Droplets,
    defaultCapex: 750,
    defaultOpex: 12.0,
    capacityFactor: 55,
    lifeYears: 35,
    color: '#D4FF00'
  },
  geothermal: {
    name: 'Geothermal / Biomass',
    icon: Flame,
    defaultCapex: 820,
    defaultOpex: 16.5,
    capacityFactor: 70,
    lifeYears: 30,
    color: '#A3A3A3'
  }
};

export default function LcoeSimulator() {
  const [selectedTech, setSelectedTech] = useState<keyof typeof TECHS>('solar');
  const [discountRate, setDiscountRate] = useState<number>(8.5); // %
  const [subsidyPct, setSubsidyPct] = useState<number>(15); // %
  const [capexMultiplier, setCapexMultiplier] = useState<number>(100); // %

  const tech = TECHS[selectedTech];

  const simulationResults = useMemo(() => {
    const results: Record<string, { lcoe: number; payback: number; netCapex: number }> = {};

    Object.entries(TECHS).forEach(([key, t]) => {
      const netCapexLakh = (t.defaultCapex * (capexMultiplier / 100)) * (1 - subsidyPct / 100);
      const netCapexRs = netCapexLakh * 100000;
      const annualOpexRs = t.defaultOpex * 100000;
      const hoursInYear = 8760;
      const annualKwh = 1000 * hoursInYear * (t.capacityFactor / 100); // 1 MW = 1000 kW

      const r = discountRate / 100;
      let npvCosts = netCapexRs;
      let npvKwh = 0;

      for (let yr = 1; yr <= t.lifeYears; yr++) {
        const discountFactor = Math.pow(1 + r, -yr);
        npvCosts += annualOpexRs * discountFactor;
        npvKwh += annualKwh * discountFactor;
      }

      const lcoe = npvCosts / npvKwh; // Rs. per kWh
      const annualRevenue = annualKwh * 3.8; // Average wholesale PPA rate ~ Rs 3.80/kWh
      const annualProfit = annualRevenue - annualOpexRs;
      const payback = annualProfit > 0 ? netCapexRs / annualProfit : 99;

      results[key] = {
        lcoe: Number(lcoe.toFixed(2)),
        payback: Number(payback.toFixed(1)),
        netCapex: Math.round(netCapexLakh)
      };
    });

    return results;
  }, [discountRate, subsidyPct, capexMultiplier]);

  const current = simulationResults[selectedTech];

  return (
    <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
      {/* Background ambient accent */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 blur-[120px] opacity-10 pointer-events-none"
        style={{ background: tech.color }}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono-code font-bold uppercase tracking-wider bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
              <Zap className="w-3 h-3" /> Empirical Research Lab
            </span>
            <span className="text-xs font-mono-code text-zinc-400">Vol. 29, Issue 4</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mt-1">
            Levelized Cost of Energy (LCOE) Benchmarking Engine
          </h3>
          <p className="text-sm text-zinc-400 font-sans mt-0.5 max-w-xl">
            Derived from published research evaluating India’s renewable economics, WWF-India state tariffs, and grid cost parity.
          </p>
        </div>

        <button
          onClick={() => {
            sound.playCyberZap();
            setDiscountRate(8.5);
            setSubsidyPct(15);
            setCapexMultiplier(100);
          }}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono-code text-zinc-300 hover:text-black bg-[#1a1a1a] hover:bg-[#D4FF00] transition border border-[#262626]"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Parameters
        </button>
      </div>

      {/* Tech Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {Object.entries(TECHS).map(([key, item]) => {
          const isSelected = selectedTech === key;
          const Icon = item.icon;
          const res = simulationResults[key];
          return (
            <button
              key={key}
              onClick={() => {
                sound.playClick();
                setSelectedTech(key);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`p-4 border text-left transition relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#1c1c1c] border-[#D4FF00] shadow-lg'
                  : 'bg-[#141414] border-[#262626] hover:border-zinc-600'
              }`}
            >
              {isSelected && (
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-[#D4FF00]"
                />
              )}
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-[#D4FF00]" />
                <span className="text-xs font-mono-code font-bold text-white">
                  ₹{res.lcoe}/kWh
                </span>
              </div>
              <p className="text-xs font-syne font-semibold text-zinc-200 truncate">{item.name}</p>
              <p className="text-[11px] font-mono-code text-zinc-500 mt-1">
                Payback: <span className="text-zinc-300">{res.payback} yrs</span>
              </p>
            </button>
          );
        })}
      </div>

      {/* Control Sliders & Live KPI Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders */}
        <div className="lg:col-span-6 space-y-4 bg-[#161616] p-4 border border-[#262626]">
          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-400">Discount Rate (WACC):</span>
              <span className="text-[#D4FF00] font-bold">{discountRate}%</span>
            </div>
            <input
              type="range"
              min="4"
              max="15"
              step="0.5"
              value={discountRate}
              onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-[#D4FF00]"
            />
            <div className="flex justify-between text-[10px] font-mono-code text-zinc-500 mt-0.5">
              <span>4% (Govt Bond Yield)</span>
              <span>15% (High Venture Risk)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-400">Capital Subsidy / Incentives:</span>
              <span className="text-[#D4FF00] font-bold">{subsidyPct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              step="5"
              value={subsidyPct}
              onChange={(e) => setSubsidyPct(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-[#D4FF00]"
            />
            <div className="flex justify-between text-[10px] font-mono-code text-zinc-500 mt-0.5">
              <span>0% (Unsubsidized)</span>
              <span>40% (State Clean Energy Grant)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-400">Technology CAPEX Index:</span>
              <span className="text-[#D4FF00] font-bold">{capexMultiplier}%</span>
            </div>
            <input
              type="range"
              min="60"
              max="140"
              step="5"
              value={capexMultiplier}
              onChange={(e) => setCapexMultiplier(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-[#D4FF00]"
            />
            <div className="flex justify-between text-[10px] font-mono-code text-zinc-500 mt-0.5">
              <span>-40% (Future Tech Deflation)</span>
              <span>+40% (Supply Chain Strain)</span>
            </div>
          </div>
        </div>

        {/* Live Empirical Matrix & Comparison */}
        <div className="lg:col-span-6 bg-[#161616] p-4 border border-[#262626] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-[#262626]">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#D4FF00]" />
              <span className="text-xs font-mono-code uppercase text-zinc-300 tracking-wider">
                Comparative LCOE (₹/kWh)
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-zinc-500">Benchmark: Coal ~ ₹4.40/kWh</span>
          </div>

          {/* Comparative Bar Visualization */}
          <div className="space-y-2.5 my-3">
            {Object.entries(TECHS).map(([key, t]) => {
              const res = simulationResults[key];
              const maxLcoe = 7.5;
              const barWidthPct = Math.min(100, Math.max(15, (res.lcoe / maxLcoe) * 100));
              const isCurrent = key === selectedTech;

              return (
                <div key={key} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className={`font-mono-code ${isCurrent ? 'text-white font-bold' : 'text-zinc-400'}`}>
                      {t.name}
                    </span>
                    <span className="font-mono-code font-bold text-[#D4FF00]">
                      ₹{res.lcoe} / kWh
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-900 overflow-hidden border border-zinc-800">
                    <motion.div
                      className="h-full bg-[#D4FF00]"
                      animate={{ width: `${barWidthPct}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Empirical Insight Box */}
          <div className="bg-[#121212] p-3 border border-[#262626] flex items-start gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
            <p className="text-zinc-300 font-sans">
              <strong className="text-white font-semibold">Empirical Insight: </strong>
              At {discountRate}% WACC and {subsidyPct}% capital subsidy, 
              <span className="text-[#D4FF00] font-bold"> {tech.name} </span> 
              delivers an LCOE of <span className="text-white font-bold">₹{current.lcoe}/kWh</span> with net CAPEX of ₹{current.netCapex}L/MW. 
              Solar PV & Wind maintain superior grid cost-parity over legacy baseloads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
