import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { CartPage } from './pages/CartPage';
import { Checkout } from './pages/Checkout';

interface AppRoutesProps {
  onOpenCallPopup: () => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ onOpenCallPopup }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact onOpenCallPopup={onOpenCallPopup} />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}; 