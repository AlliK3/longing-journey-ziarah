
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Longing Journey Ziarah Tours
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your Gateway to Spiritual Journeys
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Embark on a transformative journey to the holiest cities and revered shrines in Iraq and Iran.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#register" className="btn-secondary w-full sm:w-auto">
              Register Now
            </a>
            <a href="#about" className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
