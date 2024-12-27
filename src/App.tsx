import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AppRoutes } from './routes';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Toaster } from 'react-hot-toast';
import { HelpPopup } from './components/cta/HelpPopup';
import { PhonePopup } from './components/common/PhonePopup';
import { useState } from 'react';

export const App = () => {
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  const handleOpenCallPopup = () => {
    setIsCallPopupOpen(true);
  };

  const handleCloseCallPopup = () => {
    setIsCallPopupOpen(false);
  };

  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col">
            <Header onOpenCallPopup={handleOpenCallPopup} />
            <main className="flex-grow">
              <AppRoutes onOpenCallPopup={handleOpenCallPopup} />
            </main>
            <Footer />
            <Toaster position="bottom-center" />
            <HelpPopup />
            <PhonePopup isOpen={isCallPopupOpen} onClose={handleCloseCallPopup} />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
};