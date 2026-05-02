"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 sm:mb-12">Last Updated: {lastUpdated}</p>

          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[2rem] shadow-sm border border-slate-200 text-slate-600 leading-relaxed space-y-8 sm:space-y-10">
            
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">1. Acceptance of Terms</h2>
              <p className="text-sm sm:text-base">
                By accessing and using the services provided by Cre8ifhub ("we," "us," or "our"), including our website and custom development services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">2. Description of Services</h2>
              <p className="text-sm sm:text-base">
                Cre8ifhub specializes in digital platform engineering, including but not limited to Custom Marketplace Development, Sharetribe Platform Engineering, Modern Website Design, and Platform Integration. The specific scope, deliverables, and timelines for your project will be outlined in a dedicated formal proposal or Statement of Work (SOW).
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">3. Client Responsibilities</h2>
              <p className="text-sm sm:text-base">
                To ensure the timely and successful delivery of our services, clients are expected to provide necessary assets, feedback, and approvals in a timely manner. Delays in client communication may result in corresponding delays to project timelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">4. Intellectual Property</h2>
              <p className="text-sm sm:text-base">
                Upon final and full payment for our services, the intellectual property rights for the custom deliverables (such as custom code, design assets, and marketplace architecture) will be transferred to the client. Cre8ifhub retains the right to use non-confidential project visuals in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) states otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">5. Payments and Retainers</h2>
              <p className="text-sm sm:text-base">
                Payment schedules will be strictly defined in your project proposal. Typically, projects require an upfront deposit before work commences. For ongoing maintenance and API integration support, we operate on a monthly retainer model, which will be billed accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">6. Limitation of Liability</h2>
              <p className="text-sm sm:text-base">
                Cre8ifhub builds scalable and secure architectures to industry standards; however, we are not liable for business losses, data breaches resulting from third-party software failures, or subsequent modifications made by the client or other developers post-launch.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">7. Contact Information</h2>
              <p className="text-sm sm:text-base">
                If you have any questions or concerns regarding these terms, please contact us directly:
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