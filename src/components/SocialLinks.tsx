
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="fixed right-6 md:right-8 bottom-1/2 transform translate-y-1/2">
      <div className="flex flex-col space-y-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <IconComponent size={20} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
