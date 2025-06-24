
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Visual Artist', 'Physicist', 'AI Researcher', 'Somebody'];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentFullText.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen bg-[#f4f2e8] dark:bg-gray-900 flex flex-col transition-colors duration-300">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-gray-600 dark:text-gray-400 mb-8 font-light">
              I'M NATHANAEL NOIR AND I'M A
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-gray-100 mb-12 leading-none">
              {currentText}
              <span className="animate-pulse">.</span>
            </h1>
          </div>
          
          <button className="border border-gray-400 dark:border-gray-600 px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-300 font-light text-gray-900 dark:text-gray-100">
            Discover Work
          </button>
        </div>
      </main>
      
      <SocialLinks />
    </div>
  );
};

export default Index;
