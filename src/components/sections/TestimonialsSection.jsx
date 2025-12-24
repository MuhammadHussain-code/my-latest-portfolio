import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 rounded-full"
          >
            <FiMessageSquare className="inline-block w-4 h-4 mr-1" />
            Testimonials
          </motion.span>
          <h2 className="section-title mb-4">
            Client{' '}
            <span className="text-gradient">Reviews</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Here are some client reviews that reflect their trust in my work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-xl"
        >
          <iframe
            src="https://sendmea.io/wall/muhammad-hussain?embeded=true"
            width="100%"
            height="800"
            className="border-0"
            title="Client Reviews"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
