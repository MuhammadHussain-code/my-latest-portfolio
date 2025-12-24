import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -8;
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-slate-100 dark:border-slate-700/50 group">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* View Project Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="px-6 py-3 bg-white text-slate-900 rounded-xl font-medium flex items-center gap-2 shadow-xl"
                initial={{ y: 20 }}
                animate={{ y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                View Project
                <FiExternalLink className="w-4 h-4" />
              </motion.span>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 text-xs font-medium bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-lg">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-display text-slate-900 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.category}
                </p>
              </div>
              
              <motion.div
                className="p-2 rounded-lg bg-accent-50 dark:bg-accent-500/10 text-accent-500"
                animate={{
                  x: isHovered ? 0 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <FiExternalLink className="w-5 h-5" />
              </motion.div>
            </div>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                115deg,
                transparent 20%,
                rgba(255, 255, 255, 0.1) 40%,
                rgba(255, 255, 255, 0.1) 60%,
                transparent 80%
              )`,
              transform: 'translateX(-100%)',
            }}
            animate={{
              transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
