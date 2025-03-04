import React from 'react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-neutral text-light py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} GymName. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <a href="/privacy" className="text-sm hover:text-accent mr-4">Privacy Policy</a>
              <a href="/terms" className="text-sm hover:text-accent">Terms of Service</a>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
