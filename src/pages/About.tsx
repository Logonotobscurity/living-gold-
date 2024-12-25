import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Lightbulb, ArrowRight, Star, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Products', value: '500+' },
    { label: 'Cities Served', value: '50+' }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Our Story"
        subtitle="Crafting elegance through light since 1995"
        height="medium"
      />

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Radial gradient background */}
        <div className="absolute inset-0 bg-radial-gradient from-gold-50 via-white to-white opacity-70" />
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gold-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div className="relative mb-8" variants={fadeInUp}>
                <h2 className="text-4xl font-bold mb-2">Our Mission</h2>
                <div className="w-20 h-1 bg-gold-500" />
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 text-lg mb-8 leading-relaxed"
              >
                At Living Gold, we believe that lighting is more than just illumination – it's an art form that transforms spaces and creates ambiance. Our mission is to bring exceptional lighting solutions that combine timeless elegance with modern innovation.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Premium Quality',
                    description: 'Crafted with the finest materials'
                  },
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: 'Global Reach',
                    description: 'Serving customers worldwide'
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: 'Customer First',
                    description: 'Dedicated to your satisfaction'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Trusted Service',
                    description: 'Reliable and professional support'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/images/about/showroom.jpg"
                  alt="Our Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-10 left-10 right-10">
                <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-2xl font-bold text-gold-500"
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Our Values</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'Innovation',
                description: 'Constantly pushing boundaries in lighting design and technology'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Customer Focus',
                description: 'Dedicated to exceeding customer expectations at every step'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Excellence',
                description: 'Committed to the highest standards in every product we create'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gold-50 via-white to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Experience the Living Gold Difference</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover our collection of premium lighting solutions and transform your space
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors group"
              >
                View Collection
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};