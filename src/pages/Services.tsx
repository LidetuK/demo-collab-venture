
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "outdoor-advertising",
      title: "Outdoor Advertising",
      description: "Impactful billboard campaigns, transit advertising, and street furniture that captures attention in high-traffic areas.",
      icon: "🏙️",
      color: "bg-blue-500"
    },
    {
      id: "event-planning",
      title: "Event Planning & Management",
      description: "End-to-end event solutions from concept development to on-site execution for corporate events, product launches, and more.",
      icon: "🎪",
      color: "bg-purple-500"
    },
    {
      id: "brand-identity",
      title: "Brand Identity & Creation",
      description: "Strategic development of brand elements including logos, color palettes, typography, and brand guidelines.",
      icon: "🎨",
      color: "bg-orange-500"
    },
    {
      id: "activations",
      title: "Activations & Experiential Marketing",
      description: "Creating memorable brand experiences that engage consumers directly through interactive installations and campaigns.",
      icon: "✨",
      color: "bg-green-500"
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description: "Strategic partnerships with relevant influencers to extend your brand's reach and credibility with target audiences.",
      icon: "👥",
      color: "bg-red-500"
    },
    {
      id: "media-production",
      title: "Media Production",
      description: "High-quality video, photography, and audio content creation for advertising campaigns across all platforms.",
      icon: "🎬",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Comprehensive advertising solutions to elevate your brand and connect with your audience.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`h-2 ${service.color}`}></div>
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center text-brand-blue font-medium hover:text-brand-red transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-black mb-4">Our Process</h2>
              <p className="text-gray-600">
                How we work with you to deliver exceptional advertising solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue/20"></div>
                
                {[
                  { step: 1, title: "Discovery", content: "We get to know your brand, goals, and audience to establish a foundation for success." },
                  { step: 2, title: "Strategy", content: "We develop a tailored approach to achieve your objectives within budget and timeline." },
                  { step: 3, title: "Creation", content: "Our creative team brings the strategy to life through compelling design and content." },
                  { step: 4, title: "Execution", content: "We implement the campaign across chosen channels with precision and attention to detail." },
                  { step: 5, title: "Evaluation", content: "We measure performance against KPIs and provide detailed reporting on results." }
                ].map((phase, index) => (
                  <div key={index} className="relative mb-8 md:mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                        <h3 className="text-xl font-bold text-brand-black mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600">{phase.content}</p>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
                          {phase.step}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
