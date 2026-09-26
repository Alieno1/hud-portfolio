import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Singh | Backend & AI Engineer",
  description: "JARVIS-style HUD portfolio of Himanshu Singh — Backend & AI Engineer at NIT Surat (SVNIT). Specializing in Distributed Systems, Kafka, and Agentic AI.",
  keywords: [
    "Himanshu Singh", "Backend Engineer", "AI Engineer", "NIT Surat", "SVNIT",
    "Spring Boot", "LangChain", "Kafka", "Distributed Systems", "Portfolio"
  ],
  openGraph: {
    title: "Himanshu Singh | Backend & AI Engineer",
    description: "High-performance systems, Distributed Kafka pipelines, and Agentic AI. Explore my live cyber portfolio.",
    url: "https://hud-portfolio.vercel.app",
    siteName: "Himanshu Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Singh | Backend & AI Engineer",
    description: "High-performance systems, Distributed Kafka pipelines, and Agentic AI. Explore my live cyber portfolio.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
