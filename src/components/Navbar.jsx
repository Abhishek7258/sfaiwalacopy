import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Mail, MapPin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full sticky top-0 left-0 z-50 box-border">
      {/* Top banner */}
      <div className=" bg-[#007a6a] text-white py-3 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="font-semibold mb-2 md:mb-0">
            DISCOUNT UP TO 20% FOR NEW MEMBERS!
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>tikawalagroupprimecleansolutions@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Bokaro Jharkhand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center  bg-white h-16">
            {/* Logo */}
            <div className="flex-shrink-0 overflow-hidden bg-white lg:h-19  ">
              <Link to="/" className="text-2xl font-bold text-green-600">
                {/* <span className="text-green-700">N</span>UTRIDATE
                <div className="text-xs text-gray-500 mt-1">WITH PRIYANKA</div> */}
                <span>
                  <img
                    src="./images/logo.jpg"
                    alt=""
                    className="lg:h-full lg:w-full h-[60px] w-[100px]"
                  />
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium ${
                  isActive("/")
                    ? "text-green-600"
                    : "text-gray-700 hover:border-b-2 border-[#007a6a]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/service"
                className={`font-medium ${
                  isActive("/service")
                    ? "text-green-600"
                    : "text-gray-700 hover:border-b-2 border-[#007a6a]"
                }`}
              >
                Our Services
              </Link>
              <Link
                to="/about"
                className={`font-medium ${
                  isActive("/about")
                    ? "text-green-600"
                    : "text-gray-700 hover:border-b-2 border-[#007a6a]"
                }`}
              >
                About us
              </Link>

              <Link
                to="/contact"
                className={`font-medium ${
                  isActive("/contact")
                    ? "text-green-600"
                    : "text-gray-700 hover:border-b-2 border-[#007a6a]"
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="py-2">
                <Link
                  to="/"
                  className={`block px-4 py-3 ${
                    isActive("/")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>

                {/* Mobile Programs Menu */}

                <Link
                  to="/service"
                  className={`block px-4 py-3 border-t border-gray-100 ${
                    isActive("/service")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-green-50 hover: border border-[#007a6a]"
                  }`}
                  onClick={closeMenu}
                >
                  Our Services
                </Link>
                <Link
                  to="/about"
                  className={`block px-4 py-3 border-t border-gray-100 ${
                    isActive("/about")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={closeMenu}
                >
                  About us
                </Link>
                <Link
                  to="/contact"
                  className={`block px-4 py-3 border-t border-gray-100 ${
                    isActive("/contact")
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
