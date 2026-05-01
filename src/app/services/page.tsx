"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, LayoutTemplate, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const phoneNumber = "2348117153154";

  const services = [
    {
      title: "Custom Marketplace Development",
      description: "Launching a digital marketplace requires robust, specialized architecture. We design and build secure, scalable multivendor websites tailored to your specific industry. From user onboarding to vendor dashboards and complex transaction flows, we handle the heavy lifting so you can focus on growing your user base.",
      icon: <Code2 className="w-8 h-8 text-teal-500" />,
      color: "bg-teal-50",
      imagePlaceholder: "Marketplace Dashboard Image",
      imageName: "marketplace.jpg",
      tags: ["Multi-vendor", "Payment Escrow", "Custom Dashboards"],
    },
    {
      title: "Sharetribe Platform Engineering",
      description: "Validate your idea and get to market faster. As an experienced Sharetribe developer, we specialize in customizing and deploying powerful marketplace solutions using the Sharetribe framework. We optimize the platform to fit your unique brand identity, ensuring a frictionless experience for both buyers and sellers.",
      icon: <MonitorSmartphone className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-50",
      imagePlaceholder: "Sharetribe Interface Image",
      imageName: "sharetribe.webp",
      tags: ["Rapid Deployment", "API Integration", "UI Customization"],
    },
    {
      title: "Modern Website Design & Development",
      description: "Your website is your most powerful sales asset. Our expert website designers craft visually stunning, highly informational platforms tailored for startups and established enterprises. We build responsive, SEO-ready brochure sites designed to capture leads, build trust, and clearly communicate your value proposition.",
      icon: <LayoutTemplate className="w-8 h-8 text-pink-500" />,
      color: "bg-pink-50",
      imagePlaceholder: "Corporate Website Mockup",
      imageName: "website.jpg",
      tags: ["Conversion-First", "SEO Optimized", "Responsive Design"],
    },
    {
      title: "Platform Integration & Maintenance",
      description: "A great platform never stops evolving. We ensure your website operates flawlessly with secure payment gateway integrations (Stripe, Paystack) and CRM connections like Mailchimp. Post-launch, we provide ongoing monthly retainer support for essential security updates, feature enhancements, and dedicated technical maintenance.",
      icon: <Settings className="w-8 h-8 text-slate-700" />,
      color: "bg-slate-100",
      imagePlaceholder: "Code/Maintenance Abstract Image",
      imageName: "maintenance.jpg",
      tags: ["API Webhooks", "Security Audits", "Monthly Retainers"],
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white pb-24 overflow-hidden">
      
      {/* ULTRA-PREMIUM SERVICES HERO */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-32 md:pb-32 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-br from-teal-500/10 via-yellow-500/5 to-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Our Capabilities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Specialized Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-yellow-500 to-pink-500">
              Engineering.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            We provide the technical foundation your business needs to scale. From complex multivendor platforms to seamless third-party integrations, we build systems that perform.
          </p>
        </motion.div>
      </section>

      {/* ALTERNATING EDITORIAL LAYOUT (Mobile Responsive) */}
      <section className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            // Create the dynamic WhatsApp message for each specific service
            const whatsappMessage = encodeURIComponent(`Hello Cre8ifhub! I am interested in discussing your ${service.title} service.`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}
              >
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl border border-slate-100 group">
                    <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700 p-6 text-center">
                      <p className="font-bold text-lg md:text-xl">{service.imagePlaceholder}</p>
                      <p className="text-xs md:text-sm mt-2">(Save image as /public/{service.imageName})</p>
                    </div>
                    <Image src={`/${service.imageName}`} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/20">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-50 border border-slate-200 text-xs md:text-sm font-bold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-teal-500 shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic WhatsApp Action Button */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start gap-3 bg-white border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Discuss on WhatsApp
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need a custom solution?</h2>
            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Our engineering team is ready to architect and deploy your digital platform to the highest industry standards.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg transition-all duration-300 shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:-translate-y-1"
            >
              Get a Proposal
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}