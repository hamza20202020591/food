import React from 'react';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import Classes from './components/Classes';
    import Trainers from './components/Trainers';
    import Contact from './components/Contact';

    function App() {
      return (
        <div className="App">
          <Header />
          <Hero />
          <Features />
          <Classes />
          <Trainers />
          <Contact />
          <Footer />
        </div>
      );
    }

    export default App;
