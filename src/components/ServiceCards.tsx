import { motion } from "framer-motion";
import { Pen, Compass, Share2 } from "lucide-react";
import serviceContent from "@/assets/service-content.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

const services = [
  { icon: Pen, title: "Content creation", image: serviceContent },
  { icon: Compass, title: "Brand strategy", image: serviceBrand },
  { icon: Share2, title: "Digital marketing", image: serviceMarketing },
];

const ServiceCards = () => {
  return (
    <section className="pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden bg-card border border-border">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex items-center gap-3">
                  <service.icon size={20} className="text-muted-foreground" />
                  <span className="font-semibold text-foreground">{service.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
