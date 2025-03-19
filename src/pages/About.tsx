
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">About Gull Advert</h1>
              <p className="text-xl text-gray-600">
                A passionate team of creative professionals dedicated to transforming brands through innovative advertising solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-black mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Gull Advert began with a simple mission: to help brands connect with their audiences in meaningful ways. What started as a small team of passionate marketers has grown into a full-service advertising agency trusted by clients across industries.
                </p>
                <p className="text-gray-600 mb-4">
                  We've built our reputation on creativity, strategic thinking, and delivering measurable results. Our team brings together diverse talents and perspectives to create advertising that doesn't just capture attention—it inspires action.
                </p>
                <p className="text-gray-600">
                  Over the years, we've evolved with the changing media landscape, embracing new technologies and platforms while staying true to the fundamentals of great advertising: powerful storytelling and deep understanding of human behavior.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-blue to-blue-500 h-80 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90">
                    To be the most innovative and impactful advertising agency, creating campaigns that transcend traditional media and become part of culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-black mb-4">Our Values</h2>
              <p className="text-gray-600">
                The principles that guide our work and define our approach to advertising.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We push boundaries and think beyond conventional approaches to create fresh, impactful advertising.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-8.092.59L4.121 10.5a3 3 0 00.879-2.128z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Integrity</h3>
                <p className="text-gray-600 text-center">
                  We build trust through honest communication, transparency, and delivering on our promises.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Collaboration</h3>
                <p className="text-gray-600 text-center">
                  We work closely with our clients, valuing their input and fostering partnerships that lead to the best results.
                </p>
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

export default About;
