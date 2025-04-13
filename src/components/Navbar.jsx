import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">KM<span className="text-gray-800">.</span></a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 px-4 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
