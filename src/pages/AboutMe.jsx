import AboutMeBio from "../components/about/AboutMeBio";
import AboutCounter from "../components/about/AboutCounter";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto'>
        <AboutMeBio />
      </motion.div>

      {/** Counter without paddings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}>
        <AboutCounter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto'>
        <AboutClients />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto mt-10'>
        <p className='font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light'>
          Here are some client reviews that reflect their trust in my work.
        </p>
        <div className='mt-10'>
          <iframe
            src='https://sendmea.io/wall/muhammad-hussain?embeded=true'
            width='100%'
            height='750'
            style={{ border: 0 }}
          />
        </div>
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
