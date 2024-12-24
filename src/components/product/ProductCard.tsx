import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
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

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder-image.jpg'; // Add a placeholder image
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => setShowDetails(true)}
            className="bg-white text-gray-900 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm sm:text-base font-bold text-gold-500">₦{product.price.toLocaleString()}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-xs sm:text-sm bg-gold-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gold-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
      {showDetails && <ProductDetailPopup product={product} onClose={() => setShowDetails(false)} />}
    </motion.div>
  );
}; 