import React from 'react';
import type { Milestone } from '../../types';

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-3xl font-bold text-center text-luxury-black mb-16">Our Journey</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold-200" />
        
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300">
                  <span className="text-gold-600 font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-luxury-black mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-luxury-muted">{milestone.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};