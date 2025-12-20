import { Palette, FileText, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesProps {
  currentLang: string;
}

const Services = ({ currentLang }: ServicesProps) => {
  const content = {
    en: {
      title: "Our Services",
      subtitle: "Everything you need to launch your business online",
      services: [
        {
          icon: Palette,
          title: "Web Design",
          description: "Custom, conversion-focused websites",
          bullets: [
            "Custom design matched to your brand",
            "Mobile-first responsive layouts",
            "Clear calls-to-action throughout",
            "Fast load times for better SEO",
          ],
        },
        {
          icon: FileText,
          title: "Free Mockups",
          description: "See your homepage before you commit",
          bullets: [
            "No payment required upfront",
            "Review your homepage design first",
            "Feedback-driven iteration",
            "Decide after you see results",
          ],
        },
        {
          icon: Settings,
          title: "Website Setup",
          description: "Complete technical configuration",
          bullets: [
            "Domain & hosting guidance",
            "SSL certificate & security",
            "Business email configuration",
            "Analytics & tracking setup",
          ],
        },
      ],
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Todo lo que necesitas para lanzar tu negocio en línea",
      services: [
        {
          icon: Palette,
          title: "Diseño Web",
          description: "Sitios web personalizados enfocados en conversión",
          bullets: [
            "Diseño personalizado para tu marca",
            "Diseños responsive mobile-first",
            "Llamadas a la acción claras",
            "Tiempos de carga rápidos para SEO",
          ],
        },
        {
          icon: FileText,
          title: "Mockups Gratis",
          description: "Ve tu página antes de comprometerte",
          bullets: [
            "Sin pago inicial requerido",
            "Revisa el diseño primero",
            "Iteración basada en feedback",
            "Decide después de ver resultados",
          ],
        },
        {
          icon: Settings,
          title: "Configuración Web",
          description: "Configuración técnica completa",
          bullets: [
            "Guía de dominio y hosting",
            "Certificado SSL y seguridad",
            "Email empresarial configurado",
            "Analytics y seguimiento",
          ],
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="services" className="py-20 px-4 bg-background section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.services.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <Card
                key={index}
                className={[
                  "relative overflow-hidden",
                  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
                  "shadow-2xl shadow-black/30",
                  "transition-all",
                  "hover:border-white/20 hover:bg-white/[0.07]",
                  "animate-scale-in",
                  "before:absolute before:inset-x-0 before:top-0 before:h-px",
                  "before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
                  isFeatured
                    ? "ring-1 ring-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] -translate-y-0.5"
                    : "",
                ].join(" ")}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#5661FF]/15 to-[#A78BFA]/10 blur-md" />
                      <div className="relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <service.icon className={["w-6 h-6", isFeatured ? "text-primary" : "text-accent"].join(" ")} />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2.5">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/80" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
