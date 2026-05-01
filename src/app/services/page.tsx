"use client";

import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, LayoutTemplate, Settings } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Custom Marketplace Development",
      description: "Launching a digital marketplace requires robust, specialized architecture. We design and build secure, scalable multivendor websites tailored to your specific industry. From user onboarding to vendor dashboards and complex transaction flows, we handle the heavy lifting of custom marketplace development so you can focus on growing your user base.",
      icon: <Code2 className="w-8 h-8 text-teal-500" />,
      color: "bg-teal-50",
    },
    {
      title: "Sharetribe Platform Engineering",
      description: "Validate your idea and get to market faster. As an experienced Sharetribe developer, we specialize in customizing and deploying powerful marketplace solutions using the Sharetribe framework. We optimize the platform to fit your unique brand identity, ensuring a frictionless experience for both buyers and sellers on your 2-sided website.",
      icon: <MonitorSmartphone className="w-8 h-8 text-yellow-500" />,
      color: "bg-yellow-50",
    },
    {
      title: "Modern Website Design & Development",
      description: "Your website is your most powerful sales asset. Our expert website designers craft visually stunning, highly informational platforms tailored for startups and established enterprises. We build responsive, SEO-ready brochure sites designed to capture leads, build trust, and clearly communicate your value proposition to your target audience.",
      icon: <LayoutTemplate className="w-8 h-8 text-pink-500" />,
      color: "bg-pink-50",
    },
    {
      title: "Platform Integration & Maintenance",
      description: "A great platform never stops evolving. We ensure your website operates flawlessly with secure payment gateway integrations and CRM connections like Mailchimp. Post-launch, we provide ongoing monthly retainer support for essential security updates, feature enhancements, and dedicated technical maintenance.",
      icon: <Settings className="w-8 h-8 text-slate-700" />,
      color: "bg-slate-100",
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white pb-24">
      
      {/* Services Hero */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          Specialized Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Engineering.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 font-medium"
        >
          We provide the technical foundation your business needs to scale, from complex multivendor platforms to seamless integrations.
        </motion.p>
      </section>

      {/* Services List */}
      <section className="w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`p-4 rounded-2xl ${service.color} shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}