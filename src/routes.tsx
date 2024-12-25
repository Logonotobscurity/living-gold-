import { Routes, Route } from 'react-router-dom';
import { Home, Products, About, Contact, Services, Checkout } from './pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/privacy" element={<div>Privacy Policy</div>} />
      <Route path="/terms" element={<div>Terms of Service</div>} />
      <Route path="/sitemap" element={<div>Sitemap</div>} />
    </Routes>
  );
}; 