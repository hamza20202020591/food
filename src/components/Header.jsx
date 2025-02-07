import React from 'react';
    import { Link } from 'react-router-dom';
    import { Menu as MenuIcon, Phone, Info } from 'lucide-react';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <div className="logo">
            <Link to="/">FoodDelivery</Link>
          </div>
          <nav className="nav">
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about"><Info /></Link>
            <Link to="/contact"><Phone /></Link>
          </nav>
          <div className="menu-icon">
            <MenuIcon />
          </div>
        </header>
      );
    }

    export default Header;
