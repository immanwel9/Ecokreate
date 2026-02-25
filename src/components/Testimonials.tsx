import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "They're a true partner in our growth. Their work has been instrumental in helping us reach new heights.",
    name: "Ryan Martinez",
    role: "CEO, EchoWave Tech",
  },
  {
    quote: "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations.",
    name: "Michael Reynolds",
    role: "Founder, Urban Threads",
  },
  {
    quote: "Impact brought our ideas to life in ways we never imagined. Their innovative approach made our project a huge success.",
    name: "David Lawson",
    role: "CMO, GreenLeaf Organics",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-20 max-w-lg"
        >
          What our clients say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-10 flex flex-col justify-between"
            >
              <p className="text-foreground/80 leading-relaxed mb-10 text-lg italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
