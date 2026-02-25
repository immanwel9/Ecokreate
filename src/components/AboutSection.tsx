import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutMeeting from "@/assets/about-meeting.jpg";

const stats = [
  { value: "200+", label: "Clients served" },
  { value: "8+", label: "Years of experience" },
  { value: "40+", label: "Projects delivered" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Image — 2 cols */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden"
          >
            <motion.img
              style={{ scale: imgScale }}
              src={aboutMeeting}
              alt="Team collaboration"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">About us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Creative solutions,
              <br />
              measurable results
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              We're a team of strategists, designers, and storytellers who believe in the power of purposeful branding. Every project is an opportunity to create something meaningful.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
