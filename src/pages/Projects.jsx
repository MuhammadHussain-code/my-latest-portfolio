import { motion } from 'framer-motion';
import ProjectsShowcase from '@components/sections/ProjectsShowcase';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24"
    >
      <ProjectsShowcase />
    </motion.div>
  );
};

export default Projects;
