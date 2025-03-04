import React from 'react';
    import { MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-footer text-light py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-raleway font-semibold text-lg mb-4">About Us</h4>
              <p className="text-sm">
                We are dedicated to providing a world-class fitness experience. Our expert trainers and state-of-the-art facilities ensure you achieve your goals.
              </p>
            </div>
            <div>
              <h4 className="font-raleway font-semibold text-lg mb-4">Contact Information</h4>
              <p className="text-sm flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Main Street, Cityville</span>
              </p>
              <p className="text-sm flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mon-Fri: 6:00 AM - 10:00 PM</span>
              </p>
              <p className="text-sm flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>Sat-Sun: 8:00 AM - 8:00 PM</span>
              </p>
            </div>
            <div>
              <h4 className="font-raleway font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent transition duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent transition duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} GymName. All rights reserved. |
              <a href="/privacy" className="text-sm hover:text-accent ml-2">Privacy Policy</a> |
              <a href="/terms" className="text-sm hover:text-accent ml-2">Terms of Service</a>
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
