
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Typhoon",
      description: "Open source Thai LLM ecosystem with data collection, model training, and developer platform.",
      image: "/placeholder.svg",
      link: "/projects#typhoon"
    },
    {
      id: 2,
      title: "PromptHub",
      description: "Prompt engineering marketplace connecting creators with businesses.",
      image: "/placeholder.svg",
      link: "/projects#prompthub"
    },
    {
      id: 3,
      title: "Finnomena",
      description: "FinTech Wealth Management Platform with ML-based investment optimization.",
      image: "/placeholder.svg",
      link: "/projects#finnomena"
    }
  ];

  const skills = [
    "Product Management", 
    "Machine Learning", 
    "Artificial Intelligence", 
    "Data Analytics", 
    "UX/UI Design", 
    "Agile Methodologies",
    "Financial Technology", 
    "E-commerce",
    "Enterprise Solutions"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <SkillsSection skills={skills} />
    </div>
  );
};

export default Home;
