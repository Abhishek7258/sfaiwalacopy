import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Map from "../utility/Map";
import Whatsapp from "../utility/Whatsapp";
export default function About() {
  return (
    <>
      <h1 className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 text-3xl lg:text-4xl font-bold leading-tight py-5 text-center text-white">
        About Us
      </h1>
      <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 flex items-center justify-center p-4">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Section */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Tikawala Group prime Clean Solutions Cleaning Services
                </h1>

                <p className="text-lg lg:text-xl text-emerald-100 leading-relaxed max-w-lg">
                  At Tikawala Group prime Clean Solutions, we believe your space
                  — inside and out — should be a reflection of freshness, order,
                  and care. From spotless interiors to vibrant lawns, we handle
                  it all so you can enjoy a clean, green, and stress-free
                  environment.
                </p>
              </div>
              <Link to="/form">
                <button className="bg-lime-400 hover:bg-lime-300 text-emerald-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Appointment
                </button>
              </Link>
            </div>

            {/* Right Image Section */}
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-[4/3] bg-gray-100">
                  {/* Modern Kitchen Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center relative overflow-hidden">
                    {/* Kitchen Interior Design */}
                    <img src="./images/kitchen.jpg" alt="" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lime-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-white rounded-full"></div>
        </div>
      </div>
      {/* new about section */}

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h3 className="text-teal-600 font-semibold text-lg mb-4">
              Who We Are
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Story About Tikawala Group prime Clean Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              What began as a small residential cleaning service quickly grew
              into a full-scale property maintenance company, serving both
              families and businesses across the city. Our clients love the
              convenience of a single provider for both indoor and outdoor
              upkeep.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Section */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-white relative">
                  {/* Cleaning supplies illustration */}
                  <img src="./images/w2.jpg" alt="" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl -z-10 opacity-20"></div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-teal-700 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At Tikawala Group prime Clean Solutions, our mission is to
                  deliver reliable, high-quality cleaning and landscaping
                  services that enhance the beauty, health, and comfort of every
                  space — inside and out. We are committed to using eco-friendly
                  practices, building trusted relationships, and exceeding
                  expectations with every job we do.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700 mb-6">
                  Our Values
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Integrity:
                      </span>
                      <span className="text-gray-600 ml-2">
                        We do what we say, every time.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Attention to Detail:
                      </span>
                      <span className="text-gray-600 ml-2">
                        Every corner, every blade of grass matters.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Sustainability:
                      </span>
                      <span className="text-gray-600 ml-2">
                        We use eco-conscious products and methods.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">
                        Customer Satisfaction:
                      </span>
                      <span className="text-gray-600 ml-2">
                        Your happiness is our priority.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/form">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Whatsapp />
      </div>
      <Map />
    </>
  );
}
