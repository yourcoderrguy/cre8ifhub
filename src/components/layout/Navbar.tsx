"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" }, // <-- Added Work
    { name: "Team", href: "/team" },     // <-- Added Team
    { name: "Contact", href: "/contact" },
  ];

  // BULLETPROOF TYPESCRIPT VARIANTS
  const menuVariants = {
    closed: { 
      opacity: 0, 
      clipPath: "circle(0% at 100% 0%)", 
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    },
    open: { 
      opacity: 1, 
      clipPath: "circle(150% at 100% 0%)", 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    }
  };

  const containerVariants = {
    // Added 'as const' to -1 so TS doesn't widen it to a generic number
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 as const } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    // Added 'as const' to "easeOut" to satisfy strict Vercel checks
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4"
            : "bg-white py-6 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO AREA */}
          <Link href="/" className="relative z-50 block group">
            <div className="relative w-56 h-16 md:w-64 md:h-20">
               <Image 
                  src="/cre8ifhub.png" 
                  alt="Cre8if_Hub Logo" 
                  fill 
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-300" 
                  priority
               />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-black transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-teal-500 hover:text-slate-900 transition-all duration-300 shadow-md"
            >
              Get a Proposal
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative z-50 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#25D366]/10 p-2 rounded-full border border-[#25D366]/20 shadow-sm"
                >
                  <X size={28} className="text-[#25D366]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-2"
                >
                  <Menu size={32} className="text-slate-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Fancy Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.nav 
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-10 relative z-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-black text-slate-800 hover:text-teal-500 transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-teal-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-10 py-4 rounded-full bg-slate-900 text-white font-bold tracking-wide text-lg hover:scale-105 transition-transform duration-300 shadow-xl inline-block hover:bg-teal-500 hover:text-slate-900"
                >
                  Get a Proposal
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}