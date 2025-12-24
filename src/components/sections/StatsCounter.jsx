import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { 
    value: 5, 
    suffix: '+', 
    label: 'Years of Experience',
    description: 'Building web applications'
  },
  { 
    value: 20, 
    suffix: '+', 
    label: 'GitHub Stars',
    description: 'Open source contributions'
  },
  { 
    value: 99, 
    suffix: '%', 
    label: 'Positive Feedback',
    description: 'Client satisfaction rate'
  },
  { 
    value: 25, 
    suffix: '+', 
    label: 'Projects Completed',
    description: 'Delivered successfully'
  },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-secondary-500/5" />
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Numbers That{' '}
            <span className="text-gradient">Speak</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A quick overview of my journey and achievements in software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 hover:border-accent-300 dark:hover:border-accent-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-500/0 to-secondary-500/0 group-hover:from-accent-500/5 group-hover:to-secondary-500/5 transition-all duration-500" />
                
                <div className="relative">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-display text-gradient mb-3">
                    {hasAnimated ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
