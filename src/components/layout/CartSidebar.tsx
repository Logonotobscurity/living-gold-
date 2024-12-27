import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {items.map(item => (
          <div
            key={item.id}
            className="flex gap-4 bg-white rounded-lg p-3 shadow-sm border border-gray-100"
          >
            {/* Product Image */}
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-50">
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
                  <h3 className="font-medium text-base mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {/* Quantity Controls */}
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Minus className="w-4 h-4 text-gray-500" />
                  </button>
                  <span className="w-6 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-8">
            <p className="text-base text-gray-500">Your cart is empty</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 p-4 bg-gray-50">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Items</span>
            <span className="font-semibold">{totalItems}</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link
            to="/products"
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg 
              hover:bg-gray-50 transition-colors text-center"
            onClick={onClose}
          >
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className="flex-1 px-6 py-3 bg-gold-600 text-white rounded-lg 
              hover:bg-gold-700 transition-colors text-center"
            onClick={onClose}
          >
            Request Quote
          </Link>
        </div>
      </div>
    </motion.div>
  );
}; 