import React from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, Phone } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Premium Quality",
    description: "Exceptional quality products for your space"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Shopping",
    description: "Safe and secure shopping experience"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Quick and reliable delivery service"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support"
  }
];

export const LandingPageSections: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of quality, service, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 text-gold-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 