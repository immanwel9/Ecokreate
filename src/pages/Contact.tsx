import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpqjgjaq");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-40 pb-32 px-6">
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
                onClick={() => window.location.reload()} 
                className="rounded-full px-8"
                variant="outline"
              >
                Send another message
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-40 pb-32 px-6">
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
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
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
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
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <Button 
              type="submit" 
              disabled={state.submitting}
              className="rounded-full px-8 gap-2"
            >
              <Mail size={16} />
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

