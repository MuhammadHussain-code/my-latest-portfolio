import { motion } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

const EMAIL = 'muhammadhussain99100@gmail.com';

const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

const HireMeModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry: ${data.subject}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.subject}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
            <h3
              id="modal-title"
              className="text-xl font-display text-slate-900 dark:text-white"
            >
              What project are you looking for?
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="input-field"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  Name is required
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="input-field"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">
                  Email is required
                </span>
              )}
            </div>

            {/* Project Type Field */}
            <div>
              <select
                className="input-field"
                {...register('subject', { required: true })}
              >
                <option value="">Select project type</option>
                {selectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <span className="text-sm text-red-500 mt-1">
                  Please select a project type
                </span>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                placeholder="Project description"
                rows={4}
                className="input-field resize-none"
                {...register('message', { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-1">
                  Message is required
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                <FiSend className="w-4 h-4" />
                Send Request
              </button>
            </div>
            
            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              This will open your default email application
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HireMeModal;
