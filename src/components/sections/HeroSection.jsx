import { motion } from "framer-motion";
import { FiArrowDownCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "@hooks/useThemeSwitcher";
import developerLight from "@images/developer.svg";
import developerDark from "@images/developer-dark.svg";

const HeroSection = () => {
  const [activeTheme] = useThemeSwitcher();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className='relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 -z-10'>
        {/* Gradient orbs */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.02] dark:opacity-[0.05]'
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-8 items-center'>
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='text-center lg:text-left order-2 lg:order-1'>
            {/* Badge */}
            <motion.div variants={itemVariants} className='mb-6'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-accent-500'></span>
                </span>
                Available for new projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display leading-tight text-slate-900 dark:text-white'>
              Hi, I am <span className='text-gradient'>Muhammad</span>
              <br />
              <span className='relative'>
                <span className='text-gradient'>Hussain</span>
                <motion.span
                  className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full'
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className='mt-6 text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0'>
              Software Engineer |{" "}
              <span className='text-accent-500 dark:text-accent-400'>
                Full-Stack Developer
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className='mt-4 text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0'>
              Specializing in MERN Stack development, building dynamic and
              efficient web applications with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <motion.a
                href='https://drive.google.com/file/d/1pECItN54HKTkOC5Brzpc4ZUWmjzSRJoy/view'
                target='_blank'
                rel='noopener noreferrer'
                className='btn-primary group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <FiArrowDownCircle className='w-5 h-5 group-hover:animate-bounce' />
                Download CV
              </motion.a>

              <Link to='/projects'>
                <motion.span
                  className='btn-secondary group inline-flex w-full justify-center'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}>
                  View Projects
                  <FiArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className='mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0'>
              {[
                { value: "5+", label: "Years Exp." },
                { value: "25+", label: "Projects" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className='text-center lg:text-left p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50'>
                  <div className='text-2xl sm:text-3xl font-display text-gradient'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-slate-500 dark:text-slate-400 mt-1'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className='relative order-1 lg:order-2'>
            {/* Decorative elements */}
            <div className='absolute inset-0 -z-10'>
              <motion.div
                className='absolute top-10 right-10 w-20 h-20 border-2 border-accent-300 dark:border-accent-600 rounded-2xl'
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className='absolute bottom-20 left-10 w-16 h-16 bg-secondary-400/20 dark:bg-secondary-500/20 rounded-full'
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className='absolute top-1/2 left-0 w-12 h-12 bg-accent-400/20 dark:bg-accent-500/20 rounded-lg'
                animate={{ x: [-10, 10, -10], rotate: [0, 90, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Main Image */}
            <motion.div
              className='relative'
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className='relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent-100 to-secondary-100 dark:from-accent-900/20 dark:to-secondary-900/20 p-8'>
                <img
                  src={activeTheme === "dark" ? developerLight : developerDark}
                  alt='Muhammad Hussain - Software Engineer'
                  className='w-full h-auto max-w-md mx-auto drop-shadow-2xl'
                />

                {/* Floating badges */}
                <motion.div
                  className='absolute top-6 right-6 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}>
                  <span className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    🚀 MERN Stack
                  </span>
                </motion.div>

                <motion.div
                  className='absolute bottom-6 left-6 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}>
                  <span className='text-sm font-medium text-slate-700 dark:text-slate-300'>
                    ⚡ Next.js & Prisma
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
