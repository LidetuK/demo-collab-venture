
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const MediaProduction = () => {
  return (
    <ServicePageLayout 
      title="Media Production" 
      description="High-quality video, photography, and audio content creation for advertising campaigns across all platforms."
      icon="🎬"
    >
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-black mb-6">Crafting Compelling Visual Stories</h2>
              <p className="text-gray-600 mb-6">
                In a content-driven world, high-quality media production is essential for brand success. 
                Our media production team creates compelling visual and audio content that captures attention, 
                communicates your message effectively, and drives audience engagement across all platforms.
              </p>
              <p className="text-gray-600 mb-6">
                From concept development to final delivery, we handle every aspect of the production process 
                with creativity, technical excellence, and attention to detail.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-brand-black">Our production services include:</h3>
                {[
                  "Strategic content planning aligned with marketing objectives",
                  "Full-service video production from concept to post-production",
                  "Professional photography for campaigns, products, and corporate needs",
                  "Audio production including podcasts, radio spots, and sonic branding",
                  "Specialized content creation for different platforms and formats"
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
                alt="Media Production Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">Our Media Production Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of media production services to meet all your content needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Video Production",
                description: "Commercial videos, brand films, social media content, product demos, and testimonials.",
                icon: "🎥"
              },
              {
                title: "Photography",
                description: "Professional photography for advertising campaigns, product shots, and corporate imagery.",
                icon: "📷"
              },
              {
                title: "Animation & Motion Graphics",
                description: "Engaging animated content that explains complex ideas or adds visual appeal.",
                icon: "✨"
              },
              {
                title: "Audio Production",
                description: "Radio spots, podcasts, music production, and sonic branding elements.",
                icon: "🎙️"
              },
              {
                title: "Aerial & Drone Filming",
                description: "Stunning aerial perspectives that add production value and unique viewpoints.",
                icon: "🚁"
              },
              {
                title: "Virtual & Augmented Reality",
                description: "Immersive experiences that create memorable interactions with your brand.",
                icon: "🥽"
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

      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Our Production Process</h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue/20"></div>
            
            {[
              { 
                step: 1, 
                title: "Pre-Production", 
                content: "We develop the concept, create scripts and storyboards, plan logistics, and prepare for production." 
              },
              { 
                step: 2, 
                title: "Production", 
                content: "Our team captures high-quality footage, images, or audio using professional equipment and techniques." 
              },
              { 
                step: 3, 
                title: "Post-Production", 
                content: "We edit and refine the content, adding graphics, music, effects, and color grading as needed." 
              },
              { 
                step: 4, 
                title: "Review & Revisions", 
                content: "We collaborate with you to review the content and make any necessary adjustments." 
              },
              { 
                step: 5, 
                title: "Final Delivery", 
                content: "We deliver the finished content in all required formats for various platforms and uses." 
              }
            ].map((phase, index) => (
              <div key={index} className="relative mb-8 md:mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <h3 className="text-xl font-bold text-brand-black mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.content}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl shadow-lg">
                      {phase.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-black mb-12 text-center">Production Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Portfolio Item ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-primary inline-block">
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default MediaProduction;
