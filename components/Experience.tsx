import React from 'react';
import Section from './common/Section';
import { EXPERIENCE_DATA } from '../constants';
import { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem; isLast: boolean }> = ({ item, isLast }) => (
    <div className="relative pl-8">
        <div className="absolute left-0 top-1 h-full">
            <span className="absolute left-[-6.5px] top-0 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#0a192f]"></span>
            {!isLast && <div className="absolute left-[-1.5px] top-3 h-full w-0.5 bg-slate-700"></div>}
        </div>
        <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-200">{item.role}</h3>
            <p className="text-md font-semibold text-cyan-400">{item.company} &bull; {item.duration}</p>
            <p className="mt-2 text-slate-400">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                    <span key={tech} className="inline-block bg-cyan-400/10 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Experience: React.FC = () => {
    return (
        <Section id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                    Career Journey
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                    From corporate roles to startup innovation, my path has been driven by a passion for building great products.
                </p>
            </div>
            <div className="max-w-2xl mx-auto">
                {EXPERIENCE_DATA.map((item, index) => (
                    <ExperienceCard key={item.company} item={item} isLast={index === EXPERIENCE_DATA.length - 1} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;
