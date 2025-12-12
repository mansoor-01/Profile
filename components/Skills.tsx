import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Terminal, FileSpreadsheet, BarChart3, Globe, CheckCircle2, Cpu, 
  Bike, Trees, Fish, Leaf, Heart, Code2, Factory, AppWindow, GitFork, Users, 
  Truck, TrendingUp, Kanban, ClipboardCheck, Clock, FileText, ZoomIn 
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalTools = [
    { name: 'SAP S/4HANA', level: 90, icon: <Database size={18} /> },
    { name: 'MS Excel', level: 95, icon: <FileSpreadsheet size={18} /> },
    { name: 'Power BI', level: 85, icon: <BarChart3 size={18} /> },
    { name: 'Python', level: 75, icon: <Terminal size={18} /> },
  ];

  const devTools = [
    { name: 'Google Colab', icon: <Code2 size={24} />, desc: 'Data Science' },
    { name: 'AMPL', icon: <Cpu size={24} />, desc: 'Optimization' },
    { name: 'VS Code', icon: <AppWindow size={24} />, desc: 'Development' },
    { name: 'ERP Softwares', icon: <Factory size={24} />, desc: 'Enterprise' },
  ];

  const softSkills = [
    { name: 'Decision Modeling', icon: <GitFork size={16} /> },
    { name: 'CRM', icon: <Users size={16} /> },
    { name: 'Supply Chain', icon: <Truck size={16} /> },
    { name: 'Sales Ops', icon: <TrendingUp size={16} /> },
    { name: 'Project Mgmt', icon: <Kanban size={16} /> },
    { name: 'Quality Reports', icon: <ClipboardCheck size={16} /> },
    { name: 'Time Mgmt', icon: <Clock size={16} /> },
    { name: 'Documentation', icon: <FileText size={16} /> },
    { name: 'Detail Oriented', icon: <ZoomIn size={16} /> }
  ];

  const hobbies = [
    { name: 'Cycling', icon: <Bike size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    { name: 'Forest Walks', icon: <Trees size={20} />, color: 'text-teal-500', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
    { name: 'Gardening', icon: <Leaf size={20} />, color: 'text-lime-500', bg: 'bg-lime-500/10', border: 'border-lime-500/20' },
    { name: 'Fishing', icon: <Fish size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/40 backdrop-blur-sm relative overflow-hidden">
       {/* Decorative blob */}
       <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Skills & Interests</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-300">A comprehensive toolkit for Business Analytics and Personal Passions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Technical Tools & Languages & Hobbies */}
          <div className="space-y-12">
            
            {/* Proficiency Bars */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <Cpu className="text-emerald-400" /> Technical Proficiency
              </h3>
              <div className="space-y-6">
                {technicalTools.map((tool, index) => (
                  <div key={tool.name}>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2 text-slate-200 font-medium">
                        {tool.icon} {tool.name}
                      </div>
                      <span className="text-emerald-400 text-sm">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/60 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-emerald-500 to-cyan-600 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages - Styled with 'Images' (Flags) */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <Globe className="text-emerald-400" /> Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 transition-all group shadow-lg hover:shadow-emerald-900/20">
                   <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform">🇬🇧</span>
                   <span className="text-slate-100 font-bold text-lg block group-hover:text-emerald-300 transition-colors z-10">English</span>
                   <span className="text-slate-400 text-sm z-10">Fluent / Professional</span>
                </div>
                <div className="relative overflow-hidden bg-slate-800/60 backdrop-blur-md p-5 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 transition-all group shadow-lg hover:shadow-emerald-900/20">
                   <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <span className="text-4xl mb-3 block transform group-hover:scale-110 transition-transform">🇫🇮</span>
                   <span className="text-slate-100 font-bold text-lg block group-hover:text-emerald-300 transition-colors z-10">Finnish</span>
                   <span className="text-slate-400 text-sm z-10">Conversational</span>
                </div>
              </div>
            </div>

            {/* Hobbies - Placed below Languages */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <Heart className="text-emerald-400" /> Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 rounded-xl border ${hobby.border} ${hobby.bg} flex flex-col items-center justify-center gap-2 text-center transition-transform hover:scale-105 cursor-default`}
                  >
                    <div className={hobby.color}>{hobby.icon}</div>
                    <span className="text-xs font-medium text-slate-200">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Other Tools & Soft Skills */}
          <div className="space-y-12">
            
            {/* Dev Tools Grid - Stylish Cards */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <Terminal className="text-emerald-400" /> Software & Environments
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {devTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all group flex items-start gap-4"
                  >
                    <div className="p-2.5 bg-slate-900 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform shadow-inner shadow-black/50">
                      {tool.icon}
                    </div>
                    <div>
                      <span className="block text-slate-200 font-semibold group-hover:text-emerald-300 transition-colors">{tool.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{tool.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Competencies - Stylish Chips */}
            <div>
              <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" /> Professional Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.05) }}
                    className="pl-3 pr-4 py-2 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 rounded-lg text-sm text-slate-300 shadow-sm hover:text-emerald-300 hover:border-emerald-500/30 transition-all flex items-center gap-2 group cursor-default"
                  >
                    <span className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;