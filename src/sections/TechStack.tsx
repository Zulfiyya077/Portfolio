import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/projects';

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="section-container py-24">
      {/* Container with dark glass effect like in the screenshot */}
      <div className="bg-[#0c0c0c]/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-20 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderColor: tech.color + "55",
                transition: { duration: 0.2 } 
              }}
              className="flex flex-col items-center justify-center p-10 bg-[#070707] border border-white/5 rounded-[2rem] group transition-all duration-300 shadow-2xl"
            >
              <div 
                className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                style={{ color: tech.color }}
              >
                <tech.icon />
              </div>
              <h3 className="text-[15px] font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
