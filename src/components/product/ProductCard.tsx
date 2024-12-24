import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Share2, Check, ImageOff, Heart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  delay?: number;
}

export const ProductCard = memo(({ product, onClick, delay = 0 }: ProductCardProps) => {
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isWishListed, setIsWishListed] = useState(false);
  const { addToCart } = useCart();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Reset image states when product changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    
    const img = new Image();
    img.src = `/images/products/${product.image}`;
    
    const handleLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    
    const handleError = () => {
      console.error(`Failed to load image: ${product.image}`);
      setImageError(true);
      setImageLoaded(false);
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
    
    // Preload gallery images if they exist
    if (product.gallery) {
      product.gallery.forEach(galleryImage => {
        const preloadImg = new Image();
        preloadImg.src = `/images/products/${galleryImage}`;
      });
    }
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [product]);

  const handleShare = useCallback(async (e: React.MouseEvent) => {
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
  }, [product]);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 2000);
  }, [product, addToCart]);

  const handleWishlist = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishListed(!isWishListed);
  }, [isWishListed]);

  const getImageUrl = useCallback((imagePath: string) => {
    const cleanPath = imagePath.replace(/^\/+/, '');
    return `/images/products/${cleanPath}`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={isMobile ? undefined : { y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group cursor-pointer bg-black rounded-xl overflow-hidden border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 shadow-lg hover:shadow-xl relative"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-black">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
            <ImageOff className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Image not available</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: imageLoaded ? 1 : 0,
              scale: imageLoaded ? 1 : 1.1
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
            style={{ 
              backgroundImage: `url(${getImageUrl(product.image)})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
              willChange: 'transform'
            }}
          />
        )}
        
        {/* View Details Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className={`absolute inset-0 bg-black/60 flex items-center justify-center ${
            isMobile ? 'opacity-100' : ''
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            animate={isMobile ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2 text-white"
          >
            <Eye className="w-6 h-6" />
            <span className="font-medium">View Details</span>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <div className={`absolute top-4 right-4 flex ${isMobile ? 'flex-row gap-4' : 'flex-col gap-2'}`}>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={isMobile ? undefined : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isWishListed ? 'text-red-500 fill-red-500' : 'text-gray-700'
              }`} 
            />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={isMobile ? undefined : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 relative transition-all"
          >
            <Share2 className="w-5 h-5 text-gray-700" />
            <AnimatePresence>
              {showShareTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -left-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="absolute bottom-4 left-4"
        >
          <span className="inline-block bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-700 px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative space-y-4"
        >
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-gray-400 line-clamp-2 text-sm">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            whileHover={isMobile ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {showAddedToCart ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center bg-green-500"
                >
                  <Check className="w-5 h-5" />
                  <span className="ml-2">Added to Cart</span>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Add to Cart</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}); 