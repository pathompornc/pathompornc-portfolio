
import React from 'react';

interface ProjectHeaderProps {
  title: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, description }) => {
  return (
    <header className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">{title}</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        {description}
      </p>
    </header>
  );
};

export default ProjectHeader;
