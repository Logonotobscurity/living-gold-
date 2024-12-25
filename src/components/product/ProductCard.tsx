import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Share2, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

export interface ProductCardProps {
  product: Product;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const ProductCard = ({ product, className = '', onClick, delay = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all ${className}`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={`/images/products/${product.imageUrl}`}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            <button
              onClick={handleAddToCart}
              className="bg-gold-500 text-white p-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-gold-600 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
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