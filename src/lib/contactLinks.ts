// src/lib/contactLinks.ts

// Put your real WhatsApp number here in international format, no "+" or spaces.
// Example (Mexico): 521234567890
export const WHATSAPP_NUMBER = "526691060368";

export const getWhatsAppLink = (lang: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;

  const message =
    lang === "es"
      ? "Hola JLStudios! Me gustaría comprar un sitio web para mi negocio."
      : "Hello JLStudios! I'd like to purchase a Website for my buisness.";

  return `${base}?text=${encodeURIComponent(message)}`;
};
