import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <motion.div style={{ opacity, y }} className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Digital Marketing Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]"
        >
          We build
          <br />
          <span className="text-primary">brands</span> that
          <br />
          matter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-muted-foreground max-w-md mx-auto text-base leading-relaxed"
        >
          Strategy, design, and storytelling — distilled into experiences that resonate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mx-auto"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
