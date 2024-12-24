import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '../../types';

export const TeamMember: React.FC<TeamMemberType> = ({ 
  name, 
  role, 
  image, 
  linkedin, 
  email 
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex space-x-3">
            {linkedin && (
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 rounded-full text-luxury-black hover:bg-gold-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`}
                className="p-2 bg-white/90 rounded-full text-luxury-black hover:bg-gold-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-luxury-black mb-1">{name}</h3>
      <p className="text-luxury-muted">{role}</p>
    </div>
  );
};