import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Services } from '../pages/Services';

interface AppRoutesProps {
  onOpenCallPopup: () => void;
}

export const AppRoutes = ({ onOpenCallPopup }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact onOpenCallPopup={onOpenCallPopup} />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}; 