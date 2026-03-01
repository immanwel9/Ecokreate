import { useNavigate } from "react-router-dom";
import logo from "@/assets/Gemini_Generated_Image_9yfzqb9yfzqb9yfz (1).png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border py-16 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <button onClick={() => navigate("/")} className="mb-4">
              <img src={logo} alt="Ecokreate Logo" className="w-[120px]" />
            </button>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Crafting unforgettable digital experiences through strategy, design, and storytelling.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigate</h4>
            <div className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    if (link === "Contact") navigate("/contact");
                    else {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }
                  }}
                  className="block text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Legal</h4>
            <div className="space-y-3">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <a key={link} href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ecokreate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
