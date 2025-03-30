
import React from 'react';

const pricingPlans = [
  {
    name: "Single Occupancy",
    price: "$1,990",
    description: "Private room",
    featured: false,
    forWho: "Individual participants (14+ years)",
    features: []
  },
  {
    name: "Double Occupancy",
    price: "$1,590",
    description: "Per person (shared room)",
    featured: true,
    forWho: "Individual participants (14+ years)",
    features: []
  },
  {
    name: "Family Plan",
    price: "Starting at $1,390",
    description: "Per person (designed for families)",
    featured: false,
    forWho: "3 or more family members",
    features: [
      "Parents: $1,590 per person",
      "Children (14+ years): $1,390 per person",
      "Children (6-13 years): $1,190 per child",
      "Children under 6 years: Free (if no separate bed is required)"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Pricing Plans
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          We offer flexible pricing options to accommodate individuals and families. A deposit of $100 per person is needed to secure a seat, with the remaining program fees payable in cash upon arrival.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`price-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium transform translate-x-2 -translate-y-2">
                  Popular
                </div>
              )}
              
              <div className="price-card-header">
                <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.forWho}</p>
              </div>
              
              <div className="price-card-body">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                {plan.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <a href="#register" className={plan.featured ? "btn-secondary w-full block text-center" : "btn-outline w-full block text-center"}>
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="islamic-card">
              <h3 className="text-xl font-bold mb-4 text-primary">What's Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accommodation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Meals: Breakfast, lunch, and dinner</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Airport drop-off</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transportation in Iraq during the program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lectures participation and materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Azah Latmiyate</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visa assistance</span>
                </li>
              </ul>
            </div>
            
            <div className="islamic-card">
              <h3 className="text-xl font-bold mb-4 text-primary">Not Included</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>International airfare</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-destructive flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Visa fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
