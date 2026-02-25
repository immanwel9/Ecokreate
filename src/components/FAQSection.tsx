import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Branding projects take 4–6 weeks, while web design and development projects range from 8–12 weeks. We provide a detailed timeline upfront.",
  },
  {
    q: "What is the cost of working with you?",
    a: "Pricing varies by scope and complexity. We offer transparent proposals so you know exactly what to expect before we begin.",
  },
  {
    q: "How involved will I be in the process?",
    a: "Very. We follow a collaborative approach — you'll be involved at every key milestone, from concept to delivery.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Absolutely. We can refresh, evolve, or extend your existing brand identity while maintaining consistency across all touchpoints.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="border-b border-border px-0"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
