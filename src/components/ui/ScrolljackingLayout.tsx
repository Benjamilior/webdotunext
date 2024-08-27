// components/ScrolljackingContainer.tsx
'use client'

import React, { useRef, useState, useEffect } from 'react';

const ScrolljackingContainer: React.FC = ({ children }) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.findIndex(section => section === entry.target);
          setActiveSection(index);
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        } else {
          entry.target.classList.add('opacity-0', 'translate-y-10');
          entry.target.classList.remove('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.5 });

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scrolljacking-container h-screen overflow-y-scroll snap-y snap-mandatory">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => { sectionsRef.current[index] = el; }}
          className="h-screen snap-start transition-all duration-500 ease-in-out"
        >
          {child}
        </div>
      ))}
      <div className="fixed bottom-4 right-4 space-y-2">
        <button onClick={() => scrollToSection(Math.max(0, activeSection - 1))} className="scroll-button">Up</button>
        {React.Children.map(children, (_, index) => (
          <button 
            key={index} 
            onClick={() => scrollToSection(index)} 
            className={`scroll-button ${activeSection === index ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => scrollToSection(Math.min(React.Children.count(children) - 1, activeSection + 1))} className="scroll-button">Down</button>
      </div>
    </div>
  );
};

export default ScrolljackingContainer;
