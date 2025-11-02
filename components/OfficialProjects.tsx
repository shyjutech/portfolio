import React from 'react';
import Section from './common/Section';
import { OFFICIAL_PROJECTS_DATA } from '../constants';
import { OfficialProject } from '../types';

const ProjectCard: React.FC<{ project: OfficialProject }> = ({ project }) => (
    <div className="group rounded-lg p-6 glass-card shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
        <div>
            <h3 className="text-xl font-bold text-slate-200 mb-1">{project.title}</h3>
            <p className="text-md font-semibold text-purple-400 mb-3">{project.company}</p>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
        </div>
        <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-semibold bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const OfficialProjects: React.FC = () => {
  return (
    <Section id="work">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Official Projects
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Highlights from my professional work at various companies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFICIAL_PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default OfficialProjects;
