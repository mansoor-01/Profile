import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, User, Briefcase, Cpu, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: <User size={16} /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <Briefcase size={16} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <Cpu size={16} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active Section Detection logic
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      // Check if we are at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-4 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Button (Left) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation (Left) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 group overflow-hidden ${
                    activeSection === link.id 
                      ? 'text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {/* Background Glass Effect */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                     activeSection === link.id ? 'bg-slate-800/80 border border-slate-700/50 opacity-100' : 'bg-slate-800/0 hover:bg-slate-800/40 opacity-100'
                  } rounded-xl`} />
                  
                  {/* Active Gradient Border Bottom */}
                  {activeSection === link.id && (
                     <motion.div 
                       layoutId="navbarActiveIndicator"
                       className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500"
                     />
                  )}

                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Brand/Name (Right) */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="flex flex-col items-end">
              <span className="font-bold text-xl tracking-tight text-slate-100 leading-none">
                Mansoor<span className="text-emerald-500">Ahmed</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-emerald-400 transition-colors">Portfolio</span>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-2 rounded-lg group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-900/10 group-hover:shadow-emerald-500/20 group-hover:rotate-12">
               <Sparkles className="h-5 w-5 text-emerald-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                     activeSection === link.id 
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700' 
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;