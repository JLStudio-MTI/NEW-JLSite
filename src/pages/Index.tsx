import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";


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
import { TrustBar } from "@/components/TrustBar";


const Index = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "es">("en");


  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "es" : "en"));
  };

    return (
    <div className="min-h-screen relative overflow-x-hidden">

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
            bg-gradient-to-br from-[#5661FF]/70 to-[#A78BFA]/70
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
            bg-gradient-to-br from-[#5661FF]/40 to-[#A78BFA]/60
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
            bg-gradient-to-br from-[#A78BFA]/40 to-[#5661FF]/60
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

          <TrustBar currentLang={currentLang} />

          <ScrollReveal from="scale">
            <Pricing currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <Showcase currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <Process currentLang={currentLang} />
          </ScrollReveal>




          <ScrollReveal from="bottom">
            <Services currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <Testimonials currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <FAQ currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <About currentLang={currentLang} />
          </ScrollReveal>

          <ScrollReveal from="bottom">
            <Contact currentLang={currentLang} />
          </ScrollReveal>
        </main>


        <Footer currentLang={currentLang} />
      </div>
    </div>
  );

};

export default Index;
