import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    // Open email client
    window.location.href = `mailto:immanwel@ecokreate.com?subject=${subject}&body=${body}`;
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name</label>
                <Input
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-card border-border h-12"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</label>
                <Input
                  placeholder="jane@company.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-card border-border h-12"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Message</label>
              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-card border-border resize-y"
                required
              />
            </div>

            <Button type="submit" className="rounded-full px-8 gap-2">
              <Mail size={16} />
              Send via Email
            </Button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

