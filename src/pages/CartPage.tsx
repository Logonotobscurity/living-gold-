import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-600 text-white rounded-lg 
                hover:bg-gold-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Cart Items */}
          <div className="space-y-6 mb-8">
            {items.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-6 bg-white rounded-xl p-6 shadow-sm"
              >
                {/* Product Image */}
                <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <ImageWithFallback
                    src={`/images/products/${item.imageUrl}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total Items</span>
              <span className="font-medium">{totalItems}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-900">Contact us for details</span>
            </div>
            <div className="flex gap-4">
              <Link
                to="/products"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg 
                  hover:bg-gray-50 transition-colors text-center"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="flex-1 px-6 py-3 bg-gold-600 text-white rounded-lg 
                  hover:bg-gold-700 transition-colors text-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 