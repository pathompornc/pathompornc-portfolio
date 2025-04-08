
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects/projects';
import ProjectCard from '@/components/projects/ProjectCard';

const FeaturedProjectsSection: React.FC = () => {
  // Select the first 3 projects as featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
