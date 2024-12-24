import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Share2, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { ProductDetailPopup } from './ProductDetailPopup';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [showDetails, setShowDetails] = useState(false);
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

  const imagePath = product.imageUrl.startsWith('IMG_') 
    ? `/images/products/${product.imageUrl}`
    : product.imageUrl;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={imagePath}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/products/IMG_1937.WEBP';
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={() => setShowDetails(true)}
            className="bg-white text-gray-900 p-1.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={handleShare}
            className="bg-white text-gray-900 p-1.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Share2 className="w-4 h-4" />
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
            onClick={() => addToCart(product)}
            className="bg-gold-500 text-white p-1.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold-600"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{product.description}</p>
      </div>
      {showDetails && <ProductDetailPopup product={product} onClose={() => setShowDetails(false)} />}
    </motion.div>
  );
}; 