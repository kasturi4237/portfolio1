import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, liveUrl, githubUrl }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-52 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md flex items-center gap-2 text-sm"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-md flex items-center gap-2 text-sm"
              >
                <Github size={16} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="text-xs bg-indigo-50 text-indigo-600 py-1 px-2 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    
    {
      title: "E-Commerce Website",
      description: "A fully functional e-commerce platform with product catalog, search, filtering, and shopping cart functionalities.",
      image: "/images/ecommerce-site.jpg",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://shoppingwebsite-liart.vercel.app/",
      githubUrl: "https://github.com/kasturi4237/shoppingwebsite"
    },
    {
      title: "GitHub Profile Analyzer",
      description: "A React + TypeScript app that analyzes public GitHub activity like repositories and a daily commit chart using ShadCN UI components. ",
      image: "/images/gitHub-profile-Analyzer.jpg",
      tech: ["React.js","TypeScript","ShadCN UI","Tailwind CSS"],
      liveUrl: "https://github-profile-analyzer-dun.vercel.app/",
      githubUrl: "https://github.com/kasturi4237/github-profileAnalyzer"
    },
    {
        title: "Tour and Travel Website",
        description: "A responsive travel website for booking tours and hotels with filters, secure payments, and user reviews.",
        image: "/images/travel-website.jpg",
        tech: ["React.js", "Node.js", "Express.js", "Stripe", "PayPal", "Vercel"],
        liveUrl: "https://tourand-travel-jade.vercel.app/",
        githubUrl: "https://github.com/kasturi4237/tourandTravel"
      }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project reflects my ability to solve complex problems and work with different technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/kasturi4237" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Github size={20} />
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;