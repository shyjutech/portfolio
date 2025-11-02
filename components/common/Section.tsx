import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`w-full py-20 md:py-28 ${className}`}>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 fade-in-up">
        {children}
      </div>
    </section>
  );
};

export default Section;
