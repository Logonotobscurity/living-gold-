import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../components/product/ProductCard';
import { ProductDetailPopup } from '../components/product/ProductDetailPopup';
import { products } from '../data/products';
import type { Product } from '../types';

const categories = ['All', 'Luxury Lighting', 'Modern Collection', 'Smart Lighting'] as const;
type Category = typeof categories[number];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Our Products</h1>
        
        {/* Category Filter */}
        <div className="mb-4 sm:mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 sm:gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-gold-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-sm sm:text-base">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Product Detail Popup */}
        {selectedProduct && (
          <ProductDetailPopup
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};