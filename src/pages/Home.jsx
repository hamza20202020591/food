import React from 'react';
    import './Home.css';

    function Home() {
      return (
        <div className="home">
          <section className="hero">
            <div className="hero-content">
              <h1>Delicious Food Delivered to Your Door</h1>
              <p>Order from your favorite restaurants and enjoy fast, reliable delivery.</p>
              <button className="order-button">Order Now</button>
            </div>
          </section>

          <section className="features">
            <div className="feature-item">
              <h3>Wide Selection</h3>
              <p>Choose from a variety of cuisines and restaurants.</p>
            </div>
            <div className="feature-item">
              <h3>Fast Delivery</h3>
              <p>Get your food delivered quickly and efficiently.</p>
            </div>
            <div className="feature-item">
              <h3>Easy Ordering</h3>
              <p>Order through our simple and intuitive platform.</p>
            </div>
          </section>
        </div>
      );
    }

    export default Home;
