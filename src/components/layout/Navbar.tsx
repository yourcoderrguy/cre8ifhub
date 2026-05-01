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
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: { opacity: 0, clipPath: "circle(0% at 100% 0%)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    open: { opacity: 1, clipPath: "circle(150% at 100% 0%)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* MASSIVE LOGO AREA - Ready for the white-text logo */}
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

         {/* Desktop Navigation - FIXED VISIBILITY */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-900 hover:text-teal-500 transition-colors relative group"
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
            className="md:hidden relative z-50 text-slate-300 hover:text-white p-2 focus:outline-none"
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
                >
                  <X size={32} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Fancy Full-Screen Mobile Menu (Dark Theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />

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
                    className="text-4xl font-bold text-slate-300 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-yellow transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-brand-cyan via-brand-yellow to-brand-pink text-brand-dark font-bold tracking-wide text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-cyan/20 inline-block"
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