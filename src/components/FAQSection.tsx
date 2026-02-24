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
    a: "On average, branding projects take 4-6 weeks, while web design and development projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project.",
  },
  {
    q: "What is the cost of working with you?",
    a: "Our pricing varies based on the scope and complexity of each project. We offer transparent pricing and provide detailed proposals so you know exactly what to expect.",
  },
  {
    q: "How involved will I be in the process?",
    a: "We believe in a collaborative approach. You'll be involved at every key milestone, from initial concepts to final delivery, ensuring the result aligns with your vision.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Absolutely! We can work with your existing brand guidelines to refresh, evolve, or extend your brand identity while maintaining consistency.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your questions, answered
          </h2>
          <p className="text-muted-foreground">
            Whether you're a new client or a long-time partner, we're here to help. Below are answers to the most common questions.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
