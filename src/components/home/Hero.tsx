
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay before showing the animations for a more natural feel
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      title: "Creative Solutions That Inspire Action",
      description: "We transform ideas into impactful advertising campaigns that connect brands with their audience across all media channels.",
      background: "bg-gradient-to-br from-brand-blue/90 to-brand-blue/70",
      stats: { title: "Client Satisfaction", value: "98%" }
    },
    {
      title: "Outdoor Advertising Excellence",
      description: "Create memorable brand experiences with strategic billboard placements and outdoor media that captures attention.",
      background: "bg-gradient-to-br from-brand-red/90 to-brand-red/70",
      stats: { title: "Brand Visibility", value: "87%" }
    },
    {
      title: "Event Planning & Management",
      description: "From concept to execution, we deliver memorable events that exceed expectations and achieve business objectives.",
      background: "bg-gradient-to-br from-purple-600/90 to-purple-600/70",
      stats: { title: "Successful Events", value: "200+" }
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 z-0"></div>

      {/* Background shapes */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-brand-blue opacity-10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-red opacity-10 rounded-full filter blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black">
              <span className="text-gradient">Gull Advert</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Transforming ideas into impactful advertising campaigns that connect brands with their audience across all media channels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/inquiries" className="btn-primary flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-outline flex items-center">
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero image/Slider */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <Carousel className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                      {/* Slide content */}
                      <div className={`absolute inset-0 ${slide.background} rounded-2xl flex items-center justify-center`}>
                        <div className="text-white text-center p-8">
                          <div className="animate-float">
                            <svg className="w-16 h-16 mx-auto mb-6 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 16V8.00002C21.0001 7.6493 20.9296 7.30483 20.7933 6.99264C20.657 6.68045 20.4584 6.40584 20.213 6.18802L13.213 0.188017C12.7515 -0.193686 12.13 -0.0582456 11.8162 0.471394C11.5024 1.00103 11.6379 1.68177 12.101 1.99517L18.07 7.00002H13C11.3431 7.00002 10 8.34317 10 10V21C10 22.6569 11.3431 24 13 24H18C19.6569 24 21 22.6569 21 21V20H23C23.5523 20 24 19.5523 24 19V17C24 16.4477 23.5523 16 23 16H21ZM13 21C13 20.4477 13.4477 20 14 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H14C13.4477 22 13 21.5523 13 21Z" fill="currentColor" />
                              <path d="M0 4C0 2.34315 1.34315 1 3 1H6.67452C7.16407 1 7.5 1.33593 7.5 1.82548V12.1745C7.5 12.6641 7.16407 13 6.67452 13H1.82548C1.33593 13 1 12.6641 1 12.1745V5C1 4.44772 0.552285 4 0 4Z" fill="currentColor" fillOpacity="0.5" />
                            </svg>
                          </div>
                          <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                          <p className="text-white/80">
                            {slide.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red rounded-full opacity-20"></div>
                      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white rounded-full opacity-20"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            </Carousel>

            {/* Floating stats cards */}
            <div className="absolute -bottom-5 -left-5 glass-card p-4 animate-float shadow-lg">
              <div className="text-sm font-semibold text-brand-blue">Client Satisfaction</div>
              <div className="text-2xl font-bold text-brand-black">98%</div>
            </div>
            
            <div className="absolute -top-5 -right-5 glass-card p-4 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-semibold text-brand-blue">Successful Campaigns</div>
              <div className="text-2xl font-bold text-brand-black">500+</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-brand-blue flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-brand-blue rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
