import { MapPin } from "lucide-react";

interface AboutProps {
  currentLang: string;
}

const About = ({ currentLang }: AboutProps) => {
  const content = {
    en: {
      title: "About JLStudios",
      paragraphs: [
        "JLStudios helps small businesses look professional online with fast, done-for-you websites built in just 48 hours. Based in Mexico, serving clients remotely worldwide.",
        "We specialize in speed, simplicity, and results. No confusing tech talk, no long waits, no stressful revisions. Just clean, professional websites that help you get customers.",
      ],
      location: "Serving San Miguel de Allende, MX & remote clients worldwide",
    },
    es: {
      title: "Sobre JLStudios",
      paragraphs: [
        "JLStudios ayuda a pequeños negocios a verse profesionales online con sitios web rápidos, hechos para ti, construidos en solo 48 horas. Basados en México, sirviendo clientes remotamente en todo el mundo.",
        "Nos especializamos en velocidad, simplicidad y resultados. Sin lenguaje técnico confuso, sin largas esperas, sin revisiones estresantes. Solo sitios limpios y profesionales que te ayudan a conseguir clientes.",
      ],
      location: "Sirviendo San Miguel de Allende, MX y clientes remotos en todo el mundo",
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="about" className="py-20 px-4 bg-background section-divider">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{t.title}</h2>

          <div className="space-y-6 text-lg text-muted-foreground mb-8">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/10 to-cyan/10 text-accent rounded-full border border-accent/20">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{t.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
