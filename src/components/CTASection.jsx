import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const handleGetEstimate = () => {
    // Add your navigation logic here
    console.log('Get estimate clicked');
    // Example: navigate to contact form or open modal
    // window.location.href = '/contact';
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/path-to-your-warehouse-image.jpg"
          alt="Warehouse cleaning service"
          className="w-full h-full object-cover"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Get started with your free estimate
        </h2>

        {/* CTA Button */}
        <button
          onClick={handleGetEstimate}
          className=" cursor-pointer inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl group"
        >
         <Link to={"/form1"}> <span>Get an Estimate</span></Link>
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
    </section>
  );
};

export default CTASection;
