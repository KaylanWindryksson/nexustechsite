import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Palette,
  Code2,
  Gauge,
  Layers,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  Terminal,
  Server,
  Zap,
} from 'lucide-react';

export const Differentials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Estratégia',
      subtitle: 'Visão de negócio & ROI',
      icon: Compass,
      description: 'Mapeamos gargalos operacionais e oportunidades de receitas antes de escrever qualquer linha de código.',
      detail: 'Análise de concorrência, mapeamento de jornadas de conversão e viabilidade financeira.',
    },
    {
      title: 'Design',
      subtitle: 'UI/UX exclusivo de alto padrão',
      icon: Palette,
      description: 'Interfaces elegantes, intuitivas e autorais. Sem templates prontos, focadas na experiência do usuário.',
      detail: 'Design system proprietário, protótipos interativos e microinterações refinadas.',
    },
    {
      title: 'Desenvolvimento',
      subtitle: 'Engenharia de software moderna',
      icon: Code2,
      description: 'Desenvolvimento com React, TypeScript, Next.js e Node.js seguindo padrões de Clean Code.',
      detail: 'Arquitetura desacoplada, fácil manutenção e suporte a múltiplos ambientes de teste.',
    },
    {
      title: 'Performance',
      subtitle: 'Carregamento sub-segundo',
      icon: Gauge,
      description: 'Velocidade extrema de navegação que reduz a taxa de rejeição e maximiza a conversão.',
      detail: 'Garantia de pontuação 95+ no Google Lighthouse e otimização total de assets.',
    },
    {
      title: 'Escalabilidade',
      subtitle: 'Pronto para o crescimento',
      icon: Layers,
      description: 'Sistemas preparados para suportar picos de tráfego e expansão para milhares de usuários.',
      detail: 'Servidores em nuvem elásticos (AWS, GCP, Vercel) com balanceamento de carga.',
    },
    {
      title: 'Segurança',
      subtitle: 'Proteção de dados corporativos',
      icon: ShieldCheck,
      description: 'Criptografia de ponta a ponta, conformidade com a LGPD e testes contínuos de vulnerabilidade.',
      detail: 'Autenticação segura, proteção contra ataques DDoS e backups automatizados em nuvem.',
    },
    {
      title: 'Suporte',
      subtitle: 'Atendimento próximo & contínuo',
      icon: Headphones,
      description: 'Acompanhamento técnico permanente após o lançamento com atualizações e evolução rápida.',
      detail: 'Suporte humanizado direto com a equipe de desenvolvimento, sem robôs burocráticos.',
    },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-[#080D1D] border-y border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest block mb-3">
            // O Diferencial Nexus Tech
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            Não entregamos apenas tecnologia. <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Criamos soluções para o seu negócio.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Combinamos inteligência de negócios, design autoral e engenharia de software de alta performance para gerar valor mensurável.
          </p>
        </div>

        {/* Interactive Architecture & Pillars Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Pillar Selector List (7 Pillars) */}
          <div className="lg:col-span-5 space-y-2">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.title}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/15 border-blue-500/50 text-white shadow-lg shadow-blue-900/10'
                      : 'bg-[#050816]/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg border ${
                      isActive
                        ? 'bg-blue-600 text-white border-blue-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block">{pillar.title}</span>
                      <span className="text-xs text-slate-400 font-normal">{pillar.subtitle}</span>
                    </div>
                  </div>
                  {isActive && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Technical Preview Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 rounded-2xl bg-[#050816] border border-slate-800 shadow-2xl overflow-hidden"
            >
              {/* Header inside card */}
              <div className="flex items-center gap-3 pb-6 border-b border-slate-800/80 mb-6">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {React.createElement(pillars[activeTab].icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block">
                    Pilar 0{activeTab + 1} de 07
                  </span>
                  <h3 className="text-2xl font-bold text-white">{pillars[activeTab].title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {pillars[activeTab].description}
              </p>

              {/* Detail list box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-6">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Execução Prática na Nexus Tech:
                </span>
                <p className="text-sm text-cyan-300 font-mono">
                  &gt; {pillars[activeTab].detail}
                </p>
              </div>

              {/* Mock Metrics Visualizer */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="text-xl font-extrabold text-emerald-400 font-mono block">100/100</span>
                  <span className="text-[10px] text-slate-400 uppercase">Lighthouse SEO</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="text-xl font-extrabold text-cyan-400 font-mono block">&lt;0.8s</span>
                  <span className="text-[10px] text-slate-400 uppercase">Load Time</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="text-xl font-extrabold text-blue-400 font-mono block">99.9%</span>
                  <span className="text-[10px] text-slate-400 uppercase">SLA Uptime</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
