
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </header>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-warm-900">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-evergreen-600 mt-1" />
                <div>
                  <h3 className="font-medium text-warm-900">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-evergreen-600 mt-1" />
                <div>
                  <h3 className="font-medium text-warm-900">Location</h3>
                  <p className="text-gray-600">Pacific Northwest, United States</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-evergreen-600 mt-1" />
                <div>
                  <h3 className="font-medium text-warm-900">Phone</h3>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium text-warm-900 mb-2">Connect Online</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/pathompornc" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-800 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/pathompornc" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-800 transition-colors">
                    GitHub
                  </a>
                  <a href="https://scholar.google.com/citations?user=6nkUwdAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-navy-800 transition-colors">
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-warm-900 mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-evergreen-500 focus:border-evergreen-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-evergreen-600 text-white py-2 px-4 rounded-md hover:bg-evergreen-700 transition-colors focus:ring-2 focus:ring-evergreen-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
