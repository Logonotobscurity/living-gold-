import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/logo.webp"
        alt="Living Gold Concept"
        className={`${sizes[size]} object-contain`}
      />
    </Link>
  );
};