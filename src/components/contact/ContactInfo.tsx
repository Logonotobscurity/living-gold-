import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      content: '+234 123 456 7890',
      link: 'tel:+2341234567890'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'info@livinggold.com',
      link: 'mailto:info@livinggold.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Address',
      content: 'Building materials, Okpanam, Asaba, Nigeria 320107'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-luxury-cream p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-luxury-black mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-2 bg-white rounded-lg text-gold-500">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-medium text-luxury-black">{detail.title}</h3>
                {detail.link ? (
                  <a 
                    href={detail.link}
                    className="text-luxury-muted hover:text-gold-500 transition-colors"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-luxury-muted">{detail.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};