import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, Quote, Building2, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#080D1D] border-y border-slate-800/80 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest block mb-2">
            // Prova Social & Autoridade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            O que dizem os executivos que confiam na Nexus Tech.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Parcerias estratégicas baseadas em confiança, transparência e resultados mensuráveis.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-[#050816] border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700" />
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author & Company Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" title="Verificado" />
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <span className="text-[11px] font-mono text-blue-400 font-medium block mt-0.5">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
