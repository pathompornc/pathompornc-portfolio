
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in gradient-text">
            Patt Chokchainant
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 animate-fade-in delay-100">
            AI/ML Product Manager
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate-fade-up delay-200">
            Bridging AI and ML into scalable, user-centric products with 5 years of experience in e-commerce and fintech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link to="/projects" className="btn-primary flex items-center justify-center gap-2">
              View My Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-outline flex items-center justify-center gap-2">
              About Me <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
