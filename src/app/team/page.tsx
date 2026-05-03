"use client";

import { motion } from "framer-motion";
import { Code2, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const founder = {
    name: "Tiamiyu Wasiu Wiliams", 
    role: "Founder & Operations Lead",
    bio: "Driving the strategic vision and operational excellence at Cre8ifhub. Specializing in cross-functional team leadership, project discovery, and ensuring that every platform we launch is optimized for massive user engagement and clear monetization.",
    icon: <Layers className="w-5 h-5 text-yellow-500" />,
    imageName: "founder.jpg" 
  };

  const team = [
    {
      name: "Oyebode Precious Isaac",
      role: "Lead Software Architect",
      bio: "A specialized Full-Stack SaaS Developer and React/Next.js expert. With deep roots in Computer Science and Data Analytics, he engineers the high-performance architectures that power our clients' most complex multivendor platforms and digital ecosystems.",
      icon: <Code2 className="w-4 h-4 text-teal-500" />,
      imageName: "precious.jpg" 
    },
    {
      name: "Join Our Team",
      role: "Future Innovator",
      bio: "We are always looking for elite developers, designers, and strategists to join our growing roster. If you build systems that scale, we want to talk to you.",
      icon: <ArrowRight className="w-4 h-4 text-slate-400" />,
      imageName: "precious.jpg" 
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#fafafa] min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-32 overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[#fafafa] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Vision.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed px-2 sm:px-0">
              We are a tight-knit agency of specialized developers and strategists building the next generation of digital platforms.
            </p>
          </motion.div>
        </div>

        {/* 1. THE FOUNDER SECTION (Executive Layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-32 sm:mb-40"
        >
          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-max">
              {founder.icon}
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">{founder.role}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              {founder.name}
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
              {founder.bio}
            </p>

            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-slate-300"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Cre8ifhub Leadership</span>
            </div>
          </div>

          {/* Massive Portrait Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[700px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-200 group">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 z-10 group-hover:opacity-0 transition-opacity duration-500">
                {/* <p className="text-xs uppercase tracking-widest font-bold">Save {founder.imageName}</p> */}
              </div>
              
              <Image src={`/${founder.imageName}`} alt={founder.name} fill className="object-cover object-top hover:scale-105 transition-transform duration-700" priority />
            </div>
          </div>
        </motion.div>


        {/* 2. THE ENGINEERING TEAM (Elite Minimalist Layout - Apple/Meta Style) */}
        <div className="w-full">
          <div className="text-center mb-16 sm:mb-24">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">The Engineering Team</h3>
            <p className="text-slate-500 mt-4 text-base sm:text-lg">The architects behind the platforms.</p>
          </div>

          {/* Invisible Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-20 max-w-4xl mx-auto">
            
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                
                {/* Elegant Circular Avatar - Perfectly sized to not overwhelm */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-white mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 ring-1 ring-slate-200">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-10 group-hover:opacity-0 transition-opacity duration-500 bg-slate-50/50">
                    {/* <span className="text-[10px] font-bold uppercase tracking-widest">Save {member.imageName}</span> */}
                  </div>
                  {/* NOTE: object-top keeps the face in frame if it's a full body image */}
                  <Image src={`/${member.imageName}`} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Typography - Clean, floating, no borders */}
                <div className="inline-flex items-center gap-2 mb-4">
                  {member.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{member.role}</span>
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">{member.name}</h4>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
                  {member.bio}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}