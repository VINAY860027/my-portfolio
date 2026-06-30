import React, { useState } from 'react';

// --- STABLE SVG ICONS (NO EXTERNAL LIBRARIES TO PREVENT ERRORS) ---
const Icons = {
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Graduation: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
};

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      company: "Pragnyan",
      role: "Software Engineer",
      period: "April 2025 — Present",
      bullets: [
        "Optimized software systems to significantly enhance performance and reliability.",
        "Led a team of software engineers to design innovative solutions under tight deadlines.",
        "Collaborated with cross-functional teams to integrate user feedback into development processes."
      ]
    },
    {
      company: "PGK Technologies / SmartEdz",
      role: "Software Engineer",
      period: "Dec 2024 — April 2025",
      bullets: [
        "Engineered and deployed end-to-end ERP solutions from scratch, designing DB architectures and responsive UIs.",
        "Managed app hosting on Google Play Store and Apple App Store.",
        "Executed deployments on Railway and local servers for efficient application management.",
        "Leveraged AI-augmented workflows to streamline debugging and improve code quality."
      ]
    }
  ];

  const projectsData = [
    {
      title: "Educational ERP Platform",
      stack: "React.js, Node.js, Express, MySQL, React Native",
      desc: "Designed and developed a comprehensive Educational ERP for institutions, integrating admissions, fees, transport, and exams."
    },
    {
      title: "Business Digital Ecosystems",
      stack: "React.js, Node.js, AWS",
      desc: "Developed and deployed responsive business websites and custom web applications with secure backend integrations."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      
      {/* Dynamic Glassmorphism Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-900/10 blur-[150px] rounded-full"></div>
      </div>

      {/* 1. HERO SECTION (10/10 DESIGN) */}
      <header className="max-w-6xl mx-auto pt-32 pb-20 px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full"></div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(234,88,12,0.2)]">
            <img src="/profile.jpg" alt="Vinay Naik Bukke" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 onError={(e) => e.target.src = "https://via.placeholder.com/400x400/000?text=VINAY"} />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Full Stack Systems Architect
          </div>
          <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.8] tracking-tighter mb-6 uppercase">
            VINAY NAIK <br /> <span className="text-orange-500">BUKKE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed italic border-l-2 border-orange-500/50 pl-6">
            "Adept at transforming raw business requirements into scalable technical solutions with an A-to-Z project mindset."
          </p>

          {/* CONTACT ACTIONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="tel:8309013389" className="group px-8 py-4 bg-white text-black font-black rounded-full flex items-center gap-3 transition-all hover:bg-orange-500">
              <Icons.Phone /> 8309013389
            </a>
            <a href="mailto:dv860027@gmail.com" className="group px-8 py-4 border border-white/20 text-white font-black rounded-full flex items-center gap-3 transition-all hover:bg-white hover:text-black">
              <Icons.Mail /> Email Me
            </a>
          </div>
        </div>
      </header>

      {/* 2. TAB NAVIGATION */}
      <section className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-2xl border-y border-white/5">
        <div className="max-w-4xl mx-auto flex justify-between px-6 py-6 gap-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'experience', label: 'Work', icon: <Icons.Briefcase /> },
            { id: 'skills', label: 'Arsenal', icon: <Icons.Zap /> },
            { id: 'projects', label: 'Projects', icon: <Icons.Code /> },
            { id: 'education', label: 'Path', icon: <Icons.Graduation /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all pb-2 border-b-2 ${
                activeTab === tab.id ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500 hover:text-white'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CONTENT AREA */}
      <main className="max-w-4xl mx-auto py-24 px-6 min-h-[500px]">
        
        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {experienceData.map((exp, i) => (
              <div key={i} className="relative pl-10 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
                <h3 className="text-4xl font-black text-white tracking-tighter mb-2 uppercase">{exp.company}</h3>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-orange-500 font-mono text-sm tracking-widest">{exp.role}</span>
                  <span className="text-slate-600 text-xs font-mono">{exp.period}</span>
                </div>
                <ul className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4">
                      <span className="text-orange-500 font-bold">/</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in duration-700">
            {[
              { category: "Frontend", items: "React.js, JS, Tailwind, HTML5, CSS3" },
              { category: "Backend", items: "Node.js, Express.js, Python, MySQL" },
              { category: "Mobile", items: "React Native, Android Studio, iOS" },
              { category: "Cloud & DevOps", items: "AWS, Railway, Docker, Nginx, SSL" },
              { category: "AI & Innovation", items: "Claude, Cursor, DeepSeek, Lovable, Prompt Engineering" },
              { category: "Languages", items: "English (C1), Telugu (C2), Hindi (B2)" }
            ].map((skill, i) => (
              <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all">
                <h4 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-4">{skill.category}</h4>
                <p className="text-xl text-white font-medium leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 gap-12 animate-in zoom-in-95 duration-700">
            {projectsData.map((p, i) => (
              <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-orange-500/[0.02] hover:border-orange-500/20 transition-all">
                <h4 className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">{p.stack}</h4>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{p.title}</h3>
                <p className="text-slate-400 text-xl leading-relaxed mb-8">{p.desc}</p>
                <div className="w-12 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="p-10 border border-white/5 rounded-[2.5rem] bg-gradient-to-br from-white/[0.02] to-transparent">
              <h3 className="text-3xl font-black text-white mb-2 uppercase">Parul University</h3>
              <p className="text-orange-500 font-bold mb-4 uppercase text-sm">B.S. in CS with AI | 2020 — 2024</p>
              <p className="text-slate-500 text-lg">GPA: 7.25 | Focus on Neural Networks & Full Stack Systems.</p>
            </div>
            <div className="p-10 border border-white/5 rounded-[2.5rem] opacity-50">
              <h3 className="text-xl font-bold text-white mb-1 uppercase">Sri Chaithanya Junior College</h3>
              <p className="text-orange-500 font-bold text-xs uppercase">Higher Secondary | GPA: 9.5</p>
            </div>
          </div>
        )}

      </main>

      {/* 4. FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-white font-black text-3xl tracking-tighter uppercase">VNB<span className="text-orange-500">.</span></div>
          <div className="flex gap-10">
             <a href="https://github.com/VINAY860027" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500">GitHub</a>
             <a href="https://linkedin.com/in/vinay-naik-bukke-2b9601258" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500">LinkedIn</a>
          </div>
          <p className="text-[10px] text-slate-700 font-mono uppercase tracking-[0.5em]">Architecting Tomorrow Today</p>
        </div>
      </footer>
    </div>
  );
}