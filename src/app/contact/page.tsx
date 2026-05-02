"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CalendarCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: ""
  });

  // State for the FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Project Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company || 'N/A'}%0A%0A*Project Details:*%0A${formData.project}`;
    const phoneNumber = "2348117153154";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqs = [
    { question: "What is your typical project timeline?", answer: "For Sharetribe platforms, we can launch an MVP in as little as 3-4 weeks. Custom multivendor marketplaces typically take 8-12 weeks depending on the complexity of your requirements and third-party integrations." },
    { question: "Do you offer post-launch support?", answer: "Absolutely. We offer dedicated monthly retainer packages to handle server maintenance, security patches, and ongoing feature development so your platform never falls behind." },
    { question: "How do you handle payments on the marketplace?", answer: "We integrate secure, compliant payment gateways like Stripe Connect and Paystack, allowing for seamless split payments, vendor payouts, and escrow functionality." }
  ];

  return (
    <div className="w-full bg-[#fafafa] min-h-screen pt-16 pb-16 sm:pb-24 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-bl from-teal-500/10 via-yellow-500/5 to-transparent blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-pink-500/5 via-teal-500/5 to-transparent blur-[80px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">Available for New Projects</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Next Big Idea.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed px-2 sm:px-0">
              Skip the long email chains. Tell us about your vision, and you'll be connected directly to our lead engineering team via WhatsApp.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: INFO & TIMELINE (Col span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-10 sm:space-y-12"
          >
            {/* Direct Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Direct Contact</h3>
              
              <a href="https://wa.me/2348117153154" target="_blank" rel="noreferrer" className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">WhatsApp / Phone</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900">+234 811 715 3154</p>
                </div>
              </a>

              <a href="mailto:cre8ifhub@gmail.com" className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 break-all">cre8ifhub@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900">Remote / Available on Request</p>
                </div>
              </div>
            </div>

            {/* What Happens Next Timeline */}
            <div className="bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
              <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
                <Clock className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" />
                What happens next?
              </h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.15rem] sm:before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:to-transparent">
                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-teal-500 flex items-center justify-center shrink-0 relative z-10 text-teal-400 text-sm sm:text-base font-bold">
                    1
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h4 className="font-bold text-base sm:text-lg mb-1">Instant Connection</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">Your message routes directly to our team via WhatsApp.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 relative z-10 text-slate-400 text-sm sm:text-base font-bold">
                    2
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h4 className="font-bold text-base sm:text-lg mb-1">Discovery Chat</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">We'll review your requirements and ask a few clarifying questions.</p>
                  </div>
                </div>
                <div className="relative flex items-start gap-4 sm:gap-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shrink-0 relative z-10 text-slate-400">
                    <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h4 className="font-bold text-base sm:text-lg mb-1">Formal Proposal</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">You receive a detailed technical roadmap and pricing layout.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: THE PREMIUM FORM (Col span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-200 relative overflow-hidden">
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Project Details</h3>
                <p className="text-sm sm:text-base text-slate-600">Fill out the fields below. All information is kept strictly confidential.</p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5 sm:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2 group">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 group-focus-within:text-teal-600 transition-colors">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-slate-50 rounded-xl border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all" required />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 group">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 group-focus-within:text-teal-600 transition-colors">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-slate-50 rounded-xl border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2 group">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 group-focus-within:text-teal-600 transition-colors">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+123 456 7890" className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-slate-50 rounded-xl border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all" required />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 group">
                    <label className="text-xs sm:text-sm font-bold text-slate-700 group-focus-within:text-teal-600 transition-colors">Company (Optional)</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-slate-50 rounded-xl border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 group">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 group-focus-within:text-teal-600 transition-colors">Project Requirements *</label>
                  <textarea name="project" value={formData.project} onChange={handleChange} rows={4} placeholder="Tell us about your marketplace idea, required features, or platform needs..." className="w-full px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base bg-slate-50 rounded-xl border border-slate-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 outline-none transition-all resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-black text-base sm:text-lg py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-2 sm:mt-4">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  Connect via WhatsApp
                </button>
                <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-3 sm:mt-4">By clicking submit, WhatsApp Web/App will open with your details pre-filled.</p>
              </form>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM FAQ SECTION */}
        <div className="mt-20 sm:mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-slate-600">Everything you need to know before we start.</p>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-4 pt-0 sm:p-6 sm:pt-0 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}