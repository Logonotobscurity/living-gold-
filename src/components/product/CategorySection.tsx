import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export const CategorySection = ({ title, products }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
              {products.map((product) => (
                <div key={product.id} className="w-full">
                  <ProductCard
                    product={product}
                    className="h-[200px] sm:h-[240px] md:h-[280px]"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 