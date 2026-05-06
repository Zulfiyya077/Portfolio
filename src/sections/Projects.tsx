import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeTab === 'all' || project.category === activeTab
  );

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-accent">Projects</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my work in web development and mobile applications.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10">
          {(['all', 'web', 'mobile'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenVideo={setSelectedVideo}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
      />
    </section>
  );
};

export default Projects;
