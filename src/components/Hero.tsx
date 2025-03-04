import React from 'react';

    const Hero: React.FC = () => {
      return (
        <section id="hero" className="py-24 bg-light text-neutral text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-playfair-display font-bold mb-6">
              Elevate Your Fitness Journey
            </h1>
            <p className="text-xl mb-12">
              Achieve your fitness goals with our expert trainers and state-of-the-art facilities.
            </p>
            <a href="#contact" className="bg-accent text-light py-3 px-8 rounded-full hover:bg-secondary hover:text-light transition duration-300">
              Get Started
            </a>
          </div>
        </section>
      );
    };

    export default Hero;
