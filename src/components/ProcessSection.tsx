import { motion } from "framer-motion";
import projects from "@/assets/projects.jpg";
import workspace from "@/assets/workspace.jpg";
import aboutSocial from "@/assets/about-social.jpg";

const steps = [
  "Discover project & market study",
  "Design, develop & optimize",
  "Launch project & gather feedback",
];

const ProcessSection = () => {
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
            At Impact, our priority is to deliver real results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to exceeding your expectations, delivering projects on time, within budget, and to a high standard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Process steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              A work process that drives results
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              We work with a solid plan and a clear process. By combining creativity with strategic planning, we deliver solutions that not only look great but also drive meaningful results for your business.
            </p>
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <img src={projects} alt="Projects" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-1">More than 40 projects</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Our portfolio showcases a selection of our most impactful client projects we worked on throughout our journey.
              </p>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                See our latest case studies →
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <img src={workspace} alt="Workspace" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-1">Founded in 2015</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Founded in 2015, our agency was born out of a passion for design. Our years of experience fuel our creativity.
              </p>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Read about our story →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <img src={aboutSocial} alt="Passion" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-1">Driven by passion</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Our team lives and breathes creativity, bringing genuine passion to every project we contribute on.
              </p>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Meet the team →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
