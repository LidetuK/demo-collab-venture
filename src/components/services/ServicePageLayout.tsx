
import { ReactNode, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

const ServicePageLayout = ({ title, description, icon, children }: ServicePageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-brand-blue to-brand-blue/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm mb-6 text-white/80">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <Link to="/services" className="hover:text-white">Services</Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <span>{title}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{icon}</div>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              </div>
              <p className="text-xl text-white/90 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        {children}

        {/* CTA */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
