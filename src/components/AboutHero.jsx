import React from 'react';

const AboutHero = ({image="./images/banner.jpg",Title="About"}) => {
  return (
    <div className="relative w-full h-[170px] md:h-[250px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Cleaning service team"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          {Title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-white text-lg md:text-xl">
          <a 
            href="/" 
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </a>
          <span className="mx-3 text-yellow-500">
            {/* Chevron/Arrow Icon */}
            <svg 
              className="w-4 h-4" 
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
          <span className="text-yellow-500 font-medium">About 1</span>
        </nav>
      </div>
    </div>
  );
};

export default AboutHero;
