import { useEffect, useRef } from "react";

const Partners = () => {
  const sliderRef = useRef(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const moveSlider = () => {
      if (slider) {
        slider.scrollLeft += 1; // Adjust speed as needed
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveSlider);
    };

    animationFrame = requestAnimationFrame(moveSlider);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const partners = [
    "/1.png", "/3.png",
    "/4.png", "/5.png", "/6.png",
    "/7.png", "/9.png",
    "/10.png",  "/12.png",
    "/13.png", "/14.png",
    "/16.png", "/17.png", "/18.png",
    "/19.png", "/20.png", 
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-brand-blue mb-2">TRUSTED BY</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-brand-black">Our Partners & Clients</h3>
        <div className="w-20 h-1 bg-brand-red mx-auto mt-6"></div>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div ref={sliderRef} className="flex space-x-6 whitespace-nowrap w-full overflow-hidden">
          {[...partners, ...partners].map((src, index) => (
            <img key={index} src={src} alt="Partner Logo" className="h-24 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
