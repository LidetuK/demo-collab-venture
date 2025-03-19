
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClientsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('clients-showcase');
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

  const industries = [
    {
      name: "Technology",
      logo: "bg-gradient-to-br from-blue-400 to-blue-600",
      clients: ["TechCorp", "InnoSystems", "CloudWave", "ByteWorks"]
    },
    {
      name: "Food & Beverage",
      logo: "bg-gradient-to-br from-yellow-400 to-orange-500",
      clients: ["Urban Eats", "FreshFlavor", "Gourmet Group", "Tasty Treats"]
    },
    {
      name: "Automotive",
      logo: "bg-gradient-to-br from-gray-700 to-gray-900",
      clients: ["GreenTech Mobility", "DriveNow", "AutoVision", "SpeedWay"]
    },
    {
      name: "Healthcare",
      logo: "bg-gradient-to-br from-green-400 to-teal-500",
      clients: ["MediCare", "Wellness Plus", "HealthHub", "VitalCare"]
    },
    {
      name: "Finance",
      logo: "bg-gradient-to-br from-purple-400 to-purple-700",
      clients: ["SecureTrust", "InvestSmart", "CapitalGrow", "WealthWise"]
    },
    {
      name: "Retail",
      logo: "bg-gradient-to-br from-red-400 to-red-700",
      clients: ["StyleMart", "TrendShop", "FashionHub", "RetailEdge"]
    }
  ];
  
  const firstRow = industries.slice(0, 3);
  const secondRow = industries.slice(3);

  return (
    <section id="clients-showcase" className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-white/80 mb-2">INDUSTRIES WE SERVE</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Our Expertise Across Sectors
          </h3>
          <div className="w-20 h-1 bg-white mx-auto mt-6 opacity-50"></div>
        </div>

        <div className="space-y-12">
          {/* First row */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={isVisible ? { x: [-1000, 0] } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {firstRow.map((industry, index) => (
                <div key={index} className="flex-shrink-0 w-72 md:w-80">
                  <div className={`${industry.logo} h-32 rounded-t-xl flex items-center justify-center`}>
                    <h4 className="text-2xl font-bold text-white">{industry.name}</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-b-xl">
                    <ul className="space-y-2">
                      {industry.clients.map((client, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-brand-red mr-2"></div>
                          <span>{client}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second row */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={isVisible ? { x: [1000, 0] } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {secondRow.map((industry, index) => (
                <div key={index} className="flex-shrink-0 w-72 md:w-80">
                  <div className={`${industry.logo} h-32 rounded-t-xl flex items-center justify-center`}>
                    <h4 className="text-2xl font-bold text-white">{industry.name}</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-b-xl">
                    <ul className="space-y-2">
                      {industry.clients.map((client, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-brand-red mr-2"></div>
                          <span>{client}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
