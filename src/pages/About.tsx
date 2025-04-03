import React from 'react';
import { ExternalLink } from 'lucide-react';

import ProfileSection from '@/components/about/ProfileSection';
import CertificationsSection from '@/components/about/CertificationsSection';
import ExperienceSection from '@/components/about/ExperienceSection';
import EducationSection from '@/components/about/EducationSection';
import BeyondWorkSection from '@/components/about/BeyondWorkSection';
import StartupExperienceSection from '@/components/about/StartupExperienceSection';

const certifications = [
  {
    name: "PMP (Project Management Professional)",
    issuer: "PMI (Project Management Institute)",
    date: "2022 - Present",
    link: "https://www.credly.com/badges/24d63ef5-45a4-408c-b62e-82202790696d"
  },
  {
    name: "PMI-ACP (Agile Certified Practitioner)",
    issuer: "PMI (Project Management Institute)",
    date: "2022 - Present",
    link: "https://www.credly.com/badges/869f628f-1c99-44bc-b56c-7213d87b10b6/public_url"
  },
  {
    name: "CS50X (Introduction to Computer Science)",
    issuer: "Harvard University",
    date: "2025 - Present",
    link: "placeholder"
  }

];

const experiences = [
  {
    company: "SCB 10X",
    position: "Senior Product Manager, AI",
    period: "2022 - Present",
    location: "Seattle, WA",
    description: [
      "Leading development of Thai language LLM ecosystem including data collection, model training, and deployment platforms",
      "Launched AI-powered customer support solution for Thailand's largest bank, reducing response time by 45%",
      "Managing cross-functional team of engineers, data scientists, and designers across 3 countries"
    ]
  },
  {
    company: "Finnomena",
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
    company: "Sertis",
    position: "AI Product Manager",
    period: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Developed conversational AI chatbot for major retail chain with 14K+ branches nationwide",
      "Implemented product recommendation systems processing 13M+ daily transactions",
      "Conducted user research to identify pain points and opportunities for digital transformation"
    ]
  }
];

const startups = [
  {
    company: "TechStart Ventures",
    position: "Co-founder & CTO",
    period: "2017 - 2018",
    location: "Bangkok, Thailand",
    description: [
      "Co-founded AI-powered recruitment platform connecting tech talent with startups",
      "Built and scaled the MVP from 0 to 10,000 users in 6 months",
      "Secured $500K seed funding from prominent angel investors",
      "Led a team of 5 developers in building the core platform"
    ]
  }
];

const education = [
  {
    institution: "University of Washington",
    degree: "Master of Science in Information Management",
    period: "2024 - 2025",
    specialization: "Data Science and Machine Learning"
  },
  {
    institution: "Chulalongkorn University",
    degree: "Bachelor of Science in Accounting and Finance",
    period: "2015 - 2019",
    specialization: "Financial Technology and Analytics"
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
        
        {/* Startup Experience Section */}
        <StartupExperienceSection startups={startups} />
        
        {/* Education Section */}
        <EducationSection education={education} />
        
        {/* Beyond Work Section */}
        <BeyondWorkSection />
      </div>
    </div>
  );
};

export default About;
