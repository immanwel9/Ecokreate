import { motion } from "framer-motion";
import { Lightbulb, Zap, Users } from "lucide-react";
import projects from "@/assets/projects.jpg";

const features = [
  { icon: Lightbulb, title: "Tailored solutions", desc: "We take the time to understand your specific needs, challenges, and goals." },
  { icon: Zap, title: "Innovative thinking", desc: "We thrive on pushing boundaries, exploring ideas, and staying ahead of trends." },
  { icon: Users, title: "Collaborative approach", desc: "From the initial concept to the final delivery, we work closely with you." },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impactful solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We focus on more than just delivering a service; we create solutions that make a difference. Each project is crafted to align with your goals, bringing impact to the forefront.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img src={projects} alt="Agency work" className="w-full h-80 object-cover rounded-2xl" />
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
