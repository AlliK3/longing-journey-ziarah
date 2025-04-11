
import React from 'react';

const guides = [
  {
    name: "Sayyid Mustapha Al-Modarresi",
    role: "Spiritual Guide",
    image: "/guide-placeholder.jpg"
  },
  {
    name: "Sayyed Husain Murtatha Alqsweni",
    role: "Scholar",
    image: "/Mustapha.jpg"
  },
  {
    name: "Mula Ammar Alkinani",
    role: "Historical Expert",
    image: "/Ammar.jpg"
  },
  {
    name: "Mula Qahtan Albudairi",
    role: "Scholar",
    image: "/Qahtan.jpg"
  },
  {
    name: "Mula Mahmud Asiri",
    role: "Cultural Guide",
    image: "/Mahmud.jpg"
  },
  {
    name: "Mula Sayyed Muntazar",
    role: "Scholar",
    image: "/guide-placeholder.jpg"
  }
];

const GuidesSection = () => {
  return (
    <section id="guides" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Our Esteemed Guides
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
            <path d="M16 3.13a4 4 0 010 7.75"></path>
          </svg>
        </div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          We are pleased to confirm that the following esteemed individuals will be accompanying us on this trip, providing deep insight and knowledge throughout our journey.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="islamic-card text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary/30">
                <img 
                  src={guide.image} 
                  alt={guide.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">{guide.name}</h3>
              <p className="text-muted-foreground">{guide.role}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg italic">
            "These knowledgeable guides will help deepen your understanding and enrich your spiritual experience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
