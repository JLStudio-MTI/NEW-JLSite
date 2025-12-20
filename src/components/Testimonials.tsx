import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  currentLang: string;
}

const Testimonials = ({ currentLang }: TestimonialsProps) => {
  const content = {
    en: {
      title: "What Our Clients Say",
      testimonials: [
        {
          quote: "Got my business online in two days — super easy! JLStudios handled everything and my site looks amazing.",
          author: "Maria L.",
          role: "Cleaning Service Owner",
        },
        {
          quote: "JLStudios handled everything for me. Professional work, fast turnaround, and they explained everything clearly.",
          author: "Carlos M.",
          role: "Landscaping Business",
        },
        {
          quote: "Fast and friendly. My site looks professional and I'm already getting more calls. Highly recommend!",
          author: "Ana G.",
          role: "Fitness Trainer",
        },
      ],
    },
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      testimonials: [
        {
          quote: "Puse mi negocio en línea en dos días — ¡súper fácil! JLStudios manejó todo y mi sitio se ve increíble.",
          author: "Maria L.",
          role: "Dueña Servicio Limpieza",
        },
        {
          quote: "JLStudios manejó todo por mí. Trabajo profesional, entrega rápida y explicaron todo claramente.",
          author: "Carlos M.",
          role: "Negocio Jardinería",
        },
        {
          quote: "Rápido y amigable. Mi sitio se ve profesional y ya estoy recibiendo más llamadas. ¡Muy recomendado!",
          author: "Ana G.",
          role: "Entrenadora Fitness",
        },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  const getInitials = (name: string) => {
    const parts = name.replace(/\./g, "").trim().split(" ");
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (first + last).toUpperCase();
    };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => {
            const initials = getInitials(testimonial.author);

            return (
              <Card
                key={index}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30 hover:border-white/20 hover:bg-white/[0.07] transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute right-6 top-6 text-white/5 text-6xl leading-none select-none">
                  “
                </div>

                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center">
                        {initials}
                      </div>
                      <div className="leading-tight">
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent/80 text-accent/80" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
