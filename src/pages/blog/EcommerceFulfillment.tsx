
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EcommerceFulfillment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <Link to="/blog" className="inline-flex items-center text-purple-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              E-commerce
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              E-commerce Fulfillment: Meeting Rising Customer Expectations
            </h1>
            <div className="flex items-center space-x-6 text-purple-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Emma Rodriguez</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>December 5, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="E-commerce Fulfillment"
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              The e-commerce boom has fundamentally changed customer expectations around delivery speed, accuracy, and convenience. Meeting these rising expectations requires sophisticated fulfillment strategies and technologies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Evolution of Customer Expectations</h2>
            <p className="text-gray-700 mb-6">
              Modern consumers expect same-day or next-day delivery, real-time tracking, flexible delivery options, and hassle-free returns. These expectations have pushed logistics companies to innovate rapidly and rethink traditional fulfillment models.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Micro-Fulfillment Centers</h2>
            <p className="text-gray-700 mb-6">
              Smaller, strategically located fulfillment centers closer to urban populations enable faster delivery times and reduced shipping costs. These micro-fulfillment centers are revolutionizing last-mile delivery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Omnichannel Integration</h2>
            <p className="text-gray-700 mb-6">
              Successful e-commerce fulfillment requires seamless integration across all sales channels, from online stores to physical retail locations, creating a unified customer experience.
            </p>

            <div className="bg-purple-50 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Optimize Your E-commerce Fulfillment</h3>
              <p className="text-purple-800 mb-4">
                Discover how to meet and exceed customer expectations with our advanced fulfillment solutions.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceFulfillment;
