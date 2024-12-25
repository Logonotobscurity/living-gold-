import React from 'react';
import { LandingPageSections } from '../components/home/LandingPageSections';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { products } from '../data/products';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <LandingPageSections />
      <FeaturedProducts products={products} />
    </div>
  );
};