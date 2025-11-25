import { Briefcase, Home, Palette, Dumbbell, Wrench, Coffee, Heart, ShoppingBag } from "lucide-react";

interface PortfolioProps {
  currentLang: string;
}

const Portfolio = ({ currentLang }: PortfolioProps) => {
  const content = {
    en: {
      title: "Example Industries",
      subtitle: "We build websites for all kinds of small businesses",
      industries: [
        { icon: Home, name: "Home Services", examples: "Landscaping, Cleaning, Painting" },
        { icon: Wrench, name: "Contractors", examples: "Plumbing, HVAC, Electrical" },
        { icon: Dumbbell, name: "Fitness & Wellness", examples: "Personal Training, Yoga, Massage" },
        { icon: Coffee, name: "Food & Beverage", examples: "Cafés, Catering, Food Trucks" },
        { icon: Heart, name: "Health & Beauty", examples: "Salons, Spas, Aesthetics" },
        { icon: ShoppingBag, name: "Retail & Local Shops", examples: "Boutiques, Pet Stores, Florists" },
        { icon: Briefcase, name: "Professional Services", examples: "Law, Accounting, Consulting" },
        { icon: Palette, name: "Creative & Design", examples: "Photography, Art, Events" },
      ],
    },
    es: {
      title: "Industrias de Ejemplo",
      subtitle: "Creamos sitios web para todo tipo de pequeños negocios",
      industries: [
        { icon: Home, name: "Servicios del Hogar", examples: "Jardinería, Limpieza, Pintura" },
        { icon: Wrench, name: "Contratistas", examples: "Plomería, HVAC, Electricidad" },
        { icon: Dumbbell, name: "Fitness y Bienestar", examples: "Entrenamiento Personal, Yoga, Masajes" },
        { icon: Coffee, name: "Comida y Bebida", examples: "Cafés, Catering, Food Trucks" },
        { icon: Heart, name: "Salud y Belleza", examples: "Salones, Spas, Estética" },
        { icon: ShoppingBag, name: "Retail y Tiendas Locales", examples: "Boutiques, Tiendas de Mascotas, Floristerías" },
        { icon: Briefcase, name: "Servicios Profesionales", examples: "Derecho, Contabilidad, Consultoría" },
        { icon: Palette, name: "Creativos y Diseño", examples: "Fotografía, Arte, Eventos" },
      ],
    },
  };

  const t = content[currentLang as keyof typeof content];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/50 section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {t.industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-background rounded-2xl shadow-md hover:shadow-lg transition-all animate-fade-in border border-border/50 hover:border-accent/30"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-14 h-14 rounded-xl mb-4">
                    <div className="absolute inset-0 bg-accent/10 rounded-xl blur-sm group-hover:bg-accent/20 transition-colors"></div>
                    <div className="relative w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry.examples}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
