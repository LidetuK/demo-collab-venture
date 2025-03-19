
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";
import { ChartIcon, Users, Zap, CheckCircle, ArrowUpRight } from "lucide-react";

const SummitTechConference = () => {
  return (
    <CaseStudyLayout
      title="Summit Tech Conference"
      category="Event Planning"
      client="TechCorp Inc."
      date="June 2023"
      coverBg="bg-gradient-to-br from-purple-600 to-blue-600"
    >
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-black mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  TechCorp approached Gull Advert to organize their annual Summit Tech Conference, a flagship event in the tech industry calendar. The client wanted to create an immersive experience that would showcase their latest innovations while providing valuable networking opportunities for over 2,000 attendees.
                </p>
                <p>
                  Our team was responsible for the end-to-end planning and execution of the conference, including venue selection, stage design, interactive product showcases, and the overall attendee experience.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-black mb-4">Project Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Create an immersive brand experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Seamlessly showcase new products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Facilitate meaningful networking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Generate media coverage and social buzz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-black mb-3">Challenges & Solutions</h2>
            <div className="w-20 h-1 bg-brand-blue mb-8"></div>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in">
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <Zap className="w-6 h-6 text-brand-red mr-3" />
                  Complex Logistics
                </h3>
                <p className="text-gray-700 mb-4">
                  Coordinating a multi-day event with multiple stages and over 2,000 attendees presented significant logistical challenges.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We deployed a dedicated team of event specialists who created a comprehensive event management plan, using digital solutions for registration, scheduling, and attendee tracking.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <ChartIcon className="w-6 h-6 text-brand-red mr-3" />
                  Technology Integration
                </h3>
                <p className="text-gray-700 mb-4">
                  The client wanted cutting-edge technology integration throughout the event, both for showcasing products and enhancing the attendee experience.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We designed interactive product demonstration zones with touchscreen interfaces, AR experiences, and a custom event app that provided real-time information and networking opportunities.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <Users className="w-6 h-6 text-brand-red mr-3" />
                  Networking Opportunities
                </h3>
                <p className="text-gray-700 mb-4">
                  Creating meaningful networking opportunities for a diverse group of attendees was essential for the event's success.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We incorporated structured networking sessions, interest-based meetups, and digital matchmaking through the event app, resulting in over 15,000 meaningful connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-black mb-3 text-center">Results & Impact</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">2,400+ Attendees</h3>
              <p className="text-gray-600">
                Exceeded attendance targets by 20%, with attendees from 18 different countries.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpRight className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">48% Increase</h3>
              <p className="text-gray-600">
                in social media engagement and brand mentions compared to the previous year's event.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">95% Satisfaction</h3>
              <p className="text-gray-600">
                Attendee satisfaction rate, with 87% expressing interest in attending the next year's conference.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <blockquote className="text-lg italic text-gray-700 relative">
              <div className="absolute -top-4 -left-2 text-6xl text-brand-blue opacity-20">"</div>
              <p className="relative z-10">
                Gull Advert exceeded our expectations in every way. The conference was flawlessly executed, creating an immersive experience that perfectly aligned with our brand vision. The interactive elements received outstanding feedback, and we're already planning next year's event with their team.
              </p>
              <footer className="mt-4">
                <div className="font-bold text-brand-black">Sarah Johnson</div>
                <div className="text-sm text-gray-600">CMO, TechCorp Inc.</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default SummitTechConference;
