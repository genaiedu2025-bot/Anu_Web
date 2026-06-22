"use client";

import { Globe, BookOpen, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 relative z-10 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-3xl font-serif font-bold text-teal-400 tracking-tight mb-4 inline-block">
              Ankita.
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Research Scholar exploring ancient civilizations, cultural heritage, and the history of music.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors">
                <BookOpen size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:hello@ankitapandit.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-slate-400 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link href="#research" className="text-slate-400 hover:text-teal-400 transition-colors">Research</Link></li>
              <li><Link href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors">Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>India</li>
              <li>hello@ankitapandit.com</li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ankita Pandit. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors flex items-center"
          >
            Back to top
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
        </div>
        
      </div>
    </footer>
  );
}
