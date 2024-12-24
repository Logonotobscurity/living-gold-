import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { scrollY } = useScroll();

  // Smoother parallax with minimal movement
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '10%']);
  const textY = useTransform(scrollY, [0, 300], [0, 20]);

  // Enhanced floating elements animation
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.3 + 0.2,
    duration: Math.random() * 1.5 + 2, // Faster animations
    delay: Math.random()
  }));

  // Page transition variants
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      className="relative h-[90vh] min-h-[600px] max-h-[1000px] overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Static Background with Minimal Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300"
          style={{ 
            backgroundImage: 'url(/images/hero/hero-1.WEBP)',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Fast gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/20 via-transparent to-gold-600/20 animate-gradient-fast" />
        
        {/* Faster glowing orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl animate-pulse-fast" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gold-400/20 rounded-full blur-2xl animate-pulse-fast delay-300" />
        </div>
      </motion.div>

      {/* Faster Floating Elements */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
          animate={{
            y: [`${particle.y}%`, `${particle.y - 8}%`, `${particle.y}%`],
            opacity: [0, 0.4, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {particle.id % 2 === 0 ? (
            <Star className="text-gold-400/30" size={particle.scale * 20} />
          ) : (
            <Sparkles className="text-gold-400/20" size={particle.scale * 18} />
          )}
        </motion.div>
      ))}

      {/* Enhanced Static Content with Fast Transitions */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          style={{ y: textY }}
        >
          <motion.div
            className="space-y-8 text-center"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="space-y-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }
              }}
            >
              {/* Enhanced glowing text effect */}
              <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Luxury
                <span className="relative inline-block">
                  <span className="absolute -inset-1 blur-lg bg-gold-400/30 rounded-lg animate-pulse-fast" />
                  <span className="relative text-gold-400"> Illuminated</span>
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent animate-shimmer-fast">
                Where Elegance Meets Light
              </h2>
            </motion.div>

            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-light px-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }
              }}
            >
              Step into a world of radiant sophistication. Our exclusive lighting collection transforms spaces into masterpieces of brilliance.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 pt-6"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <Link to="/products">
                <motion.button
                  className="group relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-gold-500/20 hover:shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Discover Opulence</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition-all duration-200 border border-white/20 hover:border-white/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}; 