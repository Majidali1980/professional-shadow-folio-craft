
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Marketing Director',
    company: 'Innovate Inc.',
    content: 'Working with John was an absolute pleasure. His attention to detail and creative approach helped us rebrand our entire digital presence. The results exceeded our expectations!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'TechFusion',
    content: 'John delivered an exceptional e-commerce platform for our business that increased our online sales by 200%. His technical expertise and problem-solving skills are outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'CreativeMinds',
    content: 'The mobile application John developed for us received phenomenal feedback from our customers. His understanding of user experience and attention to detail is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Founder',
    company: 'DigitalNow',
    content: 'John transformed our outdated website into a modern, responsive platform that perfectly represents our brand. His communication throughout the project was clear and professional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
  }
];

const Testimonials = () => {
  const [currentTestimonials, setCurrentTestimonials] = useState<number[]>([0, 1]);
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentTestimonials(prev => {
          const next = [
            (prev[0] + 2) % testimonials.length,
            (prev[1] + 2) % testimonials.length
          ];
          return next;
        });
      } else {
        setCurrentTestimonials(prev => {
          const previous = [
            (prev[0] - 2 + testimonials.length) % testimonials.length,
            (prev[1] - 2 + testimonials.length) % testimonials.length
          ];
          return previous;
        });
      }
      setIsAnimating(false);
    }, 300);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">
            What my clients say about working with me
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {currentTestimonials.map(index => {
              const testimonial = testimonials[index];
              return (
                <Card 
                  key={testimonial.id} 
                  className={`glass-card transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#9b87f5" className="text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 italic mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className={`flex justify-center gap-4 mt-8 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => navigate('prev')}
              disabled={isAnimating}
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <ChevronLeft className="text-primary" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => navigate('next')}
              disabled={isAnimating}
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              <ChevronRight className="text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
