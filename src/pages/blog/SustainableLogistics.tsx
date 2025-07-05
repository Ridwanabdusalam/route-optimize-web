
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SustainableLogistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-green-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Sustainability
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Sustainable Logistics: Green Transportation Solutions
            </h1>
            <div className="flex items-center space-x-6 text-green-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Green Transportation Solutions"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              As environmental concerns take center stage, the logistics industry is embracing sustainable transportation solutions that reduce carbon emissions while maintaining operational efficiency.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Environmental Impact of Logistics</h2>
            <p className="text-gray-700 mb-6">
              The transportation sector accounts for approximately 24% of global carbon dioxide emissions, with freight transport being a significant contributor. As e-commerce continues to grow and global trade expands, the environmental impact of logistics operations has become impossible to ignore.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Electric and Hybrid Vehicles</h2>
            <p className="text-gray-700 mb-6">
              Electric delivery vehicles are leading the charge in sustainable logistics. Major logistics companies are investing heavily in electric fleets for last-mile delivery, significantly reducing urban air pollution and noise levels.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Alternative Fuels</h2>
            <p className="text-gray-700 mb-6">
              Hydrogen fuel cells, biofuels, and other alternative energy sources are becoming viable options for long-haul transportation, offering cleaner alternatives to traditional diesel engines.
            </p>

            <div className="bg-green-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Join the Green Revolution</h3>
              <p className="text-green-800 mb-4">
                Learn how your business can implement sustainable logistics solutions that benefit both the environment and your bottom line.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainableLogistics;
