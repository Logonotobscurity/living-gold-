import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, Share2, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailPopupProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailPopup = ({ product, onClose }: ProductDetailPopupProps) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out this ${product.name} - ${product.description}\n\n${product.features?.join('\n')}`,
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
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
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`/images/products/${product.imageUrl.toUpperCase()}`}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/products/placeholder.WEBP';
                }}
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600">{product.description}</p>
                {product.features && (
                  <ul className="mt-4 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Star className="w-4 h-4 text-gold-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                    className="flex items-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                {product.specifications && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Specifications</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-500">{key}</span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}; 