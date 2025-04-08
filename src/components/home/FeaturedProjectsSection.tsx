
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedProjectsSectionProps {
  projects: FeaturedProject[];
}

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="block">
              <div className="project-card h-full flex flex-col">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
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
