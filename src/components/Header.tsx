import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contactLinks";

interface HeaderProps {
  currentLang: string;
  onLanguageToggle: () => void;
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const Header = ({ currentLang, onLanguageToggle }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > 12);

      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || y;
      const scrollHeight = doc.scrollHeight || 1;
      const clientHeight = doc.clientHeight || 1;
      const maxScroll = Math.max(1, scrollHeight - clientHeight);
      const p = clamp(scrollTop / maxScroll, 0, 1);
      setScrollProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const navLinks = useMemo(
    () => [
      { href: "#home", labelEN: "Home", labelES: "Inicio" },
      { href: "#services", labelEN: "Services", labelES: "Servicios" },
      // NOTE: your Index currently does NOT render Portfolio; leaving it intact for now per your request.
      { href: "#portfolio", labelEN: "Portfolio", labelES: "Portafolio" },
      { href: "#pricing", labelEN: "Pricing", labelES: "Precios" },
      { href: "#faqs", labelEN: "FAQs", labelES: "Preguntas" },
      { href: "#about", labelEN: "About", labelES: "Nosotros" },
      { href: "#contact", labelEN: "Contact", labelES: "Contacto" },
    ],
    []
  );

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        "backdrop-blur-xl",
        "relative",
        // Always present subtle structure so it reads as a pinned layer
        "bg-black/20 border-b border-white/5",
        // Premium micro-shadow to separate from hero without looking heavy
        "shadow-[0_1px_0_0_rgba(255,255,255,0.05)]",
        // Thin gradient underline (always, but subtle)
        "after:absolute after:inset-x-0 after:-bottom-px after:h-px",
        "after:bg-gradient-to-r after:from-transparent after:via-[#5661FF]/35 after:to-transparent",
        // On scroll: slightly stronger glass + clearer border
        isScrolled ? "bg-black/45 border-white/10" : "",
      ].join(" ")}

    >
      {/* Scroll progress (integrated + minimal) */}
      <div className="absolute left-0 right-0 bottom-0 h-px">
        <div
          className="h-px bg-gradient-to-r from-[#5661FF] via-[#A78BFA] to-[#5661FF] opacity-70"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav className={["container mx-auto px-4", isScrolled ? "py-2.5" : "py-3.5"].join(" ")}>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="text-xl sm:text-2xl font-bold tracking-tight text-primary"
          >
            JLStudios
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={[
                  "relative text-sm font-medium",
                  "text-foreground/80 hover:text-foreground transition-colors",
                  "after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-px",
                  "after:bg-gradient-to-r after:from-transparent after:via-white/35 after:to-transparent",
                  "after:opacity-0 hover:after:opacity-100 after:transition-opacity",
                ].join(" ")}
              >
                {currentLang === "en" ? link.labelEN : link.labelES}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onLanguageToggle}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              {currentLang === "en" ? "ES" : "EN"}
            </button>

            <Button variant="outline" size="sm" asChild className="bg-white/5 border-white/10 hover:bg-white/10">
              <a href={getWhatsAppLink(currentLang)} target="_blank" rel="noopener noreferrer">
                {currentLang === "en" ? "WhatsApp Us" : "Escríbenos"}
              </a>
            </Button>

            <Button size="sm" asChild>
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                {currentLang === "en" ? "Get a Free Mockup" : "Mockup Gratis"}
              </a>
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
            >
              {currentLang === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/90 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 animate-fade-in">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-foreground/85 hover:text-foreground transition-colors py-3 border-b border-white/10 last:border-b-0"
                  >
                    {currentLang === "en" ? link.labelEN : link.labelES}
                  </a>
                ))}

                <div className="flex flex-col gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full bg-white/5 border-white/10 hover:bg-white/10"
                  >
                    <a href={getWhatsAppLink(currentLang)} target="_blank" rel="noopener noreferrer">
                      {currentLang === "en" ? "WhatsApp Us" : "Escríbenos"}
                    </a>
                  </Button>
                  <Button size="sm" asChild className="w-full">
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                      {currentLang === "en" ? "Get a Free Mockup" : "Mockup Gratis"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
