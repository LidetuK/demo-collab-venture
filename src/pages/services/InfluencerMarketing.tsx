
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const InfluencerMarketing = () => {
  return (
    <ServicePageLayout 
      title="Influencer Marketing & Brand Endorsements" 
      description="Strategic partnerships with relevant influencers to extend your brand's reach and credibility with target audiences."
      icon="👥"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Amplifying Your Brand Through Trusted Voices</h2>
              <p className="text-gray-600 mb-6">
                Influencer marketing harnesses the power of trusted voices to share your brand message with engaged audiences. 
                Our influencer marketing strategies connect your brand with the right creators who align with your values 
                and can authentically communicate your benefits to their followers.
              </p>
              <p className="text-gray-600 mb-6">
                We develop and manage influencer relationships that drive real business results through 
                strategic selection, creative collaboration, and performance measurement.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our influencer marketing approach includes:</h3>
                {[
                  "Strategic influencer identification and vetting process",
                  "Authentic partnership development and relationship management",
                  "Creative content strategy and campaign planning",
                  "Contract negotiation and compliance oversight",
                  "Performance tracking, reporting, and optimization"
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
                alt="Influencer Marketing Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Influencer Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Types of Influencer Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop different types of influencer collaborations based on your objectives, audience, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sponsored Content",
                description: "Paid partnerships where influencers create content featuring your brand for their channels.",
                icon: "📱"
              },
              {
                title: "Brand Ambassadorships",
                description: "Long-term relationships where influencers become consistent advocates for your brand.",
                icon: "🤝"
              },
              {
                title: "Product Collaborations",
                description: "Co-created products or exclusive collections developed with influencer partners.",
                icon: "✨"
              },
              {
                title: "Event Appearances",
                description: "Influencers attending and promoting brand events to their audiences.",
                icon: "🎭"
              },
              {
                title: "Content Creation",
                description: "Influencers creating content for your brand's channels rather than their own.",
                icon: "📷"
              },
              {
                title: "Affiliate Partnerships",
                description: "Performance-based relationships where influencers earn commissions on sales they generate.",
                icon: "💰"
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
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Featured Influencer Campaigns</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Influencer Case Study ${item}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">Influencer Campaign {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A strategic influencer campaign that reached 12 million consumers and drove a 300% increase in website traffic.
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

export default InfluencerMarketing;
