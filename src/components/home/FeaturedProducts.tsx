import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../product/ProductCard';
import type { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products,
  onProductClick
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, each chosen for its exceptional quality and design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard
                product={product}
                onClick={() => onProductClick?.(product)}
                className="h-[200px] sm:h-[240px] md:h-[280px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 