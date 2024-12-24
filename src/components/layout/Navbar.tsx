import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="md:absolute md:left-4 transition-transform hover:scale-105"
          >
            <img 
              src="/logo.WEBP" 
              alt="Living Gold" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-gold-600 hover:bg-gold-50 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-12">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="relative py-2 group"
              >
                <span className={`text-sm font-medium ${
                  location.pathname === path 
                    ? 'text-gold-600' 
                    : 'text-gray-700 hover:text-gold-600'
                } transition-colors`}>
                  {label}
                </span>
                {location.pathname === path ? (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden md:hidden z-50"
          >
            <div className="px-4 py-2">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-medium ${
                    location.pathname === path 
                      ? 'text-gold-600 bg-gold-50/50' 
                      : 'text-gray-700 hover:text-gold-600 hover:bg-gold-50/50'
                  } rounded-lg px-4 transition-colors`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}; 