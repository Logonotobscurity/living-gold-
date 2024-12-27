import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../product/ProductCard';
import { ProductDetailPopup } from '../product/ProductDetailPopup';
import { ProductCarousel } from '../product/ProductCarousel';
import { LandingPageSections } from './LandingPageSections';
import { Product } from '../../types';
import { products } from '../../data/products';

type CategoryType = 'Crystal' | 'Modern' | 'Pendant' | 'LED' | 'Wall Mounted';
type CategoriesType = Record<CategoryType, Product[]>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Memoized callback for filtering products by category
  const getCategoryProducts = useCallback((categoryName: CategoryType): Product[] => {
    return products.filter(p => p.category === categoryName)
      .sort((a, b) => a.id.localeCompare(b.id));
  }, []);

  // Memoized categories object
  const categories = useMemo<CategoriesType>(() => ({
    Crystal: getCategoryProducts('Crystal'),
    Modern: getCategoryProducts('Modern'),
    Pendant: getCategoryProducts('Pendant'),
    LED: getCategoryProducts('LED'),
    'Wall Mounted': getCategoryProducts('Wall Mounted')
  }), [getCategoryProducts]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-16 space-y-24">
      {/* Featured Products Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ProductCarousel products={products} />
      </motion.div>

      {/* Interactive Landing Page Sections */}
      <LandingPageSections />

      {/* Category Previews */}
      <motion.div 
        className="space-y-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.entries(categories).map(([category, categoryProducts], index) => (
          <motion.section 
            key={category} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            variants={itemVariants}
          >
            <div className="container mx-auto px-4">
              <motion.div 
                className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {category} Collection
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Discover our exclusive range of {category.toLowerCase()} lighting solutions
                  </p>
                </div>
                <Link 
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className="group flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium bg-white hover:bg-gray-50 px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gold-200"
                >
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {categoryProducts.slice(0, 2).map((product, productIndex) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: productIndex * 0.1 }}
                    className="aspect-square"
                  >
                    <ProductCard
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {categoryProducts.slice(2, 6).map((product, productIndex) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (productIndex + 2) * 0.1 }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>

      {/* Product Detail Popup */}
      {selectedProduct && (
        <ProductDetailPopup
          product={selectedProduct}
          isOpen={true}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};
