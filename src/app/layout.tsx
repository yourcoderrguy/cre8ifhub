// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton"; // <-- Import the new button

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cre8ifhub | Digital Solutions & Marketplace Development",
  description: "Expert Sharetribe, Multivendor, and Custom Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-white text-slate-900 antialiased selection:bg-teal-500 selection:text-white flex flex-col min-h-screen overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton /> {/* <-- Mount the button right above the closing body tag */}
      </body>
    </html>
  );
}