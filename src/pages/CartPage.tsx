import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart as CartIcon, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <CartIcon className="w-8 h-8" />
              Shopping Cart
              <span className="ml-4 px-3 py-1 bg-gray-200 rounded-full text-sm align-middle">
                {total} items
              </span>
            </h1>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 font-medium transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <CartIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
                <Link 
                  to="/products"
                  className="inline-block bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors font-medium"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm p-6 transform-gpu hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-6">
                      <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={`/images/products/${item.product.image}`}
                          alt={item.product.name}
                          className="w-full h-full object-contain bg-black"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-medium mb-1">{item.product.name}</h3>
                            <p className="text-gray-500">
                              {item.product.category}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 w-fit">
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
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-6">Cart Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-semibold text-lg">{total}</span>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      Please note that prices will be provided upon inquiry. Contact us for detailed pricing information.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleRequestQuote}
                    className="w-full bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 transition-colors font-medium text-lg shadow-sm mt-4"
                  >
                    Request Quote
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 