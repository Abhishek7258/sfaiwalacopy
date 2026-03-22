import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why are commercial cleaning services important?",
      answer: "Commercial cleaning services are essential for maintaining a healthy, professional work environment. They help improve employee productivity, create positive first impressions for clients, ensure compliance with health and safety standards, and extend the lifespan of office furniture and equipment through proper maintenance."
    },
    {
      question: "What can you expect from a commercial cleaning company?",
      answer: "A professional commercial cleaning company provides thorough cleaning services including dusting, vacuuming, sanitizing surfaces, restroom maintenance, trash removal, and floor care. You can expect trained staff, reliable scheduling, quality equipment, eco-friendly products, and customized cleaning plans tailored to your business needs."
    },
    {
      question: "How do I choose commercial cleaning services?",
      answer: "When choosing commercial cleaning services, consider factors such as their experience and reputation, insurance and certifications, range of services offered, flexibility in scheduling, pricing transparency, quality of cleaning products used, and customer reviews. Request quotes from multiple providers and ask for references before making your decision."
    },
    {
      question: "What are the areas being covered under commercial cleaning?",
      answer: "Commercial cleaning typically covers office spaces, conference rooms, lobbies and reception areas, restrooms, break rooms and kitchens, hallways and corridors, windows and glass surfaces, floors and carpets, and common areas. Additional services may include exterior cleaning, specialized equipment cleaning, and deep cleaning services."
    },
    {
      question: "What does industrial cleaning include?",
      answer: "Industrial cleaning includes specialized services for manufacturing facilities, warehouses, and industrial sites. This encompasses heavy-duty floor cleaning, machinery and equipment degreasing, high-pressure washing, removal of industrial waste, cleaning of production areas, ventilation system cleaning, and compliance with industrial hygiene and safety standards."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden bg-white hover:border-gray-400 transition-colors"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4 text-base">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-700" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-700" />
                )}
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-200">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}