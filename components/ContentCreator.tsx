import React from 'react';
import Section from './common/Section';
import { InstagramIcon } from './icons';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="glass-card p-6 rounded-lg shadow-md text-center">
        <p className="text-3xl font-bold text-cyan-400">{value}</p>
        <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
);

const ContentCreator: React.FC = () => {
  return (
    <Section id="content" className="bg-[#0a192f]">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                Content Creator Life
            </h2>
            <p className="mt-4 text-lg text-slate-400">
                I share relatable and authentic content about the realities of IT life, developer struggles, and simplified tech tutorials for beginners. My goal is to build a supportive community for students, freshers, and fellow IT professionals.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <StatCard value="17.8K+" label="Instagram Followers" />
                <StatCard value="10K+" label="Avg. Reel Views" />
                <StatCard value="300K+" label="Top Reel Views" />
            </div>
            <a href="https://www.instagram.com/shyju.tech/" target="_blank" rel="noopener noreferrer"
               className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg transform hover:scale-105">
                <InstagramIcon className="w-5 h-5" />
                Follow @shyju.tech
            </a>
        </div>
    </Section>
  );
};

export default ContentCreator;