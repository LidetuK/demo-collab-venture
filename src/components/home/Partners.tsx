
import { useState, useEffect } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('partners-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    { name: "TechCorp", logo: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { name: "EcoGlobal", logo: "bg-gradient-to-br from-green-500 to-green-700" },
    { name: "FashionHub", logo: "bg-gradient-to-br from-purple-500 to-purple-700" },
    { name: "FoodDelight", logo: "bg-gradient-to-br from-yellow-500 to-yellow-700" },
    { name: "UrbanMove", logo: "bg-gradient-to-br from-red-500 to-red-700" },
    { name: "MediaPulse", logo: "bg-gradient-to-br from-indigo-500 to-indigo-700" },
  ];

  return (
    <section id="partners-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-brand-blue mb-2">TRUSTED BY</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-black">
            Our Partners & Clients
          </h3>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`h-24 rounded-lg shadow-md flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-full ${partner.logo} flex items-center justify-center text-white font-bold`}>
                {partner.name.substring(0, 2)}
              </div>
              <span className="ml-2 font-semibold text-brand-black">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
