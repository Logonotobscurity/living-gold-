import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Heart, MessageCircle, ShoppingCart, Check } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  const features = [
    'Premium quality materials',
    'Professional installation available',
    'Energy-efficient design',
    'Modern and elegant style',
    '2-year warranty',
    'After-sales support'
  ];

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

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in the ${product.name}. Could you please provide more information about:\n\n- Price and availability\n- Installation services\n- Delivery options\n\nThank you!`;
    const whatsappNumber = '2348123456789'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
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
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative bg-gray-100 aspect-square md:aspect-auto">
                <img
                  src={`/images/products/${selectedImage}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors relative"
                  >
                    <Share2 className="w-5 h-5 text-gray-900" />
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
                      className={`w-5 h-5 ${isWishlisted ? 'fill-gold-500 text-gold-500' : 'text-gray-900'}`}
                    />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-gold-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">{key}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 