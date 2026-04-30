// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <-- Add this import

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
      <body className={`${outfit.className} bg-brand-dark text-slate-300 antialiased selection:bg-brand-yellow selection:text-brand-dark flex flex-col min-h-screen overflow-x-hidden`}>
        <Navbar /> {/* <-- Add the Navbar here */}
        <main className="flex-grow pt-24"> {/* Added padding-top to account for fixed navbar */}
          {children}
        </main>
        {/* <Footer /> will go here later */}
      </body>
    </html>
  );
}