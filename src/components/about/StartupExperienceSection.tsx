import React from 'react';
import { Rocket } from 'lucide-react';

interface StartupExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
}

interface StartupExperienceSectionProps {
  startups: StartupExperience[];
}

const StartupExperienceSection: React.FC<StartupExperienceSectionProps> = ({ startups }) => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Startup Experience</h2>
      <div className="space-y-6">
        {startups.map((startup, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <Rocket className="h-6 w-6 text-warm-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">{startup.company}</h3>
                <p className="text-gray-700 mb-2">{startup.position}</p>
                <p className="text-gray-600 mb-2">{startup.period}</p>
                <p className="text-gray-600 mb-2">{startup.location}</p>
                <ul className="list-disc list-inside space-y-2">
                  {startup.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700">{item}</li>
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