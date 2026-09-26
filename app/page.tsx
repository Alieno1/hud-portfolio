"use client";

import dynamic from "next/dynamic";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Database, Server, Brain, Code2, ExternalLink, User, BookOpen, Layers, FlaskConical, TerminalSquare } from "lucide-react";

import BootSequence from "@/components/BootSequence";
import HunterChat from "@/components/HunterChat";

const ArcReactor = dynamic(() => import("@/components/ArcReactor"), { ssr: false });

// ─── EFFECTS ───────────────────────────────────────────────────
function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 mix-blend-screen transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 65, 0.045), transparent 60%)`
      }}
    />
  );
}

// ─── INLINE BRAND ICONS ─────────────────────────────────────────
const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// ─── DATA ──────────────────────────────────────────────────────
const BIO = `I'm a Computer Science graduate from NIT Surat (SVNIT) with a strong interest in Backend Engineering, Distributed Systems, and Artificial Intelligence. My experience includes building high-throughput data pipelines, fault-tolerant financial systems, and intelligent AI applications.\n\nI'm driven by the challenge of turning complex problems into efficient, scalable, and reliable, production-ready solutions.`;

const SKILL_GROUPS = [
  {
    label: "Backend & Frameworks",
    skills: ["Java", "Spring Boot", "FastAPI", "Quarkus", "Node.js", "C++", "Python", "JavaScript", "REST APIs", "Microservices", "Data Structures"],
  },
  {
    label: "Data & Streaming",
    skills: ["Apache Kafka", "Kafka Streams", "Kafka Connect", "KRaft", "Redis", "CockroachDB", "PostgreSQL", "MongoDB", "Distributed Databases", "SQL Optimization", "Data Synchronization"],
  },
  {
    label: "AI / ML & GenAI",
    skills: ["Agentic AI", "Generative AI", "LLMs", "Deep Learning", "Machine Learning Algorithms", "Quantitative Analytics", "Diabetic Retinopathy (CV)", "Image Compression"],
  },
  {
    label: "Infrastructure & DevOps",
    skills: ["Kubernetes", "Docker Products", "SigNoz", "Grafana", "Nginx", "Crons", "Linux", "AWS (Basics)", "Load Balancing", "HPC", "MPI", "CUDA", "Distributed Systems"],
  },
  {
    label: "Soft / Core Skills",
    skills: ["Leadership & Team Management", "Mentoring", "Dynamic Speaker", "Computer Engineering", "Web Development", "Git / GitHub / GitLab"]
  }
];

const EXP_METRICS = [
  { metric: "120k+", label: "msgs/sec",  desc: "Kafka pipeline latency" },
  { metric: "0",     label: "data loss",       desc: "OMEX ingestion stress-tested" },
  { metric: "40%",   label: "memory reduced",desc: "Quarkus Reactive Streams" },
  { metric: "<1ms",  label: "lookup time",   desc: "CockroachDB + Redis risk engine" },
];

const EXP_BULLETS = [
  {
    title: "Market Data & Strategy",
    text: "Engineered an end-to-end pipeline via Apache Kafka to ingest 120k+ tick messages/sec; implemented sliding-window aggregates for real-time OHLC generation and a custom Java consumer implementation for TimescaleDB Hypertables sync, achieving sub-50ms p99 latency.",
  },
  {
    title: "Quantitative Analytics",
    text: "Integrated a high-performance simulation engine to backtest SMA/Momentum strategies against historical data; automated risk-reward metric generation and equity curve reporting by directly updating database table views.",
  },
  {
    title: "Order Management (OMEX)",
    text: "Architected an ingestion layer mimicking institutional trading platforms (NEST/ODIN); validated system resilience via stress-testing 100,000+ messages with zero loss and optimized consumer-group rebalancing.",
  },
  {
    title: "Risk Management Engine",
    text: "Designed a fault-tolerant calculator for MCX margin requirements using SPAN files; leveraged CockroachDB for distributed reliability and Redis distributed cache for sub-millisecond margin lookups.",
  },
  {
    title: "Performance Tuning",
    text: "Orchestrated Quarkus microservices using Reactive Streams (Mutiny) to reduce memory footprint by 40%; fine-tuned Kafka session.timeout/heartbeat intervals to ensure zero-lag streaming during peak volatility.",
  }
];

const PROJECTS = [
  {
    name: "Enterprise AI Operations Copilot",
    tag: "LangChain · Gemini · ChromaDB · Spring Boot",
    url: "https://github.com/Alieno1/enterprise-ai-copilot",
    bullets: [
      "Decoupled Agentic AI Copilot autonomously routing queries to backend tools",
      "RAG pipeline with ChromaDB for zero-hallucination semantic search",
      "Java Spring Boot architecture facilitating highly scalable data orchestration"
    ],
    highlight: true,
  },
  {
    name: "Auto-Director: Micro-Drama Engine",
    tag: "Multi-Agent AI · FFmpeg",
    url: "https://github.com/Alieno1/autodirector",
    bullets: [
      "Autonomous Agentic pipeline converting raw text into vertical micro-dramas",
      "Java backend integrations to streamline LLM task management with intelligent rate-limit filters"
    ],
    highlight: true,
  },
  {
    name: "Real-Time Collaborative Document Editor",
    tag: "FastAPI · Yjs CRDT · WebSocket · Redis",
    url: "https://github.com/Alieno1/Real-Time-Collaborative-Document-Editing-System",
    bullets: [
      "WebSocket sync with Yjs CRDT ensuring conflict-free concurrent editing",
      "Multi-instance deployment with Redis pub/sub synchronisation",
    ],
    highlight: true,
  },
  {
    name: "Bhabha Bhawan SVNIT Architecture",
    tag: "React · Vite · TailwindCSS · Framer Motion",
    url: "https://github.com/Alieno1/Bhabh-Bhawan-SVNIT-web",
    bullets: [
      "Modernized SVNIT hostel network into a high-performance React application",
      "Engineered dynamic UI layers with Framer Motion and an advanced dark-theme aesthetic",
    ],
    highlight: false,
  },
  {
    name: "Hotel Automation Controller",
    tag: "Java 17 · Spring Boot · JUnit/Mockito",
    url: "https://github.com/Alieno1/hotel-automation",
    bullets: [
      "State-based facility automation engine with automated power-budgeting optimizations",
      "Comprehensive unit testing architecture utilizing JUnit and Mockito"
    ],
    highlight: false,
  },
  {
    name: "ICIPE Conference Portal",
    tag: "Node.js · Express",
    url: "https://github.com/Alieno1/ICIPE",
    bullets: [
      "Full-stack web transformation integrating robust Node/Express backend for active form submission workflows"
    ],
    highlight: false,
  },
  {
    name: "Distributed Middleware Runtime",
    tag: "Java · Distributed Systems",
    url: "https://github.com/Alieno1/middleware-common-fork",
    bullets: [
      "Scale-out middleware infrastructure components for distributed orchestration and inter-service communication"
    ],
    highlight: false,
  },
  {
    name: "Retinopathy Diabetic Prediction",
    tag: "Deep Learning · Vision · Spring Boot",
    url: "https://github.com/Alieno1/Retinopathy-Diabetic-Prediction-and-Screening",
    bullets: [
      "Deep learning classification model for early diabetic retinopathy detection",
      "Java Spring Boot server wrapping ML algorithms for secure API distribution"
    ],
    highlight: false,
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

function Corners() {
  return (
    <>
      <div className="corner tl"/><div className="corner tr"/>
      <div className="corner bl"/><div className="corner br"/>
    </>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────
export default function Page() {
  const [bootDone, setBootDone] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleBootComplete = useCallback(() => setBootDone(true), []);

  useEffect(() => {
    if (isLightMode) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
  }, [isLightMode]);

  return (
    <main className="relative w-full min-h-screen font-jetbrains" style={{ background: "var(--void)", transition: "background 0.3s ease" }}>
      <div className="scanlines" />
      <div className="noise-overlay" />
      <CursorGlow />
      <BootSequence onComplete={handleBootComplete} />

      {/* 3D Core */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <ArcReactor />
      </div>

      <AnimatePresence>
        {bootDone && (
          <motion.div key="main"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 flex flex-col min-h-screen"
          >
            {/* ── UTILITY NAVBAR ─────────────────────────────────── */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 fixed top-0 w-full z-[100]"
              style={{ borderBottom: "1px solid rgba(0,255,65,0.2)", background: "rgba(13,17,23,0.9)", backdropFilter: "blur(12px)" }}>
              
              {/* Left */}
              <div className="flex items-center gap-3">
                <div style={{
                  width: "16px", height: "16px", border: "1.5px solid rgba(0,255,65,0.8)", borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 6px rgba(0,255,65,0.4)"
                }}>
                  <div style={{ width: "6px", height: "6px", background: "#00FF41" }} />
                </div>
                <span className="font-jetbrains font-bold text-[#00FF41] tracking-widest text-xs hidden sm:inline">
                  HUNTER CYBERNETICS // SYSTEM ACTIVE
                </span>
              </div>

              {/* Center - Scrollable Nav for all devices */}
              <div className="flex overflow-x-auto w-full md:w-auto hidescrollbar items-center gap-6 font-jetbrains text-[#A0A5B5] text-[0.7rem] uppercase tracking-widest mt-3 md:mt-0 pb-2 md:pb-0 px-2">
                <a href="#projects" className="whitespace-nowrap hover:text-[#00FF41] hover:underline underline-offset-4 decoration-[#00FF41]/50 transition-all">Projects</a>
                <a href="#skills" className="whitespace-nowrap hover:text-[#00FF41] hover:underline underline-offset-4 decoration-[#00FF41]/50 transition-all">Skills</a>
                <a href="#experience" className="whitespace-nowrap hover:text-[#00FF41] hover:underline underline-offset-4 decoration-[#00FF41]/50 transition-all">Experience</a>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-hunter-chat'))}
                  className="whitespace-nowrap hover:text-[#00FF41] hover:underline underline-offset-4 decoration-[#00FF41]/50 transition-all cursor-pointer uppercase"
                >
                  AI Assistant
                </button>
              </div>

              {/* Right */}
              <div className="flex items-center gap-4 text-[#A0A5B5] text-[0.65rem] font-jetbrains tracking-wide uppercase mt-4 md:mt-0">
                <button onClick={() => setIsLightMode(!isLightMode)} className="cursor-pointer hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="hidden md:inline">Light Mode</span> {isLightMode ? '🌙' : '☀️'}
                </button>
                <a href="/Resume.pdf" download="Himanshu_Singh_Resume.pdf" className="border border-[#A0A5B5]/40 px-2 py-1 rounded hover:text-[#00FF41] hover:border-[#00FF41]/60 transition-colors">
                  Download CV 📄
                </a>
                <div className="hidden xl:flex items-center gap-4 border-l border-[#A0A5B5]/30 pl-4">
                  <span className="cursor-pointer hover:text-white">Accessibility: HIGH 👁</span>
                  <span className="flex items-center gap-1.5 cursor-help" title="Hunter Edge APIs">
                    API Status: ONLINE <span className="w-2 h-2 rounded-full bg-[#00FF41] shadow-[0_0_5px_#00FF41]" />
                  </span>
                </div>
              </div>
            </div>

            {/* ── FULL SCREEN CONTENT (3-COLUMN CSS GRID) ────────────── */}
            <div className="flex-1 w-full px-4 md:px-6 xl:px-8 pb-6 pointer-events-auto overflow-hidden pt-[140px] md:pt-[100px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto w-full max-w-[2000px]">
                
                {/* ── LEFT COLUMN: Identity & Sys Log ── */}
                <div className="flex flex-col gap-6">
                  
                  {/* IDENTITY */}
                  <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible" className="panel p-6 relative">
                    <Corners />
                    <div className="flex items-center gap-3 mb-4 font-jetbrains font-bold text-[#00FF41] text-[0.7rem] tracking-widest uppercase">
                      <Zap size={14} /> <span>ROOT IDENTITY</span>
                    </div>

                    <h1 className="font-jetbrains font-bold text-[#00FF41] text-3xl sm:text-4xl tracking-tight leading-none filter drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">
                      HIMANSHU SINGH
                    </h1>
                    <div className="font-jetbrains text-[#A0A5B5] mt-2 text-[0.8rem] tracking-wider uppercase">
                      BACKEND | AI | DISTRIBUTED SYSTEMS <br/>
                      <span className="text-[#00FF41]/70">NIT SURAT (SVNIT)</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5">
                      <a href="https://linkedin.com/in/himanshu-singh-7ab162243" target="_blank" className="font-jetbrains text-[0.7rem] px-3 py-1.5 border border-[#A0A5B5]/40 rounded hover:border-[#00FF41] hover:text-[#00FF41] text-[#A0A5B5] transition-colors flex items-center gap-1">
                        in LinkedIn
                      </a>
                      <a href="https://github.com/Alieno1" target="_blank" className="font-jetbrains text-[0.7rem] px-3 py-1.5 border border-[#A0A5B5]/40 rounded hover:border-[#00FF41] hover:text-[#00FF41] text-[#A0A5B5] transition-colors flex items-center gap-1">
                        <GithubIcon size={12} /> GitHub
                      </a>
                      <a href="mailto:singh.himanshu7j@gmail.com" className="font-jetbrains text-[0.7rem] px-3 py-1.5 border border-[#A0A5B5]/40 rounded hover:border-[#00FF41] hover:text-[#00FF41] text-[#A0A5B5] transition-colors flex items-center gap-1">
                        ✉ Email
                      </a>
                    </div>

                    <div className="separator my-5" />
                    
                    <div className="mb-6 space-y-3">
                      <div className="flex items-start gap-2 text-[#E2E8F0]">
                        <span className="text-[#00FF41] mt-0.5">{'>'}</span>
                        <p className="font-jetbrains text-[0.82rem] leading-relaxed">
                          Hi, I'm Himanshu Singh, a Computer Science graduate from NIT Surat, passionate about building high-performance systems and intelligent AI solutions.
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-[#E2E8F0]">
                        <span className="text-[#00FF41] mt-0.5">{'>'}</span>
                        <p className="font-jetbrains text-[0.82rem] leading-relaxed">
                          During my FinTech internship, I worked on real-time trading infrastructure processing <strong className="text-[#00FF41] font-bold">120K+ market tick messages per second</strong>, along with fault-tolerant risk management systems.
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-[#E2E8F0]">
                        <span className="text-[#00FF41] mt-0.5">{'>'}</span>
                        <p className="font-jetbrains text-[0.82rem] leading-relaxed">
                          I explore the intersection of <strong className="text-[#00FF41] font-bold">technology, finance, and AI</strong>, building scalable distributed systems, intelligent AI agents, and data-driven solutions that turn complex challenges into efficient, production-ready systems.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-[#00FF41]/5 border-l-2 border-[#00FF41]/30 p-3 rounded-r mb-2">
                       <h3 className="font-jetbrains text-[#00FF41] font-bold text-[0.7rem] uppercase tracking-wider mb-2">ABOUT ME</h3>
                       <p className="bio-text text-[0.78rem] whitespace-pre-line opacity-90">{BIO}</p>
                    </div>
                  </motion.div>

                  {/* SYS LOG / EXPERIENCE */}
                  <motion.div id="experience" variants={fadeUp} custom={1} initial="hidden" animate="visible" className="panel p-6 relative">
                    <Corners />
                    <div className="flex items-center gap-3 mb-6 font-jetbrains font-bold text-[#00FF41] text-[0.7rem] tracking-widest uppercase">
                      <TerminalSquare size={14} /> <span>SYS LOG / RECENT WORK</span>
                    </div>

                    <div className="mb-6">
                      <div className="font-jetbrains text-[#E2E8F0] font-bold text-xl tracking-tight">JAINAM BROKING LIMITED</div>
                      <div className="font-jetbrains mt-1 text-[0.75rem] text-[#00FF41] uppercase">SOFTWARE DEVELOPMENT ENGINEER INTERN (JAN – JULY 2026)</div>
                      <div className="font-jetbrains mt-1 text-[0.65rem] text-[#A0A5B5] uppercase">HIGH-FREQUENCY TRADING INFRASTRUCTURE &amp; RISK SYSTEMS</div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {EXP_METRICS.map(e => (
                        <div key={e.metric} className="bg-[#00FF41]/5 border border-[#00FF41]/20 rounded p-2 text-center hover:border-[#00FF41]/50 transition-colors">
                          <div className="font-jetbrains text-[#E2E8F0] font-bold text-lg">{e.metric}</div>
                          <div className="font-jetbrains mt-1 text-[0.55rem] text-[#00FF41] tracking-widest uppercase">{e.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {EXP_BULLETS.map((b, i) => (
                        <div key={i}>
                          <div className="font-jetbrains font-bold text-[0.75rem] text-[#E2E8F0] mb-1">
                            {'>'} {b.title}
                          </div>
                          <p className="bio-text text-[0.8rem] opacity-80 pl-3 border-l-2 border-[#00FF41]/20">{b.text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* ── CENTER COLUMN: Technical Arsenal ── */}
                <div id="skills" className="flex flex-col gap-6">
                  <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible" className="panel p-6 relative h-full">
                    <Corners />
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3 font-jetbrains font-bold text-[#00FF41] text-[0.7rem] tracking-widest uppercase">
                        <Code2 size={14} /> <span>TECHNICAL ARSENAL // SKILLS</span>
                      </div>
                      <span className="font-jetbrains text-[0.6rem] text-[#A0A5B5] italic">capsules</span>
                    </div>

                    <div className="space-y-8">
                      {SKILL_GROUPS.map(group => (
                        <div key={group.label} className="flex flex-col gap-3">
                          <div className="font-jetbrains font-bold text-[#A0A5B5] text-[0.75rem] uppercase tracking-wider">
                            {group.label}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map(s => 
                              <span key={s} className="font-jetbrains text-[0.75rem] px-2.5 py-1 bg-[#00FF41]/5 border border-[#00FF41]/20 text-[#E2E8F0] rounded-[2px] transition-colors hover:bg-[#00FF41]/20 hover:border-[#00FF41] hover:text-[#00FF41] cursor-default">
                                {s}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* ── RIGHT COLUMN: Active Projects ── */}
                <div id="projects" className="flex flex-col gap-6">
                  <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible" className="panel p-6 relative h-full">
                    <Corners />
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3 font-jetbrains font-bold text-[#00FF41] text-[0.7rem] tracking-widest uppercase">
                        <Database size={14} /> <span>ACTIVE PROJECTS</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {PROJECTS.map((proj, i) => (
                        <a key={proj.name} href={proj.url} target="_blank" rel="noopener noreferrer"
                          className={`block p-4 rounded bg-[#0D1117]/80 border ${proj.highlight ? 'border-[#00FF41]/40 shadow-[0_0_15px_rgba(0,255,65,0.1)]' : 'border-[#A0A5B5]/20'} hover:border-[#00FF41] transition-colors group`}
                        >
                          <div className="font-jetbrains font-bold text-[0.95rem] text-[#E2E8F0] group-hover:text-[#00FF41] transition-colors mb-2 leading-tight">
                            {proj.name}
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {proj.tag.split(" · ").map(t => (
                              <span key={t} className="font-jetbrains text-[0.6rem] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[#A0A5B5]">
                                {t}
                              </span>
                            ))}
                          </div>
                          
                          <ul className="space-y-1.5">
                            {proj.bullets.map((b, bi) => (
                              <li key={bi} className="font-inter text-[0.8rem] text-[#E2E8F0]/70 leading-snug flex items-start gap-1.5">
                                <span className="text-[#00FF41] font-bold mt-0.5 text-[0.6rem]">▪</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <div id="chat">
        {bootDone && <HunterChat />}
      </div>
    </main>
  );
}
