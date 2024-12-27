import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartButton } from '../cart/CartButton';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

interface HeaderProps {
  onOpenCallPopup: () => void;
}

export const Header = ({ onOpenCallPopup }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 shadow-lg overflow-hidden">
      {/* Glowing Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
          bg-gradient-to-b from-gold-400/30 via-gold-500/20 to-transparent 
          rounded-full blur-[100px] opacity-80" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center">
            <div className="relative flex-shrink-0">
              <img 
                src="/logo.WEBP" 
                alt="Living Gold" 
                className="h-16 sm:h-18 md:h-20 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            {/* Logo Glow Effect */}
            <motion.div
                className="absolute -inset-2 bg-gold-500/20 rounded-lg blur-sm"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {link.name}
                {/* Active Link Indicator */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenCallPopup()}
              className="relative p-2 rounded-lg text-gray-300 hover:text-gold-400 
                transition-colors group overflow-hidden"
            >
              <Phone className="w-6 h-6 relative z-10" />
              {/* Button Glow Effect */}
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
            </button>
            <CartButton />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-gray-300 hover:text-gold-400 
                transition-colors relative group"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
              {/* Button Glow Effect */}
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-gold-400'
                        : 'text-gray-300 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 
          bg-gradient-to-t from-gold-500/20 to-transparent rounded-full blur-[30px]" />
        <div className="absolute top-1/4 right-1/4 w-24 h-24 
          bg-gradient-to-b from-gold-400/30 to-transparent rounded-full blur-[20px]" />
      </div>
    </header>
  );
}; 