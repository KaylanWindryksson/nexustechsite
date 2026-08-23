import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/siteData';
import { CheckCircle2, ArrowRight, GitCommit } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="relative py-24 bg-[#080D1D] border-y border-slate-800/80 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-400 text-xs font-mono font-semibold uppercase tracking-widest block mb-3">
            // Metodologia Transparente & Ágil
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Do primeiro briefing ao produto final.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Conheça as 5 etapas estruturadas da Nexus Tech para transformar suas necessidades em soluções digitais confiáveis.
          </p>
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/20 via-cyan-500/50 to-blue-600/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group flex flex-col justify-between p-6 rounded-2xl bg-[#050816] border border-slate-800 hover:border-blue-500/50 shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 text-cyan-400 font-mono text-lg font-bold flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      {step.number}
                    </div>
                    <GitCommit className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Entregáveis da Fase:
                  </span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
