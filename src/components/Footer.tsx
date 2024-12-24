import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Radiant Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/10 via-black to-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 md:space-y-6">
            <Link to="/" className="block">
              <img
                src="/logo.WEBP"
                alt="Living Gold Logo" 
                className="h-28 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm md:text-base">
              Your premier destination for exquisite lighting solutions. Transform your space with our curated collection of elegant fixtures.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-gold-400" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=new" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=deals" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Categories</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to="/products?category=Crystal" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Crystal Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=Modern" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Modern Lighting
                </Link>
              </li>
              <li>
                <Link to="/products?category=Pendant" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Pendant Lights
                </Link>
              </li>
              <li>
                <Link to="/products?category=LED" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  LED Solutions
                </Link>
              </li>
              <li>
                <Link to="/products?category=Wall%20Mounted" className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base">
                  Wall Mounted
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm md:text-base">
                  Building materials, Okpanam, Asaba, Nigeria 320107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a 
                  href="tel:+2348012345678" 
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base"
                >
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a 
                  href="mailto:info@livinggold.com" 
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm md:text-base"
                >
                  info@livinggold.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
              © {currentYear} Living Gold. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/terms" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};