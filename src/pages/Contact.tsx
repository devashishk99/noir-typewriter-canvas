
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';
import { Mail, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nathanaelnoir@gmail.com',
      href: 'mailto:nathanaelnoir@gmail.com'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@moonsofmercury',
      href: 'https://instagram.com/moonsofmercury'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@nathanaelnoir',
      href: 'https://x.com/nathanaelnoir'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f2e8] dark:bg-gray-900 flex flex-col transition-colors duration-300">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-gray-100 mb-12">
            Contact
          </h1>
          
          <div className="space-y-8">
            {contactInfo.map((contact) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={contact.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="flex items-center justify-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 group"
                >
                  <IconComponent size={24} strokeWidth={1.5} />
                  <span className="text-lg font-light tracking-wide group-hover:underline">
                    {contact.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </main>
      
      <SocialLinks />
    </div>
  );
};

export default Contact;
