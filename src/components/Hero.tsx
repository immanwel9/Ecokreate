import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client"
                className="w-10 h-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Trusted by 200+ clients</p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] max-w-3xl mx-auto"
        >
          Elevate your brand with digital marketing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Crafting unforgettable digital experiences for your brand through innovative design, strategy, marketing and storytelling.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
