/**
 * Centralized i18n dictionary for JLStudios website
 * Supports EN (English) and ES (Spanish)
 */

export type Language = "en" | "es";

interface Translations {
  header: {
    nav: {
      home: string;
      services: string;
      portfolio: string;
      pricing: string;
      faqs: string;
      about: string;
      contact: string;
    };
    cta: {
      whatsapp: string;
      mockup: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    trust: {
      delivery: string;
      mockup: string;
      hosting: string;
      responsive: string;
    };
  };
  problemSolution: {
    title: string;
    problems: {
      noWebsite: {
        title: string;
        description: string;
      };
      slowFreelancers: {
        title: string;
        description: string;
      };
      confusingDIY: {
        title: string;
        description: string;
      };
    };
    solutions: {
      fastDelivery: {
        title: string;
        description: string;
      };
      guidedProcess: {
        title: string;
        description: string;
      };
      allInclusive: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    webDesign: {
      title: string;
      description: string;
      bullets: string[];
    };
    freeMockups: {
      title: string;
      description: string;
      bullets: string[];
    };
    websiteSetup: {
      title: string;
      description: string;
      bullets: string[];
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    close: string;
    projects: {
      cafe: {
        title: string;
        category: string;
        result: string;
      };
      gym: {
        title: string;
        category: string;
        result: string;
      };
      dentist: {
        title: string;
        category: string;
        result: string;
      };
      restaurant: {
        title: string;
        category: string;
        result: string;
      };
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    paymentNote: string;
    starter: {
      title: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
    business: {
      title: string;
      price: string;
      description: string;
      popular: string;
      features: string[];
      cta: string;
    };
    pro: {
      title: string;
      price: string;
      description: string;
      features: string[];
      cta: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      brief: {
        title: string;
        description: string;
      };
      mockup: {
        title: string;
        description: string;
      };
      build: {
        title: string;
        description: string;
      };
      launch: {
        title: string;
        description: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      maria: {
        quote: string;
        author: string;
        role: string;
      };
      carlos: {
        quote: string;
        author: string;
        role: string;
      };
      ana: {
        quote: string;
        author: string;
        role: string;
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      delivery: {
        question: string;
        answer: string;
      };
      revisions: {
        question: string;
        answer: string;
      };
      hosting: {
        question: string;
        answer: string;
      };
      content: {
        question: string;
        answer: string;
      };
      payment: {
        question: string;
        answer: string;
      };
      maintenance: {
        question: string;
        answer: string;
      };
      languages: {
        question: string;
        answer: string;
      };
      custom: {
        question: string;
        answer: string;
      };
    };
  };
  about: {
    title: string;
    mission: string;
    location: string;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappButton: string;
    whatsappDescription: string;
    form: {
      name: string;
      business: string;
      email: string;
      phone: string;
      budget: string;
      budgetPlaceholder: string;
      budgetOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    success: string;
    error: string;
    validation: {
      nameRequired: string;
      businessRequired: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageMin: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string;
    links: {
      privacy: string;
      terms: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        pricing: "Pricing",
        faqs: "FAQs",
        about: "About",
        contact: "Contact",
      },
      cta: {
        whatsapp: "WhatsApp Us",
        mockup: "Get a Free Mockup",
      },
    },
    hero: {
      title: "Websites in 48 hours for small businesses",
      subtitle: "Look professional, go live fast, and start getting customers this week.",
      cta: {
        primary: "Get a Free Mockup",
        secondary: "WhatsApp Us",
      },
      trust: {
        delivery: "48-hour delivery",
        mockup: "Free homepage mockup",
        hosting: "Hosting & setup help",
        responsive: "100% mobile-friendly",
      },
    },
    problemSolution: {
      title: "Why JLStudios?",
      problems: {
        noWebsite: {
          title: "No website, no visibility",
          description: "Without a site, your business is invisible online.",
        },
        slowFreelancers: {
          title: "Slow freelancers",
          description: "Weeks of waiting, unclear timelines, missed deadlines.",
        },
        confusingDIY: {
          title: "Confusing DIY builders",
          description: "Templates look generic, tech feels overwhelming.",
        },
      },
      solutions: {
        fastDelivery: {
          title: "48-hour delivery",
          description: "First version live in two business days. No endless revisions.",
        },
        guidedProcess: {
          title: "Guided process",
          description: "We handle design, code, and setup. You just approve.",
        },
        allInclusive: {
          title: "All-inclusive setup",
          description: "Domain, hosting, SSL, email, analytics—sorted for you.",
        },
      },
    },
    services: {
      title: "What You Get",
      subtitle: "Everything you need to launch fast and look professional",
      webDesign: {
        title: "Web Design",
        description: "Custom design matched to your brand",
        bullets: [
          "Mobile-first design that looks perfect on your customer's phone",
          "Clear calls to action that convert visitors into customers",
          "Fast load times (under 2 seconds)",
          "Modern, professional aesthetic",
        ],
      },
      freeMockups: {
        title: "Free Mockups",
        description: "See your homepage before you pay",
        bullets: [
          "No commitment required",
          "Realistic preview of your homepage",
          "One round of feedback included",
          "Decide after you see the design",
        ],
      },
      websiteSetup: {
        title: "Website Setup",
        description: "Complete technical configuration",
        bullets: [
          "Domain registration or connection guidance",
          "Reliable hosting with SSL certificate",
          "Professional email setup",
          "Google Analytics configured",
        ],
      },
    },
    portfolio: {
      title: "Recent Work",
      subtitle: "Real sites built for local businesses",
      close: "Close",
      projects: {
        cafe: {
          title: "Café Aroma",
          category: "Café",
          result: "↑ 40% online orders in 3 weeks",
        },
        gym: {
          title: "PowerFit Gym",
          category: "Fitness",
          result: "↑ 60% class bookings",
        },
        dentist: {
          title: "SmileCare Dental",
          category: "Healthcare",
          result: "↑ 50% appointment calls",
        },
        restaurant: {
          title: "Sabor Mexicano",
          category: "Restaurant",
          result: "↑ 80% reservation requests",
        },
      },
    },
    pricing: {
      title: "Simple Pricing",
      subtitle: "Transparent packages. No hidden fees.",
      paymentNote: "Pay 50% to start, 50% on delivery",
      starter: {
        title: "Starter",
        price: "$299",
        description: "Perfect for local businesses",
        features: [
          "Single-page website",
          "Mobile-first design",
          "Contact form",
          "WhatsApp integration",
          "Hosting setup guidance",
          "Delivered in 48 hours",
        ],
        cta: "Get Started",
      },
      business: {
        title: "Business",
        price: "$499",
        description: "Most popular for growing businesses",
        popular: "Most Popular",
        features: [
          "Up to 5 pages",
          "Advanced design customization",
          "SEO optimization",
          "Google Analytics setup",
          "Speed optimization",
          "Priority support",
          "Delivered in 48 hours",
        ],
        cta: "Get Started",
      },
      pro: {
        title: "Pro",
        price: "$799",
        description: "For businesses that need more",
        features: [
          "Unlimited pages",
          "E-commerce or booking integration",
          "Blog with CMS",
          "Copywriting assistance",
          "Advanced SEO",
          "Priority support",
          "Delivered in 48 hours",
        ],
        cta: "Get Started",
      },
    },
    process: {
      title: "How It Works",
      subtitle: "From brief to launch in 48 hours",
      steps: {
        brief: {
          title: "Day 0: Brief",
          description: "Share your goals, branding, and content. We handle the rest.",
        },
        mockup: {
          title: "Day 1: Mockup",
          description: "You review and approve the homepage design. One round of feedback included.",
        },
        build: {
          title: "Day 2: Build",
          description: "We code, test, and connect your domain. You stay updated.",
        },
        launch: {
          title: "Day 2: Launch",
          description: "Your site goes live. We guide you through the handoff.",
        },
      },
    },
    testimonials: {
      title: "What Clients Say",
      subtitle: "Real feedback from real businesses",
      items: {
        maria: {
          quote:
            "I needed a site fast for my bakery. JLStudios delivered in two days and it looks amazing. Orders are up 40%!",
          author: "María González",
          role: "Owner, Dulce María Bakery",
        },
        carlos: {
          quote:
            "Professional, fast, and affordable. My gym finally has a modern site that brings in new members.",
          author: "Carlos Ruiz",
          role: "Owner, PowerFit Gym",
        },
        ana: {
          quote:
            "The process was so simple. They guided me through everything and my dental clinic looks incredibly professional now.",
          author: "Dr. Ana Martínez",
          role: "SmileCare Dental",
        },
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      items: {
        delivery: {
          question: "How fast is 48 hours really?",
          answer:
            "We deliver a first version within 48 business hours once we receive your content and branding assets. If you need revisions, we'll work with you to finalize quickly.",
        },
        revisions: {
          question: "What if I need changes?",
          answer:
            "One round of revisions is included in all packages. Additional changes can be made for a small fee or we can discuss an ongoing support plan.",
        },
        hosting: {
          question: "Do you help with domain and hosting?",
          answer:
            "Yes! We guide you through domain registration (or connect your existing one) and recommend reliable hosting options. We can handle the technical setup for you.",
        },
        content: {
          question: "What if I don't have text or photos?",
          answer:
            "No problem. We can help write professional copy and source high-quality stock images to get you started. Copywriting assistance is included in the Pro package.",
        },
        payment: {
          question: "How does payment work?",
          answer:
            "We require 50% upfront to begin work, and the remaining 50% upon delivery. We accept USD and MXN via bank transfer, PayPal, or Stripe.",
        },
        maintenance: {
          question: "Do you offer ongoing maintenance?",
          answer:
            "Yes! We offer monthly maintenance plans for updates, security, and content changes. Contact us for details.",
        },
        languages: {
          question: "Can you build bilingual sites?",
          answer:
            "Absolutely. We can create bilingual (EN/ES) sites or add a language toggle for international audiences.",
        },
        custom: {
          question: "What if I need custom features?",
          answer:
            "We love custom projects! E-commerce, booking systems, member portals—just tell us what you need and we'll provide a custom quote.",
        },
      },
    },
    about: {
      title: "About JLStudios",
      mission:
        "We're a small web design studio focused on helping local businesses get online fast. No jargon, no endless timelines—just clean, professional websites delivered in 48 hours.",
      location:
        "Based in San Miguel de Allende, Mexico — serving U.S. and international clients remotely.",
    },
    contact: {
      title: "Get Your Free Mockup",
      subtitle: "Let's start building your website today",
      whatsappTitle: "Prefer WhatsApp?",
      whatsappButton: "Chat with Us on WhatsApp",
      whatsappDescription: "Get instant replies and start your project faster",
      form: {
        name: "Your Name",
        business: "Business Name",
        email: "Email Address",
        phone: "Phone (optional)",
        budget: "Select Budget",
        budgetPlaceholder: "Choose your budget range",
        budgetOptions: [
          "$299 - Starter",
          "$499 - Business",
          "$799 - Pro",
          "Custom (tell us more)",
        ],
        message: "Tell us about your project",
        messagePlaceholder:
          "Tell us about your business, what you need, and any specific features...",
        submit: "Request Free Mockup",
        submitting: "Sending...",
      },
      success: "Thanks! We'll reply within a few hours (often sooner).",
      error:
        "Something went wrong. Please try WhatsApp or email us directly.",
      validation: {
        nameRequired: "Name is required",
        businessRequired: "Business name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
        messageMin: "Message must be at least 20 characters",
      },
    },
    footer: {
      tagline: "Professional websites in 48 hours",
      copyright: "© 2025 JLStudios. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
    },
  },
  es: {
    header: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        portfolio: "Portafolio",
        pricing: "Precios",
        faqs: "Preguntas",
        about: "Nosotros",
        contact: "Contacto",
      },
      cta: {
        whatsapp: "Escríbenos",
        mockup: "Mockup Gratis",
      },
    },
    hero: {
      title: "Sitios web en 48 horas para negocios pequeños",
      subtitle:
        "Luce profesional, lanza rápido y empieza a conseguir clientes esta semana.",
      cta: {
        primary: "Obtén un Mockup Gratis",
        secondary: "Escríbenos por WhatsApp",
      },
      trust: {
        delivery: "Entrega en 48 horas",
        mockup: "Mockup gratis de inicio",
        hosting: "Ayuda con hosting y setup",
        responsive: "100% móvil",
      },
    },
    problemSolution: {
      title: "¿Por qué JLStudios?",
      problems: {
        noWebsite: {
          title: "Sin sitio, sin visibilidad",
          description: "Sin un sitio web, tu negocio es invisible en línea.",
        },
        slowFreelancers: {
          title: "Freelancers lentos",
          description:
            "Semanas de espera, plazos poco claros, fechas incumplidas.",
        },
        confusingDIY: {
          title: "Constructores DIY confusos",
          description:
            "Las plantillas lucen genéricas, la tecnología abruma.",
        },
      },
      solutions: {
        fastDelivery: {
          title: "Entrega en 48 horas",
          description:
            "Primera versión en línea en dos días hábiles. Sin revisiones infinitas.",
        },
        guidedProcess: {
          title: "Proceso guiado",
          description:
            "Nosotros manejamos diseño, código y configuración. Tú solo apruebas.",
        },
        allInclusive: {
          title: "Setup todo incluido",
          description:
            "Dominio, hosting, SSL, email, analíticas—todo resuelto para ti.",
        },
      },
    },
    services: {
      title: "Qué Obtienes",
      subtitle:
        "Todo lo que necesitas para lanzar rápido y lucir profesional",
      webDesign: {
        title: "Diseño Web",
        description: "Diseño personalizado acorde a tu marca",
        bullets: [
          "Diseño móvil-primero que luce perfecto en el teléfono de tu cliente",
          "Llamados a la acción claros que convierten visitantes en clientes",
          "Tiempos de carga rápidos (menos de 2 segundos)",
          "Estética moderna y profesional",
        ],
      },
      freeMockups: {
        title: "Mockups Gratis",
        description: "Ve tu página de inicio antes de pagar",
        bullets: [
          "Sin compromiso requerido",
          "Vista previa realista de tu página de inicio",
          "Una ronda de feedback incluida",
          "Decide después de ver el diseño",
        ],
      },
      websiteSetup: {
        title: "Configuración del Sitio",
        description: "Configuración técnica completa",
        bullets: [
          "Guía de registro o conexión de dominio",
          "Hosting confiable con certificado SSL",
          "Configuración de email profesional",
          "Google Analytics configurado",
        ],
      },
    },
    portfolio: {
      title: "Trabajo Reciente",
      subtitle: "Sitios reales construidos para negocios locales",
      close: "Cerrar",
      projects: {
        cafe: {
          title: "Café Aroma",
          category: "Cafetería",
          result: "↑ 40% pedidos online en 3 semanas",
        },
        gym: {
          title: "PowerFit Gym",
          category: "Fitness",
          result: "↑ 60% reservas de clases",
        },
        dentist: {
          title: "SmileCare Dental",
          category: "Salud",
          result: "↑ 50% llamadas para citas",
        },
        restaurant: {
          title: "Sabor Mexicano",
          category: "Restaurante",
          result: "↑ 80% solicitudes de reservas",
        },
      },
    },
    pricing: {
      title: "Precios Simples",
      subtitle: "Paquetes transparentes. Sin costos ocultos.",
      paymentNote: "Paga 50% para empezar, 50% en entrega",
      starter: {
        title: "Starter",
        price: "$299",
        description: "Perfecto para negocios locales",
        features: [
          "Sitio de una página",
          "Diseño móvil-primero",
          "Formulario de contacto",
          "Integración con WhatsApp",
          "Guía de configuración de hosting",
          "Entregado en 48 horas",
        ],
        cta: "Empezar",
      },
      business: {
        title: "Business",
        price: "$499",
        description: "Más popular para negocios en crecimiento",
        popular: "Más Popular",
        features: [
          "Hasta 5 páginas",
          "Personalización de diseño avanzada",
          "Optimización SEO",
          "Configuración de Google Analytics",
          "Optimización de velocidad",
          "Soporte prioritario",
          "Entregado en 48 horas",
        ],
        cta: "Empezar",
      },
      pro: {
        title: "Pro",
        price: "$799",
        description: "Para negocios que necesitan más",
        features: [
          "Páginas ilimitadas",
          "Integración de ecommerce o reservas",
          "Blog con CMS",
          "Asistencia con copywriting",
          "SEO avanzado",
          "Soporte prioritario",
          "Entregado en 48 horas",
        ],
        cta: "Empezar",
      },
    },
    process: {
      title: "Cómo Funciona",
      subtitle: "Del brief al lanzamiento en 48 horas",
      steps: {
        brief: {
          title: "Día 0: Brief",
          description:
            "Comparte tus objetivos, branding y contenido. Nosotros hacemos el resto.",
        },
        mockup: {
          title: "Día 1: Mockup",
          description:
            "Revisas y apruebas el diseño de la página de inicio. Una ronda de feedback incluida.",
        },
        build: {
          title: "Día 2: Construcción",
          description:
            "Codificamos, probamos y conectamos tu dominio. Te mantenemos actualizado.",
        },
        launch: {
          title: "Día 2: Lanzamiento",
          description:
            "Tu sitio se pone en línea. Te guiamos en la entrega.",
        },
      },
    },
    testimonials: {
      title: "Lo Que Dicen los Clientes",
      subtitle: "Comentarios reales de negocios reales",
      items: {
        maria: {
          quote:
            "Necesitaba un sitio rápido para mi panadería. JLStudios lo entregó en dos días y luce increíble. ¡Los pedidos subieron 40%!",
          author: "María González",
          role: "Dueña, Panadería Dulce María",
        },
        carlos: {
          quote:
            "Profesional, rápido y accesible. Mi gimnasio finalmente tiene un sitio moderno que atrae nuevos miembros.",
          author: "Carlos Ruiz",
          role: "Dueño, PowerFit Gym",
        },
        ana: {
          quote:
            "El proceso fue tan simple. Me guiaron en todo y mi clínica dental ahora luce increíblemente profesional.",
          author: "Dra. Ana Martínez",
          role: "SmileCare Dental",
        },
      },
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber",
      items: {
        delivery: {
          question: "¿Qué tan rápido es 48 horas realmente?",
          answer:
            "Entregamos una primera versión en 48 horas hábiles una vez que recibimos tu contenido y assets de marca. Si necesitas revisiones, trabajaremos contigo para finalizar rápido.",
        },
        revisions: {
          question: "¿Qué pasa si necesito cambios?",
          answer:
            "Una ronda de revisiones está incluida en todos los paquetes. Cambios adicionales se pueden hacer por una pequeña tarifa o podemos discutir un plan de soporte continuo.",
        },
        hosting: {
          question: "¿Ayudan con dominio y hosting?",
          answer:
            "¡Sí! Te guiamos en el registro de dominio (o conectamos el que ya tienes) y recomendamos opciones de hosting confiables. Podemos manejar la configuración técnica por ti.",
        },
        content: {
          question: "¿Qué pasa si no tengo texto o fotos?",
          answer:
            "No hay problema. Podemos ayudar a escribir copy profesional y obtener imágenes de stock de alta calidad para empezar. La asistencia con copywriting está incluida en el paquete Pro.",
        },
        payment: {
          question: "¿Cómo funciona el pago?",
          answer:
            "Requerimos 50% por adelantado para comenzar el trabajo, y el 50% restante en la entrega. Aceptamos USD y MXN vía transferencia bancaria, PayPal o Stripe.",
        },
        maintenance: {
          question: "¿Ofrecen mantenimiento continuo?",
          answer:
            "¡Sí! Ofrecemos planes de mantenimiento mensual para actualizaciones, seguridad y cambios de contenido. Contáctanos para detalles.",
        },
        languages: {
          question: "¿Pueden construir sitios bilingües?",
          answer:
            "Absolutamente. Podemos crear sitios bilingües (EN/ES) o agregar un selector de idioma para audiencias internacionales.",
        },
        custom: {
          question: "¿Qué pasa si necesito características personalizadas?",
          answer:
            "¡Nos encantan los proyectos personalizados! Ecommerce, sistemas de reservas, portales de miembros—solo dinos lo que necesitas y te daremos una cotización personalizada.",
        },
      },
    },
    about: {
      title: "Acerca de JLStudios",
      mission:
        "Somos un pequeño estudio de diseño web enfocado en ayudar a negocios locales a estar en línea rápido. Sin jerga, sin plazos interminables—solo sitios web limpios y profesionales entregados en 48 horas.",
      location:
        "Con base en San Miguel de Allende, México — sirviendo clientes de EE.UU. e internacionales de forma remota.",
    },
    contact: {
      title: "Obtén Tu Mockup Gratis",
      subtitle: "Empecemos a construir tu sitio web hoy",
      whatsappTitle: "¿Prefieres WhatsApp?",
      whatsappButton: "Chatea con Nosotros en WhatsApp",
      whatsappDescription:
        "Obtén respuestas instantáneas y empieza tu proyecto más rápido",
      form: {
        name: "Tu Nombre",
        business: "Nombre del Negocio",
        email: "Correo Electrónico",
        phone: "Teléfono (opcional)",
        budget: "Selecciona Presupuesto",
        budgetPlaceholder: "Elige tu rango de presupuesto",
        budgetOptions: [
          "$299 - Starter",
          "$499 - Business",
          "$799 - Pro",
          "Personalizado (cuéntanos más)",
        ],
        message: "Cuéntanos sobre tu proyecto",
        messagePlaceholder:
          "Cuéntanos sobre tu negocio, lo que necesitas y características específicas...",
        submit: "Solicitar Mockup Gratis",
        submitting: "Enviando...",
      },
      success:
        "¡Gracias! Responderemos en pocas horas (a menudo antes).",
      error:
        "Algo salió mal. Por favor intenta WhatsApp o envíanos un email directo.",
      validation: {
        nameRequired: "El nombre es requerido",
        businessRequired: "El nombre del negocio es requerido",
        emailRequired: "El email es requerido",
        emailInvalid: "Por favor ingresa un email válido",
        messageRequired: "El mensaje es requerido",
        messageMin: "El mensaje debe tener al menos 20 caracteres",
      },
    },
    footer: {
      tagline: "Sitios web profesionales en 48 horas",
      copyright: "© 2025 JLStudios. Todos los derechos reservados.",
      links: {
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
    },
  },
};

export const useTranslation = (lang: Language) => {
  return translations[lang];
};
