import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/siteData';
import {
  Globe,
  Zap,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  Cpu,
  Workflow,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react';

interface SolutionsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Workflow': return <Workflow className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="solucoes" className="relative py-24 bg-[#050816] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Portfólio de Soluções Corporativas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Soluções digitais para cada etapa do seu negócio.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Da concepção do design à infraestrutura em nuvem, desenvolvemos ecossistemas tecnológicos modernos e sob medida.
          </p>
        </div>

        {/* Services Grid (Varied Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 3 || index === 7;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative group rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border ${
                  isFeatured
                    ? 'bg-[#080D1D] border-blue-500/30 hover:border-blue-500/70 shadow-lg shadow-blue-900/10'
                    : 'bg-[#080D1D]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Key Benefit Highlight */}
                  <div className="pt-3 border-t border-slate-800/80 mb-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Benefício Principal:
                    </span>
                    <p className="text-xs text-slate-300 font-medium">
                      {service.keyBenefit}
                    </p>
                  </div>

                  {/* Call to Action Button */}
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-cyan-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-600/25"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
