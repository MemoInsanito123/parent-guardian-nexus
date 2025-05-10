
import React from 'react';

interface ShurtleLogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const ShurtleLogo: React.FC<ShurtleLogoProps> = ({
  variant = 'default',
  size = 'sm',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-10'
  };

  return (
    <div className="flex items-center gap-2">
      <img src="/iconShurtle.png" alt="Shurtle icon" className={sizeClasses[size]} />
      {showText && (
        <div className="flex items-center">
          <span className='font-bold text-text-2xl text-shurtle-black '>
            SHURTLE
          </span>
          <span className= 'stext-sm text-shurtle-zelda ml-2 '>
            WEB
          </span>
        </div>
      )}
    </div>
  );
};
