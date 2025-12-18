import { cn } from "@/lib/utils";
import { Briefcase, PhoneCall, Sparkles } from "lucide-react";

interface TrustBarProps {
  currentLang: "en" | "es";
}

export function TrustBar({ currentLang }: TrustBarProps) {
  const isEN = currentLang === "en";

  const industries = isEN
    ? ["Landscaping", "Cleaning", "Painters", "Handymen", "Car detailers", "Trainers"]
    : ["Jardinería", "Limpieza", "Pintores", "Manitas", "Detailing", "Entrenadores"];

  const label = isEN ? "Perfect for:" : "Perfecto para:";
  const highlights = isEN
    ? [
        { icon: Sparkles, label: "48-hour delivery" },
        { icon: PhoneCall, label: "Handled on WhatsApp" },
        { icon: Briefcase, label: "Built for small service businesses" },
      ]
    : [
        { icon: Sparkles, label: "Entrega en 48 horas" },
        { icon: PhoneCall, label: "Todo por WhatsApp" },
        { icon: Briefcase, label: "Hecho para servicios locales" },
      ];

  return (
    <section
      aria-label={isEN ? "Industries and trust indicators" : "Industrias y confianza"}
      className={cn(
        "border-y border-white/5 bg-gradient-to-r",
        "from-[#0A0A0C] via-[#1E1E26] to-[#0A0A0C]",
        "py-3 md:py-4"
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-xs md:flex-row md:items-center md:justify-between md:text-sm">
        {/* Industries */}
        <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
          <span className="font-medium text-foreground/80">{label}</span>
          <div className="flex flex-wrap gap-1.5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="
                  rounded-full border border-white/10 bg-white/3
                  px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide
                  text-foreground/80 backdrop-blur-sm md:text-[12px]
                "
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
          {highlights.map(({ icon: Icon, label: itemLabel }) => (
            <div
              key={itemLabel}
              className="
                inline-flex items-center gap-1.5 rounded-full
                bg-[#1E1E26]/70 px-2.5 py-1.5 text-[11px]
                text-muted-foreground backdrop-blur-sm md:text-[12px]
              "
            >
              <span
                className="
                  flex h-4 w-4 items-center justify-center
                  rounded-full bg-primary/15
                "
              >
                <Icon className="h-3 w-3 text-primary" />
              </span>
              <span>{itemLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
