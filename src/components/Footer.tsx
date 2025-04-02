
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-warm-950 text-cream-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold gradient-text">John Doe</h3>
            <p className="text-cream-200 max-w-xs">
              Product Manager specializing in AI/ML with 5 years experience in ecommerce and fintech.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-cream-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-cream-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/projects" className="text-cream-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/blog" className="text-cream-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/about" className="text-cream-300 hover:text-white transition-colors">About Me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warm-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-cream-400 text-sm mt-2 md:mt-0">
            Made with ❤️ in the Pacific Northwest
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
