import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* <div className="mb-6 relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <img 
              src="/api/placeholder/400/400" 
              alt="Kasturi Marandi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-indigo-600 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">👋</span>
          </div>
        </div> */}
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-600">Kasturi Marandi</span>
        </h1>
        
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          <h2 className="text-xl md:text-3xl font-bold mb-6">Frontend Developer & CS Engineering Student</h2>
        </div>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I craft beautiful, responsive and user-friendly web interfaces using modern technologies 
          like React.js, Tailwind CSS, and more. Currently pursuing my Bachelor's in Computer Science.
        </p>
        
        <div className="flex gap-4 mb-10">
          <a href="https://github.com/kasturi4237" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 bg-gray-800 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/kasturi-marandi" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kasturi28301@gmail.com"
            className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" 
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            View My Work
          </a>
          <a href="#contact" 
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
