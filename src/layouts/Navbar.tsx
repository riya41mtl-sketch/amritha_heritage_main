// import React, { useState, useEffect } from 'react';

// const NavBar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isIntroVideoFull, setIsIntroVideoFull] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.querySelector('[data-section="hero"]');
//       const introSection = document.querySelector('[data-section="intro"]');
      
//       if (heroSection) {
//         const heroHeight = (heroSection as HTMLElement).offsetHeight;
//         const scrollY = window.scrollY;
        
//         // Change navbar color when fully scrolled past hero section
//         setIsDarkMode(scrollY > heroHeight - 100); // 100px buffer for smooth transition
//       }

//       // Check intro section video progress
//       if (introSection) {
//         const rect = introSection.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
        
//         if (rect.top <= 0 && rect.bottom > windowHeight) {
//           // Calculate scroll progress through intro section
//           const scrolledIntoSection = Math.abs(rect.top);
//           const maxScroll = (introSection as HTMLElement).offsetHeight - windowHeight;
//           const scrollProgress = Math.min(scrolledIntoSection / maxScroll, 1);
          
//           // Video appears after 25% scroll and completes at 85%
//           if (scrollProgress >= 0.25 && scrollProgress <= 0.85) {
//             const videoProgress = (scrollProgress - 0.25) / (0.85 - 0.25);
//             // Check if video is fully zoomed (scale >= 0.9)
//             const videoScale = 0.2 + (videoProgress * 0.8);
//             setIsIntroVideoFull(videoScale >= 0.9);
//           } else if (scrollProgress > 0.85) {
//             setIsIntroVideoFull(true);
//           } else {
//             setIsIntroVideoFull(false);
//           }
//         } else {
//           setIsIntroVideoFull(false);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Check initial scroll position
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Dynamic classes based on mode
//   const textColor = isIntroVideoFull ? 'text-white' : (isDarkMode ? 'text-primary-text' : 'text-white');
//   const lineColor = isIntroVideoFull ? 'bg-white/30' : (isDarkMode ? 'bg-primary-text/30' : 'bg-white/30');
//   const hamburgerColor = isIntroVideoFull ? 'bg-white' : (isDarkMode ? 'bg-primary-text' : 'bg-white');
  
//   // Dynamic logo based on scroll position
//   const logoSrc = isIntroVideoFull ? '/logoWhite.png' : (isDarkMode ? '/logoBlack.png' : '/logoWhite.png');
  
//   // Dynamic background based on scroll position
//   const navBackground = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-primary-bg' : 'bg-transparent');

//   return (
//     <>
//       {/* Navigation Bar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 ${navBackground} transition-all duration-300`}>
//         <div className="max-w-full px-6 md:px-12">
//           <div className="flex items-center justify-between h-16 md:h-20">
            
//             {/* Hamburger Menu Button - Left */}
//             <button
//               onClick={toggleMenu}
//               className={`${textColor} hover:opacity-70 transition-all duration-300 p-1`}
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-6 md:w-8 md:h-8 flex flex-col justify-center items-center space-y-1">
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
//               </div>
//             </button>

//             {/* Logo - Center */}
//             <div className="flex items-center">
//               <img 
//                 src={logoSrc} 
//                 alt="AMRITHA HERITAGE" 
//                 className="h-8 md:h-10 lg:h-12 transition-all duration-300"
//               />
//             </div>

//             {/* Book Now Button - Right */}
//             <button className={`${textColor} hover:opacity-70 transition-all duration-300 text-sm md:text-base font-light tracking-wider`}>
//               Book Heritage Stay
//             </button>
//           </div>
//         </div>
        
//         {/* White line at bottom */}
//         <div className={`w-full h-px ${lineColor} transition-colors duration-300`}></div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//         onClick={toggleMenu}
//       >
//         <div
//           className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
//             isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6 pt-24">
//             <nav className="space-y-6">
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Heritage Rooms
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Kohinoor Dining
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Colonial Architecture
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Heritage Tours
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Events & Banquets
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Contact
//               </a>
//             </nav>
            
//             <div className="mt-12 pt-6 border-t border-white/20">
//               <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-sm transition-colors duration-200 text-lg font-light tracking-wide">
//                 Book Heritage Stay
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

// import React, { useState, useEffect } from 'react';

// const NavBar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isIntroVideoFull, setIsIntroVideoFull] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.querySelector('[data-section="hero"]');
//       const introSection = document.querySelector('[data-section="intro"]');
      
//       if (heroSection) {
//         const heroHeight = (heroSection as HTMLElement).offsetHeight;
//         const scrollY = window.scrollY;
        
//         // Change navbar color when fully scrolled past hero section
//         setIsDarkMode(scrollY > heroHeight - 100); // 100px buffer for smooth transition
//       }

//       // Check intro section video progress
//       if (introSection) {
//         const rect = introSection.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
        
//         if (rect.top <= 0 && rect.bottom > windowHeight) {
//           // Calculate scroll progress through intro section
//           const scrolledIntoSection = Math.abs(rect.top);
//           const maxScroll = (introSection as HTMLElement).offsetHeight - windowHeight;
//           const scrollProgress = Math.min(scrolledIntoSection / maxScroll, 1);
          
//           // Video appears after 25% scroll and completes at 85%
//           if (scrollProgress >= 0.25 && scrollProgress <= 0.85) {
//             const videoProgress = (scrollProgress - 0.25) / (0.85 - 0.25);
//             // Check if video is fully zoomed (scale >= 0.9)
//             const videoScale = 0.2 + (videoProgress * 0.8);
//             setIsIntroVideoFull(videoScale >= 0.9);
//           } else if (scrollProgress > 0.85) {
//             setIsIntroVideoFull(true);
//           } else {
//             setIsIntroVideoFull(false);
//           }
//         } else {
//           setIsIntroVideoFull(false);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Check initial scroll position
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Dynamic classes based on mode
//   const textColor = isIntroVideoFull ? 'text-white' : (isDarkMode ? 'text-primary-text' : 'text-white');
//   const lineColor = isIntroVideoFull ? 'bg-white/30' : (isDarkMode ? 'bg-text-primary-title/30' : 'bg-white/30');
//   const hamburgerColor = isIntroVideoFull ? 'bg-white' : (isDarkMode ? 'bg-text-primary-title' : 'bg-white');
  
//   // Dynamic logo based on scroll position
//   const logoSrc = isIntroVideoFull ? '/logoWhite.png' : (isDarkMode ? '/logoBlack.png' : '/logoWhite.png');

//   // Dynamic background based on scroll position - CHANGED: white background for dark mode
//   const navBackground = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-heritage-bg-secondary' : 'bg-transparent');

//   // Dynamic book now button on scroll
//   const bookNowBg = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-button-accent-bg' : 'bg-transparent');

//   return (
//     <>
//       {/* Navigation Bar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 ${navBackground} transition-all duration-300`}>
//         <div className="max-w-full px-6 md:px-12">
//           <div className="relative flex items-center justify-between h-16 md:h-20">
            
//             {/* Hamburger Menu Button - Left */}
//             <button
//               onClick={toggleMenu}
//               className={`${textColor} hover:opacity-70 transition-all duration-300 p-1`}
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-6 md:w-8 md:h-8 flex flex-col justify-center items-center space-y-1 ">
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
//                 <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
//               </div>                     
//             </button>

//             {/* Logo - Center */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
//               <img 
//                 src={logoSrc} 
//                 alt="AMRITHA HERITAGE" 
//                 className="h-8 md:h-10 lg:h-12 transition-all duration-300"
//               />
//             </div>

//             {/* Book Now Button - Right */}
//             <button className={`hover: transition-all duration-300 text-sm md:text-base font-bold tracking-wider border-2 rounded-2xl ${bookNowBg} text-heritage-bg-primary border-heritage-bg-primary w-44 h-10 md:h-12 hover:bg-button-accent-bg border-button-accent-bg whitespace-nowrap`}>
//               Book Now
//             </button>
//           </div>
//         </div>
        
//         {/* White line at bottom */}
//         <div className={`w-full h-px ${lineColor} transition-colors duration-300`}></div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
//           isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//         }`}
//         onClick={toggleMenu}
//       >
//         <div
//           className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
//             isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6 pt-24">
//             <nav className="space-y-6">
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Heritage Rooms
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Kohinoor Dining
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Colonial Architecture
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Heritage Tours
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Events & Banquets
//               </a>
//               <a
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-colors duration-200 text-lg font-light tracking-wide py-2"
//               >
//                 Contact
//               </a>
//             </nav>
            
//             <div className="mt-12 pt-6 border-t border-white/20">
//               <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-sm transition-colors duration-200 text-lg font-light tracking-wide">
//                 Book Heritage Stay
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;



import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isIntroVideoFull, setIsIntroVideoFull] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="hero"]');
      const introSection = document.querySelector('[data-section="intro"]');
      
      if (heroSection) {
        const heroHeight = (heroSection as HTMLElement).offsetHeight;
        const scrollY = window.scrollY;
        
        // Change navbar color when fully scrolled past hero section
        setIsDarkMode(scrollY > heroHeight - 100); // 100px buffer for smooth transition
      }

      // Check intro section video progress
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= 0 && rect.bottom > windowHeight) {
          // Calculate scroll progress through intro section
          const scrolledIntoSection = Math.abs(rect.top);
          const maxScroll = (introSection as HTMLElement).offsetHeight - windowHeight;
          const scrollProgress = Math.min(scrolledIntoSection / maxScroll, 1);
          
          // Video appears after 25% scroll and completes at 85%
          if (scrollProgress >= 0.25 && scrollProgress <= 0.85) {
            const videoProgress = (scrollProgress - 0.25) / (0.85 - 0.25);
            // Check if video is fully zoomed (scale >= 0.9)
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
    
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dynamic classes based on mode
  const textColor = isIntroVideoFull ? 'text-white' : (isDarkMode ? 'text-primary-text' : 'text-white');
  const lineColor = isIntroVideoFull ? 'bg-white/30' : (isDarkMode ? 'bg-text-primary-title/30' : 'bg-white/30');
  const hamburgerColor = isIntroVideoFull ? 'bg-white' : (isDarkMode ? 'bg-text-primary-title' : 'bg-white');
  
  // Dynamic logo based on scroll position
  const logoSrc = isIntroVideoFull ? '/logoWhite.png' : (isDarkMode ? '/logoBlack.png' : '/logoWhite.png');

  // Dynamic background based on scroll position
  const navBackground = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-heritage-bg-secondary' : 'bg-transparent');

  // Dynamic book now button on scroll
  const bookNowBg = isIntroVideoFull ? 'bg-transparent' : (isDarkMode ? 'bg-button-accent-bg' : 'bg-transparent');

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${navBackground} transition-all duration-300`}>
        <div className="max-w-full px-3 sm:px-4 md:px-8 lg:px-12">
          <div className="relative flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            
            {/* Hamburger Menu Button - Left */}
            <button
              onClick={toggleMenu}
              className={`${textColor} hover:opacity-70 transition-all duration-300 p-1 flex-shrink-0`}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex flex-col justify-center items-center space-y-1">
                <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 ${hamburgerColor} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>                     
            </button>

            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <img 
                src={logoSrc} 
                alt="AMRITHA HERITAGE" 
                className="h-6 sm:h-7 md:h-9 lg:h-10 xl:h-12 transition-all duration-300"
              />
            </div>

            {/* Book Now Button - Right */}
            <button className={`hover:opacity-90 transition-all duration-300 font-bold tracking-wider border-2 rounded-2xl ${bookNowBg} text-heritage-bg-primary border-heritage-bg-primary hover:bg-button-accent-bg border-button-accent-bg whitespace-nowrap flex-shrink-0 text-xs sm:text-sm md:text-base w-20 h-8 sm:w-24 sm:h-9 md:w-32 md:h-10 lg:w-40 lg:h-11 xl:w-44 xl:h-12`}>
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Book</span>
            </button>
          </div>
        </div>
        
        {/* White line at bottom */}
        <div className={`w-full h-px ${lineColor} transition-colors duration-300`}></div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-72 sm:w-80 max-w-[85vw] bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 sm:p-6 pt-16 sm:pt-20 md:pt-24">
            <nav className="space-y-4 sm:space-y-6">
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Heritage Rooms
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Kohinoor Dining
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Colonial Architecture
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Heritage Tours
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Events & Banquets
              </a>
              <a
                href="#"
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide py-2"
              >
                Contact
              </a>
            </nav>
            
            <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/20">
              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 sm:px-6 rounded-sm transition-colors duration-200 text-base sm:text-lg font-light tracking-wide">
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