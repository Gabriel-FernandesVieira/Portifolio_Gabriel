import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
  proficiency: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, name, proficiency }) => {
  return (
    <div className="group flex flex-col items-center space-y-3 p-4">
      <div className="skill-icon text-4xl text-muted-foreground group-hover:text-primary transition-all duration-300">
        <Icon size={48} className="skill-icon" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-sm mb-2">{name}</h3>
        <div className="skill-progress w-16">
          <div 
            className="skill-progress-fill" 
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;