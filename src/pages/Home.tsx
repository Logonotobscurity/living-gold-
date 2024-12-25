import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LandingPageSections } from '../components/home/LandingPageSections';
import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';

export const Home = () => {
  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen">
      {/* Features Section */}
      <LandingPageSections />

      {/* Product Categories */}
      <div className="space-y-24 py-16">
        {Object.entries(productsByCategory).map(([category, categoryProducts], index) => (
          <section 
            key={category}
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  >
                    {category}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 text-lg"
                  >
                    Discover our exclusive range of {category.toLowerCase()}
                  </motion.p>
                </div>
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="hidden md:flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium"
                >
                  <span>View All</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Desktop Grid View */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categoryProducts.slice(0, 3).map((product, productIndex) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    delay={productIndex * 0.1}
                  />
                ))}
              </div>

              {/* Mobile Scroll View */}
              <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4">
                  {categoryProducts.map((product, productIndex) => (
                    <div key={product.id} className="flex-shrink-0 w-[250px]">
                      <ProductCard
                        product={product}
                        delay={productIndex * 0.1}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View All Link */}
              <div className="mt-8 text-center md:hidden">
                <Link
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium"
                >
                  <span>View All {category}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};