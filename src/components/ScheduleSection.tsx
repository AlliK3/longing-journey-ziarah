
import React from 'react';

const schedule = [
  {
    day: 1,
    date: "Friday, July 25, 2025",
    location: "Najaf",
    details: "Arrival to Najaf airport inshallah"
  },
  {
    day: 2,
    date: "Saturday, July 26, 2025",
    location: "Najaf",
    details: "Details TBA"
  },
  {
    day: 3,
    date: "Sunday, July 27, 2025",
    location: "Najaf",
    details: "Details TBA"
  },
  {
    day: 4,
    date: "Monday, July 28, 2025",
    location: "Najaf",
    details: "Details TBA"
  },
  {
    day: 5,
    date: "Tuesday, July 29, 2025",
    location: "Kathmiah",
    details: "Details TBA"
  },
  {
    day: 6,
    date: "Wednesday, July 30, 2025",
    location: "Kathmiah",
    details: "Details TBA"
  },
  {
    day: 7,
    date: "Thursday, July 31, 2025",
    location: "Karbala",
    details: "Details TBA"
  },
  {
    day: 8,
    date: "Friday, August 1, 2025",
    location: "Karbala",
    details: "Details TBA"
  },
  {
    day: 9,
    date: "Saturday, August 2, 2025",
    location: "Karbala",
    details: "Details TBA"
  },
  {
    day: 10,
    date: "Sunday, August 3, 2025",
    location: "Karbala",
    details: "Details TBA"
  },
  {
    day: 11,
    date: "Monday, August 4, 2025",
    location: "Karbala",
    details: "Details TBA"
  },
  {
    day: 12,
    date: "Tuesday, August 5, 2025",
    location: "Najaf",
    details: "Return Flights from Najaf Airport"
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
          Trip Schedule
        </h2>
        
        <div className="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-lg max-w-3xl mx-auto mb-4">
            Join us on a transformative 12-day journey from July 25 to August 5, 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <span className="font-bold">4 days</span> in Najaf
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <span className="font-bold">2 days</span> in Kathimia
            </div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <span className="font-bold">6 days</span> in Karbala
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {schedule.map((day, index) => (
            <div key={index} className="ziarah-schedule-day">
              <div className="flex flex-wrap justify-between items-center">
                <h3 className="text-xl font-bold text-primary">
                  Day {day.day}: {day.date}
                </h3>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {day.location}
                </span>
              </div>
              <p className="mt-2">{day.details}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Daily Open Discussions: Each day, participants will have the chance to engage in open discussions, allowing for a deeper exploration of the day's topics, clarifying questions, and fostering a collaborative learning environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
