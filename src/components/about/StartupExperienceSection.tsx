import React from 'react';

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
      <h2 className="text-3xl font-bold mb-8">Startup Experience</h2>
      <div className="space-y-8">
        {startups.map((startup, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{startup.company}</h3>
                <p className="text-gray-600">{startup.position}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{startup.period}</p>
                <p className="text-gray-600">{startup.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {startup.description.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupExperienceSection; 