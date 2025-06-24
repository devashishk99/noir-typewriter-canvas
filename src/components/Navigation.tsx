
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'PORTFOLIO', href: '/portfolio' }
  ];

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between items-center p-6 md:p-8">
      <Link 
        to="/"
        className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity duration-200"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        N
      </Link>
      
      <div className="flex items-center space-x-8 md:space-x-12">
        <div className="flex space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm tracking-[0.2em] hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 font-light relative ${
                location.pathname === item.href 
                  ? 'text-gray-900 dark:text-gray-100' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onMouseEnter={() => setIsHovered(item.name)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 dark:bg-gray-100 transform origin-left transition-transform duration-300 ${
                  isHovered === item.name || location.pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Link>
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
