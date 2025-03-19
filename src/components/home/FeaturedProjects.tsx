
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects-section');
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

  const projects = [
    {
      title: "Summit Tech Conference",
      category: "Event Planning",
      description: "A tech industry conference with over 2,000 attendees, featuring interactive product showcases.",
      imageBg: "bg-gradient-to-br from-purple-500 to-blue-500",
      delay: "0ms",
      link: "/portfolio/summit-tech-conference"
    },
    {
      title: "Urban Eats Rebrand",
      category: "Brand Identity",
      description: "Complete brand overhaul for a restaurant chain, resulting in 40% increased customer engagement.",
      imageBg: "bg-gradient-to-br from-orange-500 to-red-500",
      delay: "150ms",
      link: "/portfolio/urban-eats-rebrand"
    },
    {
      title: "EcoMove Product Launch",
      category: "Experiential Marketing",
      description: "Interactive public installations in 5 major cities promoting a new eco-friendly transportation solution.",
      imageBg: "bg-gradient-to-br from-green-500 to-teal-500",
      delay: "300ms",
      link: "/portfolio/ecomove-product-launch"
    }
  ];

  return (
    <section id="projects-section" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div>
            <h2 className="text-xl font-semibold text-brand-red mb-2">OUR WORK</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black">
              Featured Projects
            </h3>
            <div className="w-20 h-1 bg-brand-blue mt-6"></div>
          </div>
          <Link 
            to="/portfolio" 
            className="mt-4 md:mt-0 inline-flex items-center text-brand-blue font-semibold hover:text-brand-red transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? project.delay : '0ms',
              }}
            >
              {/* Project image area */}
              <div className={`${project.imageBg} h-64 flex items-center justify-center p-8`}>
                <div className="w-full h-full rounded-lg border border-white/20 backdrop-blur-sm bg-white/10 flex items-center justify-center">
                  <h4 className="text-2xl font-bold text-white text-center px-4">{project.title}</h4>
                </div>
              </div>
              
              {/* Project info */}
              <div className="p-6 bg-white">
                <div className="text-brand-blue font-semibold text-sm mb-2">{project.category}</div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to={project.link}
                  className="inline-flex items-center text-brand-blue font-medium hover:text-brand-red transition-colors"
                >
                  View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
