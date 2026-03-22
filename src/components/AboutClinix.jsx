import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, Phone, ChevronUp } from 'lucide-react';

const AboutClinix = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Sparkles */}
      <div className="absolute top-20 right-32 text-blue-600 opacity-40">
        <Sparkles size={48} />
      </div>
      <div className="absolute top-32 right-20 text-blue-700 opacity-30">
        <Sparkles size={36} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image Collage */}
         

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
              <Sparkles size={20} />
              <span>About Hygine India</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] leading-tight">
              We Have Over 15+ Years of Experiences on Cleaning Area with Successful Projects
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 py-4">
              {/* Stat 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#1a237e]">200 +</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">Solved Customer Problem</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#1a237e]">75 k+</h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">Happy Customers Give Appreciation</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              For years, we have stayed committed to delivering excellent cleaning results using modern tools, trained professionals, and eco-friendly methods. Our quality standards have remained strong and consistent, even as cleaning trends and technologies have evolved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Take Our Service Button */}
              <Link 
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Take Our Service
                <ChevronRight size={20} />
              </Link>

              {/* Quick Contact */}
              <div className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-lg">
                <div className="bg-[#1a237e] text-white p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Quick Contact</p>
                  <a 
                    href="tel:+916201618024" 
                    className="text-lg font-bold text-[#1a237e] hover:text-blue-600 transition-colors"
                  >
                   +91 6201618024
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </section>
  );
};

export default AboutClinix;
