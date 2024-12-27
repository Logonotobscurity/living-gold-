import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Award,
  Users,
  Star,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const stats = [
  { number: '10+', label: 'Years Experience', icon: Award },
  { number: '1000+', label: 'Happy Clients', icon: Users },
  { number: '500+', label: 'Projects Completed', icon: Star },
  { number: '100%', label: 'Client Satisfaction', icon: Target },
];

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: "We prioritize our customers' needs and satisfaction above all else",
    color: 'bg-rose-50 text-rose-600'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly evolving and adopting the latest lighting technologies',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Premium products and exceptional service standards',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Continuous improvement in our services and offerings',
    color: 'bg-green-50 text-green-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gold-600 to-gold-800 text-white py-16 sm:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-72 h-72 bg-white/20 rounded-full filter blur-3xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
              Illuminating Spaces with Excellence
            </h1>
            <p className="text-lg sm:text-xl text-gold-100 mb-8">
              Transforming environments through innovative lighting solutions since 2013
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium 
                hover:bg-gold-50 transition-all duration-300 transform hover:scale-105
                shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transition-all duration-300 relative overflow-hidden group
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-gold-50/30 before:to-transparent before:translate-x-[-200%] 
                  hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-4
                    group-hover:bg-gold-100 transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 bg-gray-50/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2013, Living Gold has been at the forefront of innovative lighting solutions.
              Our journey began with a simple mission: to transform spaces through exceptional lighting design.
              Today, we continue to push boundaries and set new standards in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transition-all duration-300 group"
              >
                <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4
                  shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gold-600 to-gold-800 text-white relative overflow-hidden">
        {/* Animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-shadow-lg">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-gold-100 mb-8">
              Transform your space with our expert lighting solutions
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium 
                hover:bg-gold-50 transition-all duration-300 transform hover:scale-105
                shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};