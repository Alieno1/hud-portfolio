import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Singh | Backend & AI Engineer",
  description:
    "JARVIS-style HUD portfolio of Himanshu Singh — Backend & AI Engineer at NIT Surat. Powered by Hunter AI.",
  keywords: [
    "Himanshu Singh", "Backend Engineer", "AI Engineer", "NIT Surat",
    "Spring Boot", "LangChain", "Kafka", "Portfolio"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
