
import React from 'react';
import { BookOpen, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProfileSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-12">
      {/* Left Content - For desktop shown first, for mobile shown second */}
      <div className={`${isMobile ? 'order-2 mt-6' : 'order-1'} md:w-2/3`}>
        <h1 className="text-3xl md:text-5xl font-bold mb-3 gradient-text">Patt Chokchainant</h1>
        <h2 className="text-xl text-warm-700 mb-6">Product Manager in AI/ML</h2>
        <p className="text-gray-700 mb-8 text-lg">
          I create intelligent products that solve complex problems, with 5 years 
          of experience across ecommerce and fintech. Currently focused on building 
          open-source AI ecosystems to democratize access to cutting-edge language technologies.
        </p>
        
        <div className="flex flex-wrap gap-5 mb-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors">
            <BookOpen className="h-5 w-5" />
            <span>Google Scholar</span>
          </a>
          <a href="mailto:contact@example.com" 
             className="flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span>Seattle, WA</span>
          </div>
        </div>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary inline-flex items-center gap-2"
        >
          Download Resume <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Right Content - Profile Image - For desktop shown second, for mobile shown first */}
      <div className={`${isMobile ? 'order-1' : 'order-2'} w-full md:w-1/3 mb-0`}>
        <div className="relative overflow-hidden rounded-2xl shadow-xl mx-auto" style={{ 
          aspectRatio: '3/2',
          maxWidth: isMobile ? '85%' : '100%'
        }}>
          <img
            className="w-full h-full object-cover"
            src="/placeholder.svg"
            alt="Profile"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-900/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
