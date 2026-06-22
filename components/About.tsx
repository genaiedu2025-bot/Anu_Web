"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    title: "PhD in Ancient History",
    institution: "Calcutta University (Ongoing)",
    grade: "Research Scholar",
    desc: "Research Topic: 'Music History in Ancient Civilizations'",
    icon: <BookOpen className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Master's in History",
    institution: "Medinipur College, Autonomous",
    grade: "7.90 CGPA",
    desc: "Specialized in cultural evolution and ancient societies.",
    icon: <GraduationCap className="text-teal-600 w-6 h-6" />,
  },
  {
    title: "Bachelor's in History",
    institution: "Medinipur College, Autonomous",
    grade: "8.86 CGPA",
    desc: "Foundation in historical analysis and archival research.",
    icon: <GraduationCap className="text-teal-600 w-6 h-6" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-800 mb-4"
          >
            Academic Journey
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-teal-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 border-t-4 border-t-teal-500 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-cream border-2 border-teal-100 rounded-full flex items-center justify-center shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-teal-700 font-medium text-sm mb-3">{item.institution}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-800 text-xs font-bold rounded-md w-fit">
                {item.grade}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Qualifications Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <div className="glass-card p-4 md:p-6 flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center text-golden shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">UGC NET Qualified</h4>
              <p className="text-xs text-slate-500">National Eligibility Test</p>
            </div>
          </div>
          
          <div className="glass-card p-4 md:p-6 flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-golden/20 flex items-center justify-center text-golden shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">JRF Qualified</h4>
              <p className="text-xs text-slate-500">Junior Research Fellowship</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
