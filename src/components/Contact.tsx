import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";
import { useTranslation, type Language } from "@/i18n";
import { getWhatsAppLink } from "@/lib/contactLinks";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzzqygrj";

interface ContactProps {
  currentLang: string;
}

const Contact = ({ currentLang }: ContactProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslation(currentLang as Language).contact;

  // Zod validation schema
  const contactSchema = z.object({
    name: z
      .string()
      .min(1, { message: t.validation.nameRequired })
      .max(100, { message: "Name must be less than 100 characters" }),
    business: z
      .string()
      .min(1, { message: t.validation.businessRequired })
      .max(100, { message: "Business name must be less than 100 characters" }),
    email: z
      .string()
      .min(1, { message: t.validation.emailRequired })
      .email({ message: t.validation.emailInvalid })
      .max(255, { message: "Email must be less than 255 characters" }),
    phone: z.string().max(20).optional(),
    budget: z.string().optional(),
    message: z
      .string()
      .min(20, { message: t.validation.messageMin })
      .max(1000, { message: "Message must be less than 1000 characters" }),
    honeypot: z.string().optional(), // Spam protection
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot spam check
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree (replace with your Formspree endpoint)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          business: data.business,
          email: data.email,
          phone: data.phone,
          budget: data.budget,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast({
          title: currentLang === "en" ? "Success!" : "¡Éxito!",
          description: t.success,
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: currentLang === "en" ? "Error" : "Error",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/50 section-divider">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* WhatsApp CTA */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="bg-card border border-accent/30 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-md"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan to-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t.whatsappTitle}
              </h3>
              <p className="text-muted-foreground mb-6">{t.whatsappDescription}</p>
              <Button
                size="lg"
                className="w-full cta-hover bg-gradient-to-r from-cyan to-accent hover:from-cyan/90 hover:to-accent/90 text-white shadow-medium"
                asChild
              >
                <a
                  href={getWhatsAppLink(currentLang)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.whatsappButton}
                </a>
              </Button>

            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 bg-card border border-border/50 rounded-2xl p-8 shadow-md"
              >
                {/* Honeypot field (hidden) */}
                <FormField
                  control={form.control}
                  name="honeypot"
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.name} *</FormLabel>
                        <FormControl>
                          <Input {...field} maxLength={100} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="business"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.business} *</FormLabel>
                        <FormControl>
                          <Input {...field} maxLength={100} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.email} *</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" maxLength={255} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.phone}</FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" maxLength={20} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.budget}</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.budgetPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {t.form.budgetOptions.map((option, index) => (
                            <SelectItem key={index} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.message} *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          maxLength={1000}
                          rows={5}
                          placeholder={t.form.messagePlaceholder}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cta-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
