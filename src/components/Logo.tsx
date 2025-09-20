import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  interactive?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  interactive = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Cloud Logo */}
      <div 
        className={`${sizeClasses[size]} relative group ${interactive ? 'cursor-pointer' : ''}`}
        style={{ 
          filter: interactive ? 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))' : 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (interactive) {
            e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
            e.currentTarget.style.filter = 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.5))';
          }
        }}
        onMouseLeave={(e) => {
          if (interactive) {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))';
          }
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cloud Outline */}
          <path
            d="M75 45C75 35.717 67.7614 28.3333 58.75 28.3333C50.75 28.3333 44.1667 34.1667 42.5 41.6667C35.8333 41.6667 30 47.5 30 54.1667C30 60.8333 35.8333 66.6667 42.5 66.6667H70C77.5 66.6667 83.3333 60.8333 83.3333 53.3333C83.3333 48.3333 79.8333 44.1667 75 42.5V45Z"
            fill="url(#cloudGradient)"
            stroke="url(#cloudGradient)"
            strokeWidth="2"
          />
          
          {/* Circuit Board Lines */}
          <path
            d="M45 55L55 45L65 55L75 45"
            stroke="url(#circuitGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={interactive ? 'animate-pulse' : ''}
          />
          
          {/* Connection Points */}
          <circle cx="45" cy="55" r="3" fill="url(#circuitGradient)" />
          <circle cx="55" cy="45" r="3" fill="url(#circuitGradient)" />
          <circle cx="65" cy="55" r="3" fill="url(#circuitGradient)" />
          <circle cx="75" cy="45" r="3" fill="url(#circuitGradient)" />
          
          {/* Additional Circuit Elements */}
          <path
            d="M50 60L60 50"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className={interactive ? 'animate-pulse' : ''}
            style={{ animationDelay: '0.5s' }}
          />
          <path
            d="M40 50L50 60"
            stroke="url(#circuitGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className={interactive ? 'animate-pulse' : ''}
            style={{ animationDelay: '1s' }}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Interactive Glow Effect */}
        {interactive && (
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
      
      {/* Company Text */}
      <div className="flex flex-col">
        <span className={`font-bold text-foreground ${textSizes[size]}`}>
          InnoWare
        </span>
        <span className={`font-medium text-muted-foreground ${textSizes[size]} text-xs`}>
          Solutions IT
        </span>
      </div>
    </div>
  );
};

export default Logo;
