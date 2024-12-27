import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactInfo = {
  address: 'Living Gold Lighting, Okpanam Road, Asaba, Delta State, Nigeria',
  phones: [
    '+234 701 113 1333',
    '+234 806 444 1141',
    '+234 803 429 1995 (Store)',
  ],
  email: 'info@livinggold.com',
  hours: 'Mon-Fri: 9AM-6PM'
};

const quickLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="border-b border-white/10">
      <button
        onClick={() => toggleSection(title)}
        className="w-full py-3 flex items-center justify-between text-gold-400"
      >
        <span className="text-sm font-medium">{title}</span>
        <motion.div
          animate={{ rotate: expandedSection === title ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expandedSection === title && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <footer className="relative bg-black/90 text-white overflow-hidden">
      {/* Glowing Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
          bg-gradient-to-b from-gold-400/30 via-gold-500/20 to-transparent 
          rounded-full blur-[100px] opacity-80" 
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-8 md:py-12">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="/logo.WEBP" 
                alt="Living Gold" 
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Premium lighting solutions for every space. Transform your environment with our expert designs and quality products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-gold-400 transition-all flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2 group">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <span className="group-hover:text-gold-400 transition-colors">{contactInfo.address}</span>
              </div>
              <div className="flex items-start gap-2 group">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  {contactInfo.phones.map(phone => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="block hover:text-gold-400 transition-all"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 group">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-gold-400 transition-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2 group">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <span className="group-hover:text-gold-400 transition-colors">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Follow Us</h3>
            {/* Social links content */}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Mobile Company Info */}
          <div className="text-center">
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="/logo.WEBP" 
                alt="Living Gold" 
                className="h-14 w-auto object-contain mx-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Premium lighting solutions for every space
            </p>
          </div>

          {/* Mobile Accordions */}
          <div className="space-y-1">
            <MobileAccordion title="Quick Links">
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-gold-400 transition-all block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Contact Us">
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    {contactInfo.phones.map(phone => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="block hover:text-gold-400 transition-all"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-gold-400 transition-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
            </MobileAccordion>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Living Gold. All rights reserved.
          </p>
        </div>
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 
          bg-gradient-to-t from-gold-500/20 to-transparent rounded-full blur-[60px]" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 
          bg-gradient-to-b from-gold-400/30 to-transparent rounded-full blur-[40px]" />
      </div>
    </footer>
  );
}; 