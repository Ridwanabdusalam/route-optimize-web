
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
import NotFound from "./pages/NotFound";
import FutureSupplyChainAI from "./pages/blog/FutureSupplyChainAI";
import SustainableLogistics from "./pages/blog/SustainableLogistics";
import EcommerceFulfillment from "./pages/blog/EcommerceFulfillment";
import GlobalTradeTrends from "./pages/blog/GlobalTradeTrends";
import LastMileDelivery from "./pages/blog/LastMileDelivery";
import WarehouseOptimization from "./pages/blog/WarehouseOptimization";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/future-supply-chain-ai-automation" element={<FutureSupplyChainAI />} />
          <Route path="/blog/sustainable-logistics-green-transportation" element={<SustainableLogistics />} />
          <Route path="/blog/ecommerce-fulfillment-customer-expectations" element={<EcommerceFulfillment />} />
          <Route path="/blog/global-trade-trends-shipping-challenges" element={<GlobalTradeTrends />} />
          <Route path="/blog/last-mile-delivery-drones-autonomous-vehicles" element={<LastMileDelivery />} />
          <Route path="/blog/warehouse-optimization-efficiency-space" element={<WarehouseOptimization />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
