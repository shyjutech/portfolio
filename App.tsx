import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import OfficialProjects from './components/OfficialProjects';
import Projects from './components/Projects';
import ContentCreator from './components/ContentCreator';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <OfficialProjects />
        <Projects />
        <ContentCreator />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
