
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';
import { ArrowDown, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="container flex flex-col md:flex-row items-center">
        <div className={`w-full md:w-1/2 space-y-6 text-center md:text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-xl md:text-2xl mb-2 text-muted-foreground">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <AnimatedText text="Majid" className="mr-3" delay={300} />
              <AnimatedText text="Ali" className="text-gradient" delay={600} />
            </h1>
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl md:text-3xl font-medium">
                <span className="text-gradient">Professional</span> Web Developer
              </h3>
              <p className="max-w-md mx-auto md:mx-0 text-foreground/80">
                I create stunning digital experiences that captivate your audience
                and help your business grow through innovative web solutions.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button onClick={scrollToContact} className="bg-primary hover:bg-primary/80 text-primary-foreground">
                Let's Talk
              </Button>
              <Button variant="outline" onClick={() => window.open('/cv.pdf', '_blank')} className="border-primary text-primary hover:bg-primary/10">
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Majid Ali profile" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse">
              <span className="font-bold text-primary-foreground">10+ Years</span>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;
