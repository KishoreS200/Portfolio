
import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Lightbulb } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10 text-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="neon-text">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col - Text Content */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-lg font-light">
              <p className="text-xl text-white font-medium leading-normal border-l-4 border-blue-500 pl-6 rounded-l-sm bg-blue-500/5 py-4">
                Web Developer with a strong interest in creating clean, efficient, and scalable web applications. I enjoy turning ideas into functional products and continuously improving my skills in modern technologies.
              </p>
              
              <p>
                My passion for development goes beyond writing code. It's about a relentless drive for <strong>continuous learning</strong> and embracing new challenges in a fast-paced digital ecosystem. Whether it's architecting a robust backend or crafting an intuitive frontend, I approach every task with a deep-seated <strong>problem-solving mindset</strong>.
              </p>
              
              <p>
                I thrive on deconstructing complex problems and rebuilding them into elegant, user-centric solutions. By focusing on <strong>building real-world scalable applications</strong>, my ultimate goal is to produce software that not only meets current demands but is engineered to evolve seamlessly into the future. Let's create something extraordinary together.
              </p>
            </motion.div>

            {/* Right Col - Visual Grid */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Code2 className="text-blue-400" size={32} />, title: "Development", desc: "Clean & Scalable Code" },
                { icon: <Brain className="text-purple-400" size={32} />, title: "Problem Solving", desc: "Logical Approach" },
                { icon: <Rocket className="text-pink-400" size={32} />, title: "Performance", desc: "Optimized Scaling" },
                { icon: <Lightbulb className="text-indigo-400" size={32} />, title: "Continuous Learning", desc: "Modern Tech Stacks" }
              ].map((card, i) => (
                <div key={i} className="glass-card p-6 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 glow-hover">
                  <div className="p-3 bg-white/5 rounded-xl">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
