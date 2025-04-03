
import React from 'react';
import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-12">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-evergreen-50 text-evergreen-700 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/about" className="btn-primary flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> My Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
