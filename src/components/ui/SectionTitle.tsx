import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn('text-3xl font-bold text-center mb-12', className)}>
      {children}
    </h2>
  );
};