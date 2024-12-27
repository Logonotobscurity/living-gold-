import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Lightbulb, 
  Settings, 
  Wrench, 
  Zap, 
  Shield, 
  Clock, 
  CreditCard, 
  Phone,
  HelpCircle
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Professional Installation',
    description: 'Expert installation of lighting fixtures by certified professionals with attention to detail and safety.',
    icon: Settings,
    color: 'bg-gold-50 text-gold-600',
  },
  {
    id: 2,
    title: 'Maintenance & Repair',
    description: 'Regular maintenance and prompt repair services to keep your lighting systems functioning optimally.',
    icon: Wrench,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 3,
    title: 'Smart Integration',
    description: 'Seamless integration of smart lighting controls with your existing home automation systems.',
    icon: Zap,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 4,
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty coverage for all our products and installation services.',
    icon: Shield,
    color: 'bg-green-50 text-green-600',
  },
];

const features = [
  {
    id: 1,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for emergencies and inquiries.',
    icon: Clock,
  },
  {
    id: 2,
    title: 'Flexible Payment',
    description: 'Multiple payment options and flexible installment plans available.',
    icon: CreditCard,
  },
  {
    id: 3,
    title: 'Expert Consultation',
    description: 'Free consultation with lighting design experts for your project.',
    icon: Lightbulb,
  },
  {
    id: 4,
    title: 'Quick Response',
    description: 'Fast response time for service requests and inquiries.',
    icon: Phone,
  },
];

const faqs = [
  {
    question: 'What areas do you service?',
    answer: 'We currently service major metropolitan areas and surrounding regions. Contact us to check if we cover your location.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide 24/7 emergency services for critical lighting issues.',
  },
  {
    question: 'What is your warranty policy?',
    answer: 'We offer comprehensive warranties on both products and installations, typically ranging from 1-5 years depending on the service.',
  },
  {
    question: 'How can I schedule a consultation?',
    answer: 'You can schedule a consultation through our website, mobile app, or by calling our customer service line.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced with glowing effect */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gold-600 to-gold-800 text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        {/* Add animated glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
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
              Premium Lighting Services
            </h1>
            <p className="text-lg sm:text-xl text-gold-100 mb-8">
              Expert installation, maintenance, and support for all your lighting needs
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium 
                hover:bg-gold-50 transition-all duration-300 transform hover:scale-105
                shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Services - Enhanced with glowing cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl 
                  transition-all duration-300 relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                  before:via-white/10 before:to-transparent before:translate-x-[-200%] 
                  hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4
                  shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features - Enhanced with hover effects */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 group"
              >
                <div className="bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl
                  transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gold-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs - Enhanced with hover effects */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl
                    transition-all duration-300 hover:bg-gold-50/30"
                >
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-gold-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with glowing effect */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gold-600 to-gold-800 text-white relative overflow-hidden">
        {/* Add animated glow orbs */}
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-gold-100 mb-8">
              Contact us today for a free consultation and let our experts help you create the perfect lighting solution.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-gold-600 px-8 py-4 rounded-full font-medium 
                hover:bg-gold-50 transition-all duration-300 transform hover:scale-105
                shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};