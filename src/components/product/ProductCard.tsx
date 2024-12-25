import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Share2, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

export interface ProductCardProps {
  product: Product;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const ProductCard = ({ product, className = '', onClick, delay = 0 }: ProductCardProps) => {
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all ${className}`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={`/images/products/${product.imageUrl}`}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="bg-white text-gray-900 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={handleShare}
            className="bg-white text-gray-900 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 relative"
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
        </div>
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted ? 'fill-gold-500 text-gold-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}; 