"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BarChart3, Users, Zap } from "lucide-react";

export default function Work() {
  const caseStudies = [
    {
      client: "KUVAULT",
      category: "Net-Centric Digital Banking",
      title: "Architecting a secure, scalable financial ecosystem.",
      description: "We engineered a complete digital banking system utilizing Next.js and PostgreSQL, focusing on complex transaction flows, rapid deployment, and bank-grade security protocols.",
      metrics: [
        { label: "Uptime", value: "99.9%", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { label: "Active Users", value: "10k+", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { label: "Transaction Speed", value: "<1s", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ],
      imagePlaceholder: "Digital Banking Dashboard Image",
      imageName: "kuvault.jpg",
      color: "from-teal-500/20 to-slate-900/5"
    },
    {
      client: "DOMUS LUMINARIUM",
      category: "Cross-Functional Social Platform",
      title: "Building a high-engagement ecosystem for Gen Z.",
      description: "Developed a dynamic, full-stack social media platform designed to handle thousands of concurrent users with real-time interactions, custom feeds, and seamless onboarding.",
      metrics: [
        { label: "Engagement", value: "+45%", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { label: "Target Demo", value: "Gen Z", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { label: "Load Time", value: "1.2s", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> }
      ],
      imagePlaceholder: "Social Platform UI Image",
      imageName: "domus.jpg",
      color: "from-yellow-500/20 to-slate-900/5"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#fafafa] min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Works.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              We don't just write code; we build revenue engines. Here is a look at some of the scalable platforms we've engineered.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {caseStudies.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col lg:grid lg:grid-cols-2"
            >
              
              {/* Text Content Side */}
              <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm tracking-wide uppercase">
                    {project.client}
                  </span>
                  <span className="text-teal-600 font-bold text-xs sm:text-sm">{project.category}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 flex flex-col justify-center">
                      <div className="text-teal-500 mb-1.5 sm:mb-2">{metric.icon}</div>
                      <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900">{metric.value}</p>
                      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-teal-600 transition-colors group/link text-base sm:text-lg w-max">
                  Start a similar project
                  <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Image Side */}
              <div className={`relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-100`}>
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 z-10 bg-slate-200/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-500 p-6 text-center">
                  <p className="font-bold text-base sm:text-lg">{project.imagePlaceholder}</p>
                  <p className="text-xs sm:text-sm mt-1">(Save as /public/{project.imageName})</p>
                </div>
                {/* <Image src={`/${project.imageName}`} alt={project.client} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}