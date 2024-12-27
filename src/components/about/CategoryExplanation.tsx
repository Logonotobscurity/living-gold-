import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Cpu, Star, Shield, Zap } from 'lucide-react';

export const CategoryExplanation = () => {
  const categories = [
    {
      id: 'luxury',
      title: 'Luxury Lighting',
      subtitle: 'Where Elegance Meets Excellence',
      description: 'Our Luxury Lighting collection represents the pinnacle of illumination artistry. Each piece is meticulously crafted using premium materials like crystal, brass, and artisanal glass, creating stunning focal points that transform spaces into extraordinary environments.',
      icon: Sparkles,
      color: 'gold',
      benefits: [
        { icon: Star, text: 'Premium Materials & Craftsmanship' },
        { icon: Shield, text: 'Timeless Elegant Designs' },
        { icon: Zap, text: 'Statement Pieces That Inspire' }
      ]
    },
    {
      id: 'modern',
      title: 'Modern Collection',
      subtitle: 'Contemporary Design for Modern Living',
      description: 'The Modern Collection embodies the perfect balance of form and function. With clean lines, innovative materials, and versatile designs, these pieces seamlessly integrate into contemporary spaces while making bold style statements.',
      icon: Lightbulb,
      color: 'slate',
      benefits: [
        { icon: Star, text: 'Clean & Minimalist Aesthetics' },
        { icon: Shield, text: 'Versatile Integration' },
        { icon: Zap, text: 'Forward-Thinking Design' }
      ]
    },
    {
      id: 'smart',
      title: 'Smart Lighting',
      subtitle: 'Intelligent Illumination for Modern Living',
      description: 'Step into the future with our Smart Lighting solutions. Combining cutting-edge technology with elegant design, these fixtures offer unprecedented control over your environment, from automated schedules to perfect ambiance creation.',
      icon: Cpu,
      color: 'blue',
      benefits: [
        { icon: Star, text: 'Advanced Control Systems' },
        { icon: Shield, text: 'Energy Efficiency' },
        { icon: Zap, text: 'Seamless Automation' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Illuminating Excellence Through{' '}
            <span className="text-gold-600">Innovation</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our carefully curated categories, each designed to bring unique character and functionality to your space.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-32">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image/Visual Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className={`relative aspect-square rounded-2xl bg-${category.color}-50 p-8 overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${category.color}-100/50 to-${category.color}-50/30`}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                    <Icon className={`w-24 h-24 text-${category.color}-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className={`text-3xl font-bold text-${category.color}-600`}>
                      {category.title}
                    </h3>
                    <p className="text-xl font-medium text-gray-700">
                      {category.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-4">
                      {category.benefits.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        return (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center gap-3"
                          >
                            <span className={`p-2 rounded-lg bg-${category.color}-100`}>
                              <BenefitIcon className={`w-5 h-5 text-${category.color}-600`} />
                            </span>
                            <span className="text-gray-700">{benefit.text}</span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 