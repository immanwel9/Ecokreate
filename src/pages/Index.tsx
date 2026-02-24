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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServiceCards />
      <LogoMarquee />
      <AboutSection />
      <ProcessSection />
      <SolutionsSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
