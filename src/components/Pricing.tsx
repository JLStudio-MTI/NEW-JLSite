import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingProps {
  currentLang: "en" | "es";
}

const content = {
  en: {
    id: "pricing",
    eyebrow: "Transparent & simple",
    title: "Affordable websites that actually ship in 48 hours.",
    subtitle:
      "Start small, grow when you’re ready. Every package is built for real small businesses, not tech startups.",
    note: "Prices in USD. Need something different? Mention it in the form and we’ll figure it out.",
    tiers: [
      {
        name: "Launch Site",
        price: "$149",
        tagline: "For getting online fast without looking DIY.",
        popular: false,
        highlight: "1-page 48-hour website",
        cta: "Start with Launch",
        features: [
          "Single-page website with clean, modern layout",
          "Built and delivered in 48 hours",
          "You provide basic text & images",
          "Mobile-first design",
          "Contact form or WhatsApp button",
        ],
      },
      {
        name: "Growth Site",
        price: "$249",
        tagline: "Best starting point for most small service businesses.",
        popular: true,
        highlight: "Most popular · 1–3 sections",
        cta: "Book the Growth Site",
        features: [
          "1–3 sections (hero, services, about, contact)",
          "Done-for-you copywriting based on your answers",
          "Optimized for mobile & speed",
          "Basic SEO foundations (titles, meta, structure)",
          "Integrations: contact form + WhatsApp CTA",
          "Up to 2 rounds of edits included",
        ],
      },
      {
        name: "Studio Pro",
        price: "$399",
        tagline: "For businesses that want a stronger brand feel.",
        popular: false,
        highlight: "3–5 sections + extra polish",
        cta: "Go Studio Pro",
        features: [
          "3–5 custom sections tailored to your service",
          "More premium layout & visual storytelling",
          "Deeper copywriting to explain your value",
          "Basic analytics integration (e.g. Google Analytics)",
          "Priority slot in the 48-hour schedule",
          "2 weeks of small post-launch tweaks",
        ],
      },
    ],
  },
  es: {
    id: "pricing",
    eyebrow: "Transparente y sencillo",
    title: "Sitios web accesibles que se entregan en 48 horas.",
    subtitle:
      "Empieza pequeño y escala cuando lo necesites. Cada paquete está pensado para negocios reales, no para startups tech.",
    note: "Precios en USD. ¿Necesitas algo diferente? Cuéntalo en el formulario y lo vemos.",
    tiers: [
      {
        name: "Sitio Launch",
        price: "$149",
        tagline: "Para estar en línea rápido sin que parezca improvisado.",
        popular: false,
        highlight: "Sitio de 1 página en 48 horas",
        cta: "Empezar con Launch",
        features: [
          "Sitio de una sola página con diseño limpio y moderno",
          "Creado y entregado en 48 horas",
          "Tú aportas el texto básico e imágenes",
          "Diseño mobile-first",
          "Formulario de contacto o botón de WhatsApp",
        ],
      },
      {
        name: "Sitio Growth",
        price: "$249",
        tagline: "El mejor punto de partida para la mayoría de negocios.",
        popular: true,
        highlight: "Más elegido · 1–3 secciones",
        cta: "Contratar Sitio Growth",
        features: [
          "1–3 secciones (inicio, servicios, sobre ti, contacto)",
          "Copywriting incluido basado en tus respuestas",
          "Optimizado para móvil y velocidad",
          "SEO básico (títulos, meta, estructura)",
          "Integraciones: formulario + botón de WhatsApp",
          "Incluye hasta 2 rondas de cambios",
        ],
      },
      {
        name: "Studio Pro",
        price: "$399",
        tagline: "Para negocios que quieren una presencia más sólida.",
        popular: false,
        highlight: "3–5 secciones + extra de detalle",
        cta: "Elegir Studio Pro",
        features: [
          "3–5 secciones personalizadas para tu servicio",
          "Diseño más premium y narrativo",
          "Copy más profundo para comunicar tu valor",
          "Integración básica de analytics (p.ej. Google Analytics)",
          "Prioridad en la agenda de 48 horas",
          "2 semanas de pequeños ajustes después del lanzamiento",
        ],
      },
    ],
  },
} as const;


export default function Pricing({ currentLang }: PricingProps) {
  const t = currentLang === "en" ? content.en : content.es;

  return (
    <section
      id={t.id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24",
        "bg-gradient-to-br from-[#0A0A0C] via-[#111119] to-[#1E1E26]"
      )}
    >
      {/* subtle radial glow in the back */}
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-[#A78BFA]/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {t.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E0E14]/90 text-foreground backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50",
                tier.popular &&
                  "relative bg-gradient-to-br from-[#5661FF]/20 via-[#1E1E26] to-[#A78BFA]/15 border-primary/70"
              )}
            >
              {tier.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/40">
                  {tier.highlight}
                </div>
              )}

              {!tier.popular && (
                <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-md">
                  {tier.highlight}
                </div>
              )}

              <CardHeader className="pb-3 pt-5 sm:pt-6">
                <CardTitle className="text-xl sm:text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {tier.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4 pt-0">
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold sm:text-4xl">
                    {tier.price}
                  </span>
                  <span className="text-xs text-muted-foreground sm:text-sm">
                    {currentLang === "en" ? "one-time" : "pago único"}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary/15">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-2 border-t border-white/5 bg-black/20 px-6 py-4">
                <Button
                  asChild
                  className={cn(
                    "w-full rounded-full text-sm font-semibold shadow-lg shadow-primary/30",
                    tier.popular
                      ? "bg-gradient-to-r from-[#5661FF] to-[#A78BFA] text-primary-foreground hover:opacity-95"
                      : "bg-white/10 hover:bg-white/15"
                  )}
                >
                  <a href="#contact">{tier.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="max-w-xl text-xs text-muted-foreground">{t.note}</p>
      </div>
    </section>
  );
}
