export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
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
  whatsapp: 'https://wa.me/+2348033129388',
  email: 'mailto:logooluwamayowa@protonmail.com'
} as const; 