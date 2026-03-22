import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Whatsapp() {
  const phoneNumber = '+916201618024'; // Replace with your phone number
  const whatsappNumber = '6201618024'; // WhatsApp number without +
  const message = 'Hello! I would like to get in touch.'; // Optional pre-filled message

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={26} />
      </button>
    </div>
  );
}
