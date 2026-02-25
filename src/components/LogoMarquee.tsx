import { motion } from "framer-motion";

const logos = ["Acme", "Globex", "Initech", "Umbrella", "Wayne", "Stark", "Oscorp", "Lexcorp"];

const LogoMarquee = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="mx-16 text-2xl font-bold tracking-tight text-foreground/10"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
