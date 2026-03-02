import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import LogoMarquee from "@/components/LogoMarquee";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import SolutionsSection from "@/components/SolutionsSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><ServiceCards /></div>
      <LogoMarquee />
      <div id="about"><AboutSection /></div>
      <div id="case-studies"><ProcessSection /></div>
      <SolutionsSection />
      <Testimonials />
      <FAQSection />
      <div id="cta"><CTASection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
