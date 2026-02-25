import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutSocial from "@/assets/about-social.jpg";
import projects from "@/assets/projects.jpg";

const SolutionsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Our work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            Selected projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div style={{ y: y1 }} className="rounded-2xl overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={aboutSocial}
                alt="Brand campaign"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Brand Strategy</p>
              <h3 className="text-lg font-semibold text-foreground">EchoWave Tech — Visual Identity</h3>
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="rounded-2xl overflow-hidden group cursor-pointer mt-0 md:mt-16">
            <div className="relative overflow-hidden">
              <img
                src={projects}
                alt="Marketing campaign"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-1">Digital Campaign</p>
              <h3 className="text-lg font-semibold text-foreground">Urban Threads — Growth Strategy</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
