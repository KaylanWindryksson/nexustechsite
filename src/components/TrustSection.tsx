import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Users, TrendingUp } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const cards = [
    {
      badge: 'SOB MEDIDA',
      title: 'Feito para o seu negócio',
      description:
        'Sites e sistemas desenvolvidos do zero para resolver as necessidades reais da sua empresa.',
      icon: Code2,
      isHighlighted: false,
    },
    {
      badge: 'STACK MODERNA',
      title: 'Tecnologia que escala',
      description:
        'Utilizamos tecnologias modernas para criar soluções rápidas, seguras e preparadas para acompanhar o crescimento da sua empresa.',
      icon: Cpu,
      isHighlighted: false,
    },
    {
      badge: 'CONTATO DIRETO',
      title: 'Você fala com quem desenvolve',
      description:
        'Comunicação direta com desenvolvedores e designers durante todo o projeto, sem intermediários desnecessários.',
      icon: Users,
      isHighlighted: false,
    },
    {
      badge: 'RESULTADOS',
      title: 'Tecnologia que gera resultado',
      description:
        'Sites e sistemas pensados para melhorar sua operação, aumentar conversões e ajudar sua empresa a crescer.',
      icon: TrendingUp,
      isHighlighted: true,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#080D1D] border-y border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest block mb-2.5 font-mono">
            // POR QUE A NEXUS TECH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Tecnologia criada para fazer seu negócio crescer.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.badge}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative group p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-default ${
                  card.isHighlighted
                    ? 'bg-gradient-to-b from-[#0a122c] to-[#050816] border border-blue-500/50 shadow-lg shadow-blue-900/15 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20'
                    : 'bg-[#050816]/80 border border-slate-800/90 hover:border-blue-500/40 hover:bg-[#070b1e] hover:shadow-lg hover:shadow-blue-500/10'
                }`}
              >
                {/* Top Row: Icon Container & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        card.isHighlighted
                          ? 'bg-blue-600/20 border-blue-400/40 text-cyan-300 group-hover:bg-blue-600/30 group-hover:scale-105'
                          : 'bg-blue-600/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-cyan-300 group-hover:scale-105'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
                    </div>

                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase transition-all duration-300 ${
                        card.isHighlighted
                          ? 'bg-blue-500/20 text-cyan-300 border border-blue-400/40 group-hover:bg-blue-500/30 group-hover:text-white'
                          : 'bg-slate-800/80 text-slate-300 border border-slate-700/80 group-hover:border-blue-500/30 group-hover:text-slate-100'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-white transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom indicator glow line for highlighted card */}
                {card.isHighlighted && (
                  <div className="mt-5 pt-3 border-t border-blue-500/20 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-400 font-medium tracking-wider uppercase">
                      Foco Central
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

