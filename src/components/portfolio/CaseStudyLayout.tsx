
import { ReactNode, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

interface CaseStudyLayoutProps {
  title: string;
  category: string;
  client: string;
  date: string;
  coverBg: string;
  children: ReactNode;
}

const CaseStudyLayout = ({ title, category, client, date, coverBg, children }: CaseStudyLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className={`relative py-20 md:py-32 ${coverBg} text-white`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm mb-6 text-white/80">
                <Link to="/" className="hover:text-white">Home</Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
                <ChevronRight className="mx-2 h-4 w-4" />
                <span>{title}</span>
              </div>
              
              <div className="mb-2">
                <span className="bg-brand-red text-white px-3 py-1 rounded-full text-sm">{category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div>
                  <div className="text-sm uppercase">Client</div>
                  <div className="font-semibold">{client}</div>
                </div>
                <div>
                  <div className="text-sm uppercase">Date</div>
                  <div className="font-semibold">{date}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        {children}

        {/* More Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black">More Case Studies</h2>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-red transition-colors"
              >
                View All <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/portfolio/urban-eats-rebrand" className="group">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 h-48 rounded-xl shadow-md group-hover:shadow-xl transition-all overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <h3 className="text-xl font-bold text-white text-center">Urban Eats Rebrand</h3>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-brand-blue text-sm">Brand Identity</div>
                </div>
              </Link>
              <Link to="/portfolio/ecomove-product-launch" className="group">
                <div className="bg-gradient-to-br from-green-500 to-teal-500 h-48 rounded-xl shadow-md group-hover:shadow-xl transition-all overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <h3 className="text-xl font-bold text-white text-center">EcoMove Product Launch</h3>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-brand-blue text-sm">Experiential Marketing</div>
                </div>
              </Link>
              <Link to="/portfolio/summit-tech-conference" className="group">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 h-48 rounded-xl shadow-md group-hover:shadow-xl transition-all overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <h3 className="text-xl font-bold text-white text-center">Summit Tech Conference</h3>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-brand-blue text-sm">Event Planning</div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
