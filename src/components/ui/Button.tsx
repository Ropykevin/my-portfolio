import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg font-semibold transition-colors',
        variant === 'primary' && 'bg-[#ff6700] hover:bg-[#ff8533] text-white',
        variant === 'outline' && 'border-2 border-[#ff6700] hover:bg-[#ff6700] text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};