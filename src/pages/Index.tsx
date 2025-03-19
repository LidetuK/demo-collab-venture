
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactCTA from "@/components/home/ContactCTA";
import Partners from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsShowcase from "@/components/home/ClientsShowcase";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Services />
        <Process />
        <Stats />
        <FeaturedProjects />
        <WhyChooseUs />
        <ClientsShowcase />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
