import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#case-studies" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">✦</span>
          </div>
          <span className="text-lg font-bold text-foreground">impact</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          className="hidden md:inline-flex rounded-full px-6"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border p-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { handleNavClick(link.href); setMobileOpen(false); }}
              className="block w-full text-left px-4 py-3 text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button className="w-full rounded-full mt-4" onClick={() => { navigate("/contact"); setMobileOpen(false); }}>
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
