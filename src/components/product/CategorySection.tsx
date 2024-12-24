import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ title, products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-gold-500 hover:text-gold-600 font-medium"
          >
            View All
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}; 