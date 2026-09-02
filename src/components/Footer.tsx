import { useState, type FormEvent } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Terminal, Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const handleCopy = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.85 },
        colors: ['#D4FF00', '#FFFFFF', '#0A0A0A']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSend = (e: FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Inquiry: Quantitative Finance & Collaboration'
    )}&body=${encodeURIComponent(message || 'Hi Anshuman, I came across your portfolio and research...')}`;
    window.location.href = mailtoUrl;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 4000);
  };

  return (
    <footer id="contact" className="py-24 bg-[#0A0A0A] relative z-10 border-t border-[#262626] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout */}
        <div className="bg-[#121212] border border-[#262626] p-6 sm:p-12 mb-16 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D4FF00]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#D4FF00] font-bold block">
                // Get In Touch &amp; Collaborate
              </span>
              <h2 className="text-3xl sm:text-5xl font-syne font-black text-white leading-tight uppercase">
                LET&apos;S BUILD THE NEXT MARKET FRONTIER.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed max-w-xl">
                Open to research collaborations, quantitative &amp; corporate finance roles, behavioral economics initiatives, and high-impact advisory projects.
              </p>

              {/* Direct Email Display & Copy */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2.5 px-5 py-3.5 bg-[#181818] border border-[#262626] hover:border-[#D4FF00] text-white text-xs sm:text-sm font-mono-code font-bold transition neo-brutal-btn"
                >
                  <Mail className="w-4 h-4 text-[#D4FF00]" />
                  <span>{PERSONAL_INFO.email}</span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-[#D4FF00] text-xs">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400 hover:text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Quick Dispatch Console */}
            <div className="lg:col-span-5 bg-[#181818] border border-[#262626] p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#262626] text-xs font-mono-code text-zinc-400">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Terminal className="w-3.5 h-3.5 text-[#D4FF00]" /> Quick Dispatch Terminal
                </span>
                <span className="text-[10px] text-zinc-500 font-mono-code">Direct Mailto</span>
              </div>

              <form onSubmit={handleQuickSend} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Subject (e.g. Equity Research / Project Inquiry)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs font-mono-code bg-[#101010] border border-[#262626] text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Your message or project scope..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs font-mono-code bg-[#101010] border border-[#262626] text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4FF00]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4FF00] hover:bg-white text-black font-mono-code uppercase font-bold text-xs flex items-center justify-center gap-2 transition neo-brutal-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Email Client</span>
                </button>
                {sentStatus && (
                  <p className="text-[11px] font-mono-code text-[#D4FF00] text-center font-bold">
                    Email client launched successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Interests & Domains Ticker */}
        <div className="mb-12">
          <span className="text-xs font-mono-code text-zinc-500 uppercase tracking-wider block mb-3">
            Core Intellectual &amp; Extracurricular Spheres:
          </span>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_INFO.interests.map((interest, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-mono-code bg-[#121212] border border-[#262626] text-zinc-300"
              >
                &bull; {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Anshuman Verma. All research and quantitative methodologies reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              onClick={() => sound.playClick()}
              className="hover:text-[#D4FF00] transition flex items-center gap-1 font-bold"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
