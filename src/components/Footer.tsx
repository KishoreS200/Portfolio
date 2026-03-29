
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-background pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Subtle glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Logo / Brand */}
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer mb-6 group relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
            Kishore S
          </span>
        </Link>
        
        <p className="text-gray-500 text-sm mb-8 font-light max-w-sm">
          Building the future, one line at a time.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/kishore-s-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/KishoreS200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-xs font-light mt-auto">
          &copy; {new Date().getFullYear()} Kishore S. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
