import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
  <div className="min-h-screen relative overflow-hidden">
    {/* Dynamic gradient blobs in the background */}
  <div className="pointer-events-none absolute inset-0 z-0">
  {/* Center main hero glow */}
  <div
    className="
      absolute
      top-12
      left-1/2 -translate-x-1/2
      h-[34rem] w-[34rem]
      rounded-full
      bg-gradient-to-br from-[#3bd6f1]/70 to-[#1d4ed8]/70
      blur-[150px]
      opacity-90
      blob-animate
    "
  />

  {/* Left glow */}
  <div
    className="
      absolute
      top-36
      left-[10%]
      h-[26rem] w-[26rem]
      rounded-full
      bg-gradient-to-br from-[#4f46e5]/60 to-[#7c3aed]/60
      blur-[150px]
      opacity-80
      blob-animate
    "
  />

  {/* Right glow */}
  <div
    className="
      absolute
      top-52
      right-[10%]
      h-[26rem] w-[26rem]
      rounded-full
      bg-gradient-to-br from-[#1e40af]/65 to-[#5b21b6]/65
      blur-[140px]
      opacity-85
      blob-animate
    "
  />
</div>


    {/* Content sits above blobs */}
    <div className="relative z-10">
      <Header currentLang={currentLang} onLanguageToggle={toggleLanguage} />

      <main className="mt-0">
        <Hero currentLang={currentLang} />

        <ScrollReveal>
          <ProblemSolution currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Services currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Process currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <About currentLang={currentLang} />
        </ScrollReveal>

        <ScrollReveal>
          <Contact currentLang={currentLang} />
        </ScrollReveal>
      </main>


      <Footer currentLang={currentLang} />
    </div>
  </div>
);

};

export default Index;
