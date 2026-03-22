import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const services = [
    {
      id: 1,
      title: "Office Cleaning",
      description: "Professional office cleaning services to maintain a spotless and productive workspace. We handle desks, conference rooms, break areas, and common spaces with eco-friendly products.",
      color: "bg-blue-900",
      iconPath: "M9 3h2v4h2V3h2v4h1a1 1 0 011 1v3a1 1 0 01-1 1h-.5v9a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 016 21v-9H5.5a1 1 0 01-1-1V8a1 1 0 011-1H7V3z"
    },
    {
      id: 2,
      title: "House Cleaning",
      description: "Comprehensive residential cleaning solutions for your home. From deep cleaning to regular maintenance, we cover all rooms including kitchens, bathrooms, bedrooms, and living areas.",
      color: "bg-blue-600",
      iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    },
    {
      id: 3,
      title: "Floor Cleaning",
      description: "Specialized floor cleaning and maintenance services for all surface types. We use professional-grade equipment to clean hardwood, tile, carpet, vinyl, and laminate flooring.",
      color: "bg-blue-500",
      iconPath: "M21.11 2.89A3.02 3.02 0 0019 2c-1.09 0-2.04.59-2.56 1.46l-1.97 3.36L14 6.71l.71-.71a.996.996 0 000-1.41l-2-2a.996.996 0 00-1.41 0l-2.12 2.12-2-2a.996.996 0 00-1.41 0l-2 2a.996.996 0 000 1.41L5 7.29l-2.29 2.29a1 1 0 000 1.41l2 2a1 1 0 001.41 0L9 10.12l.71.71L8.46 13.4C7.59 13.92 7 14.87 7 16c0 1.61 1.19 2.94 2.75 3.17l.45 1.37c.11.34.43.57.79.57h2c.36 0 .68-.23.79-.57l.45-1.37C16.81 18.94 18 17.61 18 16c0-1.09-.58-2.04-1.44-2.58l-1.98-3.39.71-.71 2.83 2.83a.996.996 0 001.41 0l2-2c.38-.38.38-1.02 0-1.41l-2-2 .01-.01c.87-.52 1.46-1.47 1.46-2.56 0-.81-.31-1.54-.89-2.11z"
    },
    {
      id: 4,
      title: "Window Cleaning",
      description: "Crystal-clear window cleaning for residential and commercial properties. We ensure streak-free results for both interior and exterior windows, including hard-to-reach areas.",
      color: "bg-blue-700",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
    },
    {
      id: 5,
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning using advanced steam and dry cleaning methods. Remove stains, odors, and allergens while restoring your carpet's original freshness and appearance.",
      color: "bg-blue-800",
      iconPath: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16z"
    },
    {
      id: 6,
      title: "Commercial Cleaning",
      description: "Complete commercial cleaning services for businesses of all sizes. We provide janitorial services, sanitation, and customized cleaning schedules to fit your needs.",
      color: "bg-blue-600",
      iconPath: "M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
    }
  ];

  // Handle responsive cards per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
      setCurrentSlide(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const totalSlides = Math.ceil(services.length / cardsPerSlide);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length, cardsPerSlide, isAutoPlaying]);

  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getVisibleServices = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return services.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Service Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleServices().map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
              <div className={`w-28 h-28 ${service.color} rounded-full flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110`}>
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={service.iconPath} />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Read More Button */}
              <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-all duration-300 group-hover:scale-110">
                  <svg 
                    className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </span>
               <Link to={"/form1"}> <span>READ MORE</span></Link>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-blue-600' 
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-110 group z-50"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6 text-gray-800 transform group-hover:-translate-y-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={3}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesSlider;
