"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

const ExperienceBadge = ({ className = "" }) => (
  <div className={`flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl border border-teal-100 shadow-sm ${className}`}>
    <div className="text-teal-600 font-bold text-3xl">01</div>
    <div className="text-xs font-medium text-slate-600 uppercase tracking-wider leading-tight">
      Years<br/>Research<br/>Experience
    </div>
  </div>
);

const SocialIcons = ({ className = "" }) => (
  <div className={`flex items-center space-x-5 ${className}`}>
    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-golden hover:text-teal-600 hover:-translate-y-1 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
    </a>
    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-golden hover:text-teal-600 hover:-translate-y-1 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
    </a>
    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-golden hover:text-teal-600 hover:-translate-y-1 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    </a>
    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-golden hover:text-teal-600 hover:-translate-y-1 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
  </div>
);

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-4 md:pt-20 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-4 md:gap-8 lg:gap-4">
        
        {/* Left Side: Name and Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/5 lg:w-5/12 flex flex-col items-center md:items-start space-y-2 md:space-y-4"
        >
          <div className="w-full relative z-20 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-serif text-slate-700">Hi! I Am</h2>
            <div className="relative inline-block text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-serif text-golden mt-1 mb-1 md:mb-4 leading-tight pr-4 whitespace-nowrap">
                Ankita Pandit.
              </h1>
              {/* Desktop Decorative arrow spanning from Name to Image */}
              <div className="absolute left-[50%] lg:left-[55%] top-[70%] hidden lg:block opacity-60 z-0 pointer-events-none">
                <svg viewBox="0 0 400 100" fill="none" stroke="currentColor" className="text-teal-600 w-[280px] lg:w-[350px] xl:w-[420px] h-auto" strokeLinecap="round" strokeLinejoin="round">
                  {/* Long dashed S-curve pointing UP at the name */}
                  <path d="M 20,5 C 25,95 150,100 220,60 C 290,20 360,20 390,50" strokeWidth="2.5" strokeDasharray="6 6" fill="none" />
                  {/* Small arrowhead at the left end pointing up */}
                  <path d="M 12,15 L 20,5 L 28,15" strokeWidth="2.5" fill="none" />
                </svg>
              </div>

              {/* Mobile Decorative arrow spanning down to Image */}
              <div className="absolute left-[60%] top-[90%] block lg:hidden opacity-60 z-0 pointer-events-none">
                <svg viewBox="0 0 60 80" fill="none" stroke="currentColor" className="text-teal-600 w-[35px] h-auto" strokeLinecap="round" strokeLinejoin="round">
                  {/* Vertical dashed curve */}
                  <path d="M 30,5 C 50,30 50,50 30,75" strokeWidth="4" strokeDasharray="5 5" fill="none" />
                  {/* Arrowhead pointing up at the name */}
                  <path d="M 20,15 L 30,5 L 40,15" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Desktop Only: Experience and Socials */}
          <ExperienceBadge className="hidden md:flex mt-8" />
          <SocialIcons className="hidden md:flex mt-12 pt-4" />
        </motion.div>

        {/* Center: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/3 flex flex-col items-center justify-center relative z-20"
        >
          {/* Background decorative circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-teal-200/50 absolute"
            />
          </div>
          
          <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-golden via-teal-500 to-teal-300 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cream bg-white relative">
              <Image 
                src="/professional_ankita.png"
                alt="Ankita Pandit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Intro & Review */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/4 lg:w-3/12 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 mt-2 md:mt-0"
        >
          <p className="hidden md:block text-slate-600 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
History scholar specializing in Indian History and Culture with strong interests in historical research, cultural studies, and ancient heritage.
          </p>
          
          {/* Floating Badge */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-4 flex items-center space-x-4 mx-auto md:mx-0"
          >
            <div>
              <div className="text-sm font-bold text-slate-800 flex items-center justify-between">
                <span>NET & JRF</span>
                <span className="flex text-golden ml-3">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">Qualified Researcher</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
              <ArrowUpRight size={20} />
            </div>
          </motion.div>
          
          <div className="pt-2 md:pt-4 mt-auto w-full flex justify-center md:justify-start">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl md:text-2xl text-teal-800 font-bold italic">
                Research Scholar.
              </h3>
              <div className="mt-1 md:mt-3">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Indian History & Culture
                </h4>
                <p className="text-sm text-teal-700 font-medium italic leading-relaxed max-w-xs border-l-2 border-golden pl-3 text-left mx-auto md:mx-0">
                  PhD Topic: “Musical Instruments of Odisha from the 3rd Century CE to the 12th Century CE.”
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Only: Experience and Socials (Moved to bottom) */}
          <ExperienceBadge className="md:hidden flex mt-8 w-fit mx-auto" />
          <SocialIcons className="md:hidden flex mt-6 mx-auto pb-4" />
        </motion.div>
        
      </div>
    </section>
  );
}
