import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useThemeStore } from '../state/themeStore';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const NavBar: React.FC = () => {
  const { isDarkMode, setDarkMode } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroVideoFull, setIsIntroVideoFull] = useState(false);
  const shouldReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="hero"]');
      const introSection = document.querySelector('[data-section="intro"]');

      if (heroSection) {
        const heroHeight = (heroSection as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;

        setDarkMode(scrollY > heroHeight - 100);
      }

      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= 0 && rect.bottom > windowHeight) {
          const scrolledIntoSection = Math.abs(rect.top);
          const maxScroll = (introSection as HTMLElement).offsetHeight - windowHeight;
          const scrollProgress = Math.min(scrolledIntoSection / maxScroll, 1);

          if (scrollProgress >= 0.25 && scrollProgress <= 0.85) {
            const videoProgress = (scrollProgress - 0.25) / (0.85 - 0.25);
            const videoScale = 0.2 + (videoProgress * 0.8);
            setIsIntroVideoFull(videoScale >= 0.9);
          } else if (scrollProgress > 0.85) {
            setIsIntroVideoFull(true);
          } else {
            setIsIntroVideoFull(false);
          }
        } else {
          setIsIntroVideoFull(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const textColor = isIntroVideoFull ? 'text-white' : (isDarkMode ? 'text-text-primary-title' : 'text-white');
  const lineColor = isIntroVideoFull ? 'bg-white/30' : (isDarkMode ? 'bg-text-primary-title/30' : 'bg-white/30');
  const hamburgerColor = isIntroVideoFull ? 'bg-white' : (isDarkMode ? 'bg-text-primary-title' : 'bg-white');
  const logoSrc = isIntroVideoFull ? '/logoWhite.png' : (isDarkMode ? '/logoBlack.png' : '/logoWhite.png');
  const navBackground = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-heritage-bg-secondary' : 'bg-transparent');
  const bookNowBg = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-button-accent-bg' : 'bg-transparent');

  const buttonVariants: Variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const hamburgerVariants: Variants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navBackground} transition-all duration-300`}>
        <div className="max-w-full px-4 md:px-8">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            <motion.button
              onClick={toggleMenu}
              className={`${textColor} hover:opacity-70 transition-all duration-300 p-1 flex-shrink-0`}
              aria-label="Toggle menu"
              variants={shouldReduceMotion ? undefined : hamburgerVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="w-6 md:w-8 h-6 md:h-8 flex flex-col justify-center items-center space-y-1.5">
                <motion.div initial={{ rotate: 0, y: 0 }} animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }} className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300`}></motion.div>
                <motion.div initial={{ opacity: 1 }} animate={{ opacity: isMenuOpen ? 0 : 1 }} className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300`}></motion.div>
                <motion.div initial={{ rotate: 0, y: 0 }} animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }} className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300`}></motion.div>
              </div>
            </motion.button>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <img
                src={logoSrc}
                alt="AMRITHA HERITAGE"
                className="h-8 md:h-10 transition-all duration-300"
              />
            </div>

            <motion.button
              className={`hover:opacity-90 transition-all duration-300 font-bold tracking-wider border-2 rounded-2xl ${bookNowBg} text-heritage-bg-primary border-heritage-bg-primary hover:bg-button-accent-bg border-button-accent-bg whitespace-nowrap flex-shrink-0 text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5`}
              variants={shouldReduceMotion ? undefined : buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Book</span>
            </motion.button>
          </div>
        </div>

        <div className={`w-full h-px ${lineColor} transition-colors duration-300`}></div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-text-primary-title/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-text-primary-title/95 backdrop-blur-md transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 pt-24">
            <nav className="space-y-6">
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Home</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Heritage Rooms</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Kohinoor Dining</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Colonial Architecture</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Heritage Tours</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Events & Banquets</a>
              <a href="#" className="block text-heritage-bg-primary hover:text-heritage-bg-secondary transition-colors duration-200 text-lg font-light tracking-wide py-2">Contact</a>
            </nav>

            <div className="mt-12 pt-6 border-t border-border-soft/30">
              <button className="w-full bg-button-accent-bg/80 hover:bg-button-accent-bg text-button-accent-text py-3 px-6 rounded-md transition-colors duration-200 text-lg font-light tracking-wide">
                Book Heritage Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
