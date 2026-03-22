import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote:
        "Tikawala Group  prime Clean Solutions transformed my home! The team was on time, professional, and left every room spotless. I've never seen my kitchen sparkle like that before. Highly recommended!",
      name: "Abhishek",
      title: "",
      image: "./images/p1.jpg",
    },
    {
      id: 2,
      quote:
        "As a business owner, I needed a reliable cleaning service that wouldn't disrupt our operations. Tikawala Group  prime Clean Solutions has been nothing but dependable and thorough. Our office has never looked better.",
      name: "Radhika",
      title: "",
      image: "./images/p2.jpg",
    },
    {
      id: 3,
      quote:
        "Our front yard was a mess until Tikawala Group  prime Clean Solutions stepped in. Now it looks lush, well-trimmed, and always welcoming. They maintain it regularly and we love the results!",
      name: "Hariom",
      title: "",
      image: "./images/p3.jpg",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
            Our Testimonials
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-teal-600">Clients</span> Say About Us
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mx-auto max-w-2xl">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="text-6xl text-green-300 font-serif leading-none">
                        "
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="text-center">
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {testimonial.quote}
                      </p>

                      {/* Client Image */}
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                        />
                      </div>

                      {/* Separator Line */}
                      <div className="w-12 h-0.5 bg-teal-600 mx-auto mb-4"></div>

                      {/* Client Info */}
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-teal-600 font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? "bg-teal-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-slide
          </button>
        </div>
      </div>
    </div>
  );
}
