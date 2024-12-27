import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, HelpCircle, Search } from 'lucide-react';

export const HelpCTA = () => {
  return (
    <section className="py-8 sm:py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-200/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto"
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
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gold-600" />
            </motion.div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Our team is here to help you find the perfect lighting solution for your space.
            Reach out to us directly or fill out our contact form.
          </p>

          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="tel:+2347011131333"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-[140px] sm:w-[180px] aspect-square bg-gold-600 text-white rounded-2xl sm:rounded-3xl 
                hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden
                flex flex-col items-center justify-center"
            >
              {/* Ring Animation */}
              <motion.div
                className="absolute w-24 sm:w-32 h-24 sm:h-32 border-4 border-white/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Icon */}
              <div className="relative mb-2 sm:mb-3">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                <motion.div
                  className="absolute -right-1 -top-1 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </div>
              <p className="font-medium text-xs sm:text-sm">Call Us</p>
              <p className="text-[10px] sm:text-xs text-white/80">Get Instant Help</p>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group relative w-[140px] sm:w-[180px] aspect-square bg-gray-900 text-white rounded-2xl sm:rounded-3xl 
                  hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden
                  flex flex-col items-center justify-center"
              >
                {/* Writing Line Animation */}
                <motion.div
                  className="absolute top-1/2 w-12 sm:w-16 h-0.5 bg-white/20"
                  animate={{
                    scaleX: [0, 1, 0],
                    x: ["-50%", "0%", "50%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon */}
                <div className="relative mb-2 sm:mb-3">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
                  <motion.div
                    className="absolute -right-1 -top-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gold-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </div>
                <p className="font-medium text-xs sm:text-sm">Contact Form</p>
                <p className="text-[10px] sm:text-xs text-white/80">Detailed Inquiry</p>
              </Link>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
                style={{
                  left: `${20 + (i * 30)}%`,
                  top: `${30 + (i * 20)}%`,
                }}
              >
                <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gold-400/30" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 