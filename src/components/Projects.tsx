import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Zap,
  LayoutDashboard,
  ShoppingBag,
  Layers,
  Workflow,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface ProjectsProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

interface ShowcaseSolution {
  id: string;
  index: string;
  category: string;
  categoryShort: string;
  icon: React.ElementType;
  title: string;
  clientType: 'PROJETO REAL' | 'DEMONSTRAÇÃO CONCEITO' | 'SOLUÇÃO INTEGRADA';
  tagline: string;
  description: string;
  highlight: string;
  deliverables: string[];
  technologies: string[];
  imageUrl: string;
  simulatedUrl: string;
  quoteTarget: string;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions: ShowcaseSolution[] = [
    {
      id: 'sites-profissionais',
      index: '01',
      category: 'Sites Profissionais',
      categoryShort: 'Sites',
      icon: Globe,
      title: 'Studio Essencial Pilates',
      clientType: 'PROJETO REAL',
      tagline: 'Presença digital sofisticada e autoridade imediata de marca.',
      description:
        'Site institucional desenvolvido para apresentar a empresa de forma profissional, gerar confiança instantânea e facilitar o contato com novos clientes através de canais diretos.',
      highlight: 'Design autoral exclusivo, carregamento em menos de 1s e arquitetura de SEO para o Google.',
      deliverables: [
        'Design 100% autoral e responsivo',
        'Otimização extrema de SEO e performance',
        'Canal de agendamento e contato direto',
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'SEO Avançado'],
      imageUrl:
        'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'studioessencialpilates.com.br',
      quoteTarget: 'Sites Profissionais (Studio Essencial Pilates)',
    },
    {
      id: 'landing-pages',
      index: '02',
      category: 'Landing Pages',
      categoryShort: 'Landing Pages',
      icon: Zap,
      title: 'Clean Power / Solaris Growth',
      clientType: 'PROJETO REAL',
      tagline: 'Páginas cirúrgicas para máxima conversão em tráfego pago.',
      description:
        'Landing page de alta conversão arquitetada para campanhas de anúncios (Meta Ads e Google Ads), com copywriting persuasivo, carregamento instantâneo e captura inteligente de leads.',
      highlight: 'Taxa de conversão de 14.8% e nota 99 no Google Lighthouse.',
      deliverables: [
        'Estrutura focada em CRO e copywriting',
        'Simulador interativo de proposta comercial',
        'Integração direta com CRM e WhatsApp',
      ],
      technologies: ['React', 'Tailwind CSS', 'CRO Engine', 'Pixel & Analytics'],
      imageUrl:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'cleanpower.nexustech.dev/lp',
      quoteTarget: 'Landing Pages de Alta Conversão',
    },
    {
      id: 'sistemas-web',
      index: '03',
      category: 'Sistemas Web',
      categoryShort: 'Sistemas',
      icon: LayoutDashboard,
      title: 'NexusFlow Operational Engine',
      clientType: 'PROJETO REAL',
      tagline: 'Centralização de processos operacionais e dashboards em tempo real.',
      description:
        'Sistema web sob medida criado para centralizar a operação da empresa, controlar fluxos de trabalho complexos e substituir planilhas manuais por um ecossistema seguro e veloz.',
      highlight: 'Redução comprovada de 45% no tempo de processos operacionais da equipe.',
      deliverables: [
        'Painéis e dashboards analíticos em tempo real',
        'Controle granular de acessos e permissões RBAC',
        'Exportação de relatórios e auditoria contínua',
      ],
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'flow.nexustech.dev/dashboard',
      quoteTarget: 'Sistemas Web & Dashboards sob Medida',
    },
    {
      id: 'ecommerce',
      index: '04',
      category: 'E-commerce',
      categoryShort: 'E-commerce',
      icon: ShoppingBag,
      title: 'Lumien Luxury Headless Store',
      clientType: 'DEMONSTRAÇÃO CONCEITO',
      tagline: 'Lojas virtuais modernas com checkout ultra-rápido e sem atritos.',
      description:
        'Plataforma de e-commerce de alto padrão construída para proporcionar uma experiência de compra fluida, cálculo automático de fretes, múltiplos meios de pagamento e autonomia total de catálogo.',
      highlight: 'Checkout otimizado em 2 etapas com Pix instantâneo e suporte a alta escala de pedidos.',
      deliverables: [
        'Catálogo de produtos com carregamento instantâneo',
        'Checkout transparente com Pix e Cartão',
        'Painel administrativo integrado para gestão de vendas',
      ],
      technologies: ['Next.js', 'Stripe / Pix API', 'Tailwind CSS', 'Headless Commerce'],
      imageUrl:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'lumienstore.concept.nexustech.dev',
      quoteTarget: 'E-commerce & Loja Virtual de Alta Performance',
    },
    {
      id: 'saas-micro-saas',
      index: '05',
      category: 'SaaS / Micro-SaaS',
      categoryShort: 'SaaS',
      icon: Layers,
      title: 'NexusFlow Multi-Tenant SaaS',
      clientType: 'PROJETO REAL',
      tagline: 'Plataformas de software como serviço prontas para monetização recorrente.',
      description:
        'Arquitetura completa de SaaS multi-inquilino com autenticação segura, gestão automática de assinaturas mensais/anuais, planos customizados e isolamento rigoroso de dados.',
      highlight: 'Pronto para receber de dezenas a milhares de clientes pagantes com segurança de nível bancário.',
      deliverables: [
        'Módulo completo de faturamento recorrente (Stripe)',
        'Isolamento multi-tenant seguro na nuvem',
        'Portais de autoatendimento para clientes',
      ],
      technologies: ['React / Next.js', 'Node.js', 'Docker', 'PostgreSQL', 'Stripe Billing'],
      imageUrl:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'app.nexusflow.io/workspace',
      quoteTarget: 'SaaS / Micro-SaaS Escalável',
    },
    {
      id: 'automacoes-integracoes',
      index: '06',
      category: 'Automações & Integrações',
      categoryShort: 'Automações',
      icon: Workflow,
      title: 'NexusFlow Automate & AI Sync',
      clientType: 'SOLUÇÃO INTEGRADA',
      tagline: 'Conexão inteligente entre sistemas, CRMs, APIs e Inteligência Artificial.',
      description:
        'Pipelines de automação sob medida que conectam os sistemas da sua empresa a gateways de pagamento, CRMs e agentes de IA, eliminando tarefas manuais repetitivas e acelerando o atendimento.',
      highlight: 'Economia média de 80+ horas de trabalho manual por mês com 0% de erro humano.',
      deliverables: [
        'Integração de APIs e Webhooks em tempo real',
        'Automação de fluxos de vendas e atendimento com IA',
        'Notificações automáticas via WhatsApp e e-mail',
      ],
      technologies: ['Webhooks', 'REST APIs', 'Node.js Engine', 'Gemini AI API'],
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      simulatedUrl: 'api.nexustech.dev/pipelines',
      quoteTarget: 'Automações, Integrações & Inteligência Artificial',
    },
  ];

  const currentSolution = solutions[activeTab];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % solutions.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section id="projetos" className="relative py-24 sm:py-28 bg-[#050816] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            // SOLUÇÕES SOB MEDIDA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            O que podemos construir para sua empresa?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sites, sistemas, lojas virtuais e automações desenvolvidos sob medida para transformar ideias em soluções digitais.
          </p>
        </div>

        {/* Category Tabs Selector */}
        <div className="w-full mb-10 sm:mb-12">
          <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-1">
            {solutions.map((sol, index) => {
              const IconComp = sol.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-[#080D1D]/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <IconComp
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-cyan-400'
                    }`}
                  />
                  <span>{sol.category}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse hidden sm:inline-block ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSolution.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-2xl sm:rounded-3xl bg-[#080D1D] border border-slate-800/90 shadow-2xl overflow-hidden p-5 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Large Visual Mockup Preview */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/70 bg-[#050816] shadow-2xl group">
                    {/* Simulated Browser Bar Header */}
                    <div className="w-full bg-[#0d1527] border-b border-slate-800 px-4 py-3 flex items-center justify-between gap-4">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>

                      {/* URL address bar */}
                      <div className="flex-1 max-w-sm px-3 py-1 rounded-md bg-[#050816] border border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center gap-2 truncate">
                        <span className="text-emerald-400 font-bold text-xs">🔒</span>
                        <span className="text-slate-300 truncate">{currentSolution.simulatedUrl}</span>
                      </div>

                      {/* Badge indicator */}
                      <span className="hidden sm:inline-flex text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                        {currentSolution.index}/06
                      </span>
                    </div>

                    {/* Image Preview Container */}
                    <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-950">
                      <img
                        src={currentSolution.imageUrl}
                        alt={currentSolution.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D1D]/90 via-transparent to-transparent" />

                      {/* Floating Category Badge over image */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1.5 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white">
                          {currentSolution.category}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${
                            currentSolution.clientType === 'PROJETO REAL'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : currentSolution.clientType === 'SOLUÇÃO INTEGRADA'
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                              : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          }`}
                        >
                          {currentSolution.clientType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Project Showcase Info */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Solution Counter & Category Label */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        {currentSolution.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {currentSolution.index} <span className="text-slate-600">/</span> 06
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                      {currentSolution.title}
                    </h3>

                    {/* Main Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                      {currentSolution.description}
                    </p>

                    {/* Key Highlights / Value box */}
                    <div className="p-4 rounded-xl bg-blue-950/25 border border-blue-800/30 mb-5">
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                          {currentSolution.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 mb-6">
                      {currentSolution.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Stack Tecnológica:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentSolution.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#050816] border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & CTA */}
                  <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => onOpenQuoteModal(currentSolution.quoteTarget)}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all duration-200 group/btn cursor-pointer"
                    >
                      <span>Quero algo assim</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    {/* Next / Prev Navigation */}
                    <div className="flex items-center justify-between sm:justify-start gap-2">
                      <button
                        onClick={handlePrev}
                        aria-label="Solução anterior"
                        className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Ver solução anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Próxima solução"
                        className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Ver próxima solução"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Fast Navigation Bar */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {solutions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === idx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
              aria-label={`Ir para solução ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
