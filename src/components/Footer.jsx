import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.email) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ firstName: "", email: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-[50%] h-[50%] bg-teal-400 rounded-full flex items-center justify-center mr-3">
                <img src="./images/logo.jpg" alt="" />
              </div>
              <h2 className="text-2xl font-bold">
                Tikawala Group prime{" "}
                <span className="text-green-400">Clean Solutions</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tikawala Group prime Clean Solutions was founded with a clear
              mission: to combine professional-grade cleaning services with
              expert landscaping and turf maintenance — giving homeowners and
              businesses one trusted partner for a spotless interior and a
              thriving outdoor space.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/form"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              OUR SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Landscape & Turf Maintenance Service
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Industrial Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-gray-300 mb-1"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                />
              </div>
              <Link to="/form">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors font-medium text-sm"
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-green-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© 2025 Tikawala Group prime Clean Solutions | Unique Agency</p>
            <p className="mt-2 md:mt-0"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
