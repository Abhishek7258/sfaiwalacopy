import React from 'react'

const Map = () => {
  return (
    <div>
      <br /><br />
      <div className="grid grid-cols-1">
          {/* Embedded Location Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">Visit us at our clinic Plot No.: C-20, Sector-5, Centre Market, B.S. City,Jharkhand</p>
            </div>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14617.104774619871!2d86.14961992500116!3d23.66607896099285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423d31afc2879%3A0xfad0522040b6280a!2sSector%205%2C%20Bokaro%20Steel%20City%2C%20Jharkhand%20827006!5e0!3m2!1sen!2sin!4v1752997895150!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading=""
                referrerPolicy="no-referrer-when-downgrade"
                title=""
              ></iframe>
            </div>
            
          </div>

          {/* Contact Form or Additional Info */}
          {/* <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div> */}
        </div>
    </div>
  )
}

export default Map