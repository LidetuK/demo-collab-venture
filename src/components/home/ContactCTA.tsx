
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-8 border-white/20"></div>
          <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full border-8 border-white/10"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full border-8 border-white/15"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <MessageCircle size={48} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Transform Your Brand's Presence?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Let's discuss how our advertising solutions can help your business reach new heights.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-brand-blue font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
            <Link 
              to="/inquiries" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-all duration-300"
            >
              Request a Quote <ArrowRight className="inline ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
