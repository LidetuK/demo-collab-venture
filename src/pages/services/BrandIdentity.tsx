
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const BrandIdentity = () => {
  return (
    <ServicePageLayout 
      title="Brand Identity & Creation" 
      description="Strategic development of brand elements including logos, color palettes, typography, and brand guidelines."
      icon="🎨"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Building Distinctive Brand Identities</h2>
              <p className="text-gray-600 mb-6">
                Your brand is more than just a logo—it's the complete experience people have with your company. 
                Our brand identity services help you develop a cohesive, memorable presence that resonates with your target audience 
                and differentiates you from competitors.
              </p>
              <p className="text-gray-600 mb-6">
                We combine strategic thinking with creative excellence to build brands that stand out in crowded markets 
                and create emotional connections with customers.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our brand development process includes:</h3>
                {[
                  "Brand strategy workshops and market positioning",
                  "Logo design and visual identity system development",
                  "Typography, color palette, and graphic element creation",
                  "Comprehensive brand guidelines and asset libraries",
                  "Brand voice development and messaging frameworks"
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
                alt="Brand Identity Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Key Brand Identity Elements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive brand identity system consists of several key elements that work together to create a cohesive brand experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Design",
                description: "The visual cornerstone of your brand that encapsulates your identity and values in a distinctive mark.",
                icon: "⭐"
              },
              {
                title: "Color System",
                description: "Strategic color palettes that evoke the right emotions and create recognition across all touchpoints.",
                icon: "🎨"
              },
              {
                title: "Typography",
                description: "Font selections and hierarchies that reinforce your brand personality and ensure readability.",
                icon: "🔤"
              },
              {
                title: "Brand Guidelines",
                description: "Comprehensive documentation that ensures consistent application of all brand elements.",
                icon: "📕"
              },
              {
                title: "Visual Elements",
                description: "Iconography, patterns, photography styles, and other visual assets that extend your brand language.",
                icon: "📷"
              },
              {
                title: "Brand Voice",
                description: "Defining how your brand speaks and communicates, including tone, language, and key messages.",
                icon: "💬"
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
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Brand Transformation Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Brand Case Study ${item}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-black mb-2">Brand Transformation {item}</h3>
                  <p className="text-gray-600 mb-4">
                    A complete brand overhaul that modernized the company's image and led to a 35% increase in brand recognition metrics.
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

export default BrandIdentity;
