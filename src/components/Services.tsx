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
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="border border-border/50 hover:border-accent/40 transition-all hover:shadow-lg animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="relative w-12 h-12 mb-4">
                  <div className="absolute inset-0 bg-accent/10 rounded-xl blur-sm group-hover:bg-accent/20 transition-colors"></div>
                  <div className="relative w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
