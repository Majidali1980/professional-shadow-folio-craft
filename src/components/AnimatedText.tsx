
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (spanRef.current) {
        spanRef.current.style.opacity = '1';
        spanRef.current.style.transform = 'translateY(0)';
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      ref={spanRef} 
      className={cn('inline-block opacity-0 transform translate-y-3 transition-all duration-500', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
