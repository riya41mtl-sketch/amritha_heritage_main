import React, { useState, useEffect, useRef } from "react";
import { Clock, ArrowRight } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  distance?: string;
  category?: string;
  rating?: string;
}

interface GalleryImage {
  id: number;
  src: string;
  label: string;
  description: string;
}

const DiningSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadImage, setLoadImage] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const dishesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Sample data with updated fields for destination-style cards
  const signatureDishes: Dish[] = [
    {
      id: 1,
      name: "Kerala Sadhya",
      description:
        "Traditional feast served on banana leaf with 28 authentic dishes from the Travancore kingdom",
      image:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
      distance: "25 min",
      category: "Traditional",
      rating: "4.9",
    },
    {
      id: 2,
      name: "Colonial Fish Curry",
      description:
        "Fresh Malabar catch cooked in coconut milk with traditional spices, a Portuguese influence",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
      distance: "20 min",
      category: "Colonial",
      rating: "4.8",
    },
    {
      id: 3,
      name: "Thalassery Biryani",
      description:
        "Fragrant basmati rice layered with tender meat and aromatic spices from the Malabar coast",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
        
      distance: "30 min",
      category: "Biryani",
      rating: "4.7",
    },
    {
      id: 4,
      name: "European Fusion",
      description:
        "Colonial-inspired dishes blending Portuguese and British influences with Kerala flavors",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      distance: "35 min",
      category: "Fusion",
      rating: "4.6",
    },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      label: "Heritage Dining Hall",
      description:
        "The spacious central hall serves as our dining area, enhanced with indoor courtyards that add to its colonial aesthetic allure and historical charm.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      label: "Kohinoor Kitchen",
      description:
        "Our state-of-the-art culinary workshop where master chefs blend traditional Kerala techniques with European influences to create authentic heritage masterpieces.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      label: "Garden Dining",
      description:
        "Experience 'dining on the lawn', the first ever such experience in Thiruvananthapuram, perfect for banquets and special celebrations.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      label: "Colonial Veranda",
      description:
        "Private dining spaces with individual verandas offering garden views, where every meal becomes a journey through colonial elegance.",
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance gallery on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentGalleryIndex((prev) => 
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, galleryImages.length]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-up animation and lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setLoadImage(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // For desktop, find cards within the scrolling container
            const cards = entry.target.querySelectorAll(".destination-card");
            // For mobile, find cards in the parent container
            const mobileCards = document.querySelectorAll(".mobile-card");
            
            const targetCards = isMobile ? mobileCards : cards;
            
            targetCards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe different elements based on mobile/desktop
    if (isMobile) {
      const mobileContainer = document.querySelector('.mobile-dishes-container');
      if (mobileContainer) {
        observer.observe(mobileContainer);
      }
    } else if (dishesRef.current) {
      observer.observe(dishesRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <div className="w-full bg-heritage-bg-primary">
      {/* Hero Section with Parallax - Mobile Optimized */}
      <div ref={heroRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background image with parallax effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: loadImage ? "url('/diningparallax.jpg')" : "none",
            transform: `translateY(${scrollY * (isMobile ? 0.3 : 0.5)}px)`,
            transition: "transform 75ms linear",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Quote with fade-up animation - Mobile Responsive */}
        <div
          ref={quoteRef}
          className={`absolute inset-0 flex items-center justify-center px-4 md:px-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white text-center max-w-4xl font-playfair">
            <span className="block text-lg md:text-2xl lg:text-3xl font-light leading-tight">
              "Welcome to Kohinoor Restaurant —
            </span>
            <span className="block text-base md:text-xl lg:text-2xl font-light mt-2 text-heritage-bg-secondary font-cormorant">
              where European and Indian cuisines blend in colonial elegance"
            </span>
          </h1>
        </div>
      </div>

      {/* Signature Dishes Section - Mobile Responsive */}
      <div className="py-16 md:py-24 bg-heritage-bg-secondary">
        <div className="max-w-full mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-center mb-4 md:mb-6 text-text-primary-title font-playfair">
            Heritage Dining
          </h2>
          <p className="text-center text-text-description text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 font-cormorant px-4">
            Experience the legendary Kohinoor Restaurant, a star attraction of
            the 1970s Malayalam film world, now revived with a menu that
            perfectly blends European and Indian cuisines in an atmosphere of
            colonial grandeur.
          </p>

          {/* Decorative SVG Element - Mobile Responsive */}
          <div className="flex items-center justify-center mb-8 md:mb-16">
            <div className="flex-1 h-px bg-border-soft mx-4 md:mx-8"></div>
            <div className="flex-shrink-0 text-text-secondary-title">
              <svg
                width={isMobile ? "40" : "60"}
                height={isMobile ? "40" : "60"}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(100,100)">
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                  />
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                    transform="rotate(60)"
                  />
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                    transform="rotate(120)"
                  />
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                    transform="rotate(180)"
                  />
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                    transform="rotate(240)"
                  />
                  <path
                    d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
                    fill="currentColor"
                    transform="rotate(300)"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-1 h-px bg-border-soft mx-4 md:mx-8"></div>
          </div>

          {/* Dishes Container - Responsive Layout */}
          <div className="relative">
            {/* Desktop: Horizontal Scrolling */}
            <div className="hidden md:block">
              <div
                ref={dishesRef}
                className="flex justify-center items-center overflow-x-auto scrollbar-hide gap-12 px-8 scroll-smooth cursor-grab active:cursor-grabbing py-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  scrollSnapType: "x mandatory",
                }}
              >
                {signatureDishes.map((dish, index) => (
                  <div
                    key={dish.id}
                    className={`destination-card flex-none w-[350px] group relative overflow-hidden rounded-3xl bg-heritage-bg-primary shadow-lg hover:shadow-2xl transition-all duration-700 transform border-2 border-border-soft hover:border-border-accent snap-center select-none ${
                      visibleCards[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        draggable={false}
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <Clock size={14} className="text-text-description/70" />
                        <span className="text-sm font-medium text-text-description">
                          {dish.distance}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-text-primary-title mb-4 group-hover:text-text-secondary-title transition-colors duration-300 font-playfair">
                        {dish.name}
                      </h3>
                      <p className="text-text-description leading-relaxed mb-6 font-cormorant">
                        {dish.description}
                      </p>
                      <button className="self-start group/btn inline-flex items-center gap-2 px-6 py-3 text-sm font-normal tracking-[0.15em] text-button-secondary-text border-2 border-button-secondary-border rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-button-secondary-hover-border/25 hover:-translate-y-0.5 hover:tracking-widest hover:bg-button-secondary-hover-bg hover:text-button-secondary-hover-text">
                        Order Now
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="block md:hidden space-y-6 px-4 mobile-dishes-container">
              {signatureDishes.map((dish, index) => (
                <div
                  key={dish.id}
                  className={`mobile-card destination-card w-full group relative overflow-hidden rounded-2xl bg-heritage-bg-primary shadow-lg transition-all duration-700 transform border-2 border-border-soft ${
                    visibleCards[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Mobile Card Layout */}
                  <div className="flex flex-row h-40">
                    {/* Image Container - Left Side */}
                    <div className="relative w-2/5 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        draggable={false}
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <Clock size={12} className="text-text-description/70" />
                        <span className="text-xs font-medium text-text-description">
                          {dish.distance}
                        </span>
                      </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="w-3/5 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary-title mb-2 font-playfair leading-tight">
                          {dish.name}
                        </h3>
                        <p className="text-text-description text-sm leading-relaxed line-clamp-3 font-cormorant">
                          {dish.description}
                        </p>
                      </div>
                      <button className="self-start inline-flex items-center gap-1 px-4 py-2 text-xs font-normal tracking-[0.15em] text-button-secondary-text border border-button-secondary-border rounded-md transition-all duration-300 hover:bg-button-secondary-hover-bg hover:text-button-secondary-hover-text mt-2">
                        Order Now
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Menu CTA - Mobile Responsive */}
      <div className="py-16 md:py-24 bg-heritage-bg-tertiary relative overflow-hidden">
        <div className="text-center max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-light text-text-primary-title mb-4 md:mb-6 font-playfair">
            Ready to Experience Colonial Cuisine?
          </h3>
          <p className="text-text-description text-base md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12 font-cormorant">
            From traditional Kerala Sadhya to European fusion dishes, our
            Kohinoor Restaurant menu offers a culinary journey through time.
            Each dish tells a story of heritage and tradition.
          </p>

          {/* Decorative Line Above Button */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="flex-1 h-px bg-border-accent/50 mx-4"></div>
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mx-4 text-text-secondary-title">
              <path d="M50,20 C60,30 60,40 50,50 C40,40 40,30 50,20" fill="currentColor" opacity="0.6" />
              <path d="M50,20 C60,30 60,40 50,50 C40,40 40,30 50,20" fill="currentColor" opacity="0.6" transform="rotate(180 50 50)" />
            </svg>
            <div className="flex-1 h-px bg-border-accent/50 mx-4"></div>
          </div>

          <button className="px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-medium text-button-accent-text bg-button-accent-bg rounded-xl transition-all duration-300 hover:bg-button-accent-hover-bg transform hover:scale-105 hover:shadow-xl">
            EXPLORE OUR MENU
          </button>
        </div>
      </div>

      {/* Gallery Section - Mobile Responsive */}
      <div className="py-16 md:py-24 bg-text-primary-title relative">
        <div className="mx-4 md:mx-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-center text-heritage-bg-primary mb-4 md:mb-6 font-playfair">
            Our Spaces
          </h2>
          <p className="text-center text-heritage-bg-secondary/80 mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-xl lg:text-2xl leading-relaxed font-light font-cormorant px-4">
            Step into the grandeur of colonial elegance where every corner tells
            a story. From our heritage dining hall with its majestic
            architecture to our state-of-the-art kitchen where culinary magic
            happens, each space at Kohinoor Restaurant has been thoughtfully
            designed to transport you to an era of timeless sophistication.
          </p>

          {/* Desktop Gallery */}
          <div className="hidden md:block relative h-[70vh] border-2 border-heritage-bg-accent/50 overflow-hidden rounded-3xl">
            <div
              ref={galleryRef}
              className="flex h-full overflow-x-auto gap-0 scroll-smooth cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
              }}
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="flex-none w-full h-full relative snap-center select-none">
                  <div className="h-full overflow-hidden relative rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-12 max-w-2xl bg-gradient-to-r from-text-primary-title to-transparent">
                    <h3 className="text-heritage-bg-primary text-3xl md:text-5xl font-light mb-4 drop-shadow-xl font-playfair">
                      {image.label}
                    </h3>
                    <div className="w-16 h-1 bg-button-accent-bg mb-6 drop-shadow-lg"></div>
                    <p className="text-heritage-bg-secondary/80 text-lg md:text-xl leading-relaxed drop-shadow-lg font-light font-cormorant">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Gallery - Vertical Stack with Auto-Play */}
          <div className="block md:hidden">
            <div className="relative h-[60vh] border-2 border-heritage-bg-accent/50 overflow-hidden rounded-2xl">
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentGalleryIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.label}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    
                    {/* Mobile Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white text-2xl font-light mb-2 drop-shadow-xl font-playfair">
                        {image.label}
                      </h3>
                      <div className="w-12 h-0.5 bg-button-accent-bg mb-4 drop-shadow-lg"></div>
                      <p className="text-heritage-bg-primary/90 text-sm leading-relaxed drop-shadow-lg font-light font-cormorant">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Gallery Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentGalleryIndex 
                        ? 'bg-button-accent-bg scale-125' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningSection;
