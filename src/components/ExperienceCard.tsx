import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  isLast?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  isLast = false
}) => {
  return (
    <div className="relative pl-16 pb-8">
      {/* Timeline dot */}
      <div className="absolute left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow"></div>
      
      {/* Timeline connector */}
      {!isLast && <div className="timeline-connector"></div>}
      
      {/* Experience content */}
      <div className="card-professional p-6 animate-slide-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-1">{title}</h3>
            <h4 className="text-lg text-muted-foreground font-medium">{company}</h4>
          </div>
          <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
            <div className="flex items-center gap-1 mb-1">
              <Calendar size={14} />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>
        </div>
        
        <ul className="space-y-2 text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;