const Skills = () => {
    const skills = {
      languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
      frontend: ["React.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Vercel"]
    };
  
    const SkillCard = ({ title, skills, icon }) => (
      <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  
    return (
      <section id="skills" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Languages" 
              skills={skills.languages} 
              icon={<span className="text-2xl">💻</span>} 
            />
            <SkillCard 
              title="Frontend" 
              skills={skills.frontend} 
              icon={<span className="text-2xl">🎨</span>} 
            />
            <SkillCard 
              title="Backend" 
              skills={skills.backend} 
              icon={<span className="text-2xl">⚙️</span>} 
            />
            <SkillCard 
              title="Database" 
              skills={skills.database} 
              icon={<span className="text-2xl">🗄️</span>} 
            />
            <SkillCard 
              title="Tools & Deployment" 
              skills={skills.tools} 
              icon={<span className="text-2xl">🚀</span>} 
            />
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for a Frontend Developer?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to new opportunities. 
              Let's build something amazing together!
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  