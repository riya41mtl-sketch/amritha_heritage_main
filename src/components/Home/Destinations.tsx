import { useState, useEffect, useRef, useMemo } from "react";
import { MapPin, ArrowRight, Star } from "lucide-react";

const DestinationSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const destinations = useMemo(() => [
    {
      title: "Shri Padmanabhaswami Temple",
      description:
        "Constructed in the Dravidian style by a Maharaja of Travancore in 1733, the temple is dedicated to Vishnu who reclines on the sacred serpent Anantha.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "5 km",
      category: "Heritage",
      rating: "4.8",
    },
    {
      title: "Kovalam Beach",
      description:
        "Located 16 km from Thiruvananthapuram, Kovalam Beach attracts both the rich and famous, dotted with both luxury and budget resorts.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "16 km",
      category: "Beach",
      rating: "4.7",
    },
    {
      title: "Veli Tourist Village",
      description:
        "Bordered by the Veli lagoon and Arabian Sea, this attraction offers water sports, a floating bridge, children's park, and gardens.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "8 km",
      category: "Adventure",
      rating: "4.6",
    },
  ], []);

  useEffect(() => {
    // Set initial visibility with staggered animation
    setIsHeaderVisible(false);
    setVisibleCards([false, false, false]);

    const headerTimer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);

    const cardTimers = destinations.map((_, index) =>
      setTimeout(() => {
        setVisibleCards(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, 600 + (index * 200))
    );

    return () => {
      clearTimeout(headerTimer);
      cardTimers.forEach(timer => clearTimeout(timer));
    };
  }, [destinations]);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-heritage-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isHeaderVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-text-primary-title/10 text-text-primary-title rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 font-playfair transition-all duration-700 ${
              isHeaderVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <MapPin size={14} className="sm:w-4 sm:h-4" />
            <span>Discover Thiruvananthapuram</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary-title mb-4 sm:mb-6 leading-tight font-playfair transition-all duration-700 ${
              isHeaderVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Heritage Attractions
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-text-description max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-cormorant transition-all duration-700 ${
              isHeaderVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Immerse yourself in the rich cultural heritage and colonial history
            that surrounds Amritha Heritage.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`destination-card group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-heritage-bg-primary shadow-lg hover:shadow-2xl transition-all duration-700 transform border-2 border-border-soft hover:border-border-accent hover:-translate-y-2 hover:scale-105 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 bg-text-primary-title/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs sm:text-sm font-medium text-heritage-bg-primary">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <Star size={12} className="sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                  <span className="text-xs sm:text-sm font-medium text-text-primary-title">
                    {destination.rating}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary-title mb-3 sm:mb-4 group-hover:text-text-secondary-title transition-colors duration-300 font-playfair line-clamp-2">
                  {destination.title}
                </h3>
                <p className="text-sm sm:text-base text-text-description leading-relaxed mb-4 sm:mb-6 line-clamp-3 font-cormorant">
                  {destination.description}
                </p>
                <button className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-normal tracking-[0.15em] text-button-secondary-text border-2 border-button-secondary-border rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-button-secondary-hover-border/25 hover:-translate-y-0.5 hover:tracking-widest hover:bg-button-secondary-hover-bg hover:text-button-secondary-hover-text overflow-hidden">
                  <span className="relative z-10 transition-all duration-300">Explore More</span>
                  <ArrowRight
                    size={14}
                    className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-heritage-bg-primary backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-border-soft hover:border-border-accent transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 max-w-full sm:max-w-none mx-4 sm:mx-0">
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary-title mb-2 font-playfair">
                Ready to Explore?
              </h3>
              <p className="text-sm sm:text-base text-text-description font-cormorant">
                Let our heritage concierge help you plan the perfect colonial journey.
              </p>
            </div>
            <button className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-button-primary-text bg-button-primary-bg rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-button-primary-hover-bg/25 hover:-translate-y-0.5 hover:bg-button-primary-hover-bg whitespace-nowrap overflow-hidden">
              <span className="relative z-10">Plan Your Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
