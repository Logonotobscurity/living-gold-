import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Zap } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';
import { HelpCTA } from '../components/cta/HelpCTA';
import { AutoSlideSection } from '../components/home/AutoSlideSection';

const heroSlides = [
  {
    id: 1,
    title: "Luxury Lighting Solutions",
    subtitle: "Illuminate with Elegance",
    description: "Transform your space with our exquisite collection of premium lighting fixtures.",
    image: "/images/hero/luxury-chandelier.jpg",
    gradient: "from-black/5 via-gold-100/30 to-white/50",
    accent: "text-gold-600",
    textColor: "text-gray-900",
    glowColor: "gold",
    buttonColor: "bg-gold-600 hover:bg-gold-700",
    icon: Sparkles
  },
  {
    id: 2,
    title: "Modern Collection",
    subtitle: "Contemporary Brilliance",
    description: "Discover sleek, innovative designs that define modern living spaces.",
    image: "/images/hero/modern-lighting.jpg",
    gradient: "from-black/5 via-gray-800/40 to-white/50",
    accent: "text-gray-800",
    textColor: "text-gray-900",
    glowColor: "gray",
    buttonColor: "bg-gray-800 hover:bg-gray-900",
    icon: Star
  },
  {
    id: 3,
    title: "Smart Lighting",
    subtitle: "Future of Illumination",
    description: "Experience intelligent lighting solutions for the modern home.",
    image: "/images/hero/smart-lighting.jpg",
    gradient: "from-black/5 via-indigo-600/30 to-white/50",
    accent: "text-indigo-600",
    textColor: "text-gray-900",
    glowColor: "indigo",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    icon: Zap
  }
];

const categories = [
  {
    id: 'luxury',
    title: 'Luxury Lighting',
    gradient: 'from-gold-100 to-amber-50',
  },
  {
    id: 'modern',
    title: 'Modern Collection',
    gradient: 'from-gray-100 to-slate-50',
  },
  {
    id: 'smart',
    title: 'Smart Lighting',
    gradient: 'from-blue-50 to-indigo-50',
  }
];

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Slower auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsTransitioning(false), 1000);
      }
    }, 8000); // Increased interval
    return () => clearInterval(timer);
  }, [isTransitioning]);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-48 h-48 rounded-full bg-${heroSlides[currentSlide].glowColor}-300 mix-blend-multiply filter blur-3xl`}
                animate={{
                  x: [Math.random() * 100, Math.random() * 100],
                  y: [Math.random() * 100, Math.random() * 100],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Slide Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].gradient}`} />
            </div>

            {/* Slide Content */}
            <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-lg relative">
                {/* Sparking Icon Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <motion.div
                    className="relative"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {React.createElement(heroSlides[currentSlide].icon, {
                      className: `w-6 h-6 ${heroSlides[currentSlide].accent} filter drop-shadow-lg`
                    })}
                    {/* Sparks */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-${heroSlides[currentSlide].glowColor}-400`}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, (i - 1) * 10],
                          y: [0, (i - 1) * -10],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut",
                        }}
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                      />
                    ))}
                  </motion.div>
                  <span className={`text-base font-medium ${heroSlides[currentSlide].accent}`}>
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </motion.div>

                {/* Title with Sparking Text */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`text-4xl sm:text-5xl font-bold ${heroSlides[currentSlide].textColor} mb-6 relative`}
                >
                  {heroSlides[currentSlide].title}
                  <motion.span
                    className={`absolute -right-4 -top-4 w-8 h-8 rounded-full bg-${heroSlides[currentSlide].glowColor}-400/30 blur-sm`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-lg text-gray-600 mb-8"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <Link
                    to="/products"
                    className={`inline-flex items-center px-6 py-3 ${heroSlides[currentSlide].buttonColor} text-white rounded-lg font-semibold 
                      transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>

                  {/* Nationwide Delivery Tag */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-${heroSlides[currentSlide].glowColor}-200 shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-${heroSlides[currentSlide].glowColor}-500 animate-pulse`} />
                    <span className={`text-xs font-medium ${heroSlides[currentSlide].accent}`}>
                      Nationwide Delivery
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Progress Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 1000);
                  }
                }}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? `w-8 bg-${heroSlides[currentSlide].glowColor}-500` 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed Section */}
      <AutoSlideSection />

      {/* Categories Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          {categories.map((category) => {
            const categoryProducts = productsByCategory[category.title] || [];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center justify-between mb-8">
                  <motion.h2 
                    className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                  >
                    {category.title}
                  </motion.h2>
                  <Link
                    to={`/products?category=${category.title}`}
                    className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1 group"
                  >
                    View Collection
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {categoryProducts.slice(0, 4).map((product, productIndex) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: productIndex * 0.1, duration: 0.5 }}
                      className="aspect-[3/4] sm:aspect-[4/5]"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <HelpCTA />
    </div>
  );
};