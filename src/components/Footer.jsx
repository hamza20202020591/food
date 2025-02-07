import React from 'react';
    import './Footer.css';

    function Footer() {
      return (
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
            <nav className="footer-nav">
              <a href="/terms">Terms of Service</a>
              <a href="/privacy">Privacy Policy</a>
            </nav>
          </div>
        </footer>
      );
    }

    export default Footer;
