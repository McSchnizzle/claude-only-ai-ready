import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AISupportPDX | AI Adoption Made Practical",
  description: "Your experienced local partner for bringing AI into your Portland-area business — confidently, securely, and without the hype. 30+ years in tech leadership.",
  keywords: "AI consulting, Portland, Oregon, AI implementation, business AI, AI training, on-premise AI",
  openGraph: {
    title: "AISupportPDX | AI Adoption Made Practical",
    description: "Your experienced local partner for bringing AI into your Portland-area business — confidently, securely, and without the hype.",
    type: "website",
    locale: "en_US",
    siteName: "AISupportPDX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-warm-white text-slate-gray`}>
        {children}
      </body>
    </html>
  );
}
