import { motion } from 'framer-motion';
import { MapPin, Mail, Clock } from 'lucide-react';
import { ContactButtons } from '../components/contact/ContactButtons';

interface ContactPageProps {
  onOpenCallPopup: () => void;
}

const contactInfo = {
  address: 'Living Gold Lighting, Okpanam Road, Asaba, Delta State, Nigeria',
  email: 'info@livinggold.com',
  hours: 'Mon-Fri: 9AM-6PM',
};

export const Contact = ({ onOpenCallPopup }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help.
              Choose your preferred way to reach us.
            </p>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <ContactButtons onCallClick={onOpenCallPopup} />
          </motion.div>

          {/* Contact Information */}
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">{contactInfo.address}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-600 text-sm hover:text-gold-600 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">{contactInfo.hours}</p>
                </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                />
              </div>
              <div>
                <button
                type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-gold-600 text-white rounded-xl hover:bg-gold-700 
                    transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                Send Message
                </button>
          </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};