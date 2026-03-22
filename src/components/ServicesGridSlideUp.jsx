import React from "react";
import { Link } from "react-router-dom";
import InnerService from "./InnerService";

const ServicesGridSlideUp = () => {
  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      description:
        "Comprehensive cleaning for your entire home, ensuring every corner is spotless and sanitized.",
      image: "./images/deep-home.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9 9 9M5 10v10h14V10"
          />
        </svg>
      ),
    },

    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services tailored for commercial spaces, maintaining a healthy work environment.",
      image: "./images/commercial.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
          />
        </svg>
      ),
    },

    {
      id: 3,
      title: "Empty Home Cleaning",
      description:
        "Thorough cleaning for empty homes, perfect for moving in or out.",
      image: "./images/empty-home.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l9-9 9 9M4 10v10h16V10"
          />
        </svg>
      ),
    },

    {
      id: 4,
      title: "Interior Home Cleaning",
      description:
        "Detailed cleaning focused on surfaces, floors, and fixtures inside your home.",
      image: "./images/interior-home.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },

    {
      id: 5,
      title: "Bathroom Cleaning",
      description:
        "Specialized bathroom cleaning including stain removal and sanitization.",
      image: "./images/bathroom.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={2} d="M3 10h18M7 10V5a5 5 0 0110 0v5" />
        </svg>
      ),
    },

    {
      id: 6,
      title: "Kitchen Cleaning",
      description:
        "Deep cleaning service that removes grease and sanitizes your kitchen.",
      image: "./images/kitchen.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={2} d="M4 3h16v6H4zM4 9h16v12H4z" />
        </svg>
      ),
    },

    {
      id: 7,
      title: "Sofa Cleaning",
      description: "Revitalize your sofa with deep cleaning and stain removal.",
      image: "./images/sofa.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h18v8H3zM5 9h14a4 4 0 014 4v0H1v0a4 4 0 014-4z" />
        </svg>
      ),
    },

    {
      id: 8,
      title: "Carpet Cleaning",
      description: "Deep cleaning that removes embedded dirt and allergens.",
      image: "./images/carpet.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path d="M4 3h16v18H4z" />
        </svg>
      ),
    },

    {
      id: 10,
      title: "Mattress Cleaning",
      description:
        "Sanitize and refresh mattresses by eliminating dust mites and allergens.",
      image: "./images/mattress.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="7" width="18" height="10" rx="2" />
        </svg>
      ),
    },

    {
      id: 11,
      title: "Balcony Cleaning",
      description:
        "Thorough cleaning of balcony floors, railings, and windows.",
      image: "./images/balcony.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 20h16M4 10h16v10H4z" />
        </svg>
      ),
    },

    {
      id: 12,
      title: "Windows And Door Cleaning",
      description:
        "Professional cleaning for windows and doors ensuring streak-free shine.",
      image: "./images/window-door.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" />
        </svg>
      ),
    },

    {
      id: 13,
      title: "Refrigerator Cleaning",
      description:
        "Deep cleaning and sanitization of your refrigerator inside and out.",
      image: "./images/refrigretor.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="6" y="3" width="12" height="18" rx="2" />
        </svg>
      ),
    },

    {
      id: 14,
      title: "Water Tank Cleaning",
      description:
        "Specialized cleaning for water tanks to ensure safe and clean water.",
      image: "./images/water-tank.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M4 22h16v-6H4z" />
        </svg>
      ),
    },

    {
      id: 15,
      title: "Bedroom Cleaning",
      description:
        "Dusting, vacuuming, and tidying your bedroom for a serene space.",
      image: "./images/bedroom.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 12h18v8H3zM7 12V7h10v5" />
        </svg>
      ),
    },

    {
      id: 16,
      title: "Hotel Interior Cleaning",
      description: "Premium cleaning for hotels ensuring guest satisfaction.",
      image: "./images/hotel.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path d="M4 21h16V3H4zM4 10h16" />
        </svg>
      ),
    },

    {
      id: 17,
      title: "Microwave Cleaning",
      description:
        "Thorough cleaning of microwave interiors removing stains and odors.",
      image: "./images/microwave.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="7" width="18" height="10" rx="2" />
        </svg>
      ),
    },

   

    {
      id: 19,
      title: "Party Cleaning",
      description:
        "Post-party cleaning to restore your space to perfect condition.",
      image: "./images/party.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 20h16M4 8h16v12H4zM8 8V4h8v4" />
        </svg>
      ),
    },

    {
      id: 20,
      title: "Office Cleaning",
      description:
        "Reliable office cleaning service to maintain a healthy workspace.",
      image: "./images/office.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M19 11H5m14 0v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m0 0V9a2 2 0 012-2h10a2 2 0 012 2v2" />
        </svg>
      ),
    },

    {
      id: 21,
      title: "Villa Cleaning",
      description:
        "Exclusive cleaning services for villas, ensuring premium cleanliness.",
      image: "./images/villa.jpg",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 12l9-9 9 9M5 10v10h14V10" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[450px]"
            >
              {/* Full Background Image */}
              {/* <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              /> */}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Card Content - Positioned at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-200 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  to="/InnerForm"
                  state={{
                    Title: service.title,
                    description: service.description,
                    image: service.image,
                  }}
                >
                  <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-5 py-2 rounded-md transition-colors duration-300">
                    <span>Book Now</span>
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
                  </button>
                </Link>
              </div>
            </div>
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
    </section>
  );
};

export default ServicesGridSlideUp;
