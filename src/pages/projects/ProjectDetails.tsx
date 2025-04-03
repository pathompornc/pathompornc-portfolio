import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/data/projects/projects';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Tag } from 'lucide-react';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-cream-50">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-warm-700 hover:text-warm-800">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-warm-700 hover:text-warm-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-warm-800 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-700 mb-6">{project.context}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Problem</h2>
                <p className="text-gray-700">{project.problem}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Solution</h2>
                <p className="text-gray-700">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Results</h2>
                <p className="text-gray-700">{project.results}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Industry</h2>
                <div className="flex flex-wrap gap-2">
                  {project.industry.split(', ').map((industry, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="bg-cream-50 text-warm-700 border-cream-200"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-warm-50 text-warm-700 border-warm-200"
                    >
                      <Tag className="h-3 w-3 mr-1 inline" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 