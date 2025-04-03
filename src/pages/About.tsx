
import React from 'react';
import { ExternalLink } from 'lucide-react';

import ProfileSection from '@/components/about/ProfileSection';
import CertificationsSection from '@/components/about/CertificationsSection';
import ExperienceSection from '@/components/about/ExperienceSection';
import EducationSection from '@/components/about/EducationSection';
import BeyondWorkSection from '@/components/about/BeyondWorkSection';

const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#"
  },
  {
    name: "Professional Product Manager",
    issuer: "Product School",
    date: "2022",
    link: "#"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera (Stanford)",
    date: "2021",
    link: "#"
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "2020",
    link: "#"
  }
];

const experiences = [
  {
    company: "AI Innovation Labs",
    position: "Senior Product Manager",
    period: "2022 - Present",
    location: "Seattle, WA",
    description: [
      "Leading development of Thai language LLM ecosystem including data collection, model training, and deployment platforms",
      "Launched AI-powered customer support solution for Thailand's largest bank, reducing response time by 45%",
      "Managing cross-functional team of engineers, data scientists, and designers across 3 countries"
    ]
  },
  {
    company: "FinTech Solutions Inc.",
    position: "Product Manager",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: [
      "Led development of ML-based investment optimization engine for wealth management platform",
      "Increased client retention by 35% and improved average portfolio performance by 12%",
      "Collaborated with financial advisors to create user-friendly interfaces for complex financial data"
    ]
  },
  {
    company: "E-commerce Innovations",
    position: "Associate Product Manager",
    period: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Developed conversational AI chatbot for major retail chain with 14K+ branches nationwide",
      "Implemented product recommendation systems processing 13M+ daily transactions",
      "Conducted user research to identify pain points and opportunities for digital transformation"
    ]
  }
];

const education = [
  {
    institution: "Stanford University",
    degree: "M.S. in Computer Science, AI Specialization",
    period: "2016 - 2018"
  },
  {
    institution: "University of California, Berkeley",
    degree: "B.S. in Computer Science and Business Administration",
    period: "2012 - 2016"
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        {/* Profile Section */}
        <section className="mb-16">
          <ProfileSection />
        </section>
        
        {/* Certifications Section */}
        <CertificationsSection certifications={certifications} />
        
        {/* Work Experience Section */}
        <ExperienceSection experiences={experiences} />
        
        {/* Education Section */}
        <EducationSection education={education} />
        
        {/* Beyond Work Section */}
        <BeyondWorkSection />
      </div>
    </div>
  );
};

export default About;
