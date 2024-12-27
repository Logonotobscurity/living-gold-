import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  className?: string;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className = '',
  onClick
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement wishlist
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-full rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-full overflow-hidden">
          <ImageWithFallback
            src={`/images/products/${product.imageUrl}`}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                onClick={handleWishlist}
              >
                <Heart className="w-4 h-4 text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 text-gray-700" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-medium text-sm line-clamp-1">{product.name}</h3>
          <p className="text-white/80 text-xs">{product.category}</p>
        </div>
      </div>
    </motion.div>
  );
}; 