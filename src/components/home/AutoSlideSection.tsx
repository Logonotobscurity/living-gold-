import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { Product } from '../../types';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const AutoSlideSection: React.FC = () => {
  const [recentlyViewed] = useLocalStorage<Product[]>('recentlyViewed', []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (recentlyViewed.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % recentlyViewed.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [recentlyViewed.length]);

  if (recentlyViewed.length === 0) {
    return null;
  }

  const handleInquiry = (product: Product) => {
    const message = `Hi, I'm interested in the ${product.name} (${product.category}). Could you provide more information and a quote?`;
    window.open(`https://wa.me/+1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative py-4 bg-gradient-to-b from-gray-50/95 to-white/95 overflow-hidden backdrop-blur-sm">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-100/20 via-gold-200/30 to-gold-100/20"
          animate={{
            x: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] 
          bg-gradient-to-b from-gold-200/30 via-gold-300/20 to-transparent 
          rounded-full blur-[40px] opacity-30" 
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-600">Recently Viewed</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {recentlyViewed.slice(currentIndex, currentIndex + 2).map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="relative group cursor-pointer"
              whileHover={{ y: -3 }}
            >
              <div className="relative h-full rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[90px] overflow-hidden">
                  <ImageWithFallback
                    src={`/images/products/${product.imageUrl}`}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <button
                      onClick={() => handleInquiry(product)}
                      className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-white active:scale-95 transition-transform"
                    >
                      <Phone className="w-4 h-4 text-green-600" />
                    </button>
                  </motion.div>
                </div>
                <div className="p-2">
                  <p className="text-[10px] text-gold-600 mb-0.5 line-clamp-1">
                    {product.category}
                  </p>
                  <h3 className="text-[11px] font-medium text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 