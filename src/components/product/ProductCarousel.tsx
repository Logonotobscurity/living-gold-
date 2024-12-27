import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface ProductCarouselProps {
  title?: string;
  products: Product[];
}

export const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [autoScrollEnabled]);

  return (
    <div className="relative py-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-purple-100/50 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-200/20 via-gold-400/20 to-gold-200/20"
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 mb-4 relative">
        <div className="flex items-center justify-between">
          {title && (
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
          )}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scroll('left');
                setAutoScrollEnabled(false);
              }}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-gold-50 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gold-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scroll('right');
                setAutoScrollEnabled(false);
              }}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-gold-50 transition-colors group"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gold-600" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide -mx-2 px-2 relative"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setAutoScrollEnabled(false)}
        onMouseLeave={() => setAutoScrollEnabled(true)}
      >
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="flex-shrink-0 w-[130px] sm:w-[160px] md:w-[200px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 