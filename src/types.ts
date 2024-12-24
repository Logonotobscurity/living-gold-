// Update the existing types.ts file by adding these interfaces
export interface Milestone {
  year: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp: string;
  email: string;
}

export const socialLinks: SocialLinks = {
  instagram: 'https://www.instagram.com/living.gold.global?igsh=aWF2ZHNoZjdtNXFz',
  facebook: 'https://facebook.com/livinggold',
  whatsapp: 'https://wa.me/1234567890',
  email: 'mailto:contact@livinggold.com'
};

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  gallery?: string[];
  features: string[];
  availability: 'in-stock' | 'pre-order' | 'out-of-stock';
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}