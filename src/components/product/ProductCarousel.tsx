import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface ProductCarouselProps {
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [key, setKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to preload images
  const preloadImages = (productsToPreload: Product[]) => {
    productsToPreload.forEach(product => {
      const img = new Image();
      img.src = `/images/products/${product.image}`;
    });
  };

  // Improved shuffle function that ensures no duplicates
  const shuffleProducts = () => {
    if (isTransitioning || products.length < 4) return;
    
    setIsTransitioning(true);
    
    // Get new products that aren't in the current selection
    const availableProducts = products.filter(
      product => !currentProducts.find(p => p.id === product.id)
    );
    
    // If we don't have enough new products, reset the filter
    const shufflePool = availableProducts.length < 4 ? products : availableProducts;
    
    const shuffled = [...shufflePool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    // Preload the next set of images
    preloadImages(shuffled);
    
    setCurrentProducts(shuffled);
    setKey(prev => prev + 1);
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    // Initial selection
    if (products.length > 0 && currentProducts.length === 0) {
      const initial = products.slice(0, 4);
      setCurrentProducts(initial);
      preloadImages(initial);
      
      // Preload the next set
      const nextSet = products.slice(4, 8);
      preloadImages(nextSet);
    }

    // Auto shuffle every 7 seconds
    const interval = setInterval(shuffleProducts, 7000);
    return () => clearInterval(interval);
  }, [products]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Featured Products
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}; 