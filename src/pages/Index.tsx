
import { Link } from "react-router-dom";
import { Truck, Warehouse, Package, Clock, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Global <span className="text-blue-300">Logistics</span> Partner
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Streamline your supply chain with our comprehensive freight transport, 
                warehousing, and delivery solutions. From local to global, we move your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Logistics Operations" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With decades of experience and cutting-edge technology, we deliver reliable logistics solutions 
              that keep your business moving efficiently and cost-effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>On-Time Delivery</CardTitle>
                <CardDescription>
                  99.8% on-time delivery rate with real-time tracking and updates
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Secure Transport</CardTitle>
                <CardDescription>
                  Advanced security measures and full insurance coverage for your cargo
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Worldwide coverage with local expertise in over 100 countries
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive logistics solutions for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle>Freight Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Road, rail, sea, and air freight solutions with competitive rates and reliable service.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Warehouse className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle>Warehousing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  State-of-the-art warehouse facilities with inventory management and fulfillment services.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle>Last-Mile Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fast and reliable last-mile delivery solutions with real-time tracking and proof of delivery.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a custom quote tailored to your business needs and start experiencing the difference 
            professional logistics management can make.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
