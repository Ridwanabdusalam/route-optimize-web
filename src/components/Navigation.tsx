
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LogiFlow</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/about') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/services') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/blog') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${
                isActive('/contact') ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/about') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/services') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/blog') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isActive('/contact') ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
