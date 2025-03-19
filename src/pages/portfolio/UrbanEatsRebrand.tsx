
import CaseStudyLayout from "@/components/portfolio/CaseStudyLayout";
import { PenTool, LineChart, Target, CheckCircle, ArrowUpRight } from "lucide-react";

const UrbanEatsRebrand = () => {
  return (
    <CaseStudyLayout
      title="Urban Eats Rebrand"
      category="Brand Identity"
      client="Urban Eats Restaurant Chain"
      date="April 2023"
      coverBg="bg-gradient-to-br from-orange-500 to-red-500"
    >
      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-black mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Urban Eats, a restaurant chain with 12 locations across the region, approached Gull Advert for a complete brand overhaul. After 10 years in business, their visual identity had become dated and inconsistent across locations, resulting in brand confusion and declining customer engagement.
                </p>
                <p>
                  Our challenge was to develop a fresh, cohesive brand identity that would resonate with their target market of young professionals and families, while maintaining the heritage and recognition they had built over the years.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-brand-black mb-4">Project Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Modernize the brand identity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Create consistency across all touchpoints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Increase customer engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0" />
                  <span>Preserve brand recognition</span>
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
                  <PenTool className="w-6 h-6 text-brand-red mr-3" />
                  Outdated Visual Identity
                </h3>
                <p className="text-gray-700 mb-4">
                  The existing logo, color scheme, and typography felt outdated and failed to connect with younger demographics.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We developed a fresh visual identity that maintained recognizable elements while introducing modern typography, a vibrant color palette, and a simplified logo that works across digital and physical mediums.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <Target className="w-6 h-6 text-brand-red mr-3" />
                  Inconsistent Brand Experience
                </h3>
                <p className="text-gray-700 mb-4">
                  Each location had developed its own interpretation of the brand, leading to inconsistency in customer experience.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    We created a comprehensive brand guideline document and implementation toolkit for all locations, covering everything from signage to menu design, uniforms, and digital assets.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
                <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center">
                  <LineChart className="w-6 h-6 text-brand-red mr-3" />
                  Declining Customer Engagement
                </h3>
                <p className="text-gray-700 mb-4">
                  Social media engagement and foot traffic had been declining over the previous 18 months.
                </p>
                <div className="bg-brand-blue/5 p-5 rounded-lg border-l-4 border-brand-blue">
                  <p className="font-semibold">Our Solution:</p>
                  <p>
                    Along with the visual rebrand, we developed a strategic content plan for social media and implemented an engaging loyalty program with branded digital and physical touchpoints.
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
                <ArrowUpRight className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">40% Increase</h3>
              <p className="text-gray-600">
                in social media engagement within the first three months after rebrand launch.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">24% Growth</h3>
              <p className="text-gray-600">
                in average revenue per location compared to the same period in the previous year.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">18,000+ Members</h3>
              <p className="text-gray-600">
                joined the new loyalty program within the first two months of its launch.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl">
            <blockquote className="text-lg italic text-gray-700 relative">
              <div className="absolute -top-4 -left-2 text-6xl text-brand-blue opacity-20">"</div>
              <p className="relative z-10">
                The rebrand by Gull Advert has completely transformed our business. Not only do we have a modern, cohesive look that resonates with our customers, but the strategic implementation has resulted in tangible business growth. Our team is re-energized, and customer feedback has been overwhelmingly positive.
              </p>
              <footer className="mt-4">
                <div className="font-bold text-brand-black">Marcus Chen</div>
                <div className="text-sm text-gray-600">CEO, Urban Eats</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default UrbanEatsRebrand;
