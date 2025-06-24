
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#f4f2e8] dark:bg-gray-900 flex flex-col transition-colors duration-300">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-gray-100 mb-8">
            Portfolio
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A curated collection of visual artworks, scientific research, and AI explorations. Each piece represents a unique intersection of creativity, technology, and human experience.
          </p>
          
          <div className="mt-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gray-600 dark:text-gray-400 font-light">
              Coming Soon
            </p>
          </div>
        </div>
      </main>
      
      <SocialLinks />
    </div>
  );
};

export default Portfolio;
