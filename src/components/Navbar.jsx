import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Home, ShoppingBag, CreditCard, Info, Phone, Menu, X, Video } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/"  className="flex-shrink-0">
              <img className="h-10" src={logo} alt="Logo" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/"  className="flex items-center space-x-2 text-primary font-semibold hover:text-hoverColor transition-colors duration-200">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <a href="#courses" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <ShoppingBag size={18} />
              <span>Our Courses</span>
            </a>
          
            <a href="#about"  className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <Info size={18} />
              <span>About</span>
            </a>

            <a href="#lectures" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <Video size={18} />
              <span>Video Lectures</span>
            </a>
            <a href="https://wa.me/2348100000000" target='_blank' rel="noreferrer" className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-hoverColor transition-colors duration-200">
              <Phone size={18} />
              <span>Contact</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-hoverColor hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-primary bg-gray-50">
              <Home size={18} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <ShoppingBag size={18} />
              <span>Our Courses</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <CreditCard size={18} />
              <span>Mentors</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <Info size={18} />
              <span>About</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-hoverColor hover:bg-gray-50">
              <Phone size={18} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;