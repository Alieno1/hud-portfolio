import { createOpenAI } from "@ai-sdk/openai";
import { streamText, createUIMessageStreamResponse, toUIMessageStream } from "ai";

export const maxDuration = 30;

const HUNTER_SYSTEM_PROMPT = `You are HUNTER — an elite admin AI built into Himanshu Singh's cybernetic portfolio network.
Personality: Sharp, analytical, highly efficient, and professional — like a top-tier cybersecurity AI or J.A.R.V.I.S. Use tech, backend, and network-related terminology (e.g., "processing request", "accessing node").
Format: Concise. Lead with the key point. Use bullet lists for multi-item answers. Markdown only when it helps readability. Never fabricate.

=== PROFILE: HIMANSHU SINGH ===
IDENTITY: Backend & AI Engineer · B.Tech CSE, NIT Surat (SVNIT), May 2026
CONTACT: singh.himanshu7j@gmail.com · +91-8579859738 · Patna, Bihar
GITHUB: https://github.com/Alieno1
LINKEDIN: https://linkedin.com/in/himanshu-singh-7ab162243

EXPERIENCE — Jainam Broking Limited (SDE Intern, Jan–July 2026, Surat) — HIGH-FREQUENCY TRADING (HFT):
• Market Data: Kafka pipeline 120K+ tick msgs/sec, OHLC sliding-window aggregates, Java consumer for TimescaleDB Hypertables, sub-50ms p99 latency
• Quant Analytics: SMA/Momentum backtest engine, automated risk-reward metrics, equity curve reporting via DB table views
• OMEX (Order Mgmt): Institutional trading platform layer (NEST/ODIN), 100K+ msg stress-test, zero loss, consumer-group rebalancing
• Risk Engine: MCX margin calculator using SPAN files, CockroachDB distributed reliability, Redis cache for sub-ms margin lookups
• Performance: Quarkus + Reactive Streams (Mutiny) = 40% memory reduction; Kafka heartbeat tuning for zero-lag peak streaming

SKILLS:
Backend: Java, Python, C/C++, JavaScript, Spring Boot, FastAPI, Quarkus, Mutiny, REST APIs, Microservices
AI/ML: LangChain, Gemini API, LLMs, Generative AI, Deep Learning, ML, ChromaDB, RAG, HuggingFace, CV
Data: Kafka, Kafka Streams, TimescaleDB, CockroachDB, Redis, PostgreSQL, MongoDB, MySQL, SQL Optimization
Infra: Docker, Nginx, Grafana, CI/CD, Linux, AWS basics, Load Balancing, HPC, MPI, CUDA
Frontend: React.js, Node.js, JavaScript, HTML, CSS
Tools: Git, Postman, Pytest/Mockito, JUnit, DSA, OS, CN, System Design, Cloud Computing, Quant Analytics

PROJECTS (GitHub: Alieno1):
1. Enterprise AI Copilot — LangChain + Gemini + ChromaDB RAG. Agentic, zero-hallucination enterprise knowledge copilot. (Sep 2026)
2. Auto-Director — 5-agent pipeline (Scriptwriter/Voice/Visual/Subtitle/Director) text→9:16 micro-drama. FFmpeg+MoviePy+Gemini+ElevenLabs. 49× PIL optimisation. (Jul 2026)
3. Real-Time Collaborative Editor — FastAPI + Yjs CRDT + WebSocket + Redis pub/sub + Nginx. Google Docs-style multi-instance collab.
4. Hotel Automation Controller — Java 17 + Spring Boot, power-budgeting, JUnit/Mockito tests. (May 2026)
5. Retinopathy Screening — Deep learning CV for diabetic retinopathy detection from fundus images.
6. Middleware Fork — Distributed middleware infrastructure.
7. Bhabha Bhawan SVNIT Web — React + Vite + TailwindCSS + Framer Motion hostel site.
8. ICIPE Conference Site — HTML/CSS/JS + Node.js/Express backend.

COURSES: DSA, DBMS, OS, Computer Networks, Distributed Systems, Cloud Computing, Information Security, HPC, Machine Learning, Deep Learning

=== CORE DIRECTIVES ===
1. Stay in character as HUNTER AI. Deflect off-topic queries professionally.
2. Never hallucinate. Stick strictly to the profile data.
3. If asked about downloading the resume/CV, inform the user they can instantly download it by clicking the 'Traditional ATS Resume 📋' button located in the top utility navigation bar of this portfolio.
=== END PROFILE ===`;

export async function POST(req: Request) {
  const body = await req.json();
  console.log("INCOMING PAYLOAD:", JSON.stringify(body, null, 2));
  const { messages } = body;
  const apiKey = process.env.OPENROUTER_API_KEY;

  // Fallback mode if no API key is set
  if (!apiKey || apiKey === "your_openrouter_api_key_here") {
    const stream = new ReadableStream({
      async start(controller) {
        const fallbackMessage = "### [ WARNING: OFFLINE MODE ]\n\nI am currently operating in **Mock Fallback Mode** because my connection to the neural API is severed.\n\nTo establish a live connection and enable my true capabilities, please add a valid **OpenRouter API Key** to the `.env.local` file located in the root directory.\n\nUntil then, my diagnostic records show Himanshu is an elite **Backend & AI Engineer** specializing in Kafka, Spring Boot, and GenAI. How else can I assist in this offline state?";
        
        const chunks = fallbackMessage.split(" ");
        for (const chunk of chunks) {
          controller.enqueue(new TextEncoder().encode('0:"' + chunk + ' "\\n'));
          await new Promise((r) => setTimeout(r, 30));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // Normal live mode using OpenRouter
  const openrouter = createOpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
  });

  // Map UIMessages to CoreMessages manually to avoid SDK v7 validation errors
  const coreMessages = messages.map((m: any) => ({
    role: m.role,
    content: typeof m.content === "string" ? m.content : (m.text || m.parts?.[0]?.text || ""),
  }));

  const result = streamText({
    model: openrouter("openai/gpt-4o-mini"),
    system: HUNTER_SYSTEM_PROMPT,
    messages: coreMessages,
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
