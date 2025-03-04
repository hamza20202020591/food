import React from 'react';
    import { Menu, Phone, Mail } from 'lucide-react';

    const Header: React.FC = () => {
      return (
        <header className="bg-header text-light py-6 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-2xl font-playfair-display font-bold">
              <a href="/" className="text-accent hover:text-light">GymName</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="hover:text-accent transition duration-300">Hero</a>
              <a href="#features" className="hover:text-accent transition duration-300">Features</a>
              <a href="#classes" className="hover:text-accent transition duration-300">Classes</a>
              <a href="#trainers" className="hover:text-accent transition duration-300">Trainers</a>
              <a href="#contact" className="hover:text-accent transition duration-300">Contact</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+15551234567" className="hover:text-accent transition duration-300">
                <Phone className="inline-block h-5 w-5 mr-1" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a href="mailto:info@gymname.com" className="hover:text-accent transition duration-300">
                <Mail className="inline-block h-5 w-5 mr-1" />
                <span>info@gymname.com</span>
              </a>
            </div>
            <button className="md:hidden text-light hover:text-accent focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>
      );
    };

    export default Header;
