import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'samarthkanagi.co@gmail.com', href: 'mailto:samarthkanagi.co@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-8010428570', href: 'tel:+918010428570' },
  { icon: MapPin, label: 'Location', value: 'Solapur, Maharashtra, India', href: null },
];

const Contact = () => {
  const { dark } = useTheme();

  return (
    <section id="contact" className="py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subheading">Have a question or want to work together? Let's connect.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href ? { href: item.href } : {};
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className={`glass-card p-5 flex items-center gap-4 group transition-colors duration-300 block ${
                      dark ? 'hover:border-brand-500/25' : 'hover:border-brand-300'
                    }`}
                  >
                    <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                      dark ? 'bg-brand-500/10 group-hover:bg-brand-500/20' : 'bg-brand-50 group-hover:bg-brand-100'
                    }`}>
                      <Icon size={20} className="text-brand-500" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium uppercase tracking-wider ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                      <p className={`text-sm font-medium mt-0.5 ${dark ? 'text-gray-200' : 'text-gray-700'}`}>{item.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-6 sm:p-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all ${
                      dark
                        ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all ${
                      dark
                        ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600'
                        : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400'
                    }`}
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all resize-none ${
                    dark
                      ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600'
                      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400'
                  }`}
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button className="btn-primary w-full mt-1 py-3">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
