export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  specifications?: {
    [key: string]: string;
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
  showCartNotification: boolean;
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