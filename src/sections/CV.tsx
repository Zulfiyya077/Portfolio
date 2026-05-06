import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import cvFile from '../assets/cv.pdf';

const CV: React.FC = () => {
  const handleDownload = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <section id="cv" className="section-container">
      <div className="glass-card bg-gradient-to-br from-accent/10 to-purple-600/10 p-12 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Curriculum <span className="text-accent">Vitae</span></h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Interested in working together? Download my full CV to see my professional 
            background, education, and detailed project experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={handleDownload}
              className="btn-primary flex items-center gap-2 group px-8 py-4"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" /> 
              Download CV (PDF)
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-64 h-80 bg-[#111111] rounded-2xl border border-white/10 shadow-2xl overflow-hidden hidden md:block"
        >
          <div className="p-6 space-y-4">
            <div className="w-1/2 h-4 bg-accent/20 rounded-full" />
            <div className="w-full h-2 bg-white/5 rounded-full" />
            <div className="w-full h-2 bg-white/5 rounded-full" />
            <div className="w-3/4 h-2 bg-white/5 rounded-full" />
            <div className="pt-4 space-y-2">
              <div className="w-full h-12 bg-white/5 rounded-lg" />
              <div className="w-full h-12 bg-white/5 rounded-lg" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm cursor-pointer">
             <span className="text-white font-bold bg-accent px-4 py-2 rounded-full">Preview</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CV;
