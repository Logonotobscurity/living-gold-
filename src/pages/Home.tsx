import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, ChevronRight, ChevronLeft, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductDetailPopup } from '../components/product/ProductDetailPopup';
import { Product } from '../types';

export const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Featured categories to highlight
  const featuredCategories = ['Luxury Lighting', 'Modern Collection', 'Smart Lighting'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-gradient-to-br from-gold-50 to-gold-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-20"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            {/* Subtitle */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <span className="text-gray-600">Premium Quality Lighting Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Illuminate Your Space with{' '}
              <span className="text-gold-600">Elegance</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Transform your home with our exquisite collection of modern and classic lighting fixtures. 
              From crystal chandeliers to smart LED solutions, discover lighting that perfectly 
              balances form and function.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white rounded-lg font-semibold shadow-lg hover:bg-gold-600 transition-colors group"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Featured
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="absolute inset-0 bg-gold-200 rounded-l-full opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gold-300 rounded-l-full opacity-20 transform -translate-x-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-white" id="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of premium lighting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer"
                onClick={() => setActiveCategory(category)}
              >
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <img
                    src={`/images/products/${productsByCategory[category]?.[0]?.imageUrl}`}
                    alt={category}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    <p className="text-sm text-gray-200 mb-4">
                      {productsByCategory[category]?.length} Products
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-white hover:text-gold-200">
                      Explore Collection <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <Link
                  to={`/products?category=${category}`}
                  className="text-gold-600 hover:text-gold-700 font-medium flex items-center"
                >
                  View All <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.slice(0, 4).map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={`/images/products/${product.imageUrl}`}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-4 h-4" />
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-gold-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="md:hidden relative">
                <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 flex gap-4 snap-x snap-mandatory">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-64 snap-start"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={`/images/products/${product.imageUrl}`}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Detail Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailPopup
            product={selectedProduct}
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};