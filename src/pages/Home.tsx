
import React from 'react';
import { ArrowRight, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Typhoon",
      description: "Open source Thai LLM ecosystem with data collection, model training, and developer platform.",
      image: "/placeholder.svg",
      link: "/projects#typhoon"
    },
    {
      id: 2,
      title: "PromptHub",
      description: "Prompt engineering marketplace connecting creators with businesses.",
      image: "/placeholder.svg",
      link: "/projects#prompthub"
    },
    {
      id: 3,
      title: "Finnomena",
      description: "FinTech Wealth Management Platform with ML-based investment optimization.",
      image: "/placeholder.svg",
      link: "/projects#finnomena"
    }
  ];

  const skills = [
    "Product Management", 
    "Machine Learning", 
    "Artificial Intelligence", 
    "Data Analytics", 
    "UX/UI Design", 
    "Agile Methodologies",
    "Financial Technology", 
    "E-commerce",
    "Enterprise Solutions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in gradient-text">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 animate-fade-in delay-100">
              Product Manager in AI/ML
            </h2>
            <p className="text-lg text-gray-600 mb-8 animate-fade-up delay-200">
              Driving innovation with 5 years of experience in ecommerce and fintech, 
              specializing in creating intelligent products that solve real-world problems.
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

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link to={project.link} key={project.id} className="block">
                <div className="project-card h-full flex flex-col">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex items-center text-evergreen-600 font-medium">
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-12">Core Competencies</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-evergreen-50 text-evergreen-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link to="/about" className="btn-primary flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> My Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
