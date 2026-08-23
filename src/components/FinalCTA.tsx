import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/siteData';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent('Olá! Vim pelo site da Nexus Tech e gostaria de falar com um especialista sobre um projeto.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="relative py-28 bg-[#050816] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-t from-blue-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-14 rounded-3xl bg-[#080D1D]/90 border border-blue-500/30 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {/* Decorative Corner Lights */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Vamos construir algo extraordinário juntos</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Pronto para transformar sua ideia em uma <span className="text-gradient-cyan">solução digital?</span>
          </h2>

          {/* Body Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Conte-nos o que você precisa. Nossa equipe entende seu cenário e apresenta o melhor caminho para transformar sua ideia em resultado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              <span>Solicitar orçamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-400 hover:text-white font-semibold text-base shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Guarantee Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Atendimento direto com especialistas
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Resposta rápida em até 2 horas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
