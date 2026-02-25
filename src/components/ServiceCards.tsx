import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Pen, Compass, Share2 } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Content Creation",
    desc: "Compelling copy, visuals, and video that tell your story with clarity and purpose.",
    num: "01",
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Deep research and positioning that carve out space in your market.",
    num: "02",
  },
  {
    icon: Share2,
    title: "Digital Marketing",
    desc: "Data-driven campaigns across channels that convert attention into growth.",
    num: "03",
  },
];

const ServiceCards = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          What we do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-16 max-w-lg"
        >
            Monitizing your brand's potential with unforgettable digital experiences
        </motion.h2>

        <motion.div style={{ x }} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors duration-500">
                {s.num}
              </span>
              <div className="mt-8 mb-4">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
