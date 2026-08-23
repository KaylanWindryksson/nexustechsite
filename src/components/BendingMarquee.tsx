import React from 'react';
import { motion } from 'motion/react';

export const BendingMarquee: React.FC = () => {
  const items = [
    { num: '01', label: 'SITES INSTITUCIONAIS' },
    { num: '02', label: 'LANDING PAGES' },
    { num: '03', label: 'SISTEMAS WEB E SAAS' },
    { num: '04', label: 'INTELIGÊNCIA ARTIFICIAL' },
    { num: '05', label: 'AUTOMAÇÕES' },
  ];

  // Repeat array multiple times for seamless infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#080D1D] border-t border-b border-white/10 py-4 overflow-hidden relative z-20 shadow-xl">
      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex items-center py-1">
        {/* Infinite Smooth Horizontal Marquee */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 55,
          }}
          className="flex items-center gap-8 sm:gap-12 whitespace-nowrap min-w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.num}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all cursor-default group"
            >
              <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 font-mono">
                {item.num}
              </span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-200 group-hover:text-cyan-300 transition-colors uppercase">
                {item.label}
              </span>
              <div className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors ml-1.5 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Fade Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#080D1D] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#080D1D] to-transparent pointer-events-none z-10" />
    </div>
  );
};
