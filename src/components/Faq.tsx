
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer a comprehensive range of services including web development, app development, UI/UX design, web optimization, digital marketing, and analytics. Each service is tailored to meet the specific needs of your project.'
  },
  {
    question: 'What is your typical process for working with a new client?',
    answer: 'My process typically begins with an initial consultation to understand your requirements and goals. I then develop a proposal outlining the scope, timeline, and cost. Once approved, I create a detailed plan, work iteratively with regular updates, and deliver the final product after thorough testing.'
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I always provide a detailed timeline during the proposal phase and keep you updated throughout the project.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various CSS frameworks like Tailwind CSS. For mobile development, I work with React Native and Swift. I stay current with industry trends to provide the best solutions.'
  },
  {
    question: 'How do you handle revisions and feedback?',
    answer: 'Feedback is an integral part of my process. I include designated revision rounds in every project, and I welcome your input throughout the development process. Clear communication ensures we create exactly what you envision.'
  },
  {
    question: 'Do you offer maintenance services after project completion?',
    answer: 'Yes, I offer various maintenance packages to keep your digital products up-to-date, secure, and performing optimally. These can include regular updates, performance monitoring, security checks, and content updates.'
  }
];

const Faq = () => {
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
    
    const section = document.getElementById('faq');
    if (section) {
      observer.observe(section);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about my services and process
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`glass-card border-border/50 rounded-lg overflow-hidden ${isInView ? 'opacity-100' : 'opacity-0'}`} 
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <AccordionTrigger className="px-4 text-left hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
