
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import SkillsSection from '@/components/home/SkillsSection';

const Home: React.FC = () => {
  const skills = [
    "Product Management", 
    "Product Strategy and Roadmapping",
    "Feature Prioritization",
    "Market Research and Competitive Analysis",
    "User Research",
    "Project Management",
    "Agile Methodologies",
    "Scrum",
    "Project Management",
    "Process Improvement",
    "Data Analytics",
    "SQL",
    "Python",
    "Excel",
    "Enterprise Solutions"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection skills={skills} />
    </div>
  );
};

export default Home;
