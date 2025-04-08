
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects/projects';

const FeaturedProjectsSection: React.FC = () => {
  // Select the first 3 projects as featured projects
  const featuredProjects = projects.slice(0, 3);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite fallback loop
    target.src = "/placeholder.svg"; // Fallback image
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="block">
              <div className="project-card h-full flex flex-col">
                <div className="aspect-video bg-white relative overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="max-h-full object-contain transition-transform duration-500 hover:scale-105"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.tldr}</p>
                  <div className="flex items-center text-warm-600 font-medium">
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
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
