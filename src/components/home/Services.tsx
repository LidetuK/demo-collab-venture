
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
  Palette, 
  Rocket, 
  Users, 
  Video,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
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

  const services = [
    {
      title: "Outdoor Advertising",
      description: "Impactful billboard and outdoor campaigns that grab attention and drive brand awareness.",
      icon: <MapPin className="w-6 h-6 text-brand-blue" />,
      link: "/services/outdoor-advertising",
      delay: "0ms"
    },
    {
      title: "Event Planning & Management",
      description: "End-to-end event solutions that create memorable brand experiences.",
      icon: <Calendar className="w-6 h-6 text-brand-blue" />,
      link: "/services/event-planning",
      delay: "150ms"
    },
    {
      title: "Brand Identity & Creation",
      description: "Strategic brand development that establishes a unique market position.",
      icon: <Palette className="w-6 h-6 text-brand-blue" />,
      link: "/services/brand-identity",
      delay: "300ms"
    },
    {
      title: "Activations & Experiential",
      description: "Engaging brand experiences that forge meaningful connections with audiences.",
      icon: <Rocket className="w-6 h-6 text-brand-blue" />,
      link: "/services/activations",
      delay: "450ms"
    },
    {
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers that amplify your brand's message.",
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      link: "/services/influencer-marketing",
      delay: "600ms"
    },
    {
      title: "Media Production",
      description: "High-quality video and audio content that tells your brand's story.",
      icon: <Video className="w-6 h-6 text-brand-blue" />,
      link: "/services/media-production",
      delay: "750ms"
    }
  ];

  return (
    <section id="services-section" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-brand-red mb-2">OUR EXPERTISE</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-black">
            Comprehensive Advertising Solutions
          </h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? service.delay : '0ms',
              }}
            >
              <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-brand-blue font-medium hover:text-brand-red transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center">
            View All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
