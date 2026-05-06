import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (video: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenVideo }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card flex flex-col h-full group"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-white/5">
        {project.video ? (
          <div className="w-full h-full flex items-center justify-center relative group/media">
            <video
              src={project.video}
              className="w-full h-full object-cover"
              muted
              loop
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              playsInline
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover/media:opacity-0 transition-opacity pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <FaPlay className="text-white ml-1" />
              </div>
            </div>
            <button
              onClick={() => project.video && onOpenVideo(project.video)}
              className="absolute inset-0 z-10"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-widest">
            Featured
          </div>
        )}
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-bold text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          <FaGithub /> GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
