import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo wrapper - no background, no borders, just clean space */}
            <Link href="/" className="inline-block mb-6 relative w-56 h-16">
               <Image 
                  src="/cre8ifhub.png" 
                  alt="Cre8if_Hub Logo" 
                  fill 
                  className="object-contain object-left" 
               />
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Engineering scalable marketplaces and digital platforms for ambitious brands. We build the digital infrastructure you need to scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-400 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-400">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-teal-400">
                  <Phone size={16} />
                </div>
                <span className="mt-1">+234 811 715 3154</span>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-yellow-400">
                  <Mail size={16} />
                </div>
                <a href="mailto:cre8ifhub@gmail.com" className="mt-1 hover:text-teal-400 transition-colors">cre8ifhub@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-pink-400">
                  <MapPin size={16} />
                </div>
                <span className="mt-1">Available Upon Request</span>
              </li>
            </ul>
          </div>
        </div>

       {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Cre8ifhub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            {/* UPDATED LINKS HERE */}
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}