import React from 'react';
import Section from './common/Section';
import { PROFILE_IMAGE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-slate-400">
            <p>
              Hello! I'm Shyju, a Lead Software Engineer based in Kerala, India, with over 11 years of experience in the IT industry. My journey has taken me from mobile development at a large corporation to building a cutting-edge low-code platform at a startup.
            </p>
            <p>
              Beyond my full-time role, I'm deeply passionate about the creator economy and building passive income streams. I spend my free time developing mobile apps with Flutter and Firebase. This "side hustle" isn't just about money—it's about the freedom to experiment, learn, and build things that people find useful.
            </p>
            <p>
              I believe in authenticity and sharing the real story behind the "developer life"—the struggles, the wins, and the constant balancing act between career, family, and personal projects. My goal is to help fellow developers unlock their potential to earn from their skills and build their own path to financial freedom.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
            <div className="relative">
                 <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-50"></div>
                 <img 
                    src={PROFILE_IMAGE_URL}
                    alt="Shyju M"
                    className="relative rounded-lg shadow-2xl object-cover w-full h-full"
                />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;