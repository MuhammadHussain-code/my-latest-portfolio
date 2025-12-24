import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiHeart,
} from 'react-icons/fi';
import { TbBrandFiverr } from 'react-icons/tb';

const socialLinks = [
  {
    id: 1,
    icon: TbBrandFiverr,
    url: 'https://www.fiverr.com/hussain_code',
    label: 'Fiverr',
    color: 'hover:text-green-500',
  },
  {
    id: 2,
    icon: FiGithub,
    url: 'https://github.com/MuhammadHussain-code',
    label: 'GitHub',
    color: 'hover:text-slate-900 dark:hover:text-white',
  },
  {
    id: 3,
    icon: FiTwitter,
    url: 'https://twitter.com/@muhammad3221',
    label: 'Twitter',
    color: 'hover:text-sky-500',
  },
  {
    id: 4,
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/muhammad-hussain-834b38a0',
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
  {
    id: 5,
    icon: FiInstagram,
    url: 'https://www.instagram.com/muhammadhussain99100/',
    label: 'Instagram',
    color: 'hover:text-pink-500',
  },
];

const footerLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display text-slate-900 dark:text-white">
                M<span className="text-gradient"> Hussain</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Software Engineer & Full-Stack Developer specializing in building exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Follow Me
            </h3>
            <div className="flex justify-center md:justify-end gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ${link.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Muhammad Hussain. Built with{' '}
            <FiHeart className="inline-block w-4 h-4 text-red-500 mx-1" />
            using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
