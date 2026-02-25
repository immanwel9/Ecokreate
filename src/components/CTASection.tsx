import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-foreground rounded-3xl px-8 py-20 md:px-20 md:py-28 text-center relative overflow-hidden"
        >
          {/* Subtle grain overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-background tracking-tight leading-[1.1] mb-6 relative">
            Ready to make
            <br />
            an impact?
          </h2>
          <p className="text-background/60 max-w-md mx-auto mb-10 relative">
            Let's start a conversation about your brand's next chapter.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 gap-2 relative"
            onClick={() => navigate("/contact")}
          >
            Get in touch
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
