import { motion } from "framer-motion";
import aboutMeeting from "@/assets/about-meeting.jpg";
import aboutSocial from "@/assets/about-social.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={aboutMeeting}
              alt="Meeting room"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Delivering creative digital solutions
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe that great branding is the key to success. We pride ourselves on pushing the boundaries of creativity and delivering solutions that help our clients stand out.
            </p>
            <a href="#" className="font-semibold text-foreground hover:text-primary transition-colors">
              Explore services →
            </a>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Crafting compelling brand identities
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team of visionaries, designers, and strategists work in harmony to deliver results that resonate with your audience. We're here to turn your vision into reality.
            </p>
            <a href="#" className="font-semibold text-foreground hover:text-primary transition-colors">
              View case studies →
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 rounded-2xl overflow-hidden"
          >
            <img
              src={aboutSocial}
              alt="Social media"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
