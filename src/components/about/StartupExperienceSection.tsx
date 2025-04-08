import React from 'react';
import { Rocket } from 'lucide-react';

interface StartupExperience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

interface StartupExperienceSectionProps {
  startups: StartupExperience[];
}

const StartupExperienceSection: React.FC<StartupExperienceSectionProps> = ({ startups }) => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Startup Experience</h2>
      <div className="space-y-8">
        {startups.map((startup, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-l-warm-600 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-64 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="h-5 w-5 text-warm-600" />
                  <h3 className="font-bold text-lg">{startup.company}</h3>
                </div>
                <p className="text-gray-700 font-medium mb-1">{startup.position}</p>
                <p className="text-gray-600 mb-1">{startup.period}</p>
              </div>
              <div className="flex-1">
                <ul className="space-y-3">
                  {startup.description.map((item, i) => (
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

export default StartupExperienceSection;