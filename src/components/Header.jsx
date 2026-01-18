import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPaw, FaShoppingCart, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <FaPaw className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-800">PetShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-emerald-600 ${
                  isActive(link.path) 
                    ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link 
                to="/products" 
                className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 transition-colors duration-200 font-medium flex items-center gap-2"
              >
                <FaShoppingCart />
                Shop Now
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium flex items-center gap-2"
              >
                <FaCalendarAlt />
                Book Service
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-gray-600 text-xl" />
            ) : (
              <FaBars className="text-gray-600 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link 
                  to="/products" 
                  className="px-4 py-3 bg-emerald-100 text-emerald-700 rounded-full text-center hover:bg-emerald-200 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-3 bg-emerald-600 text-white rounded-full text-center hover:bg-emerald-700 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Service
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;