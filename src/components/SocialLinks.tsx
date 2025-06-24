
import { Instagram, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/moonsofmercury', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/nathanaelnoir', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nathanaelnoir@gmail.com', label: 'Email' }
  ];

  return (
    <div className="fixed right-6 md:right-8 bottom-6 md:bottom-8">
      <div className="flex space-x-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:scale-110"
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
