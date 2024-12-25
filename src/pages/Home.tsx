import React from 'react';
import { HeroBanner } from '../components/carousel/HeroBanner';
import { CategoryCarousel } from '../components/carousel/CategoryCarousel';
import { ProductCarousel } from '../components/carousel/ProductCarousel';
import { LandingPageSections } from '../components/home/LandingPageSections';

const featuredProducts = [
  {
    id: '1',
    name: 'Crystal Chandelier',
    description: 'Elegant crystal chandelier with modern design',
    imageUrl: 'IMG_2106.WEBP',
    category: 'chandeliers',
  },
  {
    id: '2',
    name: 'Wall Sconce',
    description: 'Contemporary wall sconce with gold finish',
    imageUrl: 'IMG_2107.WEBP',
    category: 'wall-lights',
  },
  {
    id: '3',
    name: 'Pendant Light',
    description: 'Modern pendant light with adjustable height',
    imageUrl: 'IMG_2094.WEBP',
    category: 'pendant-lights',
  },
  {
    id: '4',
    name: 'Table Lamp',
    description: 'Decorative table lamp with fabric shade',
    imageUrl: 'IMG_2089.WEBP',
    category: 'table-lamps',
  },
  {
    id: '5',
    name: 'Floor Lamp',
    description: 'Contemporary floor lamp with reading light',
    imageUrl: 'IMG_2090.WEBP',
    category: 'floor-lamps',
  },
];

const newArrivals = [
  {
    id: '6',
    name: 'LED Chandelier',
    description: 'Modern LED chandelier with remote control',
    imageUrl: 'IMG_2091.WEBP',
    category: 'chandeliers',
  },
  {
    id: '7',
    name: 'Bathroom Light',
    description: 'Waterproof bathroom light fixture',
    imageUrl: 'IMG_2092.WEBP',
    category: 'wall-lights',
  },
  {
    id: '8',
    name: 'Kitchen Light',
    description: 'Under cabinet LED lighting system',
    imageUrl: 'IMG_2093.WEBP',
    category: 'pendant-lights',
  },
  {
    id: '9',
    name: 'Desk Lamp',
    description: 'Adjustable desk lamp with USB port',
    imageUrl: 'IMG_2095.WEBP',
    category: 'table-lamps',
  },
  {
    id: '10',
    name: 'Garden Light',
    description: 'Solar-powered garden light set',
    imageUrl: 'IMG_2096.WEBP',
    category: 'outdoor-lights',
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <CategoryCarousel />
      <ProductCarousel
        title="Featured Products"
        products={featuredProducts}
        viewAllLink="/products?filter=featured"
      />
      <LandingPageSections />
      <ProductCarousel
        title="New Arrivals"
        products={newArrivals}
        viewAllLink="/products?sort=newest"
      />
    </div>
  );
};