import { X, Printer, Download, Mail, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { sound } from '../utils/audioSynth';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExecutiveResumeModal({ isOpen, onClose }: ModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0F0F0F] text-zinc-100 border border-[#262626] shadow-2xl overflow-hidden my-8">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141414] border-b border-[#262626]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D4FF00]" />
            <h3 className="font-mono-code uppercase font-bold text-white text-xs tracking-wider">
              Executive Dossier &bull; Anshuman Verma
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code bg-[#1a1a1a] hover:bg-[#262626] text-zinc-200 transition border border-[#262626]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#D4FF00]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code uppercase bg-[#D4FF00] hover:bg-white text-black font-bold transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-6 text-left max-h-[80vh] overflow-y-auto font-sans text-sm bg-[#0F0F0F]">
          {/* Header */}
          <div className="border-b border-[#262626] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl font-syne font-black text-white tracking-tight uppercase">
                ANSHUMAN VERMA
              </h1>
              <p className="text-zinc-400 font-mono-code text-xs mt-0.5">
                BBA (IPM) &bull; DoMS, NALSAR University of Law, Hyderabad
              </p>
            </div>
            <div className="text-xs font-mono-code text-[#D4FF00]">
              <p>{PERSONAL_INFO.email}</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#D4FF00] mb-2 border-b border-[#262626] pb-1">
              EDUCATIONAL QUALIFICATIONS
            </h2>
            <div className="space-y-2">
              {PERSONAL_INFO.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span> &mdash;{' '}
                    <span className="text-zinc-400">{edu.institution}</span>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="font-bold text-[#D4FF00] font-mono-code">{edu.score}</span>{' '}
                    <span className="text-zinc-500 font-mono-code">({edu.duration})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Co-Curricular Distinctions */}
          <div>
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#D4FF00] mb-2 border-b border-[#262626] pb-1">
              ACADEMIC &amp; CO-CURRICULAR ACHIEVEMENTS
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id} className="flex items-center gap-1.5">
                  <span className="text-[#D4FF00] font-bold">&bull;</span>
                  <span>{ach.title} ({ach.year})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#D4FF00] mb-2 border-b border-[#262626] pb-1">
              PROFESSIONAL INTERNSHIPS &amp; INDUSTRY EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>{exp.organization} &mdash; <span className="text-zinc-400 font-normal">{exp.role}</span></span>
                    <span className="font-mono-code text-zinc-400 font-normal shrink-0 ml-2">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-zinc-300 space-y-1 pl-1">
                    {exp.highlights.slice(0, 3).map((h, idx) => (
                      <li key={idx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div>
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#D4FF00] mb-2 border-b border-[#262626] pb-1">
              PROJECTS &amp; RESEARCH PAPERS
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono-code text-zinc-400 font-normal shrink-0 ml-2">{proj.year}</span>
                  </div>
                  {proj.paperReference && (
                    <p className="text-[#D4FF00] font-mono-code text-[11px]">
                      Published in {proj.institution} ({proj.paperReference})
                    </p>
                  )}
                  <p className="text-zinc-300">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#D4FF00] mb-2 border-b border-[#262626] pb-1">
              CORE TECHNICAL &amp; BUSINESS COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              <div>
                <strong className="text-white">Data Analytics: </strong>
                <span>Excel (Advanced), Power BI, SQL, Python (Pandas, NumPy, Matplotlib), SPSS, Statistical Inference</span>
              </div>
              <div>
                <strong className="text-white">Finance &amp; Economics: </strong>
                <span>Equity Research, Fundamental Analysis, LCOE Modeling, Behavioral Risk Tolerance, Cash-Flow Models</span>
              </div>
              <div>
                <strong className="text-white">Business: </strong>
                <span>Business Analytics, Strategic Analysis, Operations Management, Research Methodology</span>
              </div>
              <div>
                <strong className="text-white">Creative &amp; Tools: </strong>
                <span>Adobe Suite (Photoshop, Illustrator, Premiere Pro, InDesign), Canva, Google Workspace</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
