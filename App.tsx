import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import CVView from './components/CVView';

const App: React.FC = () => {
  const [showCV, setShowCV] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('cv') === 'true';
    }
    return false;
  });

  if (showCV) {
    return <CVView />;
  }

  return (
    <div className="min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      {/* Global Background Wallpaper */}
      <div className="fixed inset-0 z-[-1]">
        {/* Main Background Image - Misty Cool Forest */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2500&auto=format&fit=crop')` 
          }}
        />
        
        {/* Dark Overlay - Slate tinted */}
        <div className="absolute inset-0 bg-slate-950/50" />
        
        {/* Gradient Vignette for text readability at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60" />
      </div>

      {/* Content wrapper with z-index to sit above background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Projects /> 
          <Skills />
          <Contact />
        </main>
        
        <AIChatWidget />
        
        <footer className="bg-slate-950/80 backdrop-blur-md py-8 text-center text-slate-500 text-sm border-t border-slate-800">
          <p>© {new Date().getFullYear()} Mansoor Ahmed.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;