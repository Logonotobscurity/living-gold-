import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, Clock, Phone, ArrowRight, Tag, ShoppingBag, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    role: "Interior Designer",
    comment: "The quality of their lighting fixtures is exceptional. Their products have transformed my projects into masterpieces.",
    rating: 5
  },
  {
    name: "Chidinma Okonkwo",
    role: "Property Developer",
    comment: "Outstanding service and premium materials. Living Gold has been instrumental in our luxury developments.",
    rating: 5
  },
  {
    name: "Babajide Ogunleye",
    role: "Architect",
    comment: "Their attention to detail and product quality is unmatched. The best lighting solutions in Nigeria!",
    rating: 5
  }
];

const features = [
  {
    icon: Shield,
    title: "Premium Selection",
    description: "Curated collection of high-quality building materials"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your location"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and assistance"
  },
  {
    icon: Tag,
    title: "Best Prices",
    description: "Competitive prices for premium quality products"
  }
];

const deals = [
  {
    title: "New Arrivals",
    description: "Discover our latest collection of luxury lighting",
    icon: ShoppingBag,
    bgColor: "from-gold-400 to-gold-500",
    link: "/products?sort=newest"
  },
  {
    title: "Special Deals",
    description: "Exclusive offers on premium lighting fixtures",
    icon: Gift,
    bgColor: "from-gold-500 to-gold-600",
    link: "/products?filter=deals"
  }
];

export const LandingPageSections = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24">
      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-[300px] sm:h-[250px]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeFeature === index ? 1 : 0,
                  x: activeFeature === index ? 0 : 50,
                  pointerEvents: activeFeature === index ? 'auto' : 'none',
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gold-200 shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 max-w-md">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deals & New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deals.map((deal, index) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${deal.bgColor}`}>
                    {/* Large centered icon */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <deal.icon className="w-32 h-32 text-white/30" />
                    </motion.div>

                    {/* Floating icons */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: [0.4, 0.6, 0.4],
                            scale: [0.6, 0.8, 0.6],
                            x: Math.sin(i * 45) * 40,
                            y: Math.cos(i * 45) * 40,
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          style={{
                            left: `${15 + (i * 10)}%`,
                            top: `${15 + (i * 8)}%`,
                          }}
                        >
                          <deal.icon className="w-8 h-8 text-white/40" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    <h3 className="text-3xl font-bold text-white mb-3">{deal.title}</h3>
                    <p className="text-white/90 text-lg mb-6">{deal.description}</p>
                    <Link 
                      to={deal.link}
                      className="inline-flex items-center gap-2 text-white font-medium group bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <span>Explore Now</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why professionals and homeowners choose Living Gold for their lighting needs
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{
                x: [0, -100 * testimonials.length],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  className="flex-shrink-0 w-[300px] sm:w-[350px] p-6 bg-white rounded-xl border border-gold-200 shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.comment}</p>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative px-6 py-16 md:p-16">
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Contact our team of experts today and discover how our premium lighting solutions can elevate your project
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Sales
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors shadow-lg"
                  >
                    Explore Collection
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 