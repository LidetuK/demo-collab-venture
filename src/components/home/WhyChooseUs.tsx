
import { useState, useEffect } from "react";
import { Shield, Clock, CheckCircle, Award, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-choose-us');
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

  const reasons = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Strategic Planning",
      description: "We develop comprehensive plans that align with your business objectives and target audience preferences."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Award-Winning Creativity",
      description: "Our innovative approach has earned recognition across the industry for breakthrough campaigns."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Data-Driven Results",
      description: "We measure everything and optimize campaigns based on real-time performance analytics."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Timely Delivery",
      description: "We understand the importance of timing in advertising and consistently deliver on schedule."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Experienced Team",
      description: "Our diverse team brings decades of combined experience across all advertising disciplines."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "End-to-End Service",
      description: "From concept to execution and analysis, we handle every aspect of your advertising campaign."
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-blue opacity-5"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-red opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-brand-red mb-2">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-black">
            What Sets Us Apart
          </h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6"></div>
          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            At Gull Advert, we combine strategic thinking, creative excellence, and flawless execution 
            to deliver advertising campaigns that exceed expectations and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
