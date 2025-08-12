import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div
      data-section="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/heroparallax.jpg"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
        <div className="absolute inset-0 bg-heritage-green"></div>
      </video>

      <div className="absolute inset-0 bg-heritage-green/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-heritage-ivory">

        <motion.h1
          className="font-serif-heading text-5xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Step into a Living Legacy
        </motion.h1>

        <motion.p
          className="font-sans-body text-lg md:text-xl max-w-2xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the elegance of a bygone era at Amritha Heritage
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 bg-heritage-ochre text-heritage-green font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300">
            Book Your Stay
          </button>
          <button className="px-8 py-3 border border-heritage-ivory text-heritage-ivory rounded-md hover:bg-heritage-ivory hover:text-heritage-green transition-colors duration-300">
            Explore the Heritage
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="font-sans-body text-sm tracking-widest mb-2">SCROLL</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
