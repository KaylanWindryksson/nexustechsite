import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/siteData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQProps {
  onOpenQuoteModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenQuoteModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050816] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Tire suas dúvidas antes de começar.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Respostas claras sobre prazos, investimentos, garantias e processo de desenvolvimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#080D1D] border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/30' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080D1D] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h3 className="text-lg font-bold text-white">Tem outra dúvida específica?</h3>
            <p className="text-xs text-slate-400 mt-1">Fale diretamente com nossa equipe de especialistas pelo WhatsApp.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com especialista</span>
          </button>
        </div>

      </div>
    </section>
  );
};
