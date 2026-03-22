import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ChevronUp } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Your WhatsApp Business Number (with country code, no + or spaces)
  const WHATSAPP_NUMBER = '+916201618024'; // Example: India number

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create formatted message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Message:* ${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Optional: Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4">
                Get In Touch With Us
              </h2>
              <p className="text-gray-600 text-lg">
                Have questions about our cleaning services? Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4 rounded-full flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone Number</h3>
                  <a 
                    href="tel:+6201618024" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +91 6201618024
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4 rounded-full flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Email Address</h3>
                  <a 
                    href="mailto:info@hygineindia.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    info@hygineindia.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4 rounded-full flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Office Location</h3>
                  <p className="text-gray-600">
                    Bokaro , Jharkhand , India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#1a237e] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <p className="text-blue-100">Monday - Friday: 09.00am - 10.00pm</p>
              <p className="text-blue-100">Saturday: 10.00am - 06.00pm</p>
              <p className="text-blue-100">Sunday: Closed</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[#1a237e] mb-6">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="">Choose a service</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Floor Cleaning">Floor Cleaning</option>
                  <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                  <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your cleaning requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you'll be redirected to WhatsApp to send your message directly to us.
              </p>
            </form>
          </div>
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

export default Form;
