import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { ProductDetailPopup } from '../components/product/ProductDetailPopup';
import { Product } from '../types';
import { products } from '../data/products';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const category = searchParams.get('category');

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return Array.from(uniqueCategories).sort();
  }, []);

  // Filter and deduplicate products
  const filteredProducts = useMemo(() => {
    let filtered = category ? products.filter(product => product.category === category) : products;
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
    setSelectedProduct(null);
    setShowFilters(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Categories Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg z-20 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Filter Button */}
          <div className="flex md:hidden justify-between items-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
            <span className="text-sm text-gray-500">
              {filteredProducts.length} products
            </span>
          </div>

          {/* Categories List */}
          <div className={`
            md:flex items-center gap-4 overflow-x-auto no-scrollbar
            ${showFilters ? 'flex flex-col items-start gap-2' : 'hidden'}
          `}>
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

      {/* Main Content */}
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
            Discover our exclusive range of premium lighting solutions
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="block md:hidden">
          <div className="flex items-center justify-end mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4">
              {filteredProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[250px]">
                  <ProductCard
                    product={product}
                    onClick={() => handleProductClick(product)}
                    delay={index * 0.1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onClick={() => handleProductClick(product)}
                  delay={0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or browse all products</p>
            <button
              onClick={() => handleCategoryClick(null)}
              className="mt-4 px-6 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
            >
              View All Products
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailPopup
            product={selectedProduct}
            isOpen={true}
            onClose={handleClosePopup}
          />
        )}
      </AnimatePresence>
    </div>
  );
};