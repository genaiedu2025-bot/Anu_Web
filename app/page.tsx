import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchWork from "@/components/ResearchWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream selection:bg-teal-500/30">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-100/50 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-golden/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-teal-50/50 blur-[100px]" />
      </div>

      <Navbar />
      
      {/* Container simulating a wrapped application look (optional but adds premium feel) */}
      <div className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <ResearchWork />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
