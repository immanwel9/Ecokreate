import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">✦</span>
          </div>
          <span className="text-lg font-bold text-foreground">impact</span>
        </button>

        <nav className="hidden md:flex items-center gap-1 bg-card rounded-full px-2 py-1.5 border border-border shadow-sm">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-secondary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          className="hidden md:inline-flex rounded-full px-6"
          onClick={handleContactClick}
        >
          Contact Us
        </Button>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border p-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { handleNavClick(link.href); setMobileOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-secondary"
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full rounded-full mt-2" onClick={() => { handleContactClick(); setMobileOpen(false); }}>
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
