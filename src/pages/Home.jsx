import { motion } from 'framer-motion';
import HeroSection from '@components/sections/HeroSection';
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

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <ProjectsShowcase limit={6} showViewAll />
    </motion.div>
  );
};

export default Home;
