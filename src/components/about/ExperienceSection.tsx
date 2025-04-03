
import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-l-warm-600 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-64 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="h-5 w-5 text-warm-600" />
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-1">{exp.position}</p>
                <p className="text-gray-600 mb-1">{exp.period}</p>
                <p className="text-gray-600 flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> {exp.location}
                </p>
              </div>
              <div className="flex-1">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-cream-500 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
