import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, ShieldAlert, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/audioSynth';

export default function EcommerceModelLab() {
  const [designScore, setDesignScore] = useState<number>(85); // 0-100
  const [deliverySpeedScore, setDeliverySpeedScore] = useState<number>(80); // 0-100
  const [paymentConvenience, setPaymentConvenience] = useState<number>(75); // 0-100
  const [spendingBracket, setSpendingBracket] = useState<'low' | 'high'>('high'); // <₹4000/mo or >₹4000/mo

  const modelOutput = useMemo(() => {
    // Structural moderated mediation formula derived from survey beta coefficients
    const trustIndex = (designScore * 0.42 + deliverySpeedScore * 0.35 + paymentConvenience * 0.23);
    
    // Purchase Intent moderated by spending bracket:
    const paymentWeight = spendingBracket === 'high' ? 0.45 : 0.20;
    const directIntent = (designScore * 0.30 + deliverySpeedScore * 0.30 + paymentConvenience * paymentWeight);
    const mediatedIntent = (directIntent * 0.45) + (trustIndex * 0.55);

    return {
      trust: Math.min(100, Math.round(trustIndex)),
      purchaseIntent: Math.min(100, Math.round(mediatedIntent)),
      cartAbandonmentRisk: Math.max(5, Math.round(100 - mediatedIntent * 0.9))
    };
  }, [designScore, deliverySpeedScore, paymentConvenience, spendingBracket]);

  return (
    <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#262626]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-mono-code font-bold uppercase tracking-wider bg-[#D4FF00]/10 text-[#D4FF00] border border-[#D4FF00]/30">
              <ShoppingCart className="w-3 h-3" /> Moderated-Mediation Model (N=131)
            </span>
            <span className="text-xs font-mono-code text-zinc-400">KMO = 0.732 | SPSS Factor Analysis</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-syne font-bold text-white mt-1">
            Consumer Purchase Intent &amp; Trust Mediated Matrix
          </h3>
          <p className="text-sm text-zinc-400 font-sans mt-0.5 max-w-xl">
            Empirical statistical model on website design, payment convenience, and delivery speed across consumer spending brackets.
          </p>
        </div>

        {/* Spending Segment Toggle */}
        <div className="flex items-center bg-[#181818] p-1 border border-[#262626]">
          <button
            onClick={() => {
              sound.playClick();
              setSpendingBracket('low');
            }}
            className={`px-3 py-1.5 text-xs font-mono-code transition ${
              spendingBracket === 'low'
                ? 'bg-[#D4FF00] text-black font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            &lt; ₹4,000 / mo
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setSpendingBracket('high');
            }}
            className={`px-3 py-1.5 text-xs font-mono-code transition ${
              spendingBracket === 'high'
                ? 'bg-[#D4FF00] text-black font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            &gt; ₹4,000 / mo (High Spender)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
        {/* Sliders */}
        <div className="lg:col-span-6 space-y-5 bg-[#161616] p-4 border border-[#262626]">
          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-300">Website Design &amp; UX Reliability:</span>
              <span className="text-[#D4FF00] font-bold">{designScore}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={designScore}
              onChange={(e) => setDesignScore(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-[#D4FF00]"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-300">Delivery Velocity &amp; Tracking:</span>
              <span className="text-white font-bold">{deliverySpeedScore}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={deliverySpeedScore}
              onChange={(e) => setDeliverySpeedScore(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-white"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono-code mb-1">
              <span className="text-zinc-300">Payment Convenience &amp; Gateways:</span>
              <span className="text-[#D4FF00] font-bold">{paymentConvenience}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={paymentConvenience}
              onChange={(e) => setPaymentConvenience(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-[#D4FF00]"
            />
          </div>
        </div>

        {/* Live Predictor Outputs */}
        <div className="lg:col-span-6 space-y-3 bg-[#161616] p-4 border border-[#262626] flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#121212] p-3 border border-[#262626] text-center">
              <span className="text-[10px] font-mono-code text-zinc-400 block uppercase">Trust Index</span>
              <span className="text-xl font-mono-code font-bold text-white">{modelOutput.trust}%</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">Mediator</span>
            </div>
            <div className="bg-[#121212] p-3 border border-[#262626] text-center">
              <span className="text-[10px] font-mono-code text-zinc-400 block uppercase">Purchase Intent</span>
              <span className="text-xl font-mono-code font-bold text-[#D4FF00]">{modelOutput.purchaseIntent}%</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">Final Conversion</span>
            </div>
            <div className="bg-[#121212] p-3 border border-[#262626] text-center">
              <span className="text-[10px] font-mono-code text-zinc-400 block uppercase">Abandon Risk</span>
              <span className="text-xl font-mono-code font-bold text-zinc-300">{modelOutput.cartAbandonmentRisk}%</span>
              <span className="text-[10px] text-zinc-500 block mt-0.5">Drop-off</span>
            </div>
          </div>

          <div className="bg-[#121212] p-3.5 border border-[#262626] text-xs flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
            <p className="text-zinc-300 font-sans">
              <strong className="text-white font-semibold">SPSS Finding: </strong>
              {spendingBracket === 'high' ? (
                <span>For high-spend consumers (&gt;₹4,000/mo), <strong className="text-[#D4FF00]">Payment Convenience</strong> and <strong className="text-white">Customer Trust</strong> become the primary gating mechanisms for transaction finalization.</span>
              ) : (
                <span>For lower-spend consumers, <strong className="text-white">Website UI aesthetics</strong> and <strong className="text-[#D4FF00]">Delivery Speed</strong> drive the majority of purchase intent.</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
