import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDown, User, FileText, Sparkles, GraduationCap, School, BookOpen
} from 'lucide-react';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'qualifications'>('summary');

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4">
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* TOP SECTION: Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl"
        >
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-8">
            <Sparkles size={14} className="text-emerald-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-100 uppercase">
              Portfolio
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-emerald-200 to-teal-100 mb-6 tracking-tight leading-tight">
            Multidimensional Professional
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Synthesizing <span className="text-emerald-400 font-medium">Business Analytics</span>, <span className="text-emerald-400 font-medium">Management</span>, <span className="text-emerald-400 font-medium">Supply Chain Optimization</span>, and <span className="text-emerald-400 font-medium">Strategic Economics</span> to drive sustainable growth.
          </p>
        </motion.div>


        {/* BOTTOM SECTION: Tabbed Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl"
        >
          {/* Pill Tabs Switcher */}
          <div className="flex justify-center mb-8">
            <div className="flex p-1.5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
              <TabButton 
                active={activeTab === 'summary'} 
                onClick={() => setActiveTab('summary')}
                icon={<FileText size={16} />}
                label="Professional Summary"
              />
              <TabButton 
                active={activeTab === 'qualifications'} 
                onClick={() => setActiveTab('qualifications')}
                icon={<GraduationCap size={16} />}
                label="Qualifications"
              />
            </div>
          </div>

          {/* Tab Content Container */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl overflow-hidden min-h-[400px] relative">
             <AnimatePresence mode="wait">
                {activeTab === 'summary' ? (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-12"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 shrink-0">
                        <User size={32} />
                      </div>
                      <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed text-justify">
                        <h3 className="text-2xl font-bold text-slate-100">About Me</h3>
                        <p>
                          <span className="text-emerald-300 font-medium">Detail-oriented</span> and adaptable operations professional with experience across export documentation, ERP/SAP processes, quality assurance, logistics coordination, and customer-facing service. 
                        </p>
                        <p>
                          Skilled in managing structured workflows, improving processes, and maintaining accuracy under pressure in fast-paced environments. Strong analytical and problem-solving abilities supported by hands-on experience with international trade documentation, production machinery, data-driven reporting, and cross-functional collaboration.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="qualifications"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-12"
                  >
                    <div className="flex items-center gap-4 mb-8">
                       <div className="p-3 bg-teal-600/10 rounded-xl text-teal-400">
                         <BookOpen size={24} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-100">Education History</h3>
                    </div>
                    
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                      
                      {/* Qualification 1 */}
                      <QualificationItem 
                        title="MSc in Economics & Business Admin"
                        specialization="Business Analytics"
                        institution="Norwegian School of Economics NHH"
                        location="Bergen, Norway"
                        date="Aug 2025 – Present"
                        isActive={true}
                      />

                      {/* Qualification 2 */}
                      <QualificationItem 
                        title="Bachelor of Business Administration"
                        specialization="Sales and Marketing"
                        institution="Haaga-Helia UAS"
                        location="Helsinki, Finland"
                        date="Jan 2015 – Mar 2019"
                      />

                      {/* Qualification 3 */}
                      <QualificationItem 
                        title="Bachelor of Commerce"
                        institution="University of Karachi"
                        location="Karachi, Pakistan"
                        date="Jan 2004 – Dec 2005"
                      />

                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-slate-400/50 w-6 h-6" />
      </motion.div>
    </section>
  );
};

// --- Subcomponents ---

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
    }`}
  >
    {active && (
      <motion.div
        layoutId="activeTabPill"
        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-lg"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ zIndex: -1 }}
      />
    )}
    {icon}
    {label}
  </button>
);

const QualificationItem: React.FC<{ 
  title: string; 
  institution: string; 
  date: string; 
  location: string;
  specialization?: string;
  isActive?: boolean 
}> = ({ title, institution, date, location, specialization, isActive }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    
    {/* Icon on timeline */}
    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 transition-colors ${isActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
      <School size={18} />
    </div>
    
    {/* Content Card */}
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:translate-y-[-2px] hover:shadow-lg shadow-black/20">
      <div className="flex flex-col mb-1">
        <span className={`font-bold text-base md:text-lg leading-tight ${isActive ? 'text-emerald-400' : 'text-slate-200'}`}>{title}</span>
        {specialization && <span className="text-sm text-teal-300/80 mb-2 mt-1 block font-medium">{specialization}</span>}
        <span className="text-slate-400 font-medium text-xs md:text-sm flex items-center gap-1.5 mt-2">
           <School size={12} className="text-slate-500"/> {institution}
        </span>
        <span className="text-slate-500 text-xs mt-0.5">{location}</span>
      </div>
      <div className="mt-3 pt-3 border-t border-white/5 text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-teal-400 animate-pulse' : 'bg-slate-600'}`} />
        {date}
      </div>
    </div>
  </div>
);

export default Hero;