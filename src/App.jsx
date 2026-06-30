import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STABLE SVG ICONS (NO EXTERNAL LIBRARIES) ---
const Icons = {
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  Code: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
  Graduation: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
  Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
  External: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
  Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('experience');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experienceData = [
    {
      company: "SmartEdz",
      location: "Hyderabad",
      role: "Software Engineer",
      period: "Dec 2024 — Present",
      bullets: [
        "Engineered end-to-end Educational ERP solutions from scratch, designing database architectures and responsive UIs.",
        "Launched cross-platform mobile apps for iOS & Android, managing full lifecycle from implementation to App Store deployment.",
        "Leveraged AI-assisted tools (Cursor, GitHub Copilot) to accelerate delivery, improve code quality, and automate documentation.",
        "Collaborated directly with clients to transform complex business needs into scalable technical solutions.",
        "Managed full-stack deployment: cloud hosting, server configuration, SSL, and multi-tenant architecture support.",
        "Designed secure JWT-based authentication and role-based access control (RBAC) for enterprise security."
      ]
    }
  ];

  const projectsData = [
    {
      title: "Educational ERP Platform",
      platform: "Web, Android & iOS",
      stack: "React.js, Node.js, Express, MySQL, React Native",
      desc: "A massive multi-institution system integrating admissions, attendance, exams, fees, transport, and real-time notifications. Built with a scalable backend to support high-concurrency usage.",
      features: ["Multi-tenant Architecture", "JWT & RBAC", "Real-time Sync"]
    },
    {
      title: "Aultra Paints Website",
      platform: "Corporate Web",
      stack: "React.js, JavaScript, CSS",
      desc: "Developed a responsive corporate website featuring a product showcase and SEO-friendly architecture. Optimized for cross-browser compatibility and high performance.",
      features: ["Performance Optimization", "SEO-Friendly", "Modern UI/UX"]
    },
    {
      title: "Business Digital Ecosystems",
      platform: "Web Applications",
      stack: "React.js, Node.js, Express.js, MySQL",
      desc: "Custom web applications and responsive business websites with modern UI/UX and secure backend integrations.",
      features: ["Custom UI/UX", "Secure API Integrations", "Client Management"]
    }
  ];

  const skillGroups = [
    { name: "Frontend", skills: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS" },
    { name: "Backend", skills: "Node.js, Express.js, Python, REST APIs, JWT, RBAC" },
    { name: "Mobile", skills: "React Native, Android Studio, iOS Deployment" },
    { name: "Database", skills: "MySQL, Database Design, Query Optimization" },
    { name: "DevOps", skills: "AWS, Railway, DigitalOcean, Docker, Nginx, CI/CD, SSL" },
    { name: "AI Arsenal", skills: "ChatGPT, Claude AI, Cursor, GitHub Copilot, Gemini AI, Prompt Engineering" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-orange-600/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-orange-900/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* STICKY NAV */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase group cursor-pointer shrink-0">
            VNB<span className="text-orange-500 group-hover:animate-ping inline-block">.</span>
          </div>
          
          {/* Responsive Menu */}
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar ml-4">
            <div className="flex gap-4 sm:gap-8 items-center whitespace-nowrap">
              {['experience', 'skills', 'projects', 'education'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-orange-500' : 'text-slate-500 hover:text-white'}`}
                >
                  {tab}
                  {activeTab === tab && (
                      <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500" />
                  )}
                </button>
              ))}
            </div>
            {/* DOWNLOAD RESUME LINK */}
            <a 
              href={`/Vinay_Naik_Bukke_Resume.pdf`}
              download="Vinay_Naik_Bukke_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-5 py-2 bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.4)] shrink-0"
            >
              <Icons.Download /> <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-7xl mx-auto pt-32 sm:pt-48 pb-16 sm:pb-32 px-6 flex flex-col md:flex-row items-center gap-10 sm:gap-16">
        {/* Profile Image Wrapper */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Vinay Naik Bukke" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Vinay+Naik&background=ea580c&color=fff&size=512"; }}
            />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="flex-1 text-center md:text-left overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-8">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-orange-500"></span>
            </span>
            Full Stack Systems Architect
          </div>
          
          {/* UPDATED NAME SIZE */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase break-words">
            VINAY NAIK<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">BUKKE</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-2xl mb-10 sm:mb-12 leading-relaxed font-light mx-auto md:mx-0">
            I transform <span className="text-white font-medium">business requirements</span> into 
            <span className="text-white font-medium italic"> scalable technical ecosystems</span>. 
            Specialized in AI-augmented development and high-performance ERP architectures.
          </p>

          {/* UPDATED CONTACT SECTION - SHOWING "CONTACT" TEXT */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="tel:8309013389" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-black rounded-xl flex items-center gap-3 transition-all hover:bg-orange-500 hover:-translate-y-1 text-sm">
              <Icons.Phone /> Contact
            </a>
            <a href="mailto:dv860027@gmail.com" className="p-3 sm:p-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-orange-500 hover:text-black transition-all">
              <Icons.Mail />
            </a>
            <a href="https://linkedin.com/in/vinay-naik-bukke-2b9601258" target="_blank" rel="noreferrer" className="p-3 sm:p-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-orange-500 hover:text-black transition-all">
              <Icons.Linkedin />
            </a>
            <a href="https://github.com/VINAY860027" target="_blank" rel="noreferrer" className="p-3 sm:p-4 bg-white/5 text-white border border-white/10 rounded-xl hover:bg-orange-500 hover:text-black transition-all">
              <Icons.Github />
            </a>
          </div>
        </div>
      </header>

      {/* CORE STATS - RESPONSIVE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-20 border-y border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {[
          { label: "Delivery", val: "End-to-End", sub: "From Concept to Production" },
          { label: "Platforms", val: "Web/iOS/Android", sub: "Cross-Platform Expert" },
          { label: "Methodology", val: "AI-Augmented", sub: "Accelerated Dev Cycles" },
          { label: "Focus", val: "Multi-Tenant", sub: "Enterprise Scalability" }
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <div className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-orange-500 mb-2">{stat.label}</div>
            <div className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tighter">{stat.val}</div>
            <div className="text-[10px] sm:text-sm text-slate-500 font-mono leading-tight">{stat.sub}</div>
          </div>
        ))}
      </section>

      {/* DYNAMIC CONTENT AREA */}
      <main className="max-w-5xl mx-auto py-16 sm:py-32 px-6 overflow-hidden">
        <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
            <motion.div 
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16 sm:space-y-32"
            >
                {experienceData.map((exp, i) => (
                <div key={i} className="relative group">
                    <div className="hidden sm:block absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase mb-2 group-hover:text-orange-500 transition-colors">{exp.company}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-orange-500 font-black uppercase text-xs sm:text-sm tracking-widest">
                          <Icons.Briefcase /> {exp.role} 
                          <span className="text-slate-700 font-light">— {exp.location}</span>
                        </div>
                    </div>
                    <div className="px-3 sm:px-4 py-2 bg-white/5 rounded-lg border border-white/10 font-mono text-[10px] sm:text-xs text-slate-400 self-start md:self-end">
                        {exp.period}
                    </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-4 group/item">
                          <span className="text-orange-500 font-black text-lg sm:text-xl group-hover/item:translate-x-1 transition-transform">→</span>
                          <p className="text-slate-400 leading-relaxed text-base sm:text-lg group-hover/item:text-slate-200 transition-colors">{bullet}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </motion.div>
            )}

            {activeTab === 'skills' && (
            <motion.div 
                key="skills"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                {skillGroups.map((group, i) => (
                <div key={i} className="p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-orange-500/30 transition-all group">
                    <h4 className="text-orange-500 font-black uppercase text-[10px] sm:text-xs tracking-[0.4em] mb-4 sm:mb-6">{group.name}</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                    {group.skills.split(', ').map((skill, j) => (
                        <span key={j} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 rounded-full text-xs sm:text-sm font-medium border border-white/5 text-slate-300 group-hover:border-orange-500/20 group-hover:text-white transition-all">
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </motion.div>
            )}

            {activeTab === 'projects' && (
            <motion.div 
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10 sm:space-y-16"
            >
                {projectsData.map((p, i) => (
                <div key={i} className="group relative p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-orange-500/[0.01] transition-all">
                    <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
                    <div className="flex-1">
                        <div className="text-orange-500 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.4em] mb-4">{p.platform}</div>
                        <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{p.title}</h3>
                        <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 italic">"{p.desc}"</p>
                        <div className="flex flex-wrap gap-4">
                        {p.features.map((f, k) => (
                            <div key={k} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 bg-orange-500 rounded-full"></div> {f}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="md:w-1/3 flex flex-col justify-between items-start md:items-end">
                        <div className="md:text-right">
                        <div className="text-[10px] text-slate-600 uppercase font-black mb-1 sm:mb-2 tracking-widest">Stack</div>
                        <div className="text-xs sm:text-sm font-mono text-slate-400 whitespace-pre-wrap">{p.stack}</div>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </motion.div>
            )}

            {activeTab === 'education' && (
            <motion.div 
                key="education"
                initial={{ opacity: 0, rotateX: 20 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: -20 }}
                className="space-y-8 sm:space-y-12"
            >
                <div className="p-8 sm:p-12 border border-white/10 rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icons.Graduation />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 uppercase tracking-tight">Parul University</h3>
                <p className="text-orange-500 font-black mb-6 sm:mb-8 uppercase text-xs sm:text-sm tracking-widest italic leading-tight">Bachelor of Technology in CS (Artificial Intelligence)</p>
                <div className="flex gap-6 sm:gap-10 items-center">
                    <div>
                    <div className="text-[10px] text-slate-600 uppercase font-black mb-1">GPA Score</div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tighter">7.25</div>
                    </div>
                    <div>
                    <div className="text-[10px] text-slate-600 uppercase font-black mb-1">Graduation</div>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tighter">JUNE 2024</div>
                    </div>
                </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="p-6 sm:p-8 border border-white/5 rounded-2xl sm:rounded-3xl hover:border-orange-500/20 transition-all opacity-80 hover:opacity-100">
                    <h4 className="text-lg sm:text-xl font-black text-white uppercase mb-1">Sri Chaitanya Junior College</h4>
                    <p className="text-orange-500 font-bold text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 tracking-widest text-wrap leading-snug">Higher Secondary (XII) — 2020</p>
                    <div className="text-xl sm:text-2xl font-black text-white">GPA: 9.5</div>
                </div>
                <div className="p-6 sm:p-8 border border-white/5 rounded-2xl sm:rounded-3xl hover:border-orange-500/20 transition-all opacity-80 hover:opacity-100">
                    <h4 className="text-lg sm:text-xl font-black text-white uppercase mb-1">A.P.R. School</h4>
                    <p className="text-orange-500 font-bold text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 tracking-widest leading-snug">Secondary (X) — 2018</p>
                    <div className="text-xl sm:text-2xl font-black text-white">GPA: 9.2</div>
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      </main>

      {/* FOOTER - SCALES UP FOR TV/LARGE SCREENS */}
      <footer className="py-20 sm:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl md:text-8xl 2xl:text-9xl font-black text-white uppercase tracking-tighter mb-10 sm:mb-16">
            Let's build the <span className="text-orange-500">future</span>.
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-12 pt-12 sm:pt-16 border-t border-white/5">
            <div className="text-center md:text-left">
              <div className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase mb-2">VNB<span className="text-orange-500">.</span></div>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-[0.3em] uppercase">Built with precision & AI-Augmented workflows</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em]">
               <a href="https://github.com/VINAY860027" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors">GitHub</a>
               <a href="https://linkedin.com/in/vinay-naik-bukke-2b9601258" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors">LinkedIn</a>
               <a href="tel:8309013389" className="text-slate-500 hover:text-orange-500 transition-colors">Call</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}