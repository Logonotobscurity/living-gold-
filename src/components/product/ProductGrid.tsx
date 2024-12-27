import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {products.map((product) => (
        <div key={product.id} className="w-full">
          <ProductCard
            product={product}
            className="h-[200px] sm:h-[240px] md:h-[280px]"
          />
        </div>
      ))}
    </div>
  );
};