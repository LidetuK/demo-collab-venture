
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      quote: "Gull Advert transformed our brand presence with their innovative outdoor advertising campaign. The results exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova Inc."
    },
    {
      quote: "Their team's creativity and professionalism made our product launch event a tremendous success. We'll definitely be working with them again.",
      author: "Michael Chen",
      position: "CEO",
      company: "Elevate Brands"
    },
    {
      quote: "The comprehensive brand identity package Gull Advert developed for us perfectly captured our vision while giving us room to grow.",
      author: "Jessica Williams",
      position: "Brand Manager",
      company: "Horizon Solutions"
    }
  ];

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section-padding bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-white/80 mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h3>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} />
          </div>
          
          {/* Testimonial slider */}
          <div className="relative h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="text-center">
                  <p className="text-xl md:text-2xl mb-8 italic text-white/90 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mb-3">
                    <h4 className="text-lg font-bold">{testimonial.author}</h4>
                    <p className="text-white/80">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
