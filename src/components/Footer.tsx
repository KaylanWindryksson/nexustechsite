import React from 'react';
import { NexusLogo } from './NexusLogo';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL } from '../data/siteData';
import { MessageCircle, Mail, Instagram, ArrowUp, Globe2, Shield, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] border-t border-slate-800 text-slate-400 py-16 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <NexusLogo size="md" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mt-4">
              Empresa de tecnologia especializada no desenvolvimento de soluções digitais sob medida: sites, sistemas, aplicativos, automações e inteligência artificial.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 font-mono">
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span>Atendimento Nacional & Internacional</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções Digitais</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos & Cases</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Processo de Trabalho</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Por que Nexus Tech</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes (FAQ)</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato & Orçamento</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">Canais Oficiais</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+5532988586172`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Telefone: {PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: @nexus_techweb</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nexus Tech Desenvolvimento de Software. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 hover:text-slate-400 cursor-pointer">
              <Shield className="w-3.5 h-3.5" /> Política de Privacidade & Termos
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer flex items-center gap-1"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

