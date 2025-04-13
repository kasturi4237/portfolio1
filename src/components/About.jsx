const About = () => {
    return (
      <section id="about" className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">Frontend Developer & CS Student</h3>
              <p className="text-gray-600 mb-4">
                I'm a Computer Science Engineering student at Indian Institute of Information Technology Ranchi, 
                with a passion for creating intuitive and responsive web interfaces that deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 mb-6">
                My focus is on building accessible, well-designed websites and applications using modern frontend technologies. 
                I enjoy solving problems through code and continuously learning new technologies to improve my skills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300">
                  My Projects
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors duration-300">
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Education</h4>
                <div className="border-l-2 border-indigo-600 pl-4 py-1">
                  <p className="font-medium">Bachelor of Technology in Computer Science</p>
                  <p className="text-gray-600">Indian Institute of Information Technology Ranchi</p>
                  <p className="text-gray-500 text-sm">2023 - 2027 | GPA: 7.0</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Personal Details</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-24 text-gray-600">Name:</span>
                    <span className="font-medium">Kasturi Marandi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-24 text-gray-600">Email:</span>
                    <span className="font-medium">kasturi28301@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-24 text-gray-600">Phone:</span>
                    <span className="font-medium">+91 7856803553</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-24 text-gray-600">Location:</span>
                    <span className="font-medium">Ranchi, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  