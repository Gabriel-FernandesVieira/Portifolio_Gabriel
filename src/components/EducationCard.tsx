import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  field: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  period,
  location,
  field
}) => {
  return (
    <div className="card-professional p-6 animate-slide-in-up">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <GraduationCap className="text-primary" size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold gradient-text mb-1">{degree}</h3>
          <h4 className="text-base text-muted-foreground font-medium mb-2">{institution}</h4>
          <p className="text-sm text-muted-foreground mb-3">{field}</p>
          
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;