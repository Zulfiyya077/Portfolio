import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof personalInfo.certificates[0] | null>(null);

  return (
    <section id="experience" className="section-container">
      <div className="space-y-24">
        {/* Work Experience */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            Work <span className="text-accent">Experience</span>
            <div className="h-px bg-white/10 flex-grow ml-4" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {personalInfo.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 border-l-4 border-l-accent"
              >
                <span className="text-sm text-accent font-bold tracking-widest uppercase">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                <h4 className="text-gray-400 font-medium mt-1">{exp.company}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            My <span className="text-accent">Certificates</span>
            <div className="h-px bg-white/10 flex-grow ml-4" />
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInfo.certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 glass-card p-2 group-hover:border-accent/50 transition-all duration-500">
                  <img 
                    src={cert.image} 
                    alt={cert.study}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <FaSearchPlus />
                    </div>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] text-accent font-bold uppercase">{cert.period}</p>
                    <h4 className="text-white text-sm font-bold truncate">{cert.study}</h4>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-white font-medium group-hover:text-accent transition-colors">{cert.study}</h3>
                  <p className="text-gray-500 text-sm mt-1">{cert.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#111111] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="bg-black/40 p-4 md:p-8 flex items-center justify-center">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.study}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4">
                    {selectedCert.period} • {selectedCert.institution}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {selectedCert.study}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {selectedCert.description}
                  </p>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-gray-500">
                      Verified Certification by {selectedCert.institution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
