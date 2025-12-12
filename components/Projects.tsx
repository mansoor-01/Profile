import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight, Award } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Quality and Lead',
    company: 'Valmet Automotive',
    date: 'Jan 2022 – Apr 2023',
    description: 'Managed quality reports and identified trends improving production efficiency by 5%. Implemented SAP for inspections, boosting data accuracy by 20%. Led team collaborations to reduce defects by 8% annually.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    tags: ['SAP', 'Quality Control', 'Team Leadership', 'Efficiency'],
  },
  {
    id: '2',
    title: 'Independent Entrepreneur',
    company: 'Private Taxi Service',
    date: 'Sep 2019 – Jan 2023',
    description: 'Owned and operated a private transport business in Helsinki. Managed all aspects including scheduling, finance, marketing, and client relations. Developed strong problem-solving and operational management skills.',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Business Operations', 'Finance', 'Logistics', 'Customer Service'],
  },
  {
    id: '3',
    title: 'Export Officer',
    company: 'Pak Petrochemical Industries',
    date: 'Jan 2012 – Nov 2014',
    description: 'Processed ERP orders and managed export documentation (Incoterms). Increased exports by 13% through excellent service and client relationship management. Ensured compliance with international trade regulations.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200',
    tags: ['ERP', 'Incoterms', 'Intl. Sales', 'Documentation'],
  },
  {
    id: '4',
    title: 'Marketing Officer',
    company: 'Sheraton Hotels & Resorts',
    date: 'Jan 2007 – Dec 2010',
    description: 'Boosted revenue by 12% by identifying customer needs. Increased loyalty program sign-ups by 20% through event networking. Created promotional campaigns driving an extra 10% in sales.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    tags: ['Marketing', 'CRM', 'Event Management', 'Sales'],
  }
];

const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);

  const selectedExperience = experiences.find(e => e.id === selectedId) || experiences[0];

  return (
    <section id="experience" className="py-24 bg-slate-950/40 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">Career Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
            A chronological path of leadership, entrepreneurship, and operational excellence.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
          
          {/* Left Panel: Timeline List */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedId(exp.id)}
                className={`group relative p-6 rounded-xl border text-left transition-all duration-300 outline-none
                  ${selectedId === exp.id 
                    ? 'bg-slate-800/80 border-emerald-500 shadow-lg shadow-emerald-900/20' 
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/60 hover:border-emerald-500/30'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold text-lg transition-colors ${selectedId === exp.id ? 'text-emerald-400' : 'text-slate-200 group-hover:text-slate-100'}`}>
                    {exp.title}
                  </h3>
                  {selectedId === exp.id && <ChevronRight className="text-emerald-500" size={20} />}
                </div>
                <div className="text-sm text-slate-400 mb-1 font-medium">{exp.company}</div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar size={12} /> {exp.date}
                </div>
                
                {/* Active Indicator Line */}
                {selectedId === exp.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Panel: Detail View */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden h-full flex flex-col shadow-2xl"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                   <img 
                      src={selectedExperience.imageUrl} 
                      alt={selectedExperience.title}
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute bottom-0 left-0 p-8 z-20 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-wide">
                          {selectedExperience.company}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-1">{selectedExperience.title}</h3>
                      <p className="text-slate-300 flex items-center gap-2 text-sm">
                        <Briefcase size={14} className="text-emerald-500" /> {selectedExperience.date}
                      </p>
                   </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <Award className="text-emerald-500" size={20} /> Key Responsibilities & Achievements
                  </h4>
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    {selectedExperience.description}
                  </p>

                  <div className="mt-auto">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Skills Applied</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;