import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PhonePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const phoneNumbers = [
  { number: '+234 701 113 1333', label: 'Main Line' },
  { number: '+234 806 444 1141', label: 'Sales' },
  { number: '+234 803 429 1995', label: 'Store' },
];

export const PhonePopup: React.FC<PhonePopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 pointer-events-none">
            <div className="container mx-auto h-full flex items-end sm:items-start sm:pt-20">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full sm:w-[400px] sm:ml-auto pointer-events-auto"
              >
                <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-gold-600 to-gold-700 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">Contact Us</h3>
                          <p className="text-sm text-white/80">Choose a number to call</p>
                        </div>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 
                          hover:bg-white/20 transition-colors touch-manipulation"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="p-4 space-y-2.5">
                    {phoneNumbers.map((item, index) => (
                      <motion.a
                        key={item.number}
                        href={`tel:${item.number.replace(/\s+/g, '')}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.1 } 
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-gold-50/80
                          transition-colors duration-200 group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center
                          text-gold-600 group-hover:bg-gold-200 transition-colors">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-gold-600 transition-colors">
                            {item.number}
                          </p>
                          <p className="text-sm text-gray-500">{item.label}</p>
                        </div>
                      </motion.a>
                    ))}

                    {/* Contact Form Link */}
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="flex items-center justify-between p-3.5 mt-2 rounded-xl bg-gray-900 text-white 
                        hover:bg-gray-800 transition-colors duration-200 group touch-manipulation"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium">Contact Form</p>
                          <p className="text-sm text-white/80">Get detailed assistance</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}; 