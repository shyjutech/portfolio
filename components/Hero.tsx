import React from 'react';
import { SOCIAL_LINKS, PROFILE_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-center py-32 md:py-40 lg:py-48 min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="blob-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
            <img 
                src={PROFILE_IMAGE_URL}
                alt="Shyju M"
                className="w-32 h-32 rounded-full mb-6 border-4 border-slate-700 shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 tracking-tight">
                Shyju M
            </h1>
            <p className="mt-4 text-lg md:text-xl animated-gradient-text font-semibold">
                Backend Developer | Flutter Developer | Content Creator
            </p>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400">
                Building scalable products by day, creating content and passive income streams by night. Passionate about simplifying tech and empowering developers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
                {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="text-slate-400 hover:text-cyan-300 transition-transform duration-300 hover:scale-125"
                >
                    <Icon className="w-6 h-6" />
                </a>
                ))}
            </div>
            <a href="#contact" className="mt-10 inline-block bg-cyan-400/10 text-cyan-300 font-bold py-3 px-8 rounded-full border border-cyan-300/50 hover:bg-cyan-400/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get In Touch
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;