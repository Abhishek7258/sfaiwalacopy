import React, { useEffect, useRef, useState } from 'react';

const WorkingProcessAnimated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Book Online Form",
      description: "Ahen an unknown printer took a galley type and scrambled nknown printer.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l2 2 4-4" />
        </svg>
      ),
      rotation: "-rotate-6",
      decorativeIcon: (
        <svg className="w-8 h-8 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Get Confirmation",
      description: "Ahen an unknown printer took a galley type and scrambled nknown printer.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      rotation: "rotate-0",
      decorativeIcon: null
    },
    {
      id: 3,
      title: "Let's Enjoy",
      description: "Ahen an unknown printer took a galley type and scrambled nknown printer.",
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      rotation: "rotate-6",
      decorativeIcon: (
        <svg className="w-10 h-10 text-blue-300 opacity-40" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      )
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-40 left-20 w-20 h-20 border-2 border-blue-200 opacity-30 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-200 opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 opacity-30 animate-bounce-slow">
        <svg className="w-10 h-10 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
  className={`text-center mb-16 transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
    Our Working Process
  </h2>
  <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
    We follow a simple, transparent, and efficient process to ensure every
    cleaning task is completed with precision and care. From initial inspection
    to final quality checks, we make sure your space shines every time.
  </p>
</div>


        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Dashed Line - Hidden on mobile */}
          <div className={`hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-300 -z-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                {/* Decorative Icon - Positioned */}
                {step.decorativeIcon && (
                  <div className={`absolute ${index === 0 ? '-left-10 top-0' : '-right-10 top-20'} hidden xl:block`}>
                    {step.decorativeIcon}
                  </div>
                )}

                {/* Card Container */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Card */}
                  <div
                    className={`relative bg-blue-500 ${step.rotation} w-48 h-48 flex items-center justify-center rounded-xl shadow-lg mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-0 group-hover:bg-blue-600`}
                  >
                    <div className="transform transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 transition-colors group-hover:text-blue-600">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-blue-900 shadow-md transition-all duration-300 group-hover:scale-125 group-hover:bg-yellow-500">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkingProcessAnimated;
