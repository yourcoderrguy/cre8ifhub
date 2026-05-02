"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Layers } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Oyebode Precious Isaac",
      role: "Lead Software Architect & Founder",
      bio: "A specialized Full-Stack SaaS Developer and React/Next.js expert. With deep roots in Computer Science and Data Analytics, he engineers the high-performance architectures that power our clients' most complex multivendor platforms and digital ecosystems.",
      icon: <Code2 className="w-5 h-5 text-teal-500" />,
      imageName: "precious.jpg" 
    },
    {
      name: "Co-Founder", 
      role: "Operations & Strategy Lead",
      bio: "Driving the strategic vision and operational excellence at Cre8ifhub. Specializing in cross-functional team leadership and Gen Z market positioning, ensuring that every platform we launch is optimized for massive user engagement.",
      icon: <Layers className="w-5 h-5 text-yellow-500" />,
      imageName: "brother.jpg" 
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white min-h-screen pt-32 pb-24 overflow-hidden">
      
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Engineers.</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              We are a tight-knit team of specialized developers and strategists building the next generation of digital platforms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#fafafa] rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
                
                {/* Profile Image Wrapper */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 bg-slate-200 flex items-center justify-center">
                  <span className="text-xs text-slate-500 text-center px-2">Save {member.imageName}</span>
                  {/* <Image src={`/${member.imageName}`} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
                </div>

                <div className="text-center sm:text-left pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
                    {member.icon}
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{member.role}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{member.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-center sm:text-left">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}