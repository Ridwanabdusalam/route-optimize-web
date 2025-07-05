
import { Users, Award, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About LogiFlow</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            For over two decades, we've been revolutionizing logistics and supply chain management, 
            connecting businesses to global markets with reliability, innovation, and excellence.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2000, LogiFlow began as a small freight forwarding company with a simple mission: 
                to make global logistics accessible, reliable, and efficient for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've grown into a comprehensive logistics partner, serving thousands of clients 
                worldwide with cutting-edge technology, sustainable practices, and unwavering commitment 
                to excellence.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is driven by innovation, guided by integrity, and measured by the success 
                of our clients' supply chains.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="About Us" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-3xl text-blue-600 mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  To empower businesses by providing innovative, reliable, and sustainable logistics 
                  solutions that connect markets, optimize supply chains, and drive economic growth 
                  while maintaining the highest standards of service and integrity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-3xl text-orange-600 mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  To be the world's most trusted logistics partner, recognized for innovation, 
                  sustainability, and excellence in connecting businesses to global opportunities 
                  while creating value for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our commitment and success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">5,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Happy Clients Worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">100+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Countries Served</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">99.8%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">On-Time Delivery Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customer Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-blue-100">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Reliability</h3>
              <p className="text-blue-100">
                We keep our promises and deliver consistent, dependable service that our clients 
                can count on, every single time.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Innovation</h3>
              <p className="text-blue-100">
                We embrace technology and creative solutions to continuously improve our services 
                and stay ahead of industry trends.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Sustainability</h3>
              <p className="text-blue-100">
                We're committed to environmental responsibility and sustainable practices that 
                protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
