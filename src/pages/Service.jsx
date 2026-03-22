import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, MessageCircle, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Whatsapp from "../utility/Whatsapp";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      description:
        "Comprehensive cleaning for your entire home, ensuring every corner is spotless and sanitized.",
      image: "./images/101.jpg ", // Placeholder, replace with actual image if available
      icon: "🏡",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Professional cleaning services tailored for commercial spaces, maintaining a pristine and healthy work environment.",
      image: "./images/102.jpg ", // Placeholder
      icon: "🏢",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 3,
      title: "Empty Home Cleaning",
      description:
        "Thorough cleaning for empty homes, perfect for moving in or out, leaving the space fresh and ready.",
      image: "./images/103.png ", // Placeholder
      icon: "🏠",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      title: "Interior Home Cleaning",
      description:
        "Detailed interior cleaning services, focusing on all surfaces, floors, and fixtures within your home.",
      image: "./images/104.png ", // Placeholder
      icon: "✨",
      gradient: "from-teal-400 to-blue-500",
    },
    {
      id: 5,
      title: "Bathroom Cleaning",
      description:
        "Experience pristine bathroom hygiene with our specialized cleaning techniques. We tackle tough stains, sanitize surfaces, and leave your bathroom fresh and gleaming.",
      image: "./images/105.jpg ",
      icon: "🚿",
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: 6,
      title: "Kitchen Cleaning",
      description:
        "Transform your kitchen into a spotless culinary haven. Our comprehensive deep cleaning service covers every surface, appliance, and corner to ensure a hygienic and sparkling kitchen environment.",
      image: "./images/107.jpg ",
      icon: "🍳",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      id: 7,
      title: "Sofa Cleaning",
      description:
        "Revitalize your sofas with our professional cleaning, removing dirt, stains, and odors for a fresh look and feel.",
      image: "./images/108.jpg ",
      icon: "🛋️",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      id: 8,
      title: "Carpet Cleaning",
      description:
        "Deep cleaning for carpets, removing embedded dirt and allergens to restore their original vibrancy and hygiene.",
      image: "./images/109.jpg ", // Placeholder
      icon: " 💠 ",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      id: 9,
      title: "Chair Cleaning",
      description:
        "Expert cleaning for various types of chairs, ensuring they are spotless and comfortable.",
      image: "./images/110.jpg ",
      icon: "🪑",
      gradient: "from-gray-400 to-slate-500",
    },
    {
      id: 10,
      title: "Mattress Cleaning",
      description:
        "Sanitize and refresh your mattresses, eliminating dust mites and allergens for a healthier sleep environment.",
      image: "./images/111.jpg ", // Placeholder
      icon: "🛏️",
      gradient: "from-lime-400 to-green-500",
    },
    {
      id: 11,
      title: "Balcony Cleaning",
      description:
        "Thorough cleaning of your balcony area, including railings, floors, and windows, to make it sparkling clean.",
      image: "./images/112.jpg ", // Placeholder
      icon: " 🌃",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      id: 12,
      title: "Windows And Door Cleaning",
      description:
        "Professional cleaning for all your windows and doors, ensuring streak-free glass and sparkling frames.",
      image: "./images/113.jpg ", // Placeholder
      icon: "🪟",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      id: 13,
      title: "Refrigerator Cleaning",
      description:
        "Deep cleaning and sanitization of your refrigerator, inside and out, removing odors and food residues.",
      image: "./images/114.jpg ", // Placeholder
      icon: " 🗄️ ",
      gradient: "from-violet-400 to-fuchsia-500",
    },
    {
      id: 14,
      title: "Water Tank Cleaning",
      description:
        "Specialized cleaning for water tanks, ensuring clean and safe water supply for your household or business.",
      image: "./images/116.jpg ", // Placeholder
      icon: "🌊",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 15,
      title: "Bedroom Cleaning",
      description:
        "Comprehensive cleaning for bedrooms, including dusting, vacuuming, and tidying, for a serene sleeping space.",
      image: "./images/117.jpg ", // Placeholder
      icon: "🛏️",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      id: 16,
      title: "Hotel Interior Cleaning",
      description:
        "High-standard interior cleaning services for hotels, ensuring guest satisfaction and a pristine environment.",
      image: "./images/118.jpg ",
      icon: "🏨",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      id: 17,
      title: "Microwave Cleaning",
      description:
        "Thorough cleaning of your microwave oven, removing food splatters and odors for hygienic cooking.",
      image: "./images/119.jpg ", // Placeholder
      icon: "📟 ",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      id: 18,
      title: "Cabinet Cleaning",
      description:
        "Detailed cleaning of kitchen and other cabinets, inside and out, for an organized and clean storage space.",
      image: "./images/120.jpg ", // Placeholder
      icon: "🚪",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      id: 19,
      title: "Party Cleaning",
      description:
        "Post-party cleanup services to take care of all the mess, leaving your space neat and tidy.",
      image: "./images/121.jpg ",
      icon: "🎉",
      gradient: "from-red-400 to-orange-500",
    },
    {
      id: 20,
      title: "Office Cleaning",
      description:
        "Reliable and efficient office cleaning services to maintain a clean, healthy, and productive workspace.",
      image: "./images/123.jpg ", // Placeholder
      icon: "🏢",
      gradient: "from-gray-500 to-slate-600",
    },
    {
      id: 21,
      title: "Villa Cleaning",
      description:
        "Exclusive cleaning services for villas, ensuring every part of your spacious home is impeccably clean.",
      image: "./images/106.png ",
      icon: "🏠",
      gradient: "from-yellow-500 to-amber-600",
    },
  ];

  const [scroll, setScroll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 700);
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    document.querySelectorAll(".service-card").forEach((card) => {
      observer.observe(card);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <span className="text-blue-700 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Premium Services
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tikawala Group prime Clean Solutions aims to offer expert and
            cost-effective cleaning services to its customers. Our deep cleaning
            costs are very reasonable. Take a look at it!
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-500 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-gray-500 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={`service-card group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden transform hover:-translate-y-2 ${
                visibleCards.has(`service-${service.id}`)
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Service Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Service Image */}
              <div className="overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Action Button */}
                <Link to="/form">
                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 group-hover:shadow-xl`}
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-700/50 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us with their
                cleaning needs. Book a consultation today and experience the
                difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/form">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Book Consultation
                  </button>
                </Link>
                <Link
                  to="https://wa.me/9801546490?text=Hello%20I%20want%20to%20connect%20with%20you
        "
                >
                  <button className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <Whatsapp />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Service;
