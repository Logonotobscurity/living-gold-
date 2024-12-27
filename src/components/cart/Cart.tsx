import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </button>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {items.map(item => (
          <div
            key={item.id}
            className="flex gap-3 sm:gap-4 bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100"
          >
            {/* Product Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-50">
              <ImageWithFallback
                src={`/images/products/${item.imageUrl}`}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                <div>
                  <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {/* Quantity Controls */}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  </button>
                  <span className="w-5 sm:w-6 text-center text-xs sm:text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 sm:p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 flex items-center gap-1 text-xs sm:text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-6 sm:py-8">
            <p className="text-sm sm:text-base text-gray-500">Your cart is empty</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 p-3 sm:p-4 bg-gray-50">
        <div className="mb-3 sm:mb-4">
          <span className="text-sm sm:text-base font-medium">Total Items: {totalItems}</span>
        </div>
        <Link
          to="/checkout"
          onClick={onClose}
          className="w-full py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 
            transition-colors font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Request Quote
        </Link>
      </div>
    </motion.div>
  );
}; 