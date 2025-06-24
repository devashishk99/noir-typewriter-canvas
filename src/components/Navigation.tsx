
import { useState } from 'react';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'PORTFOLIO', href: '#portfolio' }
  ];

  return (
    <nav className="flex justify-between items-center p-6 md:p-8">
      <div className="text-2xl md:text-3xl font-serif text-gray-900">
        N
      </div>
      
      <div className="flex space-x-8 md:space-x-12">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm tracking-[0.2em] text-gray-700 hover:text-gray-900 transition-colors duration-200 font-light relative"
            onMouseEnter={() => setIsHovered(item.name)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {item.name}
            <span 
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform origin-left transition-transform duration-300 ${
                isHovered === item.name ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
