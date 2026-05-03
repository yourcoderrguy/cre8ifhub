"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Uncomment when images are added
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

export default function Work() {
  const featuredProjects = [
    {
      client: "MIVENTY",
      category: "Service Marketplace",
      title: "From Limitation to a Scalable Marketplace Engine.",
      description: "Miventy started as a promising idea: connect parents with children’s entertainers. But the initial build on Sharetribe Go hit predictable ceilings. We migrated the marketplace to Sharetribe Flex, redesigned the UX from the ground up, and rebuilt the transaction system to support real marketplace economics. Stripe-powered split payments, commission logic, and dynamic user roles transformed how users interacted—buyers could become vendors fluidly.",
      tags: ["Sharetribe Flex", "Stripe Split Payments", "Role Management"],
      imagePlaceholder: "Miventy Platform UI",
      imageName: "miventry.png",
      color: "from-teal-500/20 to-slate-900/5"
    },
    {
      client: "SHINDEEG",
      category: "Multi-Sided Event Platform",
      title: "Designing a Multi-Sided Marketplace from Scratch.",
      description: "Shindeeg needed to support three distinct user journeys—event planners, DJs, and attendees—without friction. Using Next.js, we engineered a custom platform from first principles. Planners monetize events, DJs sell services, and attendees buy tickets. With Stripe handling transactions and Mapbox enabling location discovery, it evolved into a unified ecosystem. This wasn’t just development—it was product design at the system level.",
      tags: ["Next.js Custom Build", "Mapbox Integration", "Multi-sided Routing"],
      imagePlaceholder: "Shindeeg Event Dashboard",
      imageName: "shindeeg.png",
      color: "from-yellow-500/20 to-slate-900/5"
    },
    {
      client: "WEDLY",
      category: "AI-Powered Discovery",
      title: "Turning a Niche Idea into an Intelligent Marketplace.",
      description: "Wedly began as a no-code MVP in the wedding DIY space—functional, but limited. To unlock its potential, we transitioned it to Sharetribe Flex and rebuilt the experience around discovery. We introduced custom conversion pages, Stripe infrastructure, and AI-driven search powered by Claude. The result is a marketplace that doesn’t just list options—it helps users find exactly what they need based on intent.",
      tags: ["Claude AI Search", "Sharetribe Flex", "CRO Design"],
      imagePlaceholder: "Wedly Search Interface",
      imageName: "wedly.png",
      color: "from-pink-500/20 to-slate-900/5"
    }
  ];

  const gridProjects = [
    {
      client: "Experterly",
      title: "Monetizing Expertise Through Structured Access",
      desc: "Built a business model with tiered membership access, subscription-based payments via Stripe, and controlled visibility, creating a predictable recurring revenue engine.",
      imageName: "experterly.png"
    },
    {
      client: "ShowCase",
      title: "Clarity, Conversion, and First Impressions",
      desc: "Designed a high-performance landing experience on Sharetribe Flex built strictly for conversion—because the first click determines everything that follows.",
      imageName: "conceirge.png"
    },
    {
      client: "Luminate",
      title: "Extending Beyond the Default Stack",
      desc: "Combined Sharetribe Flex with a custom PHP/Laravel backend to unlock multi-payment support (PayPal) and complex business logic. Where no-code meets engineering precision.",
      imageName: "conceirge.png"
    },
    {
      client: "BuyBackBoards",
      title: "Solving Logistics Inside the Transaction",
      desc: "Embedded complex shipping calculation logic directly into a Sharetribe Flex purchase flow, removing uncertainty and reducing buyer friction instantly.",
      imageName: "conceirge.png"
    },
    {
      client: "Influence Finder",
      title: "Powering Brand & Creator Partnerships",
      desc: "Implemented a commission-based system with Stripe split payments connecting Amazon sellers with influencers, ensuring both sides collaborate confidently.",
      imageName: "conceirge.png"
    },
    {
      client: "MedicalMentors",
      title: "Real-Time Interaction Marketplace",
      desc: "Integrated Whereby video seamlessly into the platform, enabling live consultations alongside structured booking flows for meaningful medical mentorship.",
      imageName: "conceirge.png"
    }
  ];

  const additionalServices = [
    "3D Animation & Rendering",
    "AI Automation Workflows",
    "Transcription, Translation & Subtitling",
    "Website Design (Wix & Squarespace)",
    "Marketplace & Technical SEO"
  ];

  return (
    <div className="w-full flex flex-col items-center bg-[#fafafa] min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 tracking-tight">
              Work That Builds <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Marketplaces</span> <br />
              People Actually Use.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              We don’t just build platforms—we engineer marketplace ecosystems that attract, convert, and scale.
            </p>
            <div className="inline-block bg-teal-50 border border-teal-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full">
              <p className="text-sm sm:text-base font-bold text-teal-700">
                "What needs to happen for this marketplace to succeed—not just launch?"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Featured Case Studies Grid (Alternating Desktop, Stacked Mobile) */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 mb-24 sm:mb-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col lg:grid lg:grid-cols-2"
              >
                
                {/* Text Content Side */}
                <div className={`p-6 sm:p-10 md:p-16 flex flex-col justify-center order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
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

                  {/* Tags (Replaced Metrics to fit the new copy) */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 border border-slate-200 rounded-full text-xs sm:text-sm font-bold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-teal-600 transition-colors group/link text-base sm:text-lg w-max">
                    Discuss a similar project
                    <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </Link>
                </div>

                {/* Image Side - Stays on top on mobile (order-1) */}
                <div className={`relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto bg-gradient-to-br ${project.color} overflow-hidden flex items-center justify-center order-1 ${isEven ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'} border-b lg:border-b-0 border-slate-100`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 z-10 bg-white/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-500 p-6 text-center">
                    <p className="font-bold text-base sm:text-lg">{project.imagePlaceholder}</p>
                    {/* <p className="text-xs sm:text-sm mt-1">(Save as /public/{project.imageName})</p> */}
                  </div>
                  <Image src={`/${project.imageName}`} alt={project.client} fill className="object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* The Philosophy Break */}
      <section className="w-full bg-slate-900 text-white py-20 sm:py-32 mb-20 sm:mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12">How We Think</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-10 sm:mb-12">
            Most marketplaces fail because they focus on features instead of systems. We approach every build differently. We think in:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <CheckCircle2 className="text-teal-400 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-bold">User flows, not pages.</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <CheckCircle2 className="text-yellow-400 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-bold">Transactions, not buttons.</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <CheckCircle2 className="text-pink-400 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-bold">Retention, not just acquisition.</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <CheckCircle2 className="text-teal-400 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-base sm:text-lg font-bold">Monetization, from day one.</span>
            </div>
          </div>
          <p className="text-xl sm:text-2xl font-black mt-12 sm:mt-16 text-teal-400">
            Because a marketplace isn’t a website—it’s an ecosystem.
          </p>
        </div>
      </section>

      {/* Grid Projects */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full mb-20 sm:mb-32">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">More Ecosystems Built</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gridProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-40 sm:h-48 bg-slate-100 relative flex items-center justify-center border-b border-slate-200">
                <span className="text-slate-400 font-bold text-xs sm:text-sm z-10 px-4 text-center">Save {project.imageName}</span>
                <Image src={`/${project.imageName}`} alt={project.client} fill className="object-cover object-top" />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-teal-600 font-black text-[10px] sm:text-xs tracking-widest uppercase mb-2 block">{project.client}</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services & Final CTA */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 w-full text-center">
        <div className="border-t border-slate-200 pt-16 sm:pt-24 mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 sm:mb-8">Additional Digital Capabilities</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {additionalServices.map((service, index) => (
              <span key={index} className="px-4 py-2 sm:px-5 sm:py-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl text-xs sm:text-sm text-slate-700 font-bold shadow-sm">
                {service}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6">You don't just need development. <br className="hidden sm:block"/>You need the right system.</h2>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-500 text-white hover:text-slate-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
          Let's build it together
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>

    </div>
  );
}