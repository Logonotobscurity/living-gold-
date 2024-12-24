import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Settings, 
  Wrench, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  CreditCard,
  Truck,
  PlusCircle,
  MinusCircle,
  DollarSign,
  Package,
  Lock,
  AlertCircle
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';

export const Services = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Design Consultation',
      description: 'Expert guidance on lighting design and placement',
      features: [
        'Personalized lighting plans',
        'Color scheme coordination',
        'Space optimization',
        'Mood and ambiance planning'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Professional Installation',
      description: 'Certified installation services for all our products',
      features: [
        'Expert technicians',
        'Safety compliance',
        'Clean installation',
        'Post-installation support'
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance and repair services',
      features: [
        'Regular maintenance',
        'Emergency repairs',
        'Parts replacement',
        'Performance optimization'
      ]
    }
  ];

  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Credit/Debit Cards',
      description: 'Secure payments via Visa, Mastercard, American Express'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Bank Transfer',
      description: 'Direct bank transfers for larger purchases'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure Payments',
      description: '256-bit SSL encryption for all transactions'
    }
  ];

  const shippingInfo = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders over $1000'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'White Glove Delivery',
      description: 'Professional handling and installation'
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Insurance',
      description: 'Full coverage during transit'
    }
  ];

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal. For large orders, we also offer financing options.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary by location and product. Standard shipping typically takes 5-7 business days, while express shipping is 2-3 business days.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide. International shipping times and costs vary by location. Please contact us for specific details.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in original packaging. Custom orders are non-refundable. Installation services have a satisfaction guarantee.'
    },
    {
      question: 'Do you provide installation services?',
      answer: 'Yes, we offer professional installation services by certified technicians. This service includes mounting, wiring, and testing of your lighting fixtures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Our Services"
        subtitle="Professional lighting solutions for your space"
        height="medium"
      />

      {/* Main Services Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              className="h-1 bg-gold-500 mx-auto mb-6"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer group
                  ${activeService === index 
                    ? 'bg-gold-500 text-white shadow-lg' 
                    : 'bg-white hover:bg-gold-50 shadow-sm'
                  }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-colors
                  ${activeService === index 
                    ? 'bg-white/20' 
                    : 'bg-gold-50 group-hover:bg-gold-100'
                  }`}
                >
                  <div className={activeService === index ? 'text-white' : 'text-gold-500'}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`mb-6 ${activeService === index ? 'text-white/90' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className={`w-5 h-5 ${
                        activeService === index ? 'text-white/90' : 'text-gold-500'
                      }`} />
                      <span className={activeService === index ? 'text-white/90' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Payment Methods
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg"
            >
              Secure and flexible payment options for your convenience
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-gold-500">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Information Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Shipping Information
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg"
            >
              Professional delivery services for your valuable purchases
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {shippingInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-gold-500">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg"
            >
              Find answers to common questions about our services
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                  {activeFaq === index ? (
                    <MinusCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? 'auto' : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white rounded-b-xl">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};