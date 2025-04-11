import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Enable smooth scrolling to section when URL contains hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Create intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with the reveal-animation class
    document.querySelectorAll('.reveal-animation').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12 reveal-animation">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Discover my journey, skills, and passion for creating exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal-animation">
              <div className="glass-card overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Majid Ali" 
                  className="w-full h-80 object-cover object-center"
                />
              </div>
            </div>
            
            <div className="space-y-6 reveal-animation">
              <h3 className="text-2xl font-semibold">
                A <span className="text-gradient">digital enthusiast</span> with 10+ years of experience
              </h3>
              
              <p className="text-foreground/80">
                I'm a passionate web developer specializing in creating innovative digital solutions. With over a decade of experience, I've collaborated with businesses of all sizes to transform their ideas into compelling online experiences.
              </p>
              
              <p className="text-foreground/80">
                My approach combines technical expertise with creative problem-solving to deliver projects that exceed client expectations. I stay current with industry trends and continuously expand my skill set to provide cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-xl font-medium text-primary">50+</h4>
                  <p className="text-foreground/70">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-primary">40+</h4>
                  <p className="text-foreground/70">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-primary">10+</h4>
                  <p className="text-foreground/70">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-primary">4</h4>
                  <p className="text-foreground/70">Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Portfolio />
      <Services />
      <Testimonials />
      <Awards />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
