import React from 'react';

interface HealthTrackerLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const HealthTrackerLogo: React.FC<HealthTrackerLogoProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ECG Waveform - M/W Shape */}
        <path
          d="M10 50 L20 30 L30 50 L40 20 L50 50 L60 30 L70 50 L80 40 L90 50"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="ecg-animated"
        />
        
        {/* Heartbeat dots */}
        <circle cx="20" cy="30" r="2" fill="hsl(var(--primary))" className="animate-ping" />
        <circle cx="40" cy="20" r="2" fill="hsl(var(--primary))" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="60" cy="30" r="2" fill="hsl(var(--primary))" className="animate-ping" style={{ animationDelay: '1s' }} />
        
        {/* Base line */}
        <line x1="10" y1="50" x2="90" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
};

export default HealthTrackerLogo;
