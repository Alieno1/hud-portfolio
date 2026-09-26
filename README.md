# Cybernetic AI Portfolio

An immersive, high-performance developer portfolio engineered with a cutting-edge cyberpunk aesthetic. Built for modern backend and AI engineers, this portfolio orchestrates seamless CSS grids, performant Framer Motion animations, and features an integrated smart AI Agent running on Edge architecture.

## 🚀 Key Features

* **Three-Column Grid Architecture**: A responsive, space-optimized layout that logically separates Base Identity, Technical Arsenal, and Active Projects.
* **Integrated AI Copilot (Hunter)**: A persistent, cyber-themed floating terminal powered by the Vercel AI SDK. Capable of instantly answering questions about the developer's background, skillset, and intricate project architectures.
* **Light / Dark Mode Accessibility**: Custom data-theme toggling that intelligently inverts the neon-slate palette to a highly readable daylight aesthetic via native CSS variables.
* **ATS-Compliant Integration**: Direct functionality to instantly extract traditional PDF dossiers for recruiters and automated tracking systems.
* **Cybernetic Micro-Interactions**: Custom "Arc Reactor" background mesh, aggressive iOS-compatible overlay scroll locks, CRT scanline overlays, and neon pulse CSS behaviors.

## 💻 Tech Stack

* **Core Framework**: React 18 & Next.js (App Router)
* **Styling**: Tailwind CSS & native CSS variable injections
* **Animations**: Framer Motion & CSS Keyframes
* **AI Integration**: Vercel AI SDK & OpenRouter (GPT-4o-mini)
* **Icons**: Lucide React
* **Hosting Pipeline**: Vercel Edge Network

## 🛠️ Local Development Setup

To run this project locally on your machine:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Alieno1/hud-portfolio.git
   cd hud-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Authenticate the AI Copilot:
   Create a \`.env.local\` file in the root directory and add your OpenRouter API Key:
   \`\`\`env
   OPENROUTER_API_KEY=sk-or-v1-your-key-here
   \`\`\`

4. Boot the system:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the live boot sequence.

## 🌐 Production Deployment

This Next.js application is heavily optimized for zero-config deployment on Vercel. 
Simply import the GitHub repository into the Vercel Dashboard, map the \`OPENROUTER_API_KEY\` into the Environment Variables payload, and hit deploy. The Next.js compiler will automatically SSG (Static Site Generate) the UI elements and assign the AI backend to an Edge Function.
