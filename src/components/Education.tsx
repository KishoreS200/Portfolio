
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Cloud, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="neon-text">Achievements</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full md:mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <div className="glass-card p-8 md:p-10 relative group h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:neon-text transition-colors duration-300">Bachelor of Engineering</h3>
                  <p className="text-blue-400 font-medium">Information Science and Engineering</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex flex-col gap-1 text-gray-300">
                  <span className="font-semibold text-lg text-white">The Oxford College of Engineering</span>
                  <div className="flex flex-wrap items-center gap-4 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-gray-400" />
                      Bangalore
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      Expected 2026
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mt-4 font-light text-base border-l-2 border-blue-500/30 pl-4 py-1 group-hover:border-blue-500 transition-colors duration-300">
                  Final-year student with a strong foundation in programming, data structures, and web development. Passionate about building real-world applications and continuously improving technical skills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 h-full"
          >
            {/* Achievement 1 */}
            <div className="glass-card p-6 md:p-8 flex-1 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-0 group-hover:h-3/4 bg-purple-500 rounded-r-md transition-all duration-300"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:rotate-12 transition-transform duration-300">
                    <Trophy className="text-purple-400" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Web Design Competition Runner-Up</h4>
                  <p className="text-sm text-purple-400 mb-2 font-medium">2023</p>
                  <p className="text-gray-400 text-sm font-light">
                    Secured 2nd place among 48 teams in OXYIGNITE-2K23. Demonstrated technical ability in designing and developing responsive front-end interfaces under pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="glass-card p-6 md:p-8 flex-1 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-0 group-hover:h-3/4 bg-cyan-500 rounded-r-md transition-all duration-300"></div>
              
              <div className="flex gap-6 relative z-10">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:rotate-12 transition-transform duration-300">
                    <Cloud className="text-cyan-400" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">AWS Cloud Practitioner</h4>
                  <p className="text-sm text-cyan-400 mb-2 font-medium">Course Completed</p>
                  <p className="text-gray-400 text-sm font-light">
                    Gained foundational knowledge in cloud computing concepts, AWS services, security, architecture, pricing, and support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
