import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Thanks for reaching out!
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              className="rounded-full px-8"
              variant="outline"
            >
              Send another message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4">
            Let's talk
          </h1>
          <p className="text-muted-foreground mb-12 max-w-md">
            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
            <Input
              id="name"
              name="name"
              placeholder="Jane Smith"
              className="bg-card border-border h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="jane@company.com"
              className="bg-card border-border h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={6}
              className="bg-card border-border resize-y"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded-full px-8 gap-2"
          >
            <Mail size={16} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;

