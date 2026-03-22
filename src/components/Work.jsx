import React from "react";
import { Sparkles, Home, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      {/* Main Banner Container */}
      <div className="relative max-w-4xl w-semifull h-[50%]">
        {/* Background with gradient and pattern */}
        <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Decorative icons */}
          <div className="absolute top-8 right-8 opacity-20">
            <Sparkles
              className="w-8 h-8 text-white animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <Home className="w-6 h-6 text-white animate-bounce" />
          </div>
          <div className="absolute top-1/3 left-1/4 opacity-20">
            <Leaf className="w-5 h-5 text-white animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Top badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="bg-lime-400/20 backdrop-blur-sm px-6 py-2 rounded-full border border-lime-400/30">
                <span className="text-lime-200 text-sm font-medium tracking-wider uppercase">
                  Work With Us
                </span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-fade-in-up">Make Your Space</span>
              <span className="block bg-gradient-to-r from-lime-200 to-emerald-200 bg-clip-text text-transparent animate-fade-in-up delay-300">
                Shine,
              </span>
              <span className="block animate-fade-in-up delay-500">
                Inside and Out
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-700">
              From spotless rooms to vibrant lawns, Tikawala Group prime Clean
              Solutions handles it all — book your complete property care today.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up delay-1000">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-emerald-900 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    CONTACT US
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Bottom decorative elements */}
            <div className="mt-16 flex justify-center space-x-8 opacity-30">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-ping delay-200"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-ping delay-400"></div>
            </div>
          </div>

          {/* Glowing edge effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 animate-pulse"></div>
        </div>

        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
      </div>

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
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
