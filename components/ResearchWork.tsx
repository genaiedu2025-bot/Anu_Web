"use client";

import { motion } from "framer-motion";

const researchData = [
  {
    title: "From Chant to Orchestra: Epigraphic Evidence of Music and Musical Instruments in Odisha (300 - 1190 A.D)",
    abstract: "A historical exploration of musical traditions and instruments in ancient Odisha through epigraphic sources, highlighting the cultural evolution of music between the 3rd and 12th century A.D.",
    category: "Master's Dissertation",
    tags: ["Epigraphy", "Musicology"],
  },
  {
    title: "Medical Climatology in Ancient India: “An Ayurvedic Perspective on Climate, Health and Disease Patterns”",
    abstract: "An interdisciplinary study examining the relationship between climate, health, and disease in ancient India through Ayurvedic literature and traditional medical practices.",
    category: "Master's Dissertation",
    tags: ["Medical History", "Ayurveda"],
  },
  {
    title: "The Economic Role of Indian Women in Colonial Markets: A Case Study of Local Bazaars (1850 - 1947)",
    abstract: "A socio-economic study analyzing the contribution and participation of Indian women in local market systems during the colonial period.",
    category: "Bachelor's Research",
    tags: ["Socio-Economics", "Colonial History"],
  },
  {
    title: "A Complete Study of Women in Buddhism Between Western and Eastern India During Early Medieval Period",
    abstract: "A comparative historical study focusing on the role, status, and representation of women in Buddhist traditions across different regions of India during the early medieval era.",
    category: "Bachelor's Research",
    tags: ["Buddhism", "Women's Studies"],
  },
];



export default function ResearchWork() {
  return (
    <section id="research" className="py-12 md:py-16 relative z-10 bg-white/30 flex flex-col justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-800 mb-4"
          >
            Research Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-teal-500 mx-auto rounded-full"
          />
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {researchData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 lg:p-6 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <span className={`inline-block px-2 py-1 text-[10px] uppercase tracking-wide font-bold rounded-md ${work.category.includes('Master') ? 'bg-teal-100 text-teal-800' : 'bg-golden/20 text-golden-800'}`}>
                    {work.category}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-teal-800 transition-colors leading-snug">
                  {work.title}
                </h3>
                
                <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">
                  {work.abstract}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                  
                  <button className="ml-auto text-xs font-bold text-teal-600 flex items-center group-hover:translate-x-1 transition-transform">
                    View <span className="ml-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
