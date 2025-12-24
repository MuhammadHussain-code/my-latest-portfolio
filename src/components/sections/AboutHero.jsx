import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiSmartphone } from 'react-icons/fi';

const skills = [
  { icon: FiCode, name: 'Frontend', tech: 'React, Next.js, Vue' },
  { icon: FiDatabase, name: 'Backend', tech: 'Node.js, Express, MongoDB' },
  { icon: FiLayout, name: 'UI/UX', tech: 'Figma, Tailwind CSS' },
  { icon: FiSmartphone, name: 'Mobile', tech: 'React Native' },
];

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://drive.google.com/thumbnail?id=1KiwYpXcH6Dt79IAwZVQU8NqYEoirf0Bp&sz=w1000"
                  alt="Muhammad Hussain"
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4">
                    <h3 className="text-lg font-display text-white">Muhammad Hussain</h3>
                    <p className="text-sm text-slate-300">Software Engineer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-accent-500 text-white rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-medium">5+ Years Exp</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 rounded-full"
            >
              About Me
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-display text-slate-900 dark:text-white leading-tight"
            >
              M Hussain |{' '}
              <span className="text-gradient">Software Engineer</span>{' '}
              & MERN Stack Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Welcome to my portfolio! I'm M Hussain, a dedicated software engineer specializing 
              in MERN stack development. With a proven track record of building dynamic and 
              efficient web applications, including projects like{' '}
              <a 
                href="https://sendmea.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-500 hover:text-accent-600 underline underline-offset-4 transition-colors"
              >
                sendmea.io
              </a>
              , I excel in creating seamless user experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              My skill set includes advanced proficiency in Next.js and Firebase, 
              enabling me to deliver high-quality products by leveraging modern technologies. 
              Explore my portfolio to see how I can help bring your ideas to life.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-accent-300 dark:hover:border-accent-500/50 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className="w-6 h-6 text-accent-500 mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {skill.tech}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
