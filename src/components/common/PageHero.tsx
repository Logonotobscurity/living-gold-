import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  height?: 'small' | 'medium' | 'large';
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle,
  height = 'medium'
}) => {
  const heightClasses = {
    small: 'h-[40vh] min-h-[300px]',
    medium: 'h-[60vh] min-h-[400px]',
    large: 'h-[80vh] min-h-[500px]'
  };

  return (
    <motion.section 
      className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543071293-d91175a68672"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay with radial effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent">
          <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-transparent to-transparent opacity-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {title}
              {/* Decorative line */}
              <div className="absolute -left-8 top-1/2 w-6 h-1 bg-gold-500 transform -translate-y-1/2" />
            </motion.h1>
            <div className="relative">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl md:text-2xl text-gold-300 font-light"
              >
                {subtitle}
              </motion.p>
              {/* Decorative element */}
              <motion.div
                className="absolute -right-12 top-1/2 w-8 h-8 rounded-full border-2 border-gold-500/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated overlay effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.section>
  );
}; 