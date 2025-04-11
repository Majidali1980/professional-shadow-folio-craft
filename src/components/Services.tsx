
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Paintbrush, Smartphone, Globe, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom website development using the latest technologies and best practices.',
    icon: <Code className="h-12 w-12 text-primary" />
  },
  {
    id: 2,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: <Smartphone className="h-12 w-12 text-primary" />
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design solutions focused on creating exceptional user experiences.',
    icon: <Paintbrush className="h-12 w-12 text-primary" />
  },
  {
    id: 4,
    title: 'Web Optimization',
    description: 'Performance optimization to make your website faster and more efficient.',
    icon: <Globe className="h-12 w-12 text-primary" />
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to grow your online presence.',
    icon: <Megaphone className="h-12 w-12 text-primary" />
  },
  {
    id: 6,
    title: 'Analytics',
    description: 'Data analysis and insights to help you make informed business decisions.',
    icon: <BarChart className="h-12 w-12 text-primary" />
  }
];

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  
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
    
    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-secondary/20">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            I provide high-quality services tailored to meet your specific needs and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`glass-card hover:-translate-y-2 transition-all duration-300 ease-out border-border/50 ${isInView ? 'opacity-100' : 'opacity-0'}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
