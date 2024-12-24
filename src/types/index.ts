export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  availability: 'in-stock' | 'pre-order';
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  price?: number;
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