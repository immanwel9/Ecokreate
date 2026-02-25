import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
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
  const [visible, setVisible] = useState(true);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Only apply auto-hide on non-landing pages
      if (location.pathname !== "/") {
        setVisible(true);
        
        // Clear existing timer
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current);
        }
        
        // Set timer to hide navbar after 3 seconds of no scrolling
        scrollTimerRef.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      } else {
        setVisible(true);
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <img 
            src="/src/assets/Gemini_Generated_Image_9yfzqb9yfzqb9yfz (1).png" 
            alt="Logo" 
            className="w-[150px]"
          />
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

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button
            className="rounded-full px-6"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
