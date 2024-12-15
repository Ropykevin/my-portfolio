import React from 'react';
import { cn } from '../../utils/cn';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = ({ label, className, ...props }: TextAreaProps) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <textarea
        className={cn(
          'w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700',
          'focus:border-[#ff6700] focus:ring-1 focus:ring-[#ff6700]',
          className
        )}
        {...props}
      />
    </div>
  );
};