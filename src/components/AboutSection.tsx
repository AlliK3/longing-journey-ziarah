
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            About Longing Journey Tours
          </h2>
          
          <div className="decorative-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 16l4-4-4-4"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
          
          <p className="text-lg mb-8">
            Longing Journey Tours is a specialized service by Ahlul Bayt Center of Toledo, designed for Muslims seeking to connect with the sanctity of holy cities and revered shrines. Our tours cater to those longing to visit the sacred city of Najaf, the spiritual hub of Karbala, and the magnificent shrines of other Imams in Iraq and Iran.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="islamic-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Expert Planning</h3>
              <p>We handle all logistics, so you can focus on your spiritual journey.</p>
            </div>
            
            <div className="islamic-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Cultural Insight</h3>
              <p>Experience the profound heritage of Islamic holy sites with our knowledgeable guides.</p>
            </div>
            
            <div className="islamic-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Tailored Packages</h3>
              <p>Flexible options to suit your schedule and preferences.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">Reconnect with Your Roots</h3>
            <p className="text-lg mb-6">
              Join Muslims from around the world in this soul-enriching experience. Visit Najaf, Karbala, Kathmiah, and Samarah with Longing Journey Ziarah Tours and reconnect with your spiritual roots.
            </p>
            <a href="#register" className="btn-primary inline-block">Plan Your Journey Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
