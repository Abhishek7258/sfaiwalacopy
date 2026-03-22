import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, ChevronUp } from 'lucide-react';

const Services1 = () => {
  const services = [
    {
      id: 1,
      title: "Office Cleaning",
      description: "With years of hands-on experience, our professional team understands what it takes to maintain a healthy, fresh, and productive office environment.",
      image: "./images/office.jpg",
      features: [
        "Customized Cleaning Plans",
        "Reliable & Trusted Service",
        "Detailed Office Cleaning Process",
        "Years of Proven Expertise"
      ],
      link: "/services/office-cleaning"
    },
    
     {
  id: 2,
  title: "Floor Cleaning",
  description: "We provide professional floor cleaning services that restore shine, remove stains, and leave your floors looking spotless and fresh.",
  image: "./images/floor.jpg",
  features: [
    "Deep Floor Cleaning & Polishing",
    "Stain Removal & Surface Treatment",
    "Advanced Equipment for All Floor Types",
    "Experienced Team with Proven Results"
  ],
  link: "/services/floor-cleaning"
},

   {
  id: 3,
  title: "Kitchen Cleaning",
  description: "We deliver thorough kitchen cleaning services that remove grease, sanitize surfaces, and leave your cooking space fresh, hygienic, and spotless.",
  image: "./images/kitchen.jpg",
  features: [
    "Deep Degreasing & Oil Removal",
    "Sanitized Countertops & Appliances",
    "Eco-Friendly Cleaning Products",
    "Skilled Team with Proven Expertise"
  ],
  link: "/services/kitchen-cleaning"
},

  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container with Wave Overlay */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[130%] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* White Wave SVG Overlay */}
                
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1a237e]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <Check size={18} className="text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Read More Button */}
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mt-4"
                >
                  Read More
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-700 text-lg">
            Offering High Quality Cleaning Services Solutions.{' '}
            <Link 
              to="/services" 
              className="text-blue-600 font-bold hover:text-blue-700 underline transition-colors"
            >
              Discover Now!
            </Link>
          </p>
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

export default Services1;
