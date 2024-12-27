import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HelpPopupProps {
  scrollThreshold?: number; // percentage of page height
  timeDelay?: number; // milliseconds
}

export const HelpPopup = ({ scrollThreshold = 50, timeDelay = 5000 }: HelpPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasBeenShown) return;

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > scrollThreshold) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    // Show based on time delay if on product page
    if (location.pathname.includes('/products')) {
      const timer = setTimeout(() => {
        if (!hasBeenShown) {
          setIsVisible(true);
          setHasBeenShown(true);
        }
      }, timeDelay);

      return () => clearTimeout(timer);
    }
    
    // Show based on scroll for home page
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollThreshold, timeDelay, hasBeenShown, location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 sm:static sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 
              w-full sm:w-[400px] sm:mx-auto px-4 sm:px-0"
          >
            <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center hover:bg-gray-100 
                  rounded-xl transition-colors touch-manipulation"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Search className="w-7 h-7 sm:w-8 sm:h-8 text-gold-600" />
                  </motion.div>

                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Can't Find What You're Looking For?
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Let us help you find the perfect lighting solution for your space
                  </p>
                </div>

                <div className="space-y-3">
                  <motion.a
                    href="tel:+2347011131333"
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 bg-gold-600 text-white p-4 rounded-xl hover:bg-gold-700 
                      transition-all duration-200 w-full touch-manipulation"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium">Call Us Now</p>
                      <p className="text-sm text-white/80">Get instant assistance</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/contact"
                      onClick={handleClose}
                      className="flex items-center gap-3 bg-gray-900 text-white p-4 rounded-xl hover:bg-gray-800 
                        transition-all duration-200 w-full touch-manipulation"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium">Fill Contact Form</p>
                        <p className="text-sm text-white/80">Share your requirements</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Bottom */}
              <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 