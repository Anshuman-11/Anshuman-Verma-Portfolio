import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Brain, PieChart, Sparkles, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/audioSynth';

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number; desc: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Market Shock: Your portfolio drops 22% in a sudden 2-week market downturn. What is your immediate action?',
    options: [
      { label: 'Panic Sell All', score: 1, desc: 'Liquidate to avoid further capital drawdown.' },
      { label: 'Hold & Monitor', score: 2, desc: 'Wait for volatility to subside before rebalancing.' },
      { label: 'Aggressively Buy Dip', score: 3, desc: 'Deploy dry powder at discounted valuations.' }
    ]
  },
  {
    id: 2,
    text: 'Return vs Volatility Trade-off: Which scenario best matches your primary financial objective?',
    options: [
      { label: 'Capital Preservation', score: 1, desc: 'Guaranteed 7% fixed return with 0% drawdown risk.' },
      { label: 'Balanced Growth', score: 2, desc: 'Targeting 12-14% CAGR with moderate swings.' },
      { label: 'Alpha Maximization', score: 3, desc: 'Targeting 20%+ CAGR despite potential 30% drops.' }
    ]
  },
  {
    id: 3,
    text: 'Derivatives & Leverage: How do you perceive asymmetric risk instruments like options/futures?',
    options: [
      { label: 'High Risk Avoidance', score: 1, desc: 'Strictly avoid non-linear leverage.' },
      { label: 'Tactical Hedging Only', score: 2, desc: 'Use options only for portfolio insurance.' },
      { label: 'Active Trading Instrument', score: 3, desc: 'Utilize for directional alpha and theta decay.' }
    ]
  },
  {
    id: 4,
    text: 'Investment Horizon & Liquidity: When do you expect to liquidate more than 40% of this corpus?',
    options: [
      { label: 'Under 12 Months', score: 1, desc: 'High liquidity priority.' },
      { label: '3 to 5 Years', score: 2, desc: 'Medium-term business/life milestone.' },
      { label: '7+ Years / Decadal', score: 3, desc: 'Long-term compounding horizon.' }
    ]
  },
  {
    id: 5,
    text: 'Financial Knowledge & Analytical Independence: How do you make capital allocation choices?',
    options: [
      { label: 'Advisor / Bank Reliance', score: 1, desc: 'Follow conservative institution advice.' },
      { label: 'Fundamental Research', score: 2, desc: 'Analyze earnings, balance sheets, and valuations.' },
      { label: 'Quantitative / Macro Models', score: 3, desc: 'Combine quant signals, tech analysis & macro trends.' }
    ]
  }
];

export default function RiskToleranceLab() {
  const [answers, setAnswers] = useState<Record<number, number>>({ 1: 2, 2: 2, 3: 2, 4: 3, 5: 2 });
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum: number, val: number) => sum + val, 0);
  }, [answers]);

  // Derived profile based on empirical thresholds
  const profile = useMemo(() => {
    // Range: 5 to 15
    if (totalScore <= 7) {
      return {
        category: 'Conservative / Low Risk',
        cohortPct: '39.6%',
        rSquareImpact: 'High Fixed Income & Liquid bias',
        color: '#A3A3A3',
        allocation: [
          { asset: 'Govt Debt / Fixed Income', pct: 60, color: '#D4FF00' },
          { asset: 'Large-Cap Bluechip Equities', pct: 20, color: '#FFFFFF' },
          { asset: 'Sovereign Gold / Liquid Cash', pct: 15, color: '#737373' },
          { asset: 'Mid/Small-Cap Alpha', pct: 5, color: '#525252' }
        ],
        summary: 'Prioritizes downside protection and steady liquidity over speculative upside.'
      };
    } else if (totalScore <= 11) {
      return {
        category: 'Balanced / Moderate Risk',
        cohortPct: '33.8%',
        rSquareImpact: 'Optimal Sharpe Ratio Target',
        color: '#D4FF00',
        allocation: [
          { asset: 'Large & Mid-Cap Equities', pct: 50, color: '#D4FF00' },
          { asset: 'Corporate Debt & Hybrid Funds', pct: 30, color: '#FFFFFF' },
          { asset: 'Gold & Commodities', pct: 10, color: '#A3A3A3' },
          { asset: 'Thematic / Tech Equities', pct: 10, color: '#525252' }
        ],
        summary: 'Balances long-term capital compounding with measured drawdown tolerance.'
      };
    } else {
      return {
        category: 'Aggressive / High Risk (Alpha Seeker)',
        cohortPct: '26.6%',
        rSquareImpact: 'High Equity Beta & Asymmetric Alpha',
        color: '#D4FF00',
        allocation: [
          { asset: 'High-Beta Equities (Mid/Small-Cap)', pct: 55, color: '#D4FF00' },
          { asset: 'Large-Cap Growth / Global', pct: 25, color: '#FFFFFF' },
          { asset: 'Tactical Derivatives / Venture', pct: 10, color: '#A3A3A3' },
          { asset: 'Strategic Cash Buffer', pct: 10, color: '#525252' }
        ],
        summary: 'Capitalizes on market dislocations and high volatility for asymmetric returns.'
      };
    }
  }, [totalScore]);

  const handleSelect = (qId: number, score: number) => {
    sound.playClick();
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const runEvaluation = () => {
    sound.playSuccess();
    setHasCalculated(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4FF00', '#FFFFFF', '#0A0A0A']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
      {/* Background ambient accent */}
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 blur-[120px] opacity-10 pointer-events-none"
        style={{ background: profile.color }}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono-code font-bold uppercase tracking-wider bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
              <Brain className="w-3 h-3" /> Dissertation Lab (N=139)
            </span>
            <span className="text-xs font-mono-code text-zinc-400">R² = 0.564 | α = 0.845</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mt-1">
            Behavioral Risk Tolerance &amp; Asset Allocation Profiler
          </h3>
          <p className="text-sm text-zinc-400 font-sans mt-0.5 max-w-xl">
            Interactive psychometric evaluation model based on Anshuman’s 139-investor empirical study on risk tolerance and portfolio selection.
          </p>
        </div>

        <button
          onClick={runEvaluation}
          className="flex items-center gap-2 px-4 py-2 text-xs font-mono-code font-bold uppercase text-black bg-[#D4FF00] hover:bg-white transition neo-brutal-btn"
        >
          <Sparkles className="w-4 h-4" /> Recalibrate Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Questionnaire */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
            Step 1: Psychometric Risk Inputs (Select 1 per metric)
          </p>

          {QUESTIONS.map((q) => {
            const currentScore = answers[q.id];
            return (
              <div key={q.id} className="bg-[#161616] p-4 border border-[#262626]">
                <p className="text-xs font-syne font-semibold text-zinc-200 mb-2">
                  <span className="text-[#D4FF00] font-mono-code mr-1.5">Q{q.id}.</span>
                  {q.text}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {q.options.map((opt) => {
                    const isSelected = currentScore === opt.score;
                    return (
                      <button
                        key={opt.score}
                        onClick={() => handleSelect(q.id, opt.score)}
                        onMouseEnter={() => sound.playHover()}
                        className={`p-2.5 text-left text-xs transition border ${
                          isSelected
                            ? 'bg-[#222222] border-[#D4FF00] text-white'
                            : 'bg-[#101010] border-[#262626] text-zinc-400 hover:border-zinc-500'
                        }`}
                      >
                        <div className="font-semibold text-white">{opt.label}</div>
                        <div className="text-[10px] text-zinc-500 line-clamp-1 mt-0.5">{opt.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empirical Output & Allocation Deck */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Result Card */}
          <div className="bg-[#161616] p-5 border border-[#262626] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <span className="text-xs font-mono-code uppercase text-zinc-400">Psychometric Score</span>
              <span className="text-sm font-mono-code font-bold text-black px-2.5 py-0.5 bg-[#D4FF00]">
                {totalScore} / 15
              </span>
            </div>

            <div>
              <span className="text-[11px] font-mono-code text-zinc-500 uppercase">Assigned Investor Profile</span>
              <h4 className="text-lg font-syne font-bold mt-0.5 text-[#D4FF00]">
                {profile.category}
              </h4>
              <p className="text-xs text-zinc-300 font-sans mt-1">{profile.summary}</p>
            </div>

            {/* Empirical Research Stats */}
            <div className="grid grid-cols-2 gap-2 bg-[#121212] p-3 border border-[#262626] text-xs font-mono-code">
              <div>
                <span className="text-zinc-500 text-[10px] block">Sample Cohort Size</span>
                <span className="text-white font-bold">{profile.cohortPct} of Study (N=139)</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[10px] block">Pearson Correlation</span>
                <span className="text-[#D4FF00] font-bold">r = 0.751 (p &lt; 0.001)</span>
              </div>
            </div>

            {/* Asset Allocation Breakdown */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5 text-[#D4FF00]" /> Empirical Target Asset Mix
                </span>
              </div>

              <div className="space-y-2">
                {profile.allocation.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-zinc-400 text-[11px]">{item.asset}</span>
                      <span className="font-bold text-white">{item.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-900 overflow-hidden border border-zinc-800">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: item.color }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Takeaway */}
          <div className="bg-[#161616] p-4 border border-[#262626] text-xs flex items-start gap-2.5">
            <Award className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
            <p className="text-zinc-300 font-sans">
              <strong className="text-white font-semibold">Dissertation Finding: </strong>
              Investor risk tolerance accounts for over <span className="text-[#D4FF00] font-bold">56.4%</span> of actual portfolio variance (R² = 0.564). Quantitative profiling enables risk-calibrated asset structures over static demographic models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
