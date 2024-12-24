import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Share2, ImageOff, Tag, Box, CheckCircle, Loader } from 'lucide-react';
import { Product } from '../../types';

interface ProductDetailPopupProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailPopup: React.FC<ProductDetailPopupProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const images = product.gallery ? [product.image, ...product.gallery] : [product.image];

  // Reset states when product changes
  useEffect(() => {
    setIsLoading(true);
    setImageLoaded(false);
    setImageError(false);
    setCurrentImageIndex(0);
    
    // Simulate loading time for smooth transition
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimeout);
  }, [product]);

  // Handle image loading
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    
    const img = new Image();
    img.src = `/images/products/${images[currentImageIndex]}`;
    
    const handleLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    
    const handleError = () => {
      console.error(`Failed to load image: ${images[currentImageIndex]}`);
      setImageError(true);
      setImageLoaded(false);
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentImageIndex, images]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const shareData = {
      title: product.name,
      text: `Check out this ${product.name} - ${product.description}\n\nUnique Features:\n${product.features.map(f => `• ${f}`).join('\n')}`,
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

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello, I'm interested in the ${product.name} from your collection.\n\n` +
      `Product Details:\n` +
      `Name: ${product.name}\n` +
      `Category: ${product.category}\n\n` +
      `Unique Features:\n${product.features.map(f => `• ${f}`).join('\n')}\n\n` +
      `Description:\n${product.description}\n\n` +
      `Product Link: ${window.location.href}`
    );
    window.open(`https://wa.me/+2348033129388?text=${text}`, '_blank');
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-10 h-10 text-gold-500 animate-spin" />
          <p className="text-gold-400 font-medium">Loading product details...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 z-50 p-4 md:p-6 lg:p-8 overflow-y-auto"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="absolute top-4 right-16 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <Share2 className="w-6 h-6" />
              <AnimatePresence>
                {showShareTooltip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute right-0 top-full mt-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-auto md:h-[600px]">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {imageError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-gray-400">
                    <ImageOff className="w-16 h-16 mb-4" />
                    <span className="text-lg font-medium">Image not available</span>
                  </div>
                ) : (
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(/images/products/${images[currentImageIndex]})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                )}

                {/* Navigation Arrows */}
                {images.length > 1 && imageLoaded && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {images.length > 1 && imageLoaded && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-black via-black to-gray-900">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Product Name and Category */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Tag className="w-5 h-5 text-gold-500" />
                      <span className="text-gold-400 font-medium">{product.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Box className="w-5 h-5 text-gold-500" />
                      Product Description
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{product.description}</p>
                  </div>

                  {/* Unique Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-500" />
                      Unique Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start text-gray-400 group"
                        >
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:bg-gold-400 transition-colors" />
                          <span className="flex-1 group-hover:text-gray-300 transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppClick}
                      className="w-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                    >
                      Request Quote on WhatsApp
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 