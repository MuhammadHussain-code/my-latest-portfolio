import { motion } from 'framer-motion';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import codeShock from '@images/codeShock.png';
import beta from '@images/beta.png';

const clients = [
  {
    id: 1,
    name: 'Fiverr',
    icon: SiFiverr,
    iconColor: '#1DBF73',
    type: 'icon',
    link: 'https://www.fiverr.com/hussain_code',
  },
  {
    id: 2,
    name: 'Upwork',
    icon: SiUpwork,
    iconColor: '#14A800',
    type: 'icon',
    link: 'https://www.upwork.com/freelancers/~01a67db2f46b0d7806?viewMode=1',
  },
  {
    id: 3,
    name: 'Code Shock',
    image: codeShock,
    type: 'image',
  },
  {
    id: 4,
    name: 'Bestimate',
    image: beta,
    type: 'image',
  },
];

const ClientsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 rounded-full"
          >
            Trusted By
          </motion.span>
          <h2 className="section-title mb-4">
            Some of the brands that{' '}
            <span className="text-gradient">trust me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I've had the privilege of working with amazing clients and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => {
            const CardContent = (
              <div className="h-40 flex items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 hover:border-accent-300 dark:hover:border-accent-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {client.type === 'icon' ? (
                  <client.icon
                    className="w-24 h-24 sm:w-32 sm:h-32 transition-all duration-300 group-hover:scale-110"
                    style={{ color: client.iconColor }}
                  />
                ) : (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                    style={{ maxWidth: client.name === 'Code Shock' ? '160px' : '100px' }}
                  />
                )}
              </div>
            );

            return (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {client.link ? (
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${client.name}`}
                    className="block cursor-pointer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
