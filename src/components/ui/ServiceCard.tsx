import type { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-50 text-gold-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-luxury-black mb-2">{title}</h3>
      <p className="text-luxury-muted">{description}</p>
    </div>
  );
};