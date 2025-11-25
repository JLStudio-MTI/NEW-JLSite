import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingProps {
  currentLang: string;
}

const Pricing = ({ currentLang }: PricingProps) => {
  const content = {
    en: {
      title: "Simple, Transparent Pricing",
      subtitle: "No hidden fees. Pay 50% to start, 50% on delivery.",
      note: "Custom pricing available for complex sites · MXN prices on request",
      tiers: [
        {
          name: "Starter",
          price: "$150",
          description: "Perfect for getting online fast",
          features: [
            "1-page responsive website",
            "Mobile-first design",
            "WhatsApp button integration",
            "Contact form",
            "48-hour delivery",
          ],
          cta: "Get Started",
          popular: false,
        },
        {
          name: "Business",
          price: "$300",
          description: "Most popular for small businesses",
          features: [
            "Up to 3 pages",
            "All Starter features",
            "SEO optimization",
            "Domain & hosting help",
            "Google Analytics setup",
          ],
          cta: "Choose Business",
          popular: true,
        },
        {
          name: "Pro",
          price: "$500",
          description: "Full-featured for growth",
          features: [
            "Up to 5 pages",
            "All Business features",
            "Analytics & tracking",
            "Content assistance",
            "Priority support",
          ],
          cta: "Go Pro",
          popular: false,
        },
      ],
    },
    es: {
      title: "Precios Simples y Transparentes",
      subtitle: "Sin tarifas ocultas. Paga 50% al inicio, 50% al entregar.",
      note: "Precios personalizados disponibles para sitios complejos · Precios en MXN a solicitud",
      tiers: [
        {
          name: "Starter",
          price: "$150",
          description: "Perfecto para estar en línea rápido",
          features: [
            "Sitio de 1 página responsive",
            "Diseño mobile-first",
            "Botón WhatsApp integrado",
            "Formulario de contacto",
            "Entrega en 48 horas",
          ],
          cta: "Empezar",
          popular: false,
        },
        {
          name: "Business",
          price: "$300",
          description: "Más popular para pequeños negocios",
          features: [
            "Hasta 3 páginas",
            "Todas las funciones Starter",
            "Optimización SEO",
            "Ayuda dominio y hosting",
            "Configuración Google Analytics",
          ],
          cta: "Elegir Business",
          popular: true,
        },
        {
          name: "Pro",
          price: "$500",
          description: "Completo para crecer",
          features: [
            "Hasta 5 páginas",
            "Todas las funciones Business",
            "Analytics y seguimiento",
            "Asistencia con contenido",
            "Soporte prioritario",
          ],
          cta: "Ir Pro",
          popular: false,
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="pricing" className="py-20 px-4 bg-background section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground mb-2">{t.subtitle}</p>
          <p className="text-sm text-muted-foreground italic">{t.note}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative border transition-all hover:shadow-lg animate-scale-in ${
                tier.popular
                  ? "border-accent/50 shadow-lg scale-105 bg-accent/5"
                  : "border-border/50 hover:border-accent/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-accent to-cyan text-white text-xs font-bold rounded-full shadow-medium">
                  {currentLang === "en" ? "POPULAR" : "POPULAR"}
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-display text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground mb-1">{currentLang === "en" ? "Starting at" : "Desde"}</p>
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">USD</span>
                </div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full cta-hover ${tier.popular ? "" : "variant-outline"}`}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="#contact">{tier.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
