
import { useState, useEffect } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: "10+", label: "Years of Experience", icon: "📅" },
    { value: "500+", label: "Campaigns Executed", icon: "🚀" },
    { value: "98%", label: "Client Satisfaction", icon: "👍" },
    { value: "50+", label: "Industry Awards", icon: "🏆" },
  ];

  return (
    <section id="stats-section" className="py-20 bg-brand-blue text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Impact by the Numbers
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mt-6 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
