
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import DestinationsSection from '@/components/DestinationsSection';
import GuidesSection from '@/components/GuidesSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import WhyAttendSection from '@/components/WhyAttendSection';
import RegistrationSection from '@/components/RegistrationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <DestinationsSection />
      <GuidesSection />
      <ScheduleSection />
      <WhyAttendSection />
      <PricingSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
