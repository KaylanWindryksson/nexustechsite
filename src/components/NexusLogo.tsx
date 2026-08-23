import React from 'react';

// Official user-provided logo URL
const LOGO_URL = 'https://i.imgur.com/taEbzP3.png';

interface NexusLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const NexusLogo: React.FC<NexusLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={LOGO_URL}
        alt="Nexus Tech"
        className={`${heightClasses[size]} w-auto object-contain drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};


