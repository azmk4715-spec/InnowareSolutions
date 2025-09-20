import React from 'react';

interface ProjectLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// E-Commerce Platform Logo
export const EcommerceLogo: React.FC<ProjectLogoProps> = ({ 
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
        {/* Shopping Cart */}
        <rect x="20" y="35" width="45" height="30" rx="3" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        <circle cx="30" cy="70" r="4" fill="hsl(var(--primary))" />
        <circle cx="55" cy="70" r="4" fill="hsl(var(--primary))" />
        <path d="M15 25 L25 25 L30 15 L70 15 L75 25 L85 25" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
        
        {/* Shopping Bag */}
        <rect x="60" y="20" width="20" height="25" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M65 20 L65 15 L75 15 L75 20" stroke="hsl(var(--primary))" strokeWidth="2" />
        
        {/* Price Tag */}
        <rect x="15" y="15" width="15" height="10" rx="1" fill="hsl(var(--primary))" />
        <text x="22" y="22" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">$</text>
      </svg>
    </div>
  );
};

// Cloud Migration Logo
export const CloudLogo: React.FC<ProjectLogoProps> = ({ 
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
        {/* Cloud Shape */}
        <path
          d="M25 45 Q15 35 25 25 Q35 15 50 20 Q65 15 75 25 Q85 35 75 45 Q85 55 75 65 Q65 75 50 70 Q35 75 25 65 Q15 55 25 45 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
          className="cloud-animated"
        />
        
        {/* Server Racks */}
        <rect x="20" y="60" width="8" height="15" rx="1" fill="hsl(var(--primary))" opacity="0.7" />
        <rect x="30" y="60" width="8" height="15" rx="1" fill="hsl(var(--primary))" opacity="0.7" />
        <rect x="40" y="60" width="8" height="15" rx="1" fill="hsl(var(--primary))" opacity="0.7" />
        
        {/* Arrows */}
        <path d="M15 50 L25 50 M20 45 L20 55" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
        <path d="M75 50 L85 50 M80 45 L80 55" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Mobile App Logo
export const MobileAppLogo: React.FC<ProjectLogoProps> = ({ 
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
        {/* Phone Body */}
        <rect x="30" y="15" width="40" height="70" rx="8" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        
        {/* Screen */}
        <rect x="35" y="25" width="30" height="45" rx="3" fill="hsl(var(--primary))" opacity="0.1" />
        
        {/* App Icons */}
        <circle cx="42" cy="35" r="3" fill="hsl(var(--primary))" />
        <rect x="48" y="32" width="6" height="6" rx="1" fill="hsl(var(--primary))" />
        <rect x="42" y="42" width="6" height="6" rx="1" fill="hsl(var(--primary))" />
        <rect x="48" y="42" width="6" height="6" rx="1" fill="hsl(var(--primary))" />
        
        {/* Home Button */}
        <circle cx="50" cy="75" r="3" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        
        {/* Signal Bars */}
        <path d="M15 30 L20 30 M15 35 L22 35 M15 40 L24 40" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Corporate Website Logo
export const CorporateLogo: React.FC<ProjectLogoProps> = ({ 
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
        {/* Building/Office */}
        <rect x="20" y="30" width="60" height="50" rx="2" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        
        {/* Windows */}
        <rect x="30" y="40" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="45" y="40" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="60" y="40" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="30" y="55" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="45" y="55" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="60" y="55" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3" />
        
        {/* Globe/Web */}
        <circle cx="50" cy="20" r="12" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <path d="M38 20 L62 20 M50 8 L50 32" stroke="hsl(var(--primary))" strokeWidth="1" />
        <path d="M42 14 Q50 8 58 14 M42 26 Q50 32 58 26" stroke="hsl(var(--primary))" strokeWidth="1" />
      </svg>
    </div>
  );
};

// Marketplace Logo
export const MarketplaceLogo: React.FC<ProjectLogoProps> = ({ 
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
        {/* Central Hub */}
        <circle cx="50" cy="50" r="15" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
        
        {/* Vendor Nodes */}
        <circle cx="25" cy="30" r="8" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="75" cy="30" r="8" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="25" cy="70" r="8" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="75" cy="70" r="8" fill="hsl(var(--primary))" opacity="0.7" />
        
        {/* Connection Lines */}
        <line x1="50" y1="50" x2="25" y2="30" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="50" x2="75" y2="30" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="50" x2="25" y2="70" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
        <line x1="50" y1="50" x2="75" y2="70" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
        
        {/* Central Icon */}
        <text x="50" y="55" textAnchor="middle" fontSize="12" fill="hsl(var(--primary))" fontWeight="bold">M</text>
      </svg>
    </div>
  );
};
