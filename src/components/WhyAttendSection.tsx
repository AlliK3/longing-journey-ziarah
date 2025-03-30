
import React from 'react';

const WhyAttendSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Why Attend?
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Reasons to Join</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-secondary text-secondary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Comprehensive Learning</h4>
                  <p>This is the best time for powerful lectures offering a well-rounded perspective on Islamic study.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-secondary text-secondary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Spiritual Enrichment</h4>
                  <p>Held in Najaf and Karbala, the program includes Ziarah opportunities, enhancing both the intellectual and spiritual experience.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-secondary text-secondary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Interactive Learning</h4>
                  <p>Daily open discussions provide a forum for participants to engage directly with scholars, ask questions, and participate in group activities.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-secondary text-secondary-foreground h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Extended Spiritual Journey</h4>
                  <p>For those wishing to deepen their experience, the optional extension offers the chance to visit some of the holiest sites in Islam.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Who Should Attend?</h3>
            <p className="mb-6">
              This Tour is ideal for anyone interested in gaining a deep understanding of Islamic eschatology and the role of divine will in our lives. Whether you are:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>A student of Islamic studies</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>A seeker of knowledge</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>A parent wishing to connect your family with their faith</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary flex-shrink-0 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Someone seeking spiritual growth and connection</span>
              </li>
            </ul>
            
            <p className="mt-6">
              The content is accessible to both beginners and advanced learners, with daily open discussions providing ample opportunity for interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
