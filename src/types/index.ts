export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating?: number;
  stock?: number;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  whatsapp: string;
  email: string;
  phone: string;
  address: string;
}

export const socialLinks = {
  instagram: 'https://www.instagram.com/living.gold.global?igsh=aWF2ZHNoZjdtNXFz',
  facebook: '#',
  whatsapp: 'https://wa.me/+1234567890',
  email: 'mailto:info@livinggold.com'
} as const; 