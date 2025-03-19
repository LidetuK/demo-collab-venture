
import { useState, useEffect } from "react";
import { Lightbulb, Pencil, Code, Rocket, ArrowRight } from "lucide-react";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('process-section');
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

  // Auto-change active step every 3 seconds
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discover",
      description: "We start by understanding your business goals, target audience, and market position to develop a strategic foundation.",
      color: "blue"
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "Design",
      description: "Our creative team develops concepts and designs that align with your brand identity and campaign objectives.",
      color: "purple"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Develop",
      description: "We build and prepare all campaign elements, from physical materials to digital assets, ensuring quality at every step.",
      color: "orange"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deploy",
      description: "We execute the campaign across all channels, closely monitoring performance and making real-time adjustments for optimal results.",
      color: "green"
    }
  ];

  return (
    <section id="process-section" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-brand-red mb-2">OUR APPROACH</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-black">
            How We Work
          </h3>
          <div className="w-20 h-1 bg-brand-blue mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Process Steps - Desktop View */}
          <div className="hidden lg:block">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-6 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`relative inline-flex w-20 h-20 rounded-full items-center justify-center mb-6 mx-auto 
                      ${index === activeStep 
                        ? `bg-brand-${step.color === 'blue' ? 'blue' : step.color === 'purple' ? 'red' : step.color === 'orange' ? 'red/80' : 'blue/80'} text-white` 
                        : 'bg-white text-gray-600'} 
                      shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg
                      ${index === activeStep ? 'scale-110' : 'hover:scale-105'}`}
                  >
                    <div className="relative">
                      {step.icon}
                    </div>
                    
                    {/* Step number */}
                    <div className={`absolute -right-2 -top-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold 
                      ${index === activeStep ? 'bg-white text-brand-black' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  
                  <h4 className={`text-xl font-bold mb-2 transition-colors ${index === activeStep ? 'text-brand-blue' : 'text-brand-black'}`}>
                    {step.title}
                  </h4>
                  <p className={`transition-opacity duration-300 ${index === activeStep ? 'opacity-100' : 'opacity-70'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Process Steps - Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start bg-white p-6 rounded-xl shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div 
                  className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center mr-4
                    bg-brand-${step.color === 'blue' ? 'blue' : step.color === 'purple' ? 'red' : step.color === 'orange' ? 'red/80' : 'blue/80'} text-white
                  `}
                >
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 mr-2">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-brand-black">{step.title}</h4>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Large animated step display */}
          <div className={`mt-16 lg:mt-24 p-10 rounded-2xl shadow-xl transition-all duration-500 transform 
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            ${activeStep === 0 ? 'bg-gradient-to-r from-brand-blue to-blue-400' : 
              activeStep === 1 ? 'bg-gradient-to-r from-purple-600 to-brand-red' :
              activeStep === 2 ? 'bg-gradient-to-r from-orange-500 to-brand-red' :
              'bg-gradient-to-r from-green-500 to-teal-500'} text-white`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{steps[activeStep].title}</h3>
                </div>
                <p className="text-white/90 text-lg mb-6">
                  {steps[activeStep].description}
                </p>
                <div className="flex space-x-3">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeStep ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="aspect-square rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8 animate-float">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{steps[activeStep].icon}</div>
                    <div className="text-2xl font-bold">Step {activeStep + 1}</div>
                    <div className="text-xl">{steps[activeStep].title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
