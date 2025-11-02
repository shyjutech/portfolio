import React from 'react';
import Section from './common/Section';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <div 
        className="group rounded-lg overflow-hidden glass-card shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 fade-in-up"
        style={{ animationDelay: `${index * 150}ms` }}
    >
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover opacity-75 group-hover:opacity-100 transition-opacity" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-semibold bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-cyan-400 font-semibold hover:underline">
                    View Project &rarr;
                </a>
            )}
        </div>
    </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Personal Projects & Apps
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          A collection of my side projects and applications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;