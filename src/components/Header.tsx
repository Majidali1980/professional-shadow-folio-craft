
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-md py-2' : 'py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-gradient">Portfolio.</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['home', 'about', 'portfolio', 'services', 'testimonials', 'awards', 'faq', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-foreground/80 hover:text-primary transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <Button 
            variant="outline" 
            onClick={() => window.open('/cv.pdf', '_blank')}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Download CV
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="container flex flex-col py-4 space-y-3">
            {['home', 'about', 'portfolio', 'services', 'testimonials', 'awards', 'faq', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="py-2 text-foreground/80 hover:text-primary transition-colors text-left capitalize"
              >
                {item}
              </button>
            ))}
            <Button 
              variant="outline" 
              onClick={() => window.open('/cv.pdf', '_blank')}
              className="border-primary text-primary hover:bg-primary/10 mt-2 w-full"
            >
              Download CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
