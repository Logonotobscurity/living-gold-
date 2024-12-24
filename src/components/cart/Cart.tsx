import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { CartItem } from '../../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const dropdownVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    x: '100%',
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + (item.quantity), 0);

  const handleRequestQuote = () => {
    const message = items.map(item => 
      `${item.quantity}x ${item.product.name}`
    ).join('\n');

    window.open(
      `https://wa.me/+1234567890?text=${encodeURIComponent(
        `Hello, I would like to request a quote for:\n\n${message}\n\nPlease provide pricing information and availability.`
      )}`,
      '_blank'
    );
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]"
          onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 w-full max-w-[500px] h-full bg-white shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-white">
                <div className="flex items-center gap-3">
                  <CartIcon className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Shopping Cart</h2>
                  <span className="ml-2 px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {total} items
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-6 bg-gray-50">
                <AnimatePresence initial={false}>
                {items.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center h-full text-gray-500"
                    >
                      <CartIcon className="w-16 h-16 mb-4" />
                      <p className="text-lg">Your cart is empty</p>
                    </motion.div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="bg-white rounded-xl shadow-sm p-5 transform-gpu hover:shadow-md transition-shadow"
                        >
                          <div className="flex gap-5">
                            <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                                loading="lazy"
                          />
                        </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                              <div>
                                <h3 className="font-medium text-lg mb-1">{item.product.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">
                            {item.product.category}
                          </p>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                                  <span className="w-8 text-center select-none font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-4"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                              </div>
                            </div>
                          </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t bg-white">
                  <div className="flex justify-between mb-6">
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Clear Cart
                    </button>
                    <div>
                      <span className="text-sm text-gray-500">Total Items:</span>
                      <span className="ml-2 font-semibold text-lg">{total}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleRequestQuote}
                    className="w-full bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 transition-colors font-medium text-lg shadow-sm"
                  >
                    Request Quote
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 