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

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent/50 transition-all hover:shadow-medium animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
