"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap, Layers, MonitorSmartphone, CheckCircle2 } from "lucide-react";

export default function Home() {
  const whyChooseUs = [
    {
      title: "Marketplace Expertise",
      description: "Deep technical proficiency in architecting complex 2-sided websites and P2P platforms.",
      icon: <Layers className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "Conversion-First",
      description: "Modern, responsive designs optimized for lead generation and user retention.",
      icon: <Rocket className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Seamless Integrations",
      description: "From global payment gateways to marketing automation, we connect your tools.",
      icon: <Zap className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Rapid Deployment",
      description: "Get to market faster without sacrificing quality or future scalability.",
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white">
      
      {/* 2-COLUMN HERO SECTION WITH IMAGE */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-16 md:pb-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Enterprise Digital Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
              Engineering Scalable <br />
              {/* FIXED INVISIBLE TEXT: Using standard Tailwind colors to ensure it renders */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
                Marketplaces
              </span> <br />
              for Ambitious Brands.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium max-w-xl">
              We transform complex ideas into seamless, high-performance web experiences. From bespoke multivendor ecosystems to rapid Sharetribe deployments, we build the infrastructure startups need to scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Talk to an Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* HERO IMAGE PLATFORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-yellow-500/20 rounded-[3rem] blur-3xl transform -rotate-6"></div>
            {/* MAKE SURE TO ADD 'hero.jpg' to your public folder */}
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
                 {/* Replace this div with the Image component below once you have hero.jpg */}
                 <MonitorSmartphone size={64} className="mb-4 opacity-50" />
                 <p className="font-bold">Main Dashboard / Work Image</p>
                 <p className="text-sm">(Save image as /public/hero.jpg)</p>
              </div>
              <Image src="/hero.webp" alt="Digital Platform Development" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORKSPACE & ABOUT SECTION - 2 COLUMN */}
      <section className="w-full bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* WORKSPACE IMAGE (Where they train people) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
                 <p className="font-bold">Workspace / Training Image</p>
                 <p className="text-sm">(Save image as /public/workspace.jpg)</p>
            </div>
            {/* UNCOMMENT THIS WHEN READY: */}
            <Image src="/workspace.jpg" alt="Cre8ifhub Team Training" fill className="object-cover" />
            
            {/* Floating Experience Badge */}
            <div className="absolute bottom-6 -right-6 md:right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 hidden sm:flex">
               <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center font-black text-xl">
                 5+
               </div>
               <div>
                 <p className="text-sm text-slate-500 font-bold uppercase">Years of</p>
                 <p className="text-lg font-black text-slate-900">Expertise</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-teal-500 font-bold uppercase tracking-widest mb-4">Architecting Growth</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">We don't just build websites; we architect digital growth engines.</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Cre8ifhub, we partner with forward-thinking business owners, entrepreneurs, and startups to design intuitive, secure, and conversion-driven platforms. Whether you need a robust 2-sided marketplace or a sleek corporate presence, our team ensures your technology works as brilliantly as your business model.
            </p>
            <ul className="space-y-4">
              {['Secure & Scalable Infrastructure', 'Custom 2-Sided Marketplaces', 'Dedicated Training & Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <CheckCircle2 className="text-teal-500 w-6 h-6" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4">The Technical Edge.</h2>
          <p className="text-xl text-slate-600 font-medium">Why industry leaders choose Cre8ifhub for their most critical digital infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PREMIUM CALL TO ACTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-black text-white mb-6">Ready to scale your vision?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              From user onboarding to complex transaction flows, we handle the heavy lifting of custom multivendor development.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-teal-500 hover:bg-teal-400 text-slate-900 px-10 py-5 rounded-full font-black text-sm transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}