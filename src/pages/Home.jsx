import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Slider from "../components/Slider";
import Work from "../components/Work";
import { Link } from "react-router-dom";
import Whatsapp from "../utility/Whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Clean Spaces.
                  <br />
                  <span className="text-green-500">Green Places.</span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional Residential & Commercial Cleaning, Landscaping &
                Turf Care – All in One Place
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/form">
                  <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get a Free Quote
                  </button>
                </Link>
                <Link to="/service">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl ">
                <div className="bg-gradient-to-br from-green-400 to-teal-600 p-8 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-teal-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">
                      Professional Service
                    </h3>
                    <p className="text-center text-white/90">
                      Residential & Commercial Solutions
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Landscaping</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Turf Care</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Cleaning</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm">Maintenance</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      <span className="text-sm font-semibold">
                        Tikawala Group prime Clean Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-40 w-8 h-8 bg-green-300 rounded-full opacity-40 animate-pulse"></div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <img src="./images/w1.jpg" alt="" />
              {/* Decorative elements */}
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="text-teal-600 font-semibold text-lg mb-4">
                  We Create Environments You'll Love
                </p>
                <div className="w-12 h-1 bg-green-500 mb-6"></div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Welcome to
                  <br />
                  <span className="text-green-500">
                    Tikawala Group prime Clean Solutions Cleaning Services
                  </span>
                </h2>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                At{" "}
                <span className="font-semibold text-teal-600">
                  Tikawala Group prime Clean Solutions
                </span>
                , we believe your space — inside and out — should be a
                reflection of freshness, order, and care. From spotless
                interiors to vibrant lawns, we handle it all so you can enjoy a
                clean, green, and stress-free environment.
              </p>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Core Values:
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Excellence in Service
                      </h4>
                      <p className="text-gray-600">
                        We deliver consistent, high-quality results that exceed
                        expectations every time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Integrity & Trust
                      </h4>
                      <p className="text-gray-600">
                        Building lasting relationships through honest
                        communication and reliable service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Eco-Conscious Care
                      </h4>
                      <p className="text-gray-600">
                        Using environmentally friendly products and practices to
                        protect your health and the planet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/service">
                  <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our service section */}
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gray-600 text-sm mb-4 tracking-wide">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-gray-800">
                Tikawala Group prime Clean Solutions Cleaning{" "}
              </span>
              <span className="text-teal-600">Services</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold">
                Tikawala Group prime Clean Solutions Cleaning Services
              </span>
              , we provide a comprehensive range of cleaning and maintenance
              solutions to cater to every house need
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <img src="./images/room.jpg" alt="" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Residential Cleaning
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deep, recurring, or move-in/move-out cleaning for spotless
                  homes.
                </p>
                <Link to="/service">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                    LEARN MORE
                    <svg
                      className="ml-2 w-4 h-4"
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

            {/* Commercial Cleaning */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-600 relative overflow-hidden">
                <img src="./images/m1.jpg" alt="" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Commercial Cleaning
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Office, retail, and facility cleaning tailored to your
                  business needs.
                </p>
                <Link to="/service">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                    LEARN MORE
                    <svg
                      className="ml-2 w-4 h-4"
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

            {/* Landscape & Turf */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
                <img src="./images/grass.jpg" alt="" />
                {/* Grass texture effect */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-600 to-transparent opacity-30"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Landscape & Turf
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lawn care, trimming, and turf upkeep for beautiful outdoor
                  spaces.
                </p>
                <Link to="/service">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                    LEARN MORE
                    <svg
                      className="ml-2 w-4 h-4"
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
          </div>
        </div>
      </div>
      {/* work progress section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-2">
              Work Process
            </p>
            <h2 className="text-4xl font-bold text-gray-800">
              How We Are <span className="text-teal-600">Working!</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Book */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Sun rays */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1 left-1/2 w-1 h-3 bg-yellow-200 transform -translate-x-1/2 rotate-0"></div>
                    <div className="absolute top-2 right-2 w-1 h-2 bg-yellow-200 transform rotate-45"></div>
                    <div className="absolute top-1/2 right-1 w-3 h-1 bg-yellow-200 transform -translate-y-1/2 rotate-90"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-2 bg-yellow-200 transform rotate-135"></div>
                    <div className="absolute bottom-1 left-1/2 w-1 h-3 bg-yellow-200 transform -translate-x-1/2 rotate-180"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-2 bg-yellow-200 transform rotate-225"></div>
                    <div className="absolute top-1/2 left-1 w-3 h-1 bg-yellow-200 transform -translate-y-1/2 rotate-270"></div>
                    <div className="absolute top-2 left-2 w-1 h-2 bg-yellow-200 transform rotate-315"></div>
                  </div>
                  {/* Book Now Button */}

                  <div className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded transform -rotate-3 z-10">
                    BOOK NOW!
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">BOOK</h3>
              <p className="text-gray-600 leading-relaxed">
                Select date, time and service you need our cleaning service
              </p>
            </div>

            {/* Step 2: Clean */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center relative">
                  {/* Cleaning brush icon */}
                  <div className="relative">
                    {/* Brush handle */}
                    <div className="w-1 h-8 bg-yellow-400 rounded-full transform rotate-45 absolute -top-2 left-1/2 -translate-x-1/2"></div>
                    {/* Brush head */}
                    <div className="w-6 h-4 bg-yellow-500 rounded-lg transform rotate-45"></div>
                    {/* Cleaning bubbles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
                    <div className="absolute top-2 -right-2 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                    <div className="absolute -bottom-1 right-1 w-1 h-1 bg-white rounded-full opacity-70"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">CLEAN</h3>
              <p className="text-gray-600 leading-relaxed">
                Tikawala Group prime Clean Solutions Cleaning take care of the
                cleaning professionally.
              </p>
            </div>

            {/* Step 3: Relax */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Person relaxing illustration */}
                  <div className="relative">
                    {/* Person sitting */}
                    <div className="w-8 h-6 bg-blue-500 rounded-t-full"></div>
                    <div className="w-6 h-4 bg-purple-500 rounded-b-lg mt-1 mx-auto"></div>
                    {/* Arms */}
                    <div className="absolute top-2 -left-1 w-3 h-1 bg-blue-400 rounded-full transform -rotate-45"></div>
                    <div className="absolute top-2 -right-1 w-3 h-1 bg-blue-400 rounded-full transform rotate-45"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">RELAX</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy a clean healthy space with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <Slider />
      <Work />
      <Whatsapp />
    </div>
  );
}
