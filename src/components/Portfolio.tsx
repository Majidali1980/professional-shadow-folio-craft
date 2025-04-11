
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Design',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 4,
    title: 'Branding Project',
    category: 'branding',
    image: 'https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_640.jpg',
    link: '#'
  },
  {
    id: 5,
    title: 'Fitness App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    link: '#'
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'web',
    image: 'https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_640.jpg',
    link: '#'
  }
];

const categories = ['all', 'web', 'app', 'design', 'branding'];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    setVisibleProjects(filtered);
  }, [filter]);
  
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
    
    const section = document.getElementById('portfolio');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="bg-background/50">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            Explore my recent projects showcasing my expertise and creative solutions
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category 
                ? "bg-primary hover:bg-primary/80 text-primary-foreground" 
                : "border-primary/30 hover:border-primary hover:bg-primary/5"
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300 ease-out ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="text-primary-foreground" size={20} />
                  </a>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
