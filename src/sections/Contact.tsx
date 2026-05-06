import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { personalInfo } from '../data/personal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-accent">Touch</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Email</h4>
              <p className="text-gray-400 group-hover:text-accent transition-colors">{personalInfo.email}</p>
            </div>
          </a>

          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
              <FaLinkedin />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
              <p className="text-gray-400 group-hover:text-accent transition-colors">linkedin.com/in/zulfiyya-mammadova-n</p>
            </div>
          </a>

          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
              <FaGithub />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">GitHub</h4>
              <p className="text-gray-400 group-hover:text-accent transition-colors">github.com/Zulfiyya077</p>
            </div>
          </a>

          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Phone</h4>
              <p className="text-gray-400">{personalInfo.phone}</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Subject</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
              placeholder="How can I help you?"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>
          <button className="btn-primary w-full shadow-lg shadow-accent/20">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
