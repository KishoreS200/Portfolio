import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Leaf, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Apps', 'AI Projects'];

  const projects = [
    {
      id: 1,
      title: 'Fitness Tracker',
      category: 'Web Apps',
      icon: <Activity size={24} className="text-blue-400" />,
      description: 'A web-based fitness tracking application that allows users to monitor workouts, track progress, and visualize performance data.',
      techStack: ['React', 'REST API', 'MongoDB'],
      github: 'https://github.com/KishoreS200/Fitness-Tracker',
      highlights: [],
      imageGradient: 'from-blue-600/40 to-cyan-500/40' // placeholder gradient since no image is provided
    },
    {
      id: 2,
      title: 'Climate Smart Cafeteria',
      category: 'Web Apps',
      icon: <Leaf size={24} className="text-emerald-400" />,
      description: 'A web application that helps users make eco-friendly food choices by analyzing environmental impact.',
      techStack: ['React', 'REST API', 'Node.js'],
      github: 'https://github.com/KishoreS200/Climate-Smart-Cafeteria',
      highlights: [],
      imageGradient: 'from-emerald-600/40 to-teal-500/40'
    },
    {
      id: 3,
      title: 'AI Resume Screening System',
      category: 'AI Projects',
      icon: <Cpu size={24} className="text-purple-400" />,
      description: 'Developed during TechSaksham (Microsoft & SAP), this AI-powered system automates resume screening using NLP techniques and ranks candidates efficiently.',
      techStack: ['Python', 'NLP', 'Machine Learning'],
      github: '#',
      highlights: [
        'Reduced screening time by 40%',
        'Improved classification accuracy by 15%',
        'Built real-time leaderboard system',
        'Optimized data processing by 18%'
      ],
      imageGradient: 'from-purple-600/40 to-pink-500/40'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="neon-text">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group"
              >
                {/* Image Placeholder with Gradient */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageGradient} opacity-60 mix-blend-overlay z-10 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    {project.icon}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:neon-text transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-6 space-y-2">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-300">
                          <span className="text-blue-500 mt-0.5">●</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-white/5 text-blue-300 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    {project.github !== '#' && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors hover:neon-text"
                      >
                        <FaGithub size={18} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
