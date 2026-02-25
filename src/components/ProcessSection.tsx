import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We immerse ourselves in your world — understanding your audience, market, and goals through deep research.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Strategy meets creativity. We craft visual systems and narratives that align with your brand's purpose.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "We bring concepts to life with meticulous attention to detail, building assets that perform across every channel.",
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Launch, measure, iterate. We ensure your brand gains traction and continues to evolve with real feedback.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Our process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-20 max-w-lg"
        >
          How we work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <span className="text-7xl font-bold text-border">{step.num}</span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
