import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  PhoneCall,
  Timer,
  Search,
  MapPin,
  Wand2,
  Paintbrush,
  Droplets,
  Hammer,
  Car,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

type Lang = "en" | "es";

interface ShowcaseProps {
  currentLang: Lang;
}

/**
 * Showcase replaces "ProblemSolution" + summarizes "Industries" in one premium, interactive section.
 * - industry pills switch the story
 * - before/after cards update + animate
 * - clean data-driven structure for easy edits
 */

type IndustryKey =
  | "landscaping"
  | "cleaning"
  | "painters"
  | "handymen"
  | "detailing"
  | "trainers";

type Industry = {
  key: IndustryKey;
  icon: React.ComponentType<{ className?: string }>;
  label: { en: string; es: string };
  oneLiner: { en: string; es: string };

  before: {
    title: { en: string; es: string };
    bullets: { en: string[]; es: string[] };
  };

  after: {
    title: { en: string; es: string };
    bullets: { en: string[]; es: string[] };
  };

  signals: {
    // small “outcomes” chips
    en: { label: string; icon: React.ComponentType<{ className?: string }> }[];
    es: { label: string; icon: React.ComponentType<{ className?: string }> }[];
  };
};

function useCopy(lang: Lang) {
  return useMemo(() => {
    const industries: Industry[] = [
      {
        key: "landscaping",
        icon: Paintbrush,
        label: { en: "Landscaping", es: "Jardinería" },
        oneLiner: {
          en: "Make your service look premium and trustworthy — not like a Facebook post.",
          es: "Haz que tu servicio se vea premium y confiable — no como un post de Facebook.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "Photos look random and low quality",
              "No clear “Get a quote” action",
              "Hard to find services and area",
            ],
            es: [
              "Fotos se ven random y de baja calidad",
              "No hay un “Cotiza” claro",
              "Cuesta encontrar servicios y zona",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Clean hero + strong quote button",
              "Services packaged (mowing, cleanup, irrigation)",
              "Local trust + reviews layout",
            ],
            es: [
              "Hero limpio + botón fuerte de cotización",
              "Servicios claros (corte, limpieza, riego)",
              "Confianza local + reseñas",
            ],
          },
        },
        signals: {
          en: [
            { label: "More quote requests", icon: TrendingUp },
            { label: "Local trust", icon: ShieldCheck },
            { label: "Fast delivery", icon: Timer },
          ],
          es: [
            { label: "Más cotizaciones", icon: TrendingUp },
            { label: "Confianza local", icon: ShieldCheck },
            { label: "Entrega rápida", icon: Timer },
          ],
        },
      },
      {
        key: "cleaning",
        icon: Droplets,
        label: { en: "Cleaning", es: "Limpieza" },
        oneLiner: {
          en: "A calm, clean site that makes people feel safe inviting you into their home.",
          es: "Un sitio limpio que hace que la gente se sienta segura al invitarte a su casa.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "Looks generic and low-trust",
              "No clear pricing/bundles",
              "No fast contact option",
            ],
            es: [
              "Se ve genérico y poco confiable",
              "Sin paquetes claros",
              "Sin contacto rápido",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Packages (standard, deep clean, move-out)",
              "Trust: checklist + testimonials layout",
              "WhatsApp + form in one tap",
            ],
            es: [
              "Paquetes (estándar, profunda, mudanza)",
              "Confianza: checklist + testimonios",
              "WhatsApp + formulario con un toque",
            ],
          },
        },
        signals: {
          en: [
            { label: "Higher trust", icon: ShieldCheck },
            { label: "Faster booking", icon: PhoneCall },
            { label: "Clear packages", icon: Sparkles },
          ],
          es: [
            { label: "Más confianza", icon: ShieldCheck },
            { label: "Reserva rápida", icon: PhoneCall },
            { label: "Paquetes claros", icon: Sparkles },
          ],
        },
      },
      {
        key: "painters",
        icon: Wand2,
        label: { en: "Painters", es: "Pintores" },
        oneLiner: {
          en: "Show crisp before/after work and make booking feel easy.",
          es: "Muestra antes/después y haz que cotizar sea facilísimo.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "No proof or project structure",
              "Hard to understand service options",
              "Contact buried at the bottom",
            ],
            es: [
              "Sin prueba o estructura de proyectos",
              "No se entienden opciones",
              "Contacto escondido al final",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Before/after gallery blocks",
              "Interior vs exterior packages",
              "Sticky CTA: quote in 1 minute",
            ],
            es: [
              "Bloques de antes/después",
              "Paquetes interior vs exterior",
              "CTA fijo: cotiza en 1 minuto",
            ],
          },
        },
        signals: {
          en: [
            { label: "More leads", icon: TrendingUp },
            { label: "Clear offers", icon: Sparkles },
            { label: "Fast contact", icon: PhoneCall },
          ],
          es: [
            { label: "Más leads", icon: TrendingUp },
            { label: "Oferta clara", icon: Sparkles },
            { label: "Contacto rápido", icon: PhoneCall },
          ],
        },
      },
      {
        key: "handymen",
        icon: Hammer,
        label: { en: "Handymen", es: "Manitas" },
        oneLiner: {
          en: "Make your services feel organized, legit, and worth paying for.",
          es: "Haz que tus servicios se vean organizados y valiosos.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "Services listed like a long text message",
              "No service area clarity",
              "No instant quote flow",
            ],
            es: [
              "Servicios listados como mensaje largo",
              "No queda clara la zona",
              "No hay flujo rápido para cotizar",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Clean grid of common jobs",
              "Service area + map pin highlight",
              "WhatsApp quote prompt built-in",
            ],
            es: [
              "Grid limpio de trabajos comunes",
              "Zona + pin del mapa",
              "Cotización por WhatsApp integrada",
            ],
          },
        },
        signals: {
          en: [
            { label: "Clear service list", icon: Sparkles },
            { label: "Local area", icon: MapPin },
            { label: "Quick booking", icon: PhoneCall },
          ],
          es: [
            { label: "Lista clara", icon: Sparkles },
            { label: "Zona local", icon: MapPin },
            { label: "Reserva rápida", icon: PhoneCall },
          ],
        },
      },
      {
        key: "detailing",
        icon: Car,
        label: { en: "Car detailing", es: "Detailing" },
        oneLiner: {
          en: "Premium visuals and clear packages make people choose you fast.",
          es: "Visual premium + paquetes claros hacen que te elijan rápido.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "Prices unclear, packages confusing",
              "No proof of results",
              "Looks like everyone else",
            ],
            es: [
              "Precios poco claros, paquetes confusos",
              "Sin pruebas del resultado",
              "Se ve igual que todos",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Package cards (basic, premium, ceramic)",
              "Before/after focus with shine vibe",
              "Booking CTA always visible",
            ],
            es: [
              "Tarjetas de paquetes (básico, premium, cerámico)",
              "Antes/después con vibe de brillo",
              "CTA de reserva siempre visible",
            ],
          },
        },
        signals: {
          en: [
            { label: "Premium feel", icon: Sparkles },
            { label: "More bookings", icon: PhoneCall },
            { label: "Clear offers", icon: ShieldCheck },
          ],
          es: [
            { label: "Se ve premium", icon: Sparkles },
            { label: "Más reservas", icon: PhoneCall },
            { label: "Ofertas claras", icon: ShieldCheck },
          ],
        },
      },
      {
        key: "trainers",
        icon: Dumbbell,
        label: { en: "Trainers", es: "Entrenadores" },
        oneLiner: {
          en: "Make your offer clear and turn “maybe” into booked sessions.",
          es: "Aclara tu oferta y convierte “tal vez” en sesiones agendadas.",
        },
        before: {
          title: { en: "Before", es: "Antes" },
          bullets: {
            en: [
              "No clear transformation story",
              "Offer details scattered",
              "No easy contact path",
            ],
            es: [
              "Sin historia clara de transformación",
              "Oferta regada por todos lados",
              "Sin contacto fácil",
            ],
          },
        },
        after: {
          title: { en: "After", es: "Después" },
          bullets: {
            en: [
              "Offer clarity (1:1, online, plan)",
              "Proof + testimonials structure",
              "Simple CTA: start today",
            ],
            es: [
              "Oferta clara (1:1, online, plan)",
              "Pruebas + testimonios",
              "CTA simple: empieza hoy",
            ],
          },
        },
        signals: {
          en: [
            { label: "Clear offer", icon: Sparkles },
            { label: "More leads", icon: TrendingUp },
            { label: "Easy booking", icon: PhoneCall },
          ],
          es: [
            { label: "Oferta clara", icon: Sparkles },
            { label: "Más leads", icon: TrendingUp },
            { label: "Reserva fácil", icon: PhoneCall },
          ],
        },
      },
    ];

    const copy = {
      en: {
        id: "showcase",
        eyebrow: "Built for service businesses",
        title: "From “just a page” to a site that gets you booked.",
        subtitle:
          "Pick your industry. Watch the story change: what looks untrustworthy… and what looks premium.",
        note:
          "This is the vibe: clear offers, strong trust signals, and a one-tap path to contact.",
        beforeLabel: "Before",
        afterLabel: "After",
        micro: "Switch industry",
      },
      es: {
        id: "showcase",
        eyebrow: "Hecho para negocios de servicios",
        title: "De “solo una página” a un sitio que te genera clientes.",
        subtitle:
          "Elige tu industria. Cambia la historia: lo que se ve poco confiable… y lo que se ve premium.",
        note:
          "Esta es la idea: ofertas claras, confianza y un camino directo para contactarte.",
        beforeLabel: "Antes",
        afterLabel: "Después",
        micro: "Cambiar industria",
      },
    } as const;

    return { industries, copy };
  }, []);
}

export default function Showcase({ currentLang }: ShowcaseProps) {
  const lang: Lang = currentLang;
  const { industries, copy } = useCopy(lang);
  const t = lang === "en" ? copy.en : copy.es;

  const [active, setActive] = useState<IndustryKey>("landscaping");
  const activeIndustry = industries.find((i) => i.key === active) ?? industries[0];

  const chips = lang === "en" ? activeIndustry.signals.en : activeIndustry.signals.es;

  return (
    <section
      id={t.id}
      className={cn(
        "relative overflow-hidden py-20 sm:py-24",
        "bg-gradient-to-b from-[#0A0A0C] via-[#0B0B10] to-[#111119]"
      )}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#A78BFA]/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
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

        {/* Industry pills */}
        <div className="mt-8">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 backdrop-blur-sm">
              {t.micro}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => {
              const isActive = ind.key === active;
              const Icon = ind.icon;
              return (
                <button
                  key={ind.key}
                  type="button"
                  onClick={() => setActive(ind.key)}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all",
                    "backdrop-blur-sm",
                    isActive
                      ? "border-primary/60 bg-primary/15 text-foreground shadow-lg shadow-primary/20"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:bg-white/7"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full",
                      isActive ? "bg-primary/20" : "bg-white/5 group-hover:bg-white/10"
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5", isActive ? "text-primary" : "text-foreground/70")} />
                  </span>
                  <span>{lang === "en" ? ind.label.en : ind.label.es}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* One-liner + chips */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/90 md:max-w-[60%]">
            {lang === "en" ? activeIndustry.oneLiner.en : activeIndustry.oneLiner.es}
          </p>

          <div className="flex flex-wrap gap-2">
            {chips.map((c) => {
              const Icon = c.icon;
              return (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                  </span>
                  {c.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Main visual: Before/After cards with animated “signal” */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <VisualCard
            title={t.beforeLabel}
            accent="muted"
            bullets={lang === "en" ? activeIndustry.before.bullets.en : activeIndustry.before.bullets.es}
            iconLeft={<Search className="h-4 w-4 text-muted-foreground" />}
            variant="before"
            activeKey={active}
          />

          {/* Connector */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="h-full w-[2px] rounded-full bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
            <div className="absolute">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted-foreground backdrop-blur-sm">
                <Timer className="h-4 w-4 text-primary" />
                48h
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          <VisualCard
            title={t.afterLabel}
            accent="primary"
            bullets={lang === "en" ? activeIndustry.after.bullets.en : activeIndustry.after.bullets.es}
            iconLeft={<Sparkles className="h-4 w-4 text-primary" />}
            variant="after"
            activeKey={active}
          />
        </div>

        <p className="mt-8 text-xs text-muted-foreground">{t.note}</p>
      </div>
    </section>
  );
}

function VisualCard({
  title,
  bullets,
  iconLeft,
  accent,
  variant,
  activeKey,
}: {
  title: string;
  bullets: string[];
  iconLeft: React.ReactNode;
  accent: "primary" | "muted";
  variant: "before" | "after";
  activeKey: string;
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-xl",
        "bg-[#0E0E14]/85",
        accent === "primary" ? "border-primary/40" : "border-white/10",
        "shadow-2xl shadow-black/40"
      )}
    >
      {/* animated scanline / glow on change */}
      <div
        key={activeKey}
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0",
          "animate-[fade-in_0.35s_ease-out_forwards]"
        )}
      >
        <div
          className={cn(
            "absolute -top-24 left-1/2 h-48 w-[140%] -translate-x-1/2 rotate-6 blur-3xl",
            isAfter ? "bg-primary/25" : "bg-white/10"
          )}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-[2px] w-full",
            "bg-gradient-to-r from-transparent via-white/25 to-transparent",
            "animate-[scanline_1.1s_ease-out_1]"
          )}
        />
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-white/5 px-6 py-4">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              isAfter ? "bg-primary/15" : "bg-white/5"
            )}
          >
            {iconLeft}
          </span>
          <div className="text-sm font-semibold text-foreground">{title}</div>
        </div>

        <span
          className={cn(
            "rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide",
            isAfter
              ? "bg-gradient-to-r from-[#5661FF]/20 to-[#A78BFA]/20 text-foreground/90 border border-primary/30"
              : "bg-white/5 text-muted-foreground border border-white/10"
          )}
        >
          {isAfter ? "Premium" : "Basic"}
        </span>
      </div>

      <div className="px-6 py-6">
        <ul className="space-y-3 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span
                className={cn(
                  "mt-1.5 h-2 w-2 rounded-full",
                  isAfter ? "bg-primary" : "bg-white/30"
                )}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
