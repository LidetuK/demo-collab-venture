
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";
import { Rocket, MapPin, TrendingUp, CheckCircle, Users } from "lucide-react";

const EcoMoveProductLaunch = () => {
  return (
    <CaseStudyLayout
      title="EcoMove Product Launch"
      category="Experiential Marketing"
      client="GreenTech Mobility"
      date="September 2023"
      coverBg="bg-gradient-to-br from-green-500 to-teal-500"
    >
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-black mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  GreenTech Mobility approached Gull Advert to create an impactful product launch campaign for their revolutionary EcoMove electric urban transportation solution. The client needed a launch strategy that would generate widespread awareness, demonstrate the product's unique features, and drive early adoption.
                </p>
                <p>
                  Our team developed a multi-city experiential marketing campaign with interactive public installations that allowed potential customers to experience the product firsthand while creating shareable moments that would amplify reach across social media.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-black mb-4">Project Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Generate product awareness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Demonstrate eco-friendly features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Create interactive experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Drive pre-orders and early adoption</span>
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
                  <Rocket className="w-6 h-6 text-brand-red mr-3" />
                  New Product Category
                </h3>
                <p className="text-gray-700 mb-4">
                  EcoMove represented an entirely new category of urban transportation, requiring substantial education to help consumers understand its benefits.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We designed interactive demonstration zones within each city installation that guided visitors through the product's features and benefits in an engaging, hands-on manner.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-brand-red mr-3" />
                  Multi-City Coordination
                </h3>
                <p className="text-gray-700 mb-4">
                  Coordinating simultaneous launches in five major cities presented significant logistical challenges.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We assembled specialized teams in each location and developed a centralized management system that ensured consistent execution while allowing for city-specific customizations.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-brand-red mr-3" />
                  Digital Amplification
                </h3>
                <p className="text-gray-700 mb-4">
                  Creating a strong digital presence beyond the physical installations was essential for reaching a wider audience.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We integrated shareable photo opportunities, AR experiences accessible via QR codes, and a social media campaign with custom hashtags that created a unified online conversation across all cities.
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
              <h3 className="text-xl font-bold text-brand-black mb-2">75,000+ Visitors</h3>
              <p className="text-gray-600">
                across all five city installations during the two-week campaign period.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">320% Increase</h3>
              <p className="text-gray-600">
                in social media mentions and brand awareness compared to pre-launch metrics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">3,500+ Pre-orders</h3>
              <p className="text-gray-600">
                secured during the campaign, exceeding the client's target by 75%.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <blockquote className="text-lg italic text-gray-700 relative">
              <div className="absolute -top-4 -left-2 text-6xl text-brand-blue opacity-20">"</div>
              <p className="relative z-10">
                The experiential campaign Gull Advert created for our product launch was nothing short of extraordinary. They transformed our innovative product into immersive experiences that resonated with urban consumers. The pre-order numbers speak for themselves, but equally valuable was the market education and brand positioning achieved.
              </p>
              <footer className="mt-4">
                <div className="font-bold text-brand-black">Eliza Fernandez</div>
                <div className="text-sm text-gray-600">Marketing Director, GreenTech Mobility</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default EcoMoveProductLaunch;
