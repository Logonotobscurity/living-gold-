import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../types';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { type: "spring", stiffness: 300 }
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.WEBP" alt="Living Gold" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 mb-6">
              Elevate your space with our exquisite collection of luxury lighting solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${socialLinks.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={iconHover}
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              {[
                { to: '/products', label: 'Products' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' }
              ].map(({ to, label }) => (
                <motion.li key={to} variants={fadeInUp}>
                  <Link
                    to={to}
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <motion.ul variants={staggerContainer} className="space-y-4">
              <motion.li variants={fadeInUp} className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  {socialLinks.phone}
                </a>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-gray-400 hover:text-gold-500 transition-colors"
                >
                  {socialLinks.email}
                </a>
              </motion.li>
              <motion.li variants={fadeInUp} className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-400">
                  {socialLinks.address}
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter subscription
                console.log('Newsletter subscription...');
              }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
              />
              <button
                type="submit"
                className="w-full bg-gold-500 text-white py-2 rounded-lg hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Living Gold. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}; 