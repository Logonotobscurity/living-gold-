import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, MessageCircle, ShoppingCart, Check } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LoadingState } from '../common/LoadingState';

interface ProductDetailPopupProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailPopup: React.FC<ProductDetailPopupProps> = ({ product, isOpen, onClose }) => {
  const { addToCart, showCartNotification } = useCart();
  const [, setRecentlyViewed] = useLocalStorage<Product[]>('recentlyViewed', []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen && product) {
      setRecentlyViewed(prev => {
        const filtered = prev.filter(p => p.id !== product.id);
        return [product, ...filtered].slice(0, 6);
      });
    }
  }, [isOpen, product, setRecentlyViewed]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  }, [addToCart, product]);

  const handleWhatsAppQuote = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hi, I'm interested in the ${product.name} (${product.category}).\n\nProduct Details:\n${product.description}\n\nSpecifications:\n${product.specifications?.join('\n') || ''}\n\nFeatures:\n${product.features?.join('\n') || ''}\n\nCould you provide a quote?`;
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, [product]);

  const handleAddToWishlist = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement wishlist functionality when available
    console.log('Add to wishlist:', product.id);
  }, [product]);

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[200] overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Popup Container */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center h-[50vh]">
                    <LoadingState size="large" />
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row max-h-[calc(100vh-2rem)]">
                    {/* Image Section */}
                    <div className="md:w-1/2 bg-gray-50 flex-shrink-0">
                      <div className="relative h-[300px] md:h-full md:min-h-[500px] max-h-[600px]">
                        <div className="absolute inset-0 p-4">
                          <div className="relative w-full h-full rounded-lg overflow-hidden bg-white shadow-inner">
                            <ImageWithFallback
                              src={`/images/products/${product.imageUrl}`}
                              alt={product.name}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>
                        </div>
                        {/* Action Buttons Overlay */}
                        <div className="absolute top-6 left-6 flex gap-2 z-10">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            onClick={handleAddToWishlist}
                          >
                            <Heart className="w-5 h-5 text-gray-700" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                            onClick={handleWhatsAppQuote}
                          >
                            <MessageCircle className="w-5 h-5 text-gray-700" />
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={onClose}
                          className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors z-10"
                        >
                          <X className="w-5 h-5 text-gray-700" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 flex flex-col min-h-0">
                      <div className="flex-1 overflow-y-auto p-4 md:p-6">
                        <div className="mb-6">
                          <span className="inline-block bg-gold-50 text-gold-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                            {product.category}
                          </span>
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                          <p className="text-gray-600 text-sm md:text-base">{product.description}</p>
                        </div>

                        {product.specifications && product.specifications.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Specifications</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
                              {product.specifications.map((spec, index) => (
                                <li key={index}>{spec}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.features && product.features.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons - Fixed at bottom */}
                      <div className="border-t border-gray-100 bg-white p-4 md:p-6 space-y-2 flex-shrink-0">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            w-full px-4 py-3 rounded-lg flex items-center justify-center gap-2 
                            text-sm font-medium transition-colors
                            ${showCartNotification 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-gold-600 hover:bg-gold-700'
                            }
                            text-white
                          `}
                          onClick={handleAddToCart}
                          disabled={showCartNotification}
                        >
                          {showCartNotification ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Added to Cart</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 
                          transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                          onClick={handleWhatsAppQuote}
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Request Quote</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}; 