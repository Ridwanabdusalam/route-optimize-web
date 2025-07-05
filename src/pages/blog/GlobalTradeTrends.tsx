
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GlobalTradeTrends = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-indigo-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Global Trade
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Global Trade Trends: Navigating International Shipping Challenges
            </h1>
            <div className="flex items-center space-x-6 text-indigo-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>David Kim</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>November 30, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Global Trade and Shipping"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              The global trade landscape is continuously evolving, presenting both opportunities and challenges for international shipping. Understanding current trends and overcoming common obstacles is crucial for successful logistics operations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Current Global Trade Dynamics</h2>
            <p className="text-gray-700 mb-6">
              International trade has become increasingly complex due to geopolitical tensions, changing regulations, and evolving consumer demands. Supply chain disruptions, port congestion, and capacity constraints have forced companies to rethink their shipping strategies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Shipping Challenges</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Port Congestion</h3>
            <p className="text-gray-700 mb-6">
              Major ports worldwide are experiencing unprecedented congestion, leading to delays and increased costs. Shippers must plan for longer transit times and consider alternative routes to maintain supply chain efficiency.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regulatory Compliance</h3>
            <p className="text-gray-700 mb-6">
              Navigating international trade regulations, customs requirements, and documentation has become increasingly complex. Staying compliant while maintaining efficiency requires expertise and advanced planning.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cost Volatility</h3>
            <p className="text-gray-700 mb-6">
              Shipping rates have become highly volatile due to capacity constraints, fuel price fluctuations, and demand variations. Companies need flexible strategies to manage cost uncertainty effectively.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Strategies for Success</h2>
            <p className="text-gray-700 mb-6">
              Successful international shipping requires diversified carrier relationships, flexible routing options, and proactive communication with all stakeholders. Investing in visibility technology and building strong partnerships are essential for navigating these challenges.
            </p>

            <div className="bg-indigo-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Navigate Global Trade Successfully</h3>
              <p className="text-indigo-800 mb-4">
                Our international shipping experts can help you overcome trade challenges and optimize your global logistics operations.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/contact">Get Expert Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalTradeTrends;
