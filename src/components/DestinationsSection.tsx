
import React from 'react';

const destinations = [
  {
    name: "Najaf",
    description: "Home to the sacred shrine of Imam Ali (AS), Najaf is one of the holiest cities for Shia Muslims. Visitors come to pay respects at the magnificent golden-domed shrine and experience the city's rich scholarly tradition.",
    days: 4,
    image: "/najaf.jpg"
  },
  {
    name: "Karbala",
    description: "Karbala holds the revered shrine of Imam Husayn (AS) and is the site of the tragic Battle of Karbala. This spiritual center attracts millions of pilgrims annually, especially during Arbaeen.",
    days: 6,
    image: "/karbala.jpg"
  },
  {
    name: "Kathimia",
    description: "Located in Baghdad, Kathimia (Kadhimiya) is home to the shrine of the seventh and ninth Imams: Imam Musa al-Kadhim (AS) and Imam Muhammad at-Taqi (AS).",
    days: 2,
    image: "/kadhimiya.jpg"
  },
  {
    name: "Samarra",
    description: "Famous for the shrine of the tenth and eleventh Imams, as well as the site of the occultation of the twelfth Imam (AS), Samarra features the iconic spiral minaret and magnificent golden dome.",
    days: "Optional",
    image: "/samarra.jpg"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Sacred Destinations
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Our journey takes you to the holiest sites in Iraq, where you'll experience the profound spiritual heritage and connect with centuries of Islamic history.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {destinations.map((destination, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md border border-border group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div 
                  className="w-full h-full bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
                  <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mt-2">
                    {typeof destination.days === 'number' ? `${destination.days} Days` : destination.days}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
