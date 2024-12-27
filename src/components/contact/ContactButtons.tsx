import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

interface ContactButtonsProps {
  onCallClick: () => void;
}

export const ContactButtons = ({ onCallClick }: ContactButtonsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto">
      {/* Call Now Button */}
      <motion.button
        onClick={onCallClick}
        whileTap={{ scale: 0.98 }}
        className="relative group overflow-hidden"
      >
        <div className="relative bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-4 sm:p-5
          hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-gold-300/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                {/* Ring Animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
              {/* Sparkle Effect */}
              <motion.div
                className="absolute -right-1 -top-1"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Call Now</h3>
              <p className="text-sm text-white/80">Get instant assistance</p>
            </div>
          </div>
        </div>
      </motion.button>

      {/* Live Chat Button */}
      <motion.a
        href="https://wa.me/+2347011131333"
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.98 }}
        className="relative group overflow-hidden"
      >
        <div className="relative bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-4 sm:p-5
          hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-300/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                {/* Pulse Animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/30 rounded-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              {/* Dot Indicator */}
              <motion.div
                className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 0.4, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Live Chat</h3>
              <p className="text-sm text-white/80">Chat with us on WhatsApp</p>
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
}; 