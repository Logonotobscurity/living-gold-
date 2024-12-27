export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  features: string[];
  specifications: string[];
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  totalItems: number;
}

export interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export interface ProductCardProps {
  product: Product;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export interface ProductDetailPopupProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
} 