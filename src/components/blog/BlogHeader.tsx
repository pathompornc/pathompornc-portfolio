
import React from 'react';

interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, description }) => {
  return (
    <header className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </header>
  );
};

export default BlogHeader;
