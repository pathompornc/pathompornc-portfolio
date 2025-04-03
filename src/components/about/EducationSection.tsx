
import React from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-warm-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">{edu.institution}</h3>
                <p className="text-gray-700 mb-2">{edu.degree}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
