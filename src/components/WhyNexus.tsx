import React from 'react';
import { motion } from 'motion/react';
import { DIFFERENTIALS_DATA } from '../data/siteData';
import {
  Palette,
  Gauge,
  Search,
  ShieldCheck,
  Users,
  Headphones,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export const WhyNexus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Gauge': return <Gauge className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Headphones': return <Headphones className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Engenharia de Software de Classe Mundial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Por que empresas escolhem a Nexus Tech?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Oferecemos o equilíbrio perfeito entre sofisticação estético-visual e engenharia técnica robusta.
          </p>
        </div>

        {/* Editorial Layout with Highlight Banner & Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS_DATA.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-[#080D1D] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all w-fit mb-6 shadow-md">
                  {getIcon(diff.iconName)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Padrão Corporativo Garantido</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
