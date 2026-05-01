"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: ""
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Intercept the form submission and redirect to WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Stop page from reloading

    // Format the message cleanly
    const message = `*New Project Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company || 'N/A'}%0A%0A*Project Details:*%0A${formData.project}`;

    // Target Phone Number
    const phoneNumber = "2348117153154";

    // Create the wa.me link and open it in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Information Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Let's Build Your <br />
            <span className="text-teal-500">Next Big Idea.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Ready to launch your marketplace or elevate your digital presence? Fill out the form below to chat with us directly on WhatsApp. Our experts are here to turn your vision into a measurable success.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                <p className="text-lg font-bold text-slate-900">+234 811 715 3154</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:cre8ifhub@gmail.com" className="text-lg font-bold text-slate-900 hover:text-teal-500 transition-colors">
                  cre8ifhub@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Office</p>
                <p className="text-lg font-bold text-slate-900">Available Upon Request / Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The WhatsApp Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden"
        >
          {/* Subtle WhatsApp Branding Hint */}
          <div className="absolute -top-10 -right-10 text-[#25D366] opacity-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+123 456 7890" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company (Optional)</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Project Details *</label>
              <textarea name="project" value={formData.project} onChange={handleChange} rows={5} placeholder="Tell us about your marketplace idea or platform needs..." className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none" required></textarea>
            </div>

            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Connect via WhatsApp
              <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}