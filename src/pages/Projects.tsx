import React from 'react';
import { projects } from '@/data/projects/projects';
import ProjectCard from '@/components/projects/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A showcase of my work in AI/ML, fintech, and e-commerce, featuring products
            that solve complex problems and drive business results.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
