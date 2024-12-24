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
          src={`/images/products/${product.imageUrl}`}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/products/placeholder.webp';
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
            onClick={() => addToCart(product)}
            className="bg-gold-500 text-white p-1.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold-600"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{product.description}</p>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-gold-500">₦{product.price.toLocaleString()}</span>
        </div>
      </div>
      {showDetails && <ProductDetailPopup product={product} onClose={() => setShowDetails(false)} />}
    </motion.div>
  );
}; 