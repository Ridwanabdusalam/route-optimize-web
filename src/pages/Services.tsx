
import { Truck, Warehouse, Package, Plane, Ship, Train, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to optimize your supply chain, 
            reduce costs, and accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Freight Transport</CardTitle>
                <CardDescription>
                  Multi-modal transportation solutions for domestic and international shipments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Road Freight</p>
                  <p className="text-gray-600">Full truckload (FTL) and less-than-truckload (LTL) services</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Express Delivery</p>
                  <p className="text-gray-600">Same-day and next-day delivery options</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Specialized Transport</p>
                  <p className="text-gray-600">Temperature-controlled and hazardous materials</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Warehouse className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Warehousing & Storage</CardTitle>
                <CardDescription>
                  Modern warehouse facilities with advanced inventory management systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Storage Solutions</p>
                  <p className="text-gray-600">Short-term and long-term storage options</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Inventory Management</p>
                  <p className="text-gray-600">Real-time tracking and automated reordering</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Fulfillment Services</p>
                  <p className="text-gray-600">Pick, pack, and ship for e-commerce businesses</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">Last-Mile Delivery</CardTitle>
                <CardDescription>
                  Fast, reliable delivery to your customers' doorsteps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Same-Day Delivery</p>
                  <p className="text-gray-600">Urgent deliveries within metropolitan areas</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Scheduled Delivery</p>
                  <p className="text-gray-600">Time-slot delivery with customer notifications</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Proof of Delivery</p>
                  <p className="text-gray-600">Digital signatures and photo confirmation</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation Modes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transportation Modes</h2>
            <p className="text-xl text-gray-600">Choose the right mode for your cargo requirements</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Plane className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Air Freight</h3>
              <p className="text-gray-600">Fast international shipping for time-sensitive cargo</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Ship className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ocean Freight</h3>
              <p className="text-gray-600">Cost-effective solution for large volume shipments</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Train className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Rail Freight</h3>
              <p className="text-gray-600">Eco-friendly option for long-distance transport</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Truck className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Road Freight</h3>
              <p className="text-gray-600">Flexible door-to-door delivery solutions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Value-added services to enhance your logistics experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Cargo Insurance</h3>
                  <p className="text-gray-600">
                    Comprehensive coverage options to protect your valuable shipments 
                    against loss, damage, or theft during transit.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-600">
                    Advanced GPS tracking and monitoring systems provide real-time 
                    visibility of your shipments throughout the journey.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Streamline Your Logistics?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our logistics experts today to discuss your requirements and get a customized solution.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
