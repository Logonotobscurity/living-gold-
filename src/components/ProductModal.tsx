import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <Dialog.Title className="text-2xl font-bold text-luxury-black mb-2">
                    {product.name}
                  </Dialog.Title>
                  <p className="text-gold-600 font-medium mb-4">{product.category}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-luxury-black mb-2">Description</h4>
                      <p className="text-luxury-muted">{product.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-luxury-black mb-2">Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(product.features as string[]).map((feature, index) => (
                          <li key={index} className="flex items-center text-luxury-muted">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <button
                        onClick={onClose}
                        className="w-full bg-gold-500 text-black px-6 py-3 rounded-lg hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};