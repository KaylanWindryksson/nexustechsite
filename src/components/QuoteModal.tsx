import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Send, Sparkles, Shield, ArrowRight, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<string>(preselectedService || 'Sites Institucionais');
  const [timeline, setTimeline] = useState<string>('30 a 60 dias');
  const [budgetRange, setBudgetRange] = useState<string>('Sob consulta');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    details: '',
  });

  const serviceOptions = [
    'Sites Institucionais',
    'Landing Pages de Alta Conversão',
    'E-commerce & Headless',
    'Sistemas Web & SaaS',
    'Aplicativos iOS / Android',
    'Softwares sob Medida',
    'Automações & Integrações',
    'Inteligência Artificial',
  ];

  const timelineOptions = [
    'Urgente (menos de 30 dias)',
    'Normal (30 a 60 dias)',
    'Planejando (60+ dias)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá, Nexus Tech! Gostaria de solicitar um orçamento.

📌 *Detalhes do Projeto:*
• *Solução:* ${serviceType}
• *Prazo Estimado:* ${timeline}
• *Nome:* ${formData.name || 'Não informado'}
• *Empresa:* ${formData.company || 'Não informada'}
• *E-mail:* ${formData.email || 'Não informado'}
• *WhatsApp:* ${formData.whatsapp || 'Não informado'}
• *Detalhes:* ${formData.details || 'Sem observações adicionais'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#080D1D] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800/60 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Solicitação de Orçamento Sem Compromisso
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Conte-nos sobre o seu projeto
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Preencha os dados abaixo e nossa equipe técnica apresentará a melhor solução.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                1. Qual solução você precisa?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setServiceType(opt)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${
                      serviceType === opt
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span>{opt}</span>
                    {serviceType === opt && <Check className="w-4 h-4 text-blue-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Timeline */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                2. Qual o prazo desejado?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelineOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 rounded-xl border text-xs text-center transition-all ${
                      timeline === t
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                3. Seus Dados de Contato
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome completo *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-mail profissional *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="WhatsApp / Telefone *"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="details"
                  rows={2}
                  placeholder="Descreva brevemente sua necessidade ou projeto (opcional)..."
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento confidencial e direto com especialista.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer group"
              >
                <span>Enviar no WhatsApp</span>
                <PhoneCall className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
