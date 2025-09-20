import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'ghost'
}) => {
  const { theme, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10'
  };

  return (
    <Button
      variant={variant}
      size="sm"
      onClick={toggleTheme}
      className={`${sizeClasses[size]} ${className} transition-all duration-300 hover:scale-105`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 transition-transform duration-300" />
      ) : (
        <Sun className="h-4 w-4 transition-transform duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
