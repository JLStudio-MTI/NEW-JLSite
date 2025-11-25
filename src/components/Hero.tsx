import { Button } from "@/components/ui/button";
import { Check, Clock, FileText, Smartphone } from "lucide-react";
import { useTranslation, type Language } from "@/i18n";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  currentLang: string;
}

const Hero = ({ currentLang }: HeroProps) => {
  const t = useTranslation(currentLang as Language).hero;

  const trustIcons = [Clock, FileText, Check, Smartphone];
  const trustTexts = [t.trust.delivery, t.trust.mockup, t.trust.hosting, t.trust.responsive];

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* CHANGE: Radial gradient wash behind hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent/10 via-cyan/5 to-transparent blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* CHANGE: Accent badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent border-accent/20">
                ⚡ {currentLang === "en" ? "48-Hour Delivery" : "Entrega en 48 horas"}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium bg-cyan/10 text-cyan border-cyan/20">
                🎁 {currentLang === "en" ? "Free Mockup" : "Mockup Gratis"}
              </Badge>
            </div>

            {/* CHANGE: Using Poppins for headline (will be added to index.css) */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-xl mx-auto">
              {currentLang === "en" ? "No confusing tech, no waiting weeks — just a clean, working site ready to share." : "Sin tecnología confusa, sin esperas largas — solo un sitio limpio y funcional listo para compartir."}
            </p>
            
            {/* CHANGE: Micro-motion CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <Button size="lg" className="cta-hover text-base px-8 shadow-medium hover:shadow-large" asChild>
                <a href="#contact">{t.cta.primary}</a>
              </Button>
              <Button size="lg" variant="outline" className="cta-hover text-base px-8 border-2" asChild>
                <a href="https://wa.me/YOUR_NUMBER?text=Hi%20JLStudios%2C%20I'd%20like%20a%20website%20in%2048%20hours" target="_blank" rel="noopener noreferrer">
                  {t.cta.secondary}
                </a>
              </Button>
            </div>

            {/* CHANGE: Better card styling with icon chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {trustTexts.map((text, index) => {
                const Icon = trustIcons[index];
                return (
                  <div key={index} className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-md group">
                    <div className="relative mb-3">
                      <div className="absolute inset-0 bg-accent/10 rounded-lg blur-sm group-hover:bg-accent/20 transition-colors"></div>
                      <Icon className="relative w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-foreground/90">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
