import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === products.length - productsPerView.desktop ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [products.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === products.length - productsPerView.desktop ? prev : prev + 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={currentIndex === products.length - productsPerView.desktop}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: `-${currentIndex * (100 / productsPerView.desktop)}%`,
            }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            className="flex gap-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0"
              >
                <ProductCard
                  product={product}
                  className="h-[200px] sm:h-[240px] md:h-[280px]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 