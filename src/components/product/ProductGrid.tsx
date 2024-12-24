import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      {products.map((product) => (
        <div key={product.id} className="w-full">
          <ProductCard
            product={product}
            className="h-[280px] sm:h-[320px] md:h-[360px]"
          />
        </div>
      ))}
    </div>
  );
};