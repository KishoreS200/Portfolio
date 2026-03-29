import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Developer", "Designer", "Creator"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [role, isDeleting, typingSpeed]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, role.length - 1) 
      : fullText.substring(0, role.length + 1);

    setRole(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(1000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/kishore-s-dev/", label: "LinkedIn" },
    { icon: <FaGithub size={24} />, href: "https://github.com/KishoreS200", label: "GitHub" },
    { icon: <Mail size={24} />, href: "mailto:kishore55435@gmail.com", label: "Email" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-left z-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-400 mb-2">Hello, I'm</h3>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Kishore S
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6 h-[60px] md:h-[72px]">
              Web <span className="neon-text">{role}</span><span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
              Building the future, one line at a time. I'm a Web Developer Intern passionate about creating beautiful, scalable web applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center gap-2 bg-black px-8 py-4 rounded-lg text-white font-medium">
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 glow-hover text-gray-300 hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Soft backdrop blur + glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
            
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-transparent to-purple-500 animate-[spin_4s_linear_infinite] opacity-50"></div>
            
            {/* Image container */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-background border-4 border-background p-1">
              <img 
                src={profileImg} 
                alt="Kishore S - Profile" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorator Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card py-2 px-4 rounded-full flex items-center gap-2 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Available for Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors"
      >
        <Link to="about" smooth={true} duration={500}>
          <span className="text-sm font-medium tracking-wide uppercase">Scroll Down</span>
          <div className="w-[1px] h-[40px] bg-gradient-to-b from-current to-transparent mx-auto mt-2"></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
