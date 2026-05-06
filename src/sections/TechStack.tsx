import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/projects';

const TechStack: React.FC = () => {
  return (
    <section id="skills" className="section-container bg-secondary/30 rounded-[3rem]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-accent">Expertise</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
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
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex flex-col items-center p-6 glass-card group"
          >
            <div 
              className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            >
              <tech.icon />
            </div>
            <h3 className="text-sm font-medium text-gray-300">{tech.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
