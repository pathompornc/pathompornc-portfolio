
import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from '@/data/projects/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="group h-full overflow-hidden border-cream-200 hover:border-cream-300 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative overflow-hidden">
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
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-warm-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{project.date}</span>
        </div>
        
        <CardTitle className="text-2xl font-bold text-warm-800 mb-3">{project.title}</CardTitle>
        <CardDescription className="text-gray-700 mb-2">{project.context}</CardDescription>
        
        <div className="mt-3 mb-4">
          <h4 className="text-sm font-semibold text-warm-600 uppercase mb-1">TL;DR</h4>
          <p className="text-gray-700">{project.tldr}</p>
        </div>
        
        <div className="mt-4">
          <Link 
            to={`/projects/${project.id}`}
            className="text-sm text-warm-700 hover:text-warm-800 underline font-medium"
          >
            View project details
          </Link>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex flex-col items-start">
        <div className="w-full space-y-3">
          <div>
            <p className="text-xs text-cream-700 uppercase tracking-wider mb-1.5">Industry</p>
            <div className="flex flex-wrap gap-1.5">
              {project.industry.split(', ').map((industry, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="bg-cream-50 text-warm-700 border-cream-200 hover:bg-cream-100"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs text-cream-700 uppercase tracking-wider mb-1.5">Tools & Methods</p>
            <div className="flex flex-wrap gap-1.5">
              {project.toolsMethods.map((tool, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-warm-50 text-warm-700 border-warm-200 hover:bg-warm-100"
                >
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
