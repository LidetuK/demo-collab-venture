
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services dropdown items
  const services = [
    { name: 'Outdoor Advertising', path: '/services/outdoor-advertising' },
    { name: 'Event Planning & Management', path: '/services/event-planning' },
    { name: 'Brand Identity & Creation', path: '/services/brand-identity' },
    { name: 'Activations & Experiential Marketing', path: '/services/activations' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Media Production', path: '/services/media-production' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 navbar-blur bg-white/80 shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/7980f2f1-e893-4f9a-923a-41a065eb846e.png"
              alt="Gull Advert Logo"
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-brand-black hover:text-brand-blue transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button
                className="flex items-center font-medium text-brand-black hover:text-brand-blue transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="font-medium text-brand-black hover:text-brand-blue transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="font-medium text-brand-black hover:text-brand-blue transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="font-medium text-brand-black hover:text-brand-blue transition-colors">
              Contact
            </Link>
            <Link to="/inquiries" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-brand-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
              <Link
                to="/"
                className="px-3 py-2 font-medium text-brand-black hover:text-brand-blue hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  className="flex items-center w-full px-3 py-2 font-medium text-brand-black hover:text-brand-blue hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="px-3 py-2 font-medium text-brand-black hover:text-brand-blue hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="px-3 py-2 font-medium text-brand-black hover:text-brand-blue hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 font-medium text-brand-black hover:text-brand-blue hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/inquiries"
                className="px-3 py-2 bg-brand-red text-white font-semibold rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
