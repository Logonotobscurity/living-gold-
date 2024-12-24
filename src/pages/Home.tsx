import React from 'react';
import { Hero } from '../components/home/Hero';
import { ProductShowcase } from '../components/home/ProductShowcase';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
    </div>
  );
};