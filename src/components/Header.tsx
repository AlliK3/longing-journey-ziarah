
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            <span className="text-secondary">Longing</span> Journey
          </h1>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="menu-link">About</a>
          <a href="#destinations" className="menu-link">Destinations</a>
          <a href="#guides" className="menu-link">Guides</a>
          <a href="#schedule" className="menu-link">Schedule</a>
          <a href="#pricing" className="menu-link">Pricing</a>
          <a href="#register" className="btn-primary">Register Now</a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="menu-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#destinations" className="menu-link" onClick={() => setIsMenuOpen(false)}>Destinations</a>
            <a href="#guides" className="menu-link" onClick={() => setIsMenuOpen(false)}>Guides</a>
            <a href="#schedule" className="menu-link" onClick={() => setIsMenuOpen(false)}>Schedule</a>
            <a href="#pricing" className="menu-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#register" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Register Now</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
