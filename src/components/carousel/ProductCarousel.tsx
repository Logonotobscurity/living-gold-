import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../product/ProductCard';
import { type Product } from '../../types';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export const ProductCarousel = ({ title, products, viewAllLink }: ProductCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {viewAllLink && (
              <Link
                to={viewAllLink}
                className="text-gold-500 hover:text-gold-600 font-medium transition-colors"
              >
                View All
              </Link>
            )}
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 