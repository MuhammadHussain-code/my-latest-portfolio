import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutHero from '@components/sections/AboutHero';
import StatsCounter from '@components/sections/StatsCounter';
import ClientsSection from '@components/sections/ClientsSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';

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

const About = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24"
    >
      <AboutHero />
      <StatsCounter />
      <ClientsSection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default About;
