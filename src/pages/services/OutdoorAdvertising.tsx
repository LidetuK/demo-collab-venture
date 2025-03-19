
import { useEffect } from "react";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const OutdoorAdvertising = () => {
  return (
    <ServicePageLayout 
      title="Outdoor Advertising" 
      description="Impactful billboard campaigns, transit advertising, and street furniture that captures attention in high-traffic areas."
      icon="🏙️"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Capturing Attention in Public Spaces</h2>
              <p className="text-gray-600 mb-6">
                Outdoor advertising remains one of the most effective ways to reach a mass audience. 
                Our outdoor advertising solutions are designed to make your brand impossible to ignore 
                in the physical world, creating high-impact visual experiences that stick in consumers' minds.
              </p>
              <p className="text-gray-600 mb-6">
                We handle everything from strategic placement analysis to design, production, and installation, 
                ensuring maximum visibility and impact for your outdoor campaigns.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our approach includes:</h3>
                {[
                  "Strategic location analysis based on traffic patterns and demographics",
                  "Eye-catching creative design optimized for outdoor viewing",
                  "High-quality production that withstands weather conditions",
                  "Regular maintenance and performance tracking"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Outdoor Advertising Billboard Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Outdoor Advertising */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Types of Outdoor Advertising</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of outdoor advertising formats to suit your brand's needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Billboards",
                description: "Large format displays along highways and in urban centers that capture attention from distance and close-up.",
                icon: "🛣️"
              },
              {
                title: "Transit Advertising",
                description: "Ads on buses, trains, taxis, and at transit stops reaching audiences during their daily commute.",
                icon: "🚌"
              },
              {
                title: "Street Furniture",
                description: "Advertising on bus shelters, benches, kiosks, and other street-level structures integrated into public spaces.",
                icon: "🪑"
              },
              {
                title: "Digital Displays",
                description: "Dynamic digital billboards and screens allowing for animated content and real-time updates.",
                icon: "📺"
              },
              {
                title: "Retail & Mall Advertising",
                description: "Targeted displays in high-traffic shopping areas reaching consumers in purchase mode.",
                icon: "🛍️"
              },
              {
                title: "Specialty Formats",
                description: "Custom installations, building wraps, and other non-traditional outdoor media creating maximum impact.",
                icon: "🏢"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Featured Campaigns</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Case Study ${item}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">Brand Campaign {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A strategic outdoor campaign that increased brand awareness by 45% and drove a 28% increase in store visits.
                  </p>
                  <Link 
                    to="/blog" 
                    className="text-brand-blue font-medium hover:text-brand-red transition-colors"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default OutdoorAdvertising;
