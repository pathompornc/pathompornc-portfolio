
import React from 'react';
import { Calendar, ExternalLink, Tag } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Project data
const projects = [
  {
    id: "typhoon",
    title: "Typhoon",
    context: "Open source Thai language LLM ecosystem",
    problem: "Thai language AI models lagged behind English counterparts with limited high-quality training data and tools.",
    solution: "Developed comprehensive ecosystem from data collection to deployment platforms.",
    results: "Created Thailand's largest open-source language model ecosystem, now used by the country's largest bank for customer support.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "AI/ML, Financial Services",
    skills: ["LLM Fine-tuning", "RAG", "Data Collection", "API Development", "Salesforce Integration"],
    date: "Jan 2023 - Present",
    logo: "/placeholder.svg",
  },
  {
    id: "prompthub",
    title: "PromptHub",
    context: "Prompt engineering marketplace",
    problem: "Organizations struggled to create effective prompts for LLMs, while prompt engineers had no central marketplace.",
    solution: "Built a two-sided marketplace connecting prompt engineers with businesses.",
    results: "Created a thriving community with thousands of prompts and hundreds of active users.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "AI/ML, Marketplace",
    skills: ["Prompt Engineering", "UX/UI Design", "Marketplace Development", "Community Building"],
    date: "Mar 2022 - Dec 2022",
    logo: "/placeholder.svg",
  },
  {
    id: "finnomena",
    title: "Finnomena",
    context: "FinTech Wealth Management Platform",
    problem: "Financial advisors lacked data-driven tools to provide optimal investment recommendations.",
    solution: "Developed ML-based investment optimization engine for portfolio recommendations.",
    results: "Increased client retention by 35% and improved average portfolio performance by 12%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "FinTech, Wealth Management",
    skills: ["ML Algorithms", "Financial Analysis", "Portfolio Optimization", "User Research"],
    date: "Jun 2020 - Feb 2022",
    logo: "/placeholder.svg",
  },
  {
    id: "conversational-ai",
    title: "Conversational AI Chatbot",
    context: "Digital transformation for major retail chain",
    problem: "Retail giant with 14K+ branches struggled to provide consistent customer service across channels.",
    solution: "Led development of conversational AI system to handle customer queries across e-commerce platforms.",
    results: "Reduced customer service costs by 28% while improving satisfaction scores by 15%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "Retail, E-commerce",
    skills: ["Conversational AI", "NLP", "Omnichannel Integration", "Customer Experience"],
    date: "Jan 2019 - May 2020",
    logo: "/placeholder.svg",
  },
  {
    id: "product-recommendation",
    title: "Product Recommendation Systems",
    context: "Large-scale e-commerce platform",
    problem: "Platform with 13M+ daily transactions had low conversion rates from product views.",
    solution: "Implemented advanced recommendation algorithms based on user behavior patterns.",
    results: "Increased conversion rates by 23% and average order value by 17%.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "E-commerce",
    skills: ["Recommendation Algorithms", "A/B Testing", "Data Analysis", "User Behavior Modeling"],
    date: "Mar 2018 - Dec 2018",
    logo: "/placeholder.svg",
  },
  {
    id: "speedboat",
    title: "Speedboat Studio",
    context: "Blockchain, no-code NFT management platform",
    problem: "Artists and creators faced technical barriers to entering the NFT marketplace.",
    solution: "Created no-code platform for NFT creation, distribution, and management.",
    results: "Enabled 500+ creators to launch successful NFT collections with over $2M in total sales.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    industry: "Blockchain, Digital Art",
    skills: ["Blockchain", "NFT", "No-code Tools", "Creator Economy"],
    date: "Sep 2017 - Feb 2018",
    logo: "/placeholder.svg",
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
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
          
          <div className="absolute top-3 right-3">
            <div className="bg-white p-1.5 rounded-md shadow-sm">
              <img 
                src={project.logo} 
                alt={`${project.title} logo`} 
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-warm-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{project.date}</span>
        </div>
        
        <CardTitle className="text-2xl font-bold text-warm-800 mb-3">{project.title}</CardTitle>
        <CardDescription className="text-gray-700 mb-2">{project.context}</CardDescription>
        
        <div className="mt-4 space-y-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="text-sm text-warm-700 hover:text-warm-800 underline font-medium">
                View project details
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4">
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-semibold text-warm-800">Problem</h4>
                  <p className="text-sm text-gray-700">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-800">Solution</h4>
                  <p className="text-sm text-gray-700">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-800">Results</h4>
                  <p className="text-sm text-gray-700">{project.results}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
            <p className="text-xs text-cream-700 uppercase tracking-wider mb-1.5">Skills & Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-warm-50 text-warm-700 border-warm-200 hover:bg-warm-100"
                >
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
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
