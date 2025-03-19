
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Inquiries from "./pages/Inquiries";
import NotFound from "./pages/NotFound";
import OutdoorAdvertising from "./pages/services/OutdoorAdvertising";
import EventPlanning from "./pages/services/EventPlanning";
import BrandIdentity from "./pages/services/BrandIdentity";
import Activations from "./pages/services/Activations";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import MediaProduction from "./pages/services/MediaProduction";
import SummitTechConference from "./pages/portfolio/SummitTechConference";
import UrbanEatsRebrand from "./pages/portfolio/UrbanEatsRebrand";
import EcoMoveProductLaunch from "./pages/portfolio/EcoMoveProductLaunch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/outdoor-advertising" element={<OutdoorAdvertising />} />
          <Route path="/services/event-planning" element={<EventPlanning />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/activations" element={<Activations />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/media-production" element={<MediaProduction />} />
          <Route path="/portfolio/summit-tech-conference" element={<SummitTechConference />} />
          <Route path="/portfolio/urban-eats-rebrand" element={<UrbanEatsRebrand />} />
          <Route path="/portfolio/ecomove-product-launch" element={<EcoMoveProductLaunch />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiries" element={<Inquiries />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
