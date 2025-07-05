
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WarehouseOptimization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-amber-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              Warehousing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Warehouse Optimization: Maximizing Efficiency and Space
            </h1>
            <div className="flex items-center space-x-6 text-amber-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Robert Thompson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 20, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1553725546-6ca84c6b3e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Warehouse Operations"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Warehouse optimization is critical for maintaining competitive advantage in today's fast-paced logistics environment. Effective strategies can dramatically improve operational efficiency, reduce costs, and enhance customer satisfaction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Importance of Warehouse Efficiency</h2>
            <p className="text-gray-700 mb-6">
              Modern warehouses serve as critical hubs in the supply chain, handling increasing volumes while maintaining accuracy and speed. Inefficient warehouse operations can create bottlenecks that impact the entire logistics network.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Space Optimization Strategies</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vertical Storage Solutions</h3>
            <p className="text-gray-700 mb-6">
              Maximizing vertical space through high-bay storage systems and automated storage and retrieval systems (AS/RS) can significantly increase storage capacity without expanding the warehouse footprint.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dynamic Slotting</h3>
            <p className="text-gray-700 mb-6">
              Implementing dynamic slotting strategies that position fast-moving items in easily accessible locations while optimizing space utilization for slower-moving inventory can improve picking efficiency.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Technology Integration</h2>
            <p className="text-gray-700 mb-6">
              Warehouse Management Systems (WMS), RFID technology, and IoT sensors provide real-time visibility into inventory levels, equipment status, and operational performance, enabling data-driven optimization decisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Process Optimization</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pick Path Optimization</h3>
            <p className="text-gray-700 mb-6">
              Optimizing picking routes and implementing batch picking strategies can reduce travel time and increase order fulfillment speed. Zone picking and wave planning further enhance efficiency.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cross-Docking Operations</h3>
            <p className="text-gray-700 mb-6">
              Implementing cross-docking for appropriate products can reduce storage requirements and accelerate order fulfillment by moving goods directly from receiving to shipping.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Performance Metrics and KPIs</h2>
            <p className="text-gray-700 mb-6">
              Tracking key performance indicators such as order accuracy, picking productivity, inventory turnover, and space utilization provides insights for continuous improvement and helps identify optimization opportunities.
            </p>

            <div className="bg-amber-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Optimize Your Warehouse Operations</h3>
              <p className="text-amber-800 mb-4">
                Discover how our warehouse optimization solutions can help you maximize efficiency, reduce costs, and improve customer satisfaction.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/contact">Start Optimizing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WarehouseOptimization;
