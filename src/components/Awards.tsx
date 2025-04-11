
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const awards = [
  {
    id: 1,
    title: 'Best Web Design',
    organization: 'Design Awards',
    year: '2023',
    icon: <Trophy className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: 'Excellence in Innovation',
    organization: 'Tech Summit',
    year: '2022',
    icon: <Medal className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: 'Developer of the Year',
    organization: 'Dev Community',
    year: '2021',
    icon: <Award className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: 'Top Rated Freelancer',
    organization: 'Freelance Platform',
    year: '2020',
    icon: <Star className="h-10 w-10 text-primary" />,
  },
];

const Awards = () => {
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
    
    const section = document.getElementById('awards');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" className="bg-secondary/20">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">
            Honors and achievements that highlight my commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <Card 
              key={award.id} 
              className={`glass-card text-center hover:-translate-y-2 transition-all duration-300 ease-out ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-primary/10">{award.icon}</div>
                <h3 className="text-xl font-medium mb-1">{award.title}</h3>
                <p className="text-foreground/70">{award.organization}</p>
                <p className="text-sm text-primary font-medium mt-2">{award.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
