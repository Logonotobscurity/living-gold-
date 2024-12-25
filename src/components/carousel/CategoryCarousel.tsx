import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Chandeliers',
    image: '/images/products/IMG_2106.WEBP',
    link: '/products?category=chandeliers',
  },
  {
    id: 2,
    name: 'Wall Lights',
    image: '/images/products/IMG_2107.WEBP',
    link: '/products?category=wall-lights',
  },
  {
    id: 3,
    name: 'Pendant Lights',
    image: '/images/products/IMG_2094.WEBP',
    link: '/products?category=pendant-lights',
  },
  {
    id: 4,
    name: 'Table Lamps',
    image: '/images/products/IMG_2089.WEBP',
    link: '/products?category=table-lamps',
  },
  {
    id: 5,
    name: 'Floor Lamps',
    image: '/images/products/IMG_2090.WEBP',
    link: '/products?category=floor-lamps',
  },
  {
    id: 6,
    name: 'Outdoor Lights',
    image: '/images/products/IMG_2091.WEBP',
    link: '/products?category=outdoor-lights',
  },
];

export const CategoryCarousel = () => {
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by Category</h2>
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
        </div>

        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="flex-shrink-0 group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="w-[200px] relative"
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-gold-500 transition-colors">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center text-gray-900 font-medium group-hover:text-gold-500 transition-colors">
                    {category.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 