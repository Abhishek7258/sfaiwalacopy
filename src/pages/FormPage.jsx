import React, { useState } from "react";
import {
  Sparkles,
  Clock,
  Check,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
} from "lucide-react";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    serviceType: "",
    propertyType: "",
    propertySize: "",
    date: "",
    time: "",
    frequency: "",
    additionalServices: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Deep Home Cleaning",
    "Commercial Cleaning",
    "Empty Home Cleaning",
    "Interior Home Cleaning",
    "Bathroom Cleaning",
    "Kitchen Cleaning",
    "Sofa Cleaning",
    "Carpet Cleaning",
    "Chair Cleaning",
    "Mattress Cleaning",
    "Balcony Cleaning",
    "Windows And Door Cleaning",
    "Refrigerator Cleaning",
    "Water Tank Cleaning",
    "Bedroom Cleaning",
    "Hotel Interior Cleaning",
    "Microwave Cleaning",
    "Cabinet Cleaning",
    "Party Cleaning",
    "Office Cleaning",
    "Villa Cleaning",
  ];

  const propertyTypes = [
    "Apartment",
    "House",
    "Villa",
    "Office",
    "Commercial Space",
    "Hotel",
  ];

  const propertySizes = [
    "Small (1-2 rooms)",
    "Medium (3-4 rooms)",
    "Large (5+ rooms)",
    "Extra Large (Villa/Commercial)",
  ];

  const frequencies = ["One Time Service", "Weekly", "Bi-Weekly", "Monthly"];

  const additionalServices = [
    "Eco-Friendly Products",
    "Deep Sanitization",
    "Upholstery Protection",
    "Air Purification",
    "Pest Control",
    "Move In/Out Service",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        additionalServices: checked
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    let message = `*New Cleaning Service Booking Request*\n\n`;
    message += `*Personal Information:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n`;
    message += `City: ${formData.city}\n`;
    message += `ZIP Code: ${formData.zipCode}\n\n`;

    message += `*Service Details:*\n`;
    message += `Service Type: ${formData.serviceType}\n`;
    message += `Property Type: ${formData.propertyType}\n`;
    message += `Property Size: ${formData.propertySize}\n`;
    message += `Preferred Date: ${formData.date}\n`;
    message += `Preferred Time: ${formData.time}\n`;
    message += `Frequency: ${formData.frequency}\n\n`;

    if (formData.additionalServices.length > 0) {
      message += `*Additional Services:*\n`;
      formData.additionalServices.forEach((service) => {
        message += `• ${service}\n`;
      });
      message += `\n`;
    }

    if (formData.message) {
      message += `*Additional Notes:*\n${formData.message}`;
    }

    // Your WhatsApp number (replace with your actual number)
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number (with country code, no + or spaces)

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-full shadow-lg">
              <Sparkles className="text-white" size={48} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Book Your Cleaning Service
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs. Fill out the
            form below and we'll get back to you within 2 hours.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-6 py-4 rounded-lg mb-8 flex items-center shadow-md animate-pulse">
            <Check className="mr-3 flex-shrink-0" size={28} />
            <div>
              <p className="font-bold text-lg">Success!</p>
              <p>
                Your booking request has been submitted. We'll contact you
                shortly.
              </p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Calendar className="mr-3" size={28} />
              Booking Information
            </h2>
          </div>

          <div className="p-8">
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center border-b pb-3">
                <User className="mr-3 text-blue-500" size={28} />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="New York"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="123 Main Street, Apartment 4B"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Pin Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center border-b pb-3">
                <Sparkles className="mr-3 text-blue-500" size={28} />
                Service Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Select Cleaning Service *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Property Size *
                  </label>
                  <select
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select size</option>
                    {propertySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Service Frequency *
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select frequency</option>
                    {frequencies.map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Additional Services (Optional)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalServices.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition"
                  >
                    <input
                      type="checkbox"
                      value={service}
                      checked={formData.additionalServices.includes(service)}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Notes or Special Instructions
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                placeholder="Please let us know if you have any specific requirements, allergies, or areas that need special attention..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-2xl transform hover:scale-[1.02] text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Send Booking via WhatsApp
            </button>

            <p className="text-center text-gray-500 text-sm mt-4">
              Click to send your booking request directly to our WhatsApp
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <Clock className="text-blue-600" size={32} />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              Quick Response
            </h3>
            <p className="text-gray-600">
              We'll contact you within 2 hours to confirm your booking
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-4 rounded-full">
                <Sparkles className="text-indigo-600" size={32} />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              Professional Team
            </h3>
            <p className="text-gray-600">
              Trained & certified cleaning professionals
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <Check className="text-purple-600" size={32} />
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              Satisfaction Guaranteed
            </h3>
            <p className="text-gray-600">
              100% satisfaction or your money back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
