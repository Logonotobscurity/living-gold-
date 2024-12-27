import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Lightbulb, Cpu, LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  accentColor: string;
  link: string;
  features: string[];
}

const categories: Category[] = [
  {
    id: 'luxury',
    title: 'Luxury Lighting',
    description: 'Elevate your space with timeless elegance. Our luxury collection features premium materials, exquisite craftsmanship, and stunning designs that make a statement.',
    icon: Sparkles,
    bgColor: 'from-gold-100 to-amber-50',
    accentColor: 'gold-600',
    link: '/products?category=luxury-lighting',
    features: ['Premium Materials', 'Timeless Design', 'Expert Craftsmanship']
  },
  {
    id: 'modern',
    title: 'Modern Collection',
    description: 'Embrace contemporary aesthetics with our modern lighting solutions. Clean lines, innovative designs, and versatile pieces that define tomorrow\'s spaces.',
    icon: Lightbulb,
    bgColor: 'from-gray-100 to-slate-50',
    accentColor: 'gray-800',
    link: '/products?category=modern-collection',
    features: ['Contemporary Style', 'Minimalist Design', 'Versatile Integration']
  },
  {
    id: 'smart',
    title: 'Smart Lighting',
    description: 'Experience the future of lighting. Our smart collection combines cutting-edge technology with elegant design for the ultimate in comfort and control.',
    icon: Cpu,
    bgColor: 'from-blue-50 to-indigo-50',
    accentColor: 'blue-600',
    link: '/products?category=smart-lighting',
    features: ['Smart Controls', 'Energy Efficient', 'Automated Solutions']
  }
];

export const CategoryCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.bgColor} p-8 group`}
              >
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-24 h-24 bg-${category.accentColor} rounded-full`}
                      animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: i * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-3 rounded-xl bg-${category.accentColor} bg-opacity-10 mb-6`}
                >
                  <Icon className={`w-6 h-6 text-${category.accentColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {category.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className={`w-2 h-2 rounded-full bg-${category.accentColor} mr-2`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={category.link}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gray-900 px-6 py-3 text-white transition-all hover:bg-gray-900/90"
                >
                  <span className="relative">Explore Collection</span>
                  <motion.span
                    className="relative"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 