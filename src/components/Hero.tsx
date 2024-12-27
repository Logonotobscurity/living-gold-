import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative bg-black min-h-[90vh] flex items-center">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1543071293-d91175a68672"
          alt="Luxury Chandelier"
          className="w-full h-full object-cover opacity-70"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      
      <motion.div 
        className="relative container mx-auto px-4 py-20 sm:py-32 md:py-40"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
            variants={fadeInUp}
          >
            Illuminate Your Space with{' '}
            <motion.span 
              className="text-gold-500 inline-block"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
                textShadow: isHovered ? "0 0 8px rgba(234, 179, 8, 0.6)" : "none"
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              Elegance
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300"
            variants={fadeInUp}
          >
            Discover our stunning collection of premium chandeliers crafted to transform your space into a masterpiece of luxury.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link
              to="/products"
              className="inline-flex items-center bg-gold-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group text-base sm:text-lg font-medium"
            >
              <span className="mr-2">Explore Collection</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};