import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Solutions } from './components/Solutions';
import { Differentials } from './components/Differentials';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyNexus } from './components/WhyNexus';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from './data/siteData';
import { useParallax } from './hooks/useParallax';

export default function App() {
  useParallax();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenQuoteModal = (serviceName: string = '') => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleFloatingWhatsAppClick = () => {
    const text = encodeURIComponent('Olá, Nexus Tech! Gostaria de conversar com um especialista sobre um projeto digital.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050816] text-[#CBD5E1] font-['Inter',sans-serif] selection:bg-blue-600/30 selection:text-white relative">
      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal('')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal('')} />

        {/* 2. Trust Metrics Section */}
        <TrustSection />

        {/* 3. Solutions Section */}
        <Solutions onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Differentials Section */}
        <Differentials />

        {/* 5. Projects Section */}
        <Projects onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Process Section */}
        <Process />

        {/* 7. Why Nexus Tech Section */}
        <WhyNexus />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQ onOpenQuoteModal={() => handleOpenQuoteModal('')} />

        {/* 10. Final Conversion CTA Section */}
        <FinalCTA onOpenQuoteModal={() => handleOpenQuoteModal('')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lead Budget Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Floating WhatsApp Action Button for Mobile & Quick Contact */}
      <button
        onClick={handleFloatingWhatsAppClick}
        className="fixed bottom-6 right-6 z-30 p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all cursor-pointer flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
        title="Falar com especialista via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold whitespace-nowrap transition-all duration-300">
          Atendimento WhatsApp
        </span>
      </button>
    </div>
  );
}
