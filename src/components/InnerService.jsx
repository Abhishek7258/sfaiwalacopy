import React from 'react';
import { Star, Check } from 'lucide-react';
import FormPage from '../pages/FormPage';
import Faq from './Faq';
import { useLocation } from 'react-router-dom';

export default function InnerService() {
  const { state } = useLocation();
  const { Title, description, image } = state || {};

  const features = [
    "Best price from others | ISO Verified Company",
    "Guaranteed Satisfaction or Free re-service*",
    "Professional Experts | In-house technicians",
    "15+ lakh Happy Customers in India"
  ];

  return (
    <>
      <div className="md:flex">

        {/* Left Section */}
        <div className="w-full mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8">
          <div className="space-y-4">

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {Title} <br />
              In Bangalore
            </h1>

            <p className="text-gray-700 text-lg">
              {description}
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-orange-500 text-white px-3 py-1 rounded gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white" />
                ))}
                <span className="ml-2 font-bold border-l border-white pl-2">5.0</span>
              </div>
              <span className="text-gray-800 font-medium">
                Based on 8378 Review(s)
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <span className="text-gray-800 text-base leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl mr-5 overflow-hidden">
          <img src={image} alt="Service" className="rounded-lg shadow-lg" />
        </div>

      </div>

      <Faq />
      <FormPage />
    </>
  );
}
