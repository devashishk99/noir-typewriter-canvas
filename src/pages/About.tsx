
import Navigation from '../components/Navigation';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f4f2e8] dark:bg-gray-900 flex flex-col transition-colors duration-300">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-gray-100 mb-8">
            About
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Nathanael Noir is a multidisciplinary artist, physicist, and AI researcher who explores the intersection of science, technology, and visual expression. Through a unique blend of artistic vision and scientific inquiry, Nathanael creates works that challenge conventional boundaries and invite contemplation.
          </p>
        </div>
      </main>
      
      <SocialLinks />
    </div>
  );
};

export default About;
