import type { Product } from '../types';

// Helper function to ensure consistent image paths
const getImagePath = (filename: string) => `${filename}`;

export const products: Product[] = [
  {
    id: '1',
    name: 'Crystal Crown Chandelier',
    description: 'Elegant crystal chandelier with crown-like design, perfect for grand entrances.',
    category: 'Crystal',
    image: getImagePath('IMG_2107.WEBP'),
    gallery: [
      getImagePath('IMG_2107.WEBP'),
      getImagePath('IMG_2095.WEBP'),
      getImagePath('IMG_2096.WEBP')
    ],
    features: [
      'Premium K9 crystal elements',
      'Adjustable height',
      'Dimmable LED compatible',
      'Gold-plated finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 80,
      height: 100,
      depth: 80
    },
    price: 0
  },
  {
    id: '2',
    name: 'Crystal Cascade Chandelier',
    description: 'Multi-tiered crystal chandelier with cascading design elements.',
    category: 'Crystal',
    image: getImagePath('IMG_2095.WEBP'),
    gallery: [
      getImagePath('IMG_2095.WEBP'),
      getImagePath('IMG_2096.WEBP'),
      getImagePath('IMG_2097.WEBP')
    ],
    features: [
      'Cascading crystal tiers',
      'Modern interpretation',
      'LED lighting system',
      'Chrome finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 90,
      height: 120,
      depth: 90
    },
    price: 0
  },
  {
    id: '3',
    name: 'Modern Crystal Pendant',
    description: 'Contemporary pendant light with premium crystal elements.',
    category: 'Modern',
    image: 'IMG_2096.WEBP',
    features: [
      'Modern design',
      'Crystal accents',
      'Integrated LED',
      'Sleek finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 60,
      height: 80,
      depth: 60
    },
    price: 0
  },
  {
    id: '4',
    name: 'Spiral LED Chandelier',
    description: 'Contemporary spiral design with dynamic lighting patterns.',
    category: 'Modern',
    image: 'IMG_2108.WEBP',
    features: [
      'Spiral design',
      'LED technology',
      'Remote controlled',
      'Stainless steel frame'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 70,
      height: 100,
      depth: 70
    },
    price: 0
  },
  {
    id: '5',
    name: 'Modern Ring Light',
    description: 'Circular LED chandelier with minimalist design.',
    category: 'Modern',
    image: 'IMG_2090.WEBP',
    features: [
      'Ring design',
      'Color temperature control',
      'Smart lighting',
      'Modern aesthetic'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 100,
      height: 10,
      depth: 100
    },
    price: 0
  },
  {
    id: '6',
    name: 'Linear Crystal Light',
    description: 'Linear chandelier with crystal elements and modern design.',
    category: 'Modern',
    image: 'IMG_2091.WEBP',
    features: [
      'Linear arrangement',
      'Crystal details',
      'LED lighting',
      'Contemporary style'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 120,
      height: 30,
      depth: 20
    },
    price: 0
  },
  {
    id: '7',
    name: 'Art Deco Chandelier',
    description: 'Art Deco inspired linear chandelier for dining spaces.',
    category: 'Modern',
    image: 'IMG_2101.WEBP',
    features: [
      'Art Deco design',
      'Linear layout',
      'Premium finish',
      'Dimmable lights'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 130,
      height: 40,
      depth: 25
    },
    price: 0
  },
  {
    id: '8',
    name: 'Contemporary Linear Light',
    description: 'Modern linear chandelier with clean lines.',
    category: 'Modern',
    image: 'IMG_2102.WEBP',
    features: [
      'Clean design',
      'Even illumination',
      'Modern aesthetic',
      'Easy installation'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 110,
      height: 35,
      depth: 20
    },
    price: 0
  },
  {
    id: '9',
    name: 'Geometric LED Light',
    description: 'Geometric pattern chandelier with LED technology.',
    category: 'LED',
    image: 'IMG_2103.WEBP',
    features: [
      'Geometric design',
      'LED integration',
      'Modern finish',
      'Energy efficient'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 90,
      height: 30,
      depth: 90
    },
    price: 0
  },
  {
    id: '10',
    name: 'Ring Pendant Light',
    description: 'Contemporary ring pendant with advanced lighting features.',
    category: 'Modern',
    image: 'IMG_2097.WEBP',
    features: [
      'Ring design',
      'LED technology',
      'Minimalist style',
      'Smart controls'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 80,
      height: 5,
      depth: 80
    },
    price: 0
  },
  {
    id: '11',
    name: 'Circular LED Pendant',
    description: 'Modern circular pendant with smart lighting capabilities.',
    category: 'LED',
    image: 'IMG_2098.WEBP',
    features: [
      'Circular form',
      'Smart lighting',
      'Modern design',
      'Adjustable modes'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 85,
      height: 8,
      depth: 85
    },
    price: 0
  },
  {
    id: '12',
    name: 'Minimalist Pendant',
    description: 'Clean-lined pendant light with contemporary appeal.',
    category: 'Modern',
    image: 'IMG_2099.WEBP',
    features: [
      'Minimalist design',
      'LED lighting',
      'Modern finish',
      'Simple elegance'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 75,
      height: 6,
      depth: 75
    },
    price: 0
  },
  {
    id: '13',
    name: 'Empire Crystal Light',
    description: 'Luxurious empire-style chandelier with crystal elements.',
    category: 'Crystal',
    image: 'IMG_2104.WEBP',
    features: [
      'Empire style',
      'Crystal design',
      'Premium finish',
      'Elegant lighting'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 100,
      height: 120,
      depth: 100
    },
    price: 0
  },
  {
    id: '14',
    name: 'Crystal Tier Chandelier',
    description: 'Multi-tiered crystal chandelier with classic design.',
    category: 'Crystal',
    image: 'IMG_2105.WEBP',
    features: [
      'Tiered design',
      'Crystal elements',
      'Classic style',
      'Luxury finish'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 95,
      height: 130,
      depth: 95
    },
    price: 0
  },
  {
    id: '15',
    name: 'Classic Crystal Light',
    description: 'Traditional crystal chandelier with timeless appeal.',
    category: 'Crystal',
    image: 'IMG_2093.WEBP',
    features: [
      'Classic design',
      'Crystal details',
      'Traditional style',
      'Premium quality'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 90,
      height: 110,
      depth: 90
    },
    price: 0
  },
  {
    id: '16',
    name: 'Modern Pendant Cluster',
    description: 'Contemporary cluster pendant light with elegant glass spheres.',
    category: 'Pendant',
    image: 'IMG_1941.WEBP',
    features: [
      'Multi-sphere design',
      'Hand-blown glass',
      'Adjustable height',
      'Dimmable LED'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 60,
      height: 120,
      depth: 60
    },
    price: 0
  },
  {
    id: '17',
    name: 'Geometric Globe Light',
    description: 'Modern geometric pendant with spherical glass elements.',
    category: 'Pendant',
    image: 'IMG_1942.WEBP',
    features: [
      'Geometric design',
      'Clear glass globes',
      'Modern aesthetic',
      'Custom installation'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 50,
      height: 100,
      depth: 50
    },
    price: 0
  },
  {
    id: '18',
    name: 'Artisan Glass Pendant',
    description: 'Handcrafted glass pendant with contemporary styling.',
    category: 'Pendant',
    image: 'IMG_1943.WEBP',
    features: [
      'Artisan crafted',
      'Premium glass',
      'LED compatible',
      'Modern design'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 45,
      height: 90,
      depth: 45
    },
    price: 0
  },
  {
    id: '19',
    name: 'Crystal Wall Sconce',
    description: 'Elegant wall-mounted light with crystal accents.',
    category: 'Wall Mounted',
    image: 'IMG_1944.WEBP',
    features: [
      'Crystal elements',
      'Wall mounted',
      'Warm lighting',
      'Luxury finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 25,
      height: 40,
      depth: 20
    },
    price: 0
  },
  {
    id: '20',
    name: 'Modern Wall Light',
    description: 'Contemporary wall sconce with sleek design.',
    category: 'Wall Mounted',
    image: 'IMG_1945.WEBP',
    features: [
      'Modern design',
      'Easy installation',
      'LED lighting',
      'Brushed finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 20,
      height: 35,
      depth: 15
    },
    price: 0
  },
  {
    id: '21',
    name: 'Elegant Wall Light',
    description: 'Sophisticated wall-mounted light with modern design elements.',
    category: 'Wall Mounted',
    image: 'IMG_1946.WEBP',
    features: [
      'Contemporary design',
      'Premium finish',
      'Adjustable lighting',
      'Easy mounting'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 25,
      height: 35,
      depth: 15
    },
    price: 0
  },
  {
    id: '22',
    name: 'Modern LED Pendant',
    description: 'Contemporary LED pendant light with sleek design.',
    category: 'LED',
    image: 'IMG_1947.WEBP',
    features: [
      'LED technology',
      'Modern aesthetic',
      'Energy efficient',
      'Dimmable'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 40,
      height: 120,
      depth: 40
    },
    price: 0
  },
  {
    id: '23',
    name: 'Crystal Sphere Light',
    description: 'Elegant crystal sphere pendant with modern appeal.',
    category: 'Crystal',
    image: 'IMG_1948.WEBP',
    features: [
      'Crystal elements',
      'Sphere design',
      'Modern lighting',
      'Premium quality'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 35,
      height: 100,
      depth: 35
    },
    price: 0
  },
  {
    id: '24',
    name: 'Contemporary Chandelier',
    description: 'Modern chandelier with unique geometric elements.',
    category: 'Modern',
    image: 'IMG_1949.WEBP',
    features: [
      'Geometric design',
      'LED compatible',
      'Adjustable height',
      'Modern finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 80,
      height: 100,
      depth: 80
    },
    price: 0
  },
  {
    id: '25',
    name: 'Vintage Crystal Light',
    description: 'Classic crystal chandelier with vintage charm.',
    category: 'Crystal',
    image: 'IMG_1950.WEBP',
    features: [
      'Vintage design',
      'Crystal elements',
      'Traditional style',
      'Premium finish'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 70,
      height: 90,
      depth: 70
    },
    price: 0
  },
  {
    id: '26',
    name: 'Modern Globe Pendant',
    description: 'Contemporary globe pendant with minimalist design.',
    category: 'Modern',
    image: 'IMG_1951.WEBP',
    features: [
      'Globe design',
      'Modern aesthetic',
      'LED lighting',
      'Sleek finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 40,
      height: 110,
      depth: 40
    },
    price: 0
  },
  {
    id: '27',
    name: 'Art Deco Wall Light',
    description: 'Elegant wall sconce with Art Deco influences.',
    category: 'Wall Mounted',
    image: 'IMG_1952.WEBP',
    features: [
      'Art Deco style',
      'Wall mounted',
      'Premium materials',
      'Warm lighting'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 30,
      height: 45,
      depth: 20
    },
    price: 0
  },
  {
    id: '28',
    name: 'Modern Ceiling Light',
    description: 'Contemporary flush mount ceiling light with clean design.',
    category: 'Modern',
    image: 'IMG_1953.WEBP',
    features: [
      'Flush mount',
      'Modern design',
      'LED compatible',
      'Easy installation'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 50,
      height: 15,
      depth: 50
    },
    price: 0
  },
  {
    id: '29',
    name: 'Crystal Drop Light',
    description: 'Elegant crystal pendant with cascading elements.',
    category: 'Crystal',
    image: 'IMG_1954.WEBP',
    features: [
      'Crystal drops',
      'Modern design',
      'Premium quality',
      'Adjustable height'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 45,
      height: 120,
      depth: 45
    },
    price: 0
  },
  {
    id: '30',
    name: 'Contemporary Wall Sconce',
    description: 'Modern wall sconce with sophisticated lighting design.',
    category: 'Wall Mounted',
    image: 'IMG_1955.WEBP',
    features: [
      'Contemporary style',
      'Wall mounted',
      'LED lighting',
      'Designer finish'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 25,
      height: 40,
      depth: 15
    },
    price: 0
  },
  {
    id: '31',
    name: 'Grand Crystal Chandelier',
    description: 'Luxurious multi-tier crystal chandelier with intricate detailing.',
    category: 'Crystal',
    image: 'IMG_2108.WEBP',
    features: [
      'Multi-tier design',
      'Premium crystals',
      'Luxury finish',
      'Custom installation'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 120,
      height: 150,
      depth: 120
    },
    price: 0
  },
  {
    id: '32',
    name: 'Royal Crystal Light',
    description: 'Majestic crystal chandelier with traditional elegance.',
    category: 'Crystal',
    image: 'IMG_2106.WEBP',
    features: [
      'Royal design',
      'Crystal elements',
      'Traditional style',
      'Premium quality'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 110,
      height: 140,
      depth: 110
    },
    price: 0
  },
  {
    id: '33',
    name: 'Modern Ring Chandelier',
    description: 'Contemporary ring chandelier with minimalist appeal.',
    category: 'Modern',
    image: 'IMG_2100.WEBP',
    features: [
      'Ring design',
      'LED lighting',
      'Modern aesthetic',
      'Smart controls'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 90,
      height: 10,
      depth: 90
    },
    price: 0
  },
  {
    id: '34',
    name: 'Art Deco Crystal Light',
    description: 'Art Deco inspired chandelier with crystal accents.',
    category: 'Crystal',
    image: 'IMG_2092.WEBP',
    features: [
      'Art Deco style',
      'Crystal details',
      'Premium finish',
      'Dimmable lights'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 85,
      height: 95,
      depth: 85
    },
    price: 0
  },
  {
    id: '35',
    name: 'Classic Pendant Light',
    description: 'Traditional pendant light with modern touches.',
    category: 'Pendant',
    image: 'IMG_1937.WEBP',
    features: [
      'Classic design',
      'Modern updates',
      'Versatile style',
      'Easy installation'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 40,
      height: 80,
      depth: 40
    },
    price: 0
  },
  {
    id: '36',
    name: 'Contemporary Ceiling Light',
    description: 'Modern ceiling light with clean lines and elegant finish.',
    category: 'Modern',
    image: 'IMG_1938.WEBP',
    features: [
      'Contemporary design',
      'Sleek finish',
      'LED compatible',
      'Modern aesthetic'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 45,
      height: 20,
      depth: 45
    },
    price: 0
  },
  {
    id: '37',
    name: 'Luxury Crystal Pendant',
    description: 'Elegant crystal pendant with modern design elements.',
    category: 'Crystal',
    image: 'IMG_1956.WEBP',
    features: [
      'Crystal elements',
      'Modern design',
      'Premium quality',
      'Adjustable height'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 50,
      height: 90,
      depth: 50
    },
    price: 0
  },
  {
    id: '38',
    name: 'Modern Glass Pendant',
    description: 'Contemporary glass pendant with minimalist style.',
    category: 'Pendant',
    image: 'IMG_1957.WEBP',
    features: [
      'Glass construction',
      'Modern design',
      'LED lighting',
      'Simple elegance'
    ],
    availability: 'in-stock',
    dimensions: {
      width: 35,
      height: 75,
      depth: 35
    },
    price: 0
  },
  {
    id: '39',
    name: 'Designer Pendant Light',
    description: 'Artistic pendant light with unique design elements.',
    category: 'Pendant',
    image: 'IMG_1958.WEBP',
    features: [
      'Designer piece',
      'Unique style',
      'Premium materials',
      'Custom lighting'
    ],
    availability: 'pre-order',
    dimensions: {
      width: 45,
      height: 85,
      depth: 45
    },
    price: 0
  }
];