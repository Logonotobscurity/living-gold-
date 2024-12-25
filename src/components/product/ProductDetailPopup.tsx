import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailPopupProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailPopup = ({ product, isOpen, onClose }: ProductDetailPopupProps) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareData = {
      title: product.name,
      text: `Check out this ${product.name} - ${product.description}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-square relative">
                <img
                  src={`/images/products/${product.imageUrl}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors relative"
                  >
                    <Share2 className="w-5 h-5" />
                    <AnimatePresence>
                      {showShareTooltip && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                        >
                          Link copied!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                  <button
                    onClick={toggleWishlist}
                    className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${isWishlisted ? 'fill-gold-500 text-gold-500' : 'text-gray-600'}`}
                    />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                {product.specifications && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between gap-4 py-2 border-b border-gray-100">
                          <span className="text-gray-600">{key}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gold-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 