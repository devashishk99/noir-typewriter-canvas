
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'PORTFOLIO', href: '#portfolio' }
  ];

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between items-center p-6 md:p-8">
      <div className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-gray-100">
        N
      </div>
      
      <div className="flex items-center space-x-8 md:space-x-12">
        <div className="flex space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm tracking-[0.2em] text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 font-light relative"
              onMouseEnter={() => setIsHovered(item.name)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-gray-100 transform origin-left transition-transform duration-300 ${
                  isHovered === item.name ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
