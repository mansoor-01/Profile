import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');

    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/60 backdrop-blur-sm border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Contact Info Row - Moved to Top */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12"
        >
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 border border-emerald-500/20 backdrop-blur-md mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Mail size={24} />
              </div>
              <h3 className="text-slate-100 font-semibold mb-1 text-lg">Email</h3>
              <a href="mailto:mansoor_07@hotmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">mansoor_07@hotmail.com</a>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-teal-500/10 rounded-full text-teal-400 border border-teal-500/20 backdrop-blur-md mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                <MapPin size={24} />
              </div>
              <h3 className="text-slate-100 font-semibold mb-1 text-lg">Location</h3>
              <p className="text-slate-400 text-sm">Bergen, Norway</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-400 border border-cyan-500/20 backdrop-blur-md mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Phone size={24} />
              </div>
              <h3 className="text-slate-100 font-semibold mb-1 text-lg">Phone</h3>
              <p className="text-slate-400 text-sm">+358 44 986 2363</p>
            </div>
        </motion.div>

        {/* Functional Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-slate-900/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-800/50 shadow-2xl relative overflow-hidden max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all disabled:opacity-50" 
                placeholder="Your Name"
                disabled={status !== 'idle'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
              <input 
                type="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all disabled:opacity-50" 
                placeholder="your@email.com"
                disabled={status !== 'idle'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all disabled:opacity-50 resize-none" 
                placeholder="How can I help you?"
                disabled={status !== 'idle'}
              />
            </div>
            
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(5,150,105,0.3)] transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={20} /> Message Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>

          {/* Success Overlay Animation */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm rounded-3xl"
              >
                <div className="text-center p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out.<br/>I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;