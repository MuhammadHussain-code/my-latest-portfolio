import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { TbBrandFiverr } from 'react-icons/tb';
import { useForm } from 'react-hook-form';

const EMAIL = 'muhammadhussain99100@gmail.com';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+92 342 3589874',
    href: 'tel:+923423589874',
  },
];

const socialLinks = [
  { icon: TbBrandFiverr, url: 'https://www.fiverr.com/hussain_code', label: 'Fiverr' },
  { icon: FiGithub, url: 'https://github.com/MuhammadHussain-code', label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://linkedin.com/in/muhammad-hussain-834b38a0', label: 'LinkedIn' },
  { icon: FiTwitter, url: 'https://twitter.com/@muhammad3221', label: 'Twitter' },
];

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

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10 rounded-full"
          >
            Get In Touch
          </motion.span>
          <h1 className="section-title mb-4">
            Let's Work{' '}
            <span className="text-gradient">Together</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display text-slate-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 hover:border-accent-300 dark:hover:border-accent-500/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-xl bg-accent-50 dark:bg-accent-500/10 text-accent-500 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {info.label}
                    </p>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-accent-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden lg:block"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-500/10 to-secondary-500/10 border border-accent-200/50 dark:border-accent-500/20">
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  "I believe in creating digital experiences that not only look great but also solve real problems."
                </p>
                <p className="mt-3 text-sm font-medium text-accent-600 dark:text-accent-400">
                  — Muhammad Hussain
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 shadow-xl">
              <h2 className="text-2xl font-display text-slate-900 dark:text-white mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Fill out the form and click send to open your email client.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="input-field"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="input-field"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    className="input-field"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full btn-primary py-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </span>
                </motion.button>
                
                <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                  This will open your default email application
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
