import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ProductDetailPopup } from '../components/product/ProductDetailPopup';
import { Product } from '../types';
import { products } from '../data/products';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const category = searchParams.get('category');

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return Array.from(uniqueCategories);
  }, []);

  // Filter and deduplicate products
  const filteredProducts = useMemo(() => {
    // First, filter by category if selected
    let filtered = category ? products.filter(product => product.category === category) : products;
    
    // Then deduplicate based on product ID
    const uniqueProducts = new Map();
    filtered.forEach(product => {
      if (!uniqueProducts.has(product.id)) {
        uniqueProducts.set(product.id, product);
      }
    });
    
    return Array.from(uniqueProducts.values());
  }, [category]);

  const handleCategoryClick = (selectedCategory: string | null) => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
    // Close any open product popup when changing categories
    setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    // Ensure we're not selecting the same product multiple times
    if (selectedProduct?.id !== product.id) {
      setSelectedProduct(product);
    }
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Categories Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg z-20 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleCategoryClick(null)}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-all ${
                !category 
                  ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-all ${
                  category === cat
                    ? 'bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category ? `${category} Collection` : 'All Products'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive range of premium building materials and accessories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
              onClick={() => handleProductClick(product)}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Show no products message if filtered list is empty */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Product Detail Popup */}
      {selectedProduct && (
        <ProductDetailPopup
          key={selectedProduct.id} // Force remount on product change
          product={selectedProduct}
          isOpen={true}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};