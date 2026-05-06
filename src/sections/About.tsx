import React from 'react';
import { motion } from 'framer-motion';

import AnimatedAvatar from '../components/AnimatedAvatar';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.
            </p>
            <p>
              Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-2xl font-bold text-accent">1+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Year Experience</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-2xl font-bold text-accent">3+</h4>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Companies</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatedAvatar />
        </div>
      </div>
    </section>
  );
};

export default About;
