import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="card-professional p-6 animate-slide-in-up">
      <h2 className="text-2xl font-bold gradient-text mb-6">Contato</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 group">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Mail className="text-primary" size={20} />
          </div>
          <a 
            href="mailto:gabriel7fernandes@hotmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            gabriel7fernandes@hotmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-3 group">
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Phone className="text-primary" size={20} />
          </div>
          <a 
            href="tel:+5519401742"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +55 19 99401-1242
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MapPin className="text-primary" size={20} />
          </div>
          <span className="text-muted-foreground">
            Limeira, São Paulo, Brasil
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;