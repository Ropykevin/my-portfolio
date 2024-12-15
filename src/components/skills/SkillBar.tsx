import React from 'react';

interface SkillBarProps {
  skill: string;
}

export const SkillBar = ({ skill }: SkillBarProps) => {
  const progress = React.useMemo(() => Math.random() * 30 + 70, []);
  
  return (
    <div className="relative">
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-2 bg-[#ff6700] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-sm text-gray-600 mt-1 block">
        {skill}
      </span>
    </div>
  );
};