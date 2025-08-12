import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Dining', href: '/dining' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled
    ? 'bg-heritage-ivory/90 backdrop-blur-lg shadow-md text-heritage-green'
    : 'bg-transparent text-heritage-ivory';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-serif-heading text-2xl tracking-wider">
          <a href="/">Amritha</a>
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-heritage-ochre transition-colors duration-300 font-sans-body">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-1 hover:text-heritage-ochre transition-colors duration-300">
              <Globe size={18} />
              <span className="font-sans-body text-sm">EN</span>
            </button>
            {/* Dropdown for languages would go here */}
          </div>
          <button className="px-6 py-2 border border-heritage-ochre text-heritage-ochre rounded-md hover:bg-heritage-ochre hover:text-heritage-ivory transition-colors duration-300 font-sans-body">
            Book Now
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-heritage-ivory/95 backdrop-blur-lg absolute top-0 left-0 right-0 w-full"
          >
            <nav className="flex flex-col items-center space-y-4 py-24">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-heritage-green hover:text-heritage-ochre transition-colors duration-300 font-sans-body text-lg">
                  {link.name}
                </a>
              ))}
              <button className="mt-4 px-6 py-2 bg-heritage-ochre text-heritage-ivory rounded-md hover:bg-opacity-90 transition-colors duration-300 font-sans-body">
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
