
import React from 'react';

interface ShurtleLogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const ShurtleLogo: React.FC<ShurtleLogoProps> = ({
  variant = 'default',
  size = 'md',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className="flex items-center gap-2">
      <img src="/shurtle-logo.svg" alt="Shurtle Logo" className={sizeClasses[size]} />
      {showText && (
        <div className="flex items-center">
          <span className={`font-bold text-${size === 'sm' ? 'xl' : size === 'md' ? '2xl' : '3xl'} ${variant === 'white' ? 'text-white' : 'text-shurtle-dark'}`}>
            SHURTLE
          </span>
          <span className={`text-${size === 'sm' ? 'sm' : size === 'md' ? 'base' : 'lg'} font-medium text-shurtle-primary ml-1.5`}>
            WEB
          </span>
        </div>
      )}
    </div>
  );
};
