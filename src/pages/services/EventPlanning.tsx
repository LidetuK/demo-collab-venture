
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const EventPlanning = () => {
  return (
    <ServicePageLayout 
      title="Event Planning & Management" 
      description="End-to-end event solutions from concept development to on-site execution for corporate events, product launches, and more."
      icon="🎪"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Creating Memorable Brand Experiences</h2>
              <p className="text-gray-600 mb-6">
                Events offer unparalleled opportunities to directly engage with your audience and create lasting impressions. 
                Our event planning and management services cover every aspect of your event, from initial concept to flawless execution.
              </p>
              <p className="text-gray-600 mb-6">
                We focus on creating memorable experiences that align with your brand values and objectives, 
                ensuring that every touchpoint reinforces your message and drives meaningful engagement.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our comprehensive approach includes:</h3>
                {[
                  "Strategic event concept development aligned with marketing objectives",
                  "Venue selection, negotiation, and management",
                  "Vendor coordination and logistics management",
                  "Branded environment design and production",
                  "On-site management and post-event analysis"
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
                alt="Event Planning Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Types of Events We Excel At</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to large-scale productions, we bring expertise and creativity to every event format.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Events",
                description: "Conferences, meetings, team-building activities, and corporate milestone celebrations.",
                icon: "🏢"
              },
              {
                title: "Product Launches",
                description: "Unveiling new products with maximum impact through carefully orchestrated experiences.",
                icon: "🚀"
              },
              {
                title: "Trade Shows & Exhibitions",
                description: "Stand-out booth designs and experiences that draw traffic and generate leads.",
                icon: "🎭"
              },
              {
                title: "Brand Activations",
                description: "Interactive experiences that bring brands to life and create direct consumer engagement.",
                icon: "✨"
              },
              {
                title: "VIP & Exclusive Events",
                description: "High-end experiences for key clients, partners, and industry influencers.",
                icon: "👑"
              },
              {
                title: "Public Relations Events",
                description: "Media briefings, press conferences, and publicity events that generate coverage.",
                icon: "📰"
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
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Featured Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Event Case Study ${item}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">Brand Event {item}</h3>
                  <p className="text-gray-600 mb-4">
                    An immersive launch event that generated media coverage worth over $2M and resulted in record-breaking product sales.
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

export default EventPlanning;
