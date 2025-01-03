import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const CartButton: React.FC = () => {
  const { items, showCartNotification } = useCart();
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/cart')}
      className="relative p-2 hover:bg-gray-100/10 rounded-full transition-colors group"
    >
      <ShoppingCart className="w-6 h-6 text-white group-hover:text-gold-400 transition-colors relative z-10" />
      <motion.div
        className="absolute inset-0 bg-gold-500/20 rounded-lg opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
          >
            {totalItems}
          </motion.span>
        )}
        {showCartNotification && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
          >
            Added to cart!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}; 