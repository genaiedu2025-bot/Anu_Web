"use client";

import { motion } from "framer-motion";
import { Book, Music, PenTool, Search, Languages, Landmark } from "lucide-react";

const skills = [
  { name: "Historical Research", progress: 95 },
  { name: "Academic Writing", progress: 90 },
  { name: "Ancient Indian History", progress: 92 },
  { name: "Music History", progress: 85 },
  { name: "Archival Analysis", progress: 88 },
  { name: "Research Methodology", progress: 85 },
  { name: "Cultural Studies", progress: 80 },
  { name: "Critical Analysis", progress: 90 },
];

const hobbies = [
  { name: "Reading Books", icon: <Book className="w-6 h-6" /> },
  { name: "Learning Languages", icon: <Languages className="w-6 h-6" /> },
  { name: "Historical Literature", icon: <PenTool className="w-6 h-6" /> },
  { name: "Cultural Exploration", icon: <Landmark className="w-6 h-6" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 relative z-10 flex flex-col justify-center min-h-screen">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-800 mb-4"
          >
            Skills & Interests
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-teal-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Skills Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
              <Search className="w-5 h-5 text-teal-600 mr-3" />
              Professional Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-700">{skill.name}</span>
                    <span className="text-sm font-bold text-teal-600">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-teal-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
              <Music className="w-5 h-5 text-teal-600 mr-3" />
              Interests & Hobbies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-5 flex flex-col items-center justify-center text-center space-y-3 hover:border-teal-300 transition-colors cursor-default"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
                    {hobby.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">{hobby.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
