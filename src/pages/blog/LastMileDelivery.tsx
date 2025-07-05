
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LastMileDelivery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-pink-900 to-pink-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-pink-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
              Innovation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Last-Mile Delivery Innovation: Drones and Autonomous Vehicles
            </h1>
            <div className="flex items-center space-x-6 text-pink-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Lisa Wang</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 25, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Drone Delivery Innovation"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              The last mile of delivery is undergoing a technological revolution. Drones, autonomous vehicles, and robotic systems are transforming how packages reach customers, offering faster, more efficient, and cost-effective solutions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Last-Mile Challenge</h2>
            <p className="text-gray-700 mb-6">
              Last-mile delivery represents up to 53% of total shipping costs and is often the most complex part of the logistics chain. Traditional delivery methods struggle with traffic congestion, failed deliveries, and rising customer expectations for faster service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Drone Delivery Technology</h2>
            <p className="text-gray-700 mb-6">
              Commercial drones are revolutionizing package delivery for lightweight items. With capabilities to bypass traffic and reach remote locations, drones can reduce delivery times from hours to minutes for suitable packages.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Current Applications</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Medical supply delivery to remote areas</li>
              <li className="mb-2">Small package delivery in urban environments</li>
              <li className="mb-2">Emergency supply distribution</li>
              <li className="mb-2">Inventory management in warehouses</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Autonomous Delivery Vehicles</h2>
            <p className="text-gray-700 mb-6">
              Self-driving delivery vehicles and robots are being deployed for ground-based last-mile delivery. These systems operate 24/7, reduce labor costs, and can handle larger payloads than drones.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation Challenges</h2>
            <p className="text-gray-700 mb-6">
              Despite their promise, these technologies face regulatory hurdles, safety concerns, and infrastructure requirements. Weather conditions, air traffic management, and public acceptance remain significant considerations for widespread adoption.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Future of Delivery</h2>
            <p className="text-gray-700 mb-6">
              The future will likely see hybrid delivery models combining traditional methods with innovative technologies. Integration with smart city infrastructure and AI-powered optimization will create seamless, efficient delivery networks.
            </p>

            <div className="bg-pink-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Innovate Your Delivery Operations</h3>
              <p className="text-pink-800 mb-4">
                Explore how cutting-edge delivery technologies can transform your last-mile operations and improve customer satisfaction.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LastMileDelivery;
