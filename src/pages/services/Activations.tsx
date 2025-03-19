
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Activations = () => {
  return (
    <ServicePageLayout 
      title="Activations & Experiential Marketing" 
      description="Creating memorable brand experiences that engage consumers directly through interactive installations and campaigns."
      icon="✨"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Bringing Brands to Life Through Experience</h2>
              <p className="text-gray-600 mb-6">
                In today's digital world, tangible brand experiences create powerful connections with consumers. 
                Our experiential marketing and brand activation services turn passive audiences into active participants, 
                creating memorable moments that forge emotional bonds with your brand.
              </p>
              <p className="text-gray-600 mb-6">
                We design and execute immersive experiences that encourage interaction, spark conversations, 
                and extend beyond the physical space through social sharing and word-of-mouth.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our activation approach includes:</h3>
                {[
                  "Concept development tied to brand objectives and values",
                  "Custom-designed interactive experiences and installations",
                  "Staffing with brand ambassadors and experience specialists",
                  "Digital integration for extended reach and engagement",
                  "Measurement and ROI analysis of experiential campaigns"
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
                alt="Brand Activation Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Types of Brand Activations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pop-up experiences to integrated campaigns, we create activations that align with your brand objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pop-up Experiences",
                description: "Temporary branded spaces that create buzz and offer immersive brand experiences in unexpected locations.",
                icon: "🏪"
              },
              {
                title: "Sampling Campaigns",
                description: "Strategic product sampling combined with memorable experiences that drive trial and awareness.",
                icon: "🎁"
              },
              {
                title: "Interactive Installations",
                description: "Engaging physical or digital installations that invite participation and create shareable moments.",
                icon: "🎮"
              },
              {
                title: "Mobile Tours",
                description: "Branded experiences that travel to multiple locations, reaching audiences across different markets.",
                icon: "🚐"
              },
              {
                title: "Festival & Event Activations",
                description: "Brand experiences integrated into existing events, festivals, and cultural gatherings.",
                icon: "🎡"
              },
              {
                title: "Retail Activations",
                description: "In-store experiences that enhance the shopping journey and create memorable touchpoints.",
                icon: "🛒"
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
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Featured Activations</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Activation Case Study ${item}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">Brand Activation {item}</h3>
                  <p className="text-gray-600 mb-4">
                    An interactive installation that generated over 50,000 in-person interactions and 3 million social media impressions.
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

export default Activations;
