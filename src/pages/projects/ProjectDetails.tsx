
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Tag } from 'lucide-react';
import { projects } from '@/data/projects/projects';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite fallback loop
    target.src = "/placeholder.svg"; // Fallback image
  };

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
                        onError={handleImageError}
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
                <h2 className="text-xl font-semibold text-warm-800 mb-2">TL;DR</h2>
                <p className="text-gray-700">{project.tldr}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Problem/Opportunity</h2>
                <p className="text-gray-700">{project.problemOpportunity}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Key Actions</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.keyActions.map((action, idx) => (
                    <li key={idx}>{action}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Impact</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-warm-800 mb-2">Tools & Methods</h2>
                <div className="flex flex-wrap gap-2">
                  {project.toolsMethods.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-warm-50 text-warm-700 border-warm-200"
                    >
                      <Tag className="h-3 w-3 mr-1 inline" />
                      {tool}
                    </Badge>
                  ))}
                </div>
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

              {project.reference && (
                <div>
                  <h2 className="text-xl font-semibold text-warm-800 mb-2">Reference</h2>
                  <a 
                    href={project.reference} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-warm-700 hover:text-warm-800 underline"
                  >
                    {project.reference} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
