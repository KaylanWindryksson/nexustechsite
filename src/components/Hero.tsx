import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BendingMarquee } from './BendingMarquee';

const HERO_BANNER_URL = 'https://i.imgur.com/JKWat9r.png';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const indicators = [
    { label: 'DESIGN PREMIUM', color: 'text-blue-500' },
    { label: 'ALTA PERFORMANCE', color: 'text-purple-500' },
    { label: 'SEO OTIMIZADO', color: 'text-cyan-500' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-0 overflow-hidden flex flex-col justify-between bg-[#050816]">
      {/* Full-bleed Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={HERO_BANNER_URL}
          alt="Hero Background"
          className="w-full h-full object-cover object-[75%_center] sm:object-right md:object-right-top"
          referrerPolicy="no-referrer"
        />
        {/* Mobile backdrop protection to keep text legible while professional is visible */}
        <div className="absolute inset-0 bg-[#050816]/65 sm:bg-transparent" />
        {/* Soft gradient fade for desktop and smooth bottom integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/90 via-[#050816]/40 to-[#050816] sm:bg-gradient-to-r sm:from-[#050816] sm:via-[#050816]/80 sm:to-transparent sm:max-w-4xl" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050816] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-1 flex items-center py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

          {/* LEFT COLUMN: Copywriting & CTAs (7 Cols ~ 60%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6"
          >
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#080D1D]/90 border border-blue-500/30 rounded-full w-fit mb-6 shadow-lg backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-cyan-400 font-bold">
                Tecnologia que impulsiona resultados
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-white leading-[0.95] mb-6 tracking-tighter font-['Plus_Jakarta_Sans',sans-serif]"
            >
              Transformamos <br />
              tecnologia em <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]">
                crescimento.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-[#94A3B8] max-w-xl mb-10 leading-relaxed font-normal"
            >
              Criamos sites, sistemas, aplicativos e soluções digitais sob medida para empresas que querem crescer, vender mais e operar melhor.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto mb-12"
            >
              <button
                onClick={onOpenQuoteModal}
                className="bg-white text-[#050816] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Solicitar orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#solucoes"
                className="text-white border border-[#94A3B8]/30 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/5 transition-all text-center"
              >
                Conhecer soluções
              </a>
            </motion.div>

            {/* Key Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full opacity-80"
            >
              {indicators.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 ${item.color} shrink-0`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Spacer for Integrated Background Professional */}
          <div className="hidden lg:block lg:col-span-5 relative pointer-events-none" />

        </div>
      </div>

      {/* Bending Marquee at Bottom of Hero */}
      <BendingMarquee />
    </section>
  );
};
