"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2026";

  return (
    <div className="w-full bg-[#fafafa] min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        
        <Link href="/" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-slate-900 transition-colors mb-8 sm:mb-12 text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12">Last Updated: {lastUpdated}</p>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2rem] shadow-sm border border-slate-200 text-slate-600 leading-relaxed space-y-8 sm:space-y-10">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">1. Introduction</h2>
              <p className="text-sm sm:text-base">
                At Cre8ifhub, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, submit inquiries, or engage our digital development services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">2. Information We Collect</h2>
              <p className="text-sm sm:text-base mb-3 sm:mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li><strong>Personal Identification Data:</strong> Name, email address, phone number, and company details provided through our contact forms or direct WhatsApp communications.</li>
                <li><strong>Project Specifications:</strong> Information you share regarding your marketplace ideas, business models, and platform requirements.</li>
                <li><strong>Technical Data:</strong> Standard internet log information, IP addresses, and browser details used for website analytics and security.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">3. How We Use Your Information</h2>
              <p className="text-sm sm:text-base mb-3 sm:mb-4">We use the information we collect strictly for professional purposes, including:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li>To respond to your project inquiries and provide accurate development proposals.</li>
                <li>To facilitate communication during the engineering and design phases of your project.</li>
                <li>To improve our website functionality and user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">4. Data Sharing and Third Parties</h2>
              <p className="text-sm sm:text-base">
                Cre8ifhub does not sell, trade, or rent your personal information to third parties. We may share necessary technical information with trusted third-party service providers (such as hosting platforms or payment gateways like Stripe and Paystack) strictly for the purpose of executing the services you have hired us to perform.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">5. Data Security</h2>
              <p className="text-sm sm:text-base">
                We implement robust, industry-standard security measures to maintain the safety of your personal information. All project data and communications are treated with strict confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">6. Your Rights</h2>
              <p className="text-sm sm:text-base">
                You have the right to request access to the personal data we hold about you, request corrections to any inaccuracies, or request the deletion of your data from our systems, subject to legal and contractual obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">7. Contact Us</h2>
              <p className="text-sm sm:text-base">
                If you have any questions regarding this Privacy Policy or how your data is handled, please reach out to us:
              </p>
              <ul className="mt-3 sm:mt-4 space-y-2 text-slate-700 font-medium text-sm sm:text-base">
                <li>Email: <a href="mailto:cre8ifhub@gmail.com" className="text-teal-600 hover:text-teal-700 hover:underline transition-colors">cre8ifhub@gmail.com</a></li>
                <li>Phone: +234 811 715 3154</li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}