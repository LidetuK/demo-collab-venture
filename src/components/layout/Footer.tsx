
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/7980f2f1-e893-4f9a-923a-41a065eb846e.png" 
                alt="Gull Advert Logo" 
                className="h-16"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming brands through creative advertising solutions that inspire action and drive results.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/outdoor-advertising" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Outdoor Advertising
                </Link>
              </li>
              <li>
                <Link to="/services/event-planning" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Event Planning
                </Link>
              </li>
              <li>
                <Link to="/services/brand-identity" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Brand Identity
                </Link>
              </li>
              <li>
                <Link to="/services/activations" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Experiential Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/influencer-marketing" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Influencer Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-red shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Advertising Avenue<br />
                  Creative District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <a href="mailto:info@gulladvert.com" className="text-gray-400 hover:text-white transition-colors">
                  info@gulladvert.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Gull Advert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
