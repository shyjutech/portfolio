import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface OfficialProject {
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  techStack: string[];
}

export interface BlogPost {
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
}
