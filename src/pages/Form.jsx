import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function CleaningContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendToWhatsApp = () => {
    // Validate required fields
    if (!formData.firstName.trim()) {
      alert("Please enter your first name");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `🧹 *New Cleaning Service Inquiry* 🧹

👤 *Customer Details:*
• Name: ${formData.firstName}
• Email: ${formData.email}
• Phone: ${formData.phone || "Not provided"}

💬 *Message:*
${formData.message || "No additional message"}

━━━━━━━━━━━━━━━━━━━━
📝 *Sent via Tikawala Group  prime Clean Solutions Cleaning Contact Form*
📅 ${new Date().toLocaleDateString()}
⏰ ${new Date().toLocaleTimeString()}`;

    // Business WhatsApp number (replace with actual number)
    const businessWhatsApp = "916201618024";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setTimeout(() => {
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      alert(
        "✅ Successfully redirected to WhatsApp! We'll respond within 24 hours."
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <h1 className="text-5xl lg:text-5xl font-black leading-tight text-center my-2.5">
        Book Cleaning
        <span className=" text-lime-400"> Appointment</span>
      </h1>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-lime-400 opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-lime-400 opacity-8 rounded-full animate-pulse"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="white" opacity="0.3" />
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.2" />
              <circle cx="60" cy="60" r="1" fill="white" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto  gap-16 items-center w-semifull">
          {/* Left Section - Company Info */}

          {/* Right Section - Contact Form */}
          <div className="bg-[#007a6a] bg-opacity-15 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white border-opacity-30 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-lime-400" />
                Send Us A Message
              </h2>
              <p className="text-teal-100 leading-relaxed">
                Drop a mail, we will answer all enquiries within 24 hours on
                business days.
              </p>
            </div>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  First Name <span className="text-lime-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-lime-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your first name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email Address <span className="text-lime-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-lime-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-lime-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={180}
                    className="w-full px-4 py-4 bg-white bg-opacity-90 rounded-xl border-0 focus:ring-3 focus:ring-lime-400 focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 font-medium resize-none"
                    placeholder="Tell us about your cleaning needs, preferred schedule, or any special requirements..."
                  />
                  <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded">
                    {formData.message.length} / 180
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={sendToWhatsApp}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform hover:scale-[1.02] active:scale-95 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-teal-900 hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-teal-800 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119" />
                    </svg>
                    Send to WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
