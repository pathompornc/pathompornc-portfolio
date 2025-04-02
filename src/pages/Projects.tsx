
import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, Tag } from 'lucide-react';

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

const ProjectDetail = ({ project }: { project: typeof projects[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100" id={project.id}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Project Image Carousel */}
        <div className="relative bg-gray-100 aspect-video">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Carousel Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
              onClick={prevImage} 
              className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={nextImage} 
              className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Project Details */}
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <img src={project.logo} alt={`${project.title} logo`} className="w-10 h-10 rounded-md object-contain bg-gray-50 p-1" />
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{project.date}</span>
          </div>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Context</h3>
              <p className="mt-1">{project.context}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Problem</h3>
              <p className="mt-1">{project.problem}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Solution</h3>
              <p className="mt-1">{project.solution}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">Results</h3>
              <p className="mt-1">{project.results}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Industry</h3>
            <div className="text-sm text-gray-600">{project.industry}</div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-evergreen-100 text-evergreen-800">
                  <Tag className="h-3 w-3 mr-1" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in AI/ML, fintech, and e-commerce, featuring products
            that solve complex problems and drive business results.
          </p>
        </header>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectDetail key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
