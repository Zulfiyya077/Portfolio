import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar.png';
import upImg from '../assets/up.png';
import downImg from '../assets/down.png';
import leftImg from '../assets/left.png';
import rightImg from '../assets/right.png';

const images = [
  { id: 'avatar', src: avatarImg },
  { id: 'up', src: upImg },
  { id: 'down', src: downImg },
  { id: 'left', src: leftImg },
  { id: 'right', src: rightImg },
];

const AnimatedAvatar: React.FC = () => {
  const [activeId, setActiveId] = useState('avatar');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      
      const distance = Math.sqrt(dx * dx + dy * dy);
      const threshold = rect.width / 5;
      
      if (distance < threshold) {
        setActiveId('avatar');
      } else {
        if (Math.abs(dx) > Math.abs(dy)) {
          setActiveId(dx > 0 ? 'right' : 'left');
        } else {
          setActiveId(dy > 0 ? 'down' : 'up');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[700px] aspect-square mx-auto flex items-center justify-center">
      {/* Animated background blobs - enhanced for a larger avatar */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-accent to-purple-600 blur-[80px] rounded-full"
      />

      {/* Main Avatar Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
          style={{
            filter: 'drop-shadow(0 20px 50px rgba(59, 130, 246, 0.3))'
          }}
        >
          {/* Render all images and fade between them */}
          {images.map((img) => (
            <motion.img
              key={img.id}
              src={img.src}
              alt={`Avatar ${img.id}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeId === img.id ? 1 : 0,
                scale: activeId === img.id ? 1 : 1.03
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://ui-avatars.com/api/?name=Z&background=3b82f6&color=fff';
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Subtle bottom glow base */}
      <div className="absolute bottom-0 w-1/2 h-1/6 bg-accent/20 blur-3xl rounded-full" />
    </div>
  );
};

export default AnimatedAvatar;
