import React from "react";
import { Check } from "lucide-react"; // Or use any icon library

const WhyChooseUs = () => {
  const features = [
  {
    title: "Customer Focused Reviews",
    description:
      "We prioritize honest feedback and continuously improve our services to ensure every client enjoys a clean and comfortable experience.",
  },
  {
    title: "We Are Committed",
    description:
      "Our team is dedicated to delivering reliable, high–quality cleaning solutions using modern techniques and eco-friendly products.",
  },
];


  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <p className="text-blue-600 font-semibold text-lg">Why Choose Us</p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Doing Business Since 2014 in Cleaning Service.
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Hygine India , we combine modern cleaning techniques with
                trusted methods to deliver spotless, fresh, and hygienic spaces.
                Our team is committed to maintaining the highest standards,
                ensuring every corner receives the care it deserves.
              </p>
              <p>
                Over the years, we’ve continued to refine our process, adopting
                advanced equipment and eco-friendly products to provide safer
                and more effective cleaning results. From homes to commercial
                spaces, Hygine India remains dedicated to quality, consistency,
                and customer satisfaction.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check
                        className="w-6 h-6 text-blue-600"
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="./images/model.jpg"
              alt="Professional cleaning service staff with cleaning supplies"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
