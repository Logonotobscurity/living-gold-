import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, AlertTriangle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const Checkout: React.FC = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some beautiful chandeliers to your cart!</p>
        <Link to="/products">
          <motion.button 
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Products
          </motion.button>
        </Link>
      </motion.div>
    );
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleRequestQuote = () => {
    const message = items.map(item => 
      `${item.quantity}x ${item.product.name}`
    ).join('\n');

    window.open(
      `https://wa.me/+1234567890?text=${encodeURIComponent(
        `Hello, I would like to purchase:\n\n${message}\n\nPlease provide payment details and shipping information.`
      )}`,
      '_blank'
    );
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container mx-auto px-4 py-8 min-h-screen"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div 
              key={item.product.id} 
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full sm:w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.product.category}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <motion.button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <motion.button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-600 transition-colors p-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.product.availability === 'in-stock'
                      ? 'bg-green-100 text-green-800'
                      : item.product.availability === 'pre-order'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.product.availability === 'in-stock'
                      ? 'In Stock'
                      : item.product.availability === 'pre-order'
                      ? 'Pre-order'
                      : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 sticky top-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-start gap-2 mb-4 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    Please note that prices will be provided upon inquiry. Contact us for detailed pricing information.
                  </p>
                </div>
                <motion.button
                  onClick={handleRequestQuote}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Quote on WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};