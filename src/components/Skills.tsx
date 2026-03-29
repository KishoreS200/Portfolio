
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      skills: ["Java", "REST API", "Node.js (Familiar)"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Vercel", "NPM"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "AI Workflows",
      skills: ["ChatGPT", "Claude AI", "Google Gemini", "Cursor", "Antigravity"],
      color: "from-indigo-400 to-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="neon-text">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full md:mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit that empowers me to build scalable, modern applications.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`glass-card p-6 md:p-8 relative group overflow-hidden ${idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${idx === 4 ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              {/* Subtle top border gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
