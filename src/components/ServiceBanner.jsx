import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const floatingIcons = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      position: "top-20 left-[45%] hidden lg:block",
      animation: "animate-float-1",
      delay: "animation-delay-200"
    },
    {
      id: 2,
      icon: (
        <svg className="w-14 h-14 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      position: "top-16 right-[15%] hidden lg:block",
      animation: "animate-float-2",
      delay: "animation-delay-400"
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
        </svg>
      ),
      position: "bottom-32 left-[42%] hidden md:block",
      animation: "animate-float-3",
      delay: "animation-delay-600"
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      position: "bottom-24 right-[12%] hidden lg:block",
      animation: "animate-float-4",
      delay: "animation-delay-800"
    }
  ];

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative">
            {/* Heading with staggered animation */}
            <div className="space-y-2">
              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <span className="text-blue-900">Together</span>{' '}
                <span className="text-blue-600 font-normal">We'll</span>
              </h1>
              <h2 
                className={`text-5xl md:text-6xl lg:text-7xl font-normal text-blue-600 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                Explore <span className="font-bold text-blue-900">New Things</span>
              </h2>
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl group">
               <Link to={"/form1"}> <span>Book an Appointment</span></Link>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
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
              </button>
            </div>
          </div>

          {/* Right Image with Floating Icons */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="relative">
                <img
                  src="./images/model2.png"
                  alt="Professional cleaning service"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-50/10 rounded-lg pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <div
                key={item.id}
                className={`absolute ${item.position} ${item.animation} ${item.delay} transition-all duration-700 ${
                  isVisible ? 'opacity-80 scale-100' : 'opacity-0 scale-0'
                } hover:opacity-100 hover:scale-110 cursor-pointer`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-shadow">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-5deg);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }

        .animate-float-1 {
          animation: float-1 4s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 5s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 4.5s ease-in-out infinite;
        }

        .animate-float-4 {
          animation: float-4 5.5s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
};

export default ServiceBanner;
