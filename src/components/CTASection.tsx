import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaBike from "@/assets/cta-bike.jpg";
import ctaApp from "@/assets/cta-app.jpg";
import ctaDesk from "@/assets/cta-desk.jpg";

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[ctaBike, ctaApp, ctaDesk].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden aspect-[3/4]"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's bring your vision to life
          </h2>
          <Button size="lg" className="rounded-full px-8">
            Book a discovery call
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
