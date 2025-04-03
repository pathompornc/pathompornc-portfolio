
import React from 'react';
import { projects } from '@/data/projects/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectHeader from '@/components/projects/ProjectHeader';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        <ProjectHeader 
          title="Projects" 
          description="A showcase of my work in AI/ML, fintech, and e-commerce, featuring products that solve complex problems and drive business results."
        />
        
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
