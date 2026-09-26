// ─── PORTFOLIO DATA ──────────────────────────────────────────────
// Centralised data file — edit content here, UI in page.tsx

export const BIO = `I'm a Computer Science graduate from NIT Surat (SVNIT) with a strong interest in Backend Engineering, Distributed Systems, and Artificial Intelligence. My experience includes building high-throughput data pipelines, fault-tolerant financial systems, and intelligent AI applications.\n\nI'm driven by the challenge of turning complex problems into efficient, scalable, and reliable, production-ready solutions.`;

export const SKILL_GROUPS = [
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
    skills: ["Leadership & Team Management", "Mentoring", "Dynamic Speaker", "Computer Engineering", "Web Development", "Git / GitHub / GitLab"],
  },
];

export const EXP_METRICS = [
  { metric: "120k+", label: "msgs/sec",        desc: "Kafka pipeline latency" },
  { metric: "0",     label: "data loss",        desc: "OMEX ingestion stress-tested" },
  { metric: "40%",   label: "memory reduced",   desc: "Quarkus Reactive Streams" },
  { metric: "<1ms",  label: "lookup time",      desc: "CockroachDB + Redis risk engine" },
];

export const EXP_BULLETS = [
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
  },
];

export const PROJECTS = [
  {
    name: "Enterprise AI Operations Copilot",
    tag: "LangChain · Gemini · ChromaDB · Spring Boot",
    url: "https://github.com/Alieno1/enterprise-ai-copilot",
    bullets: [
      "Decoupled Agentic AI Copilot autonomously routing queries to backend tools",
      "RAG pipeline with ChromaDB for zero-hallucination semantic search",
      "Java Spring Boot architecture facilitating highly scalable data orchestration",
    ],
    highlight: true,
  },
  {
    name: "Auto-Director: Micro-Drama Engine",
    tag: "Multi-Agent AI · FFmpeg",
    url: "https://github.com/Alieno1/autodirector",
    bullets: [
      "Autonomous Agentic pipeline converting raw text into vertical micro-dramas",
      "Java backend integrations to streamline LLM task management with intelligent rate-limit filters",
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
      "Comprehensive unit testing architecture utilizing JUnit and Mockito",
    ],
    highlight: false,
  },
  {
    name: "ICIPE Conference Portal",
    tag: "Node.js · Express",
    url: "https://github.com/Alieno1/ICIPE",
    bullets: [
      "Full-stack web transformation integrating robust Node/Express backend for active form submission workflows",
    ],
    highlight: false,
  },
  {
    name: "Distributed Middleware Runtime",
    tag: "Java · Distributed Systems",
    url: "https://github.com/Alieno1/middleware-common-fork",
    bullets: [
      "Scale-out middleware infrastructure components for distributed orchestration and inter-service communication",
    ],
    highlight: false,
  },
  {
    name: "Retinopathy Diabetic Prediction",
    tag: "Deep Learning · Vision · Spring Boot",
    url: "https://github.com/Alieno1/Retinopathy-Diabetic-Prediction-and-Screening",
    bullets: [
      "Deep learning classification model for early diabetic retinopathy detection",
      "Java Spring Boot server wrapping ML algorithms for secure API distribution",
    ],
    highlight: false,
  },
];
