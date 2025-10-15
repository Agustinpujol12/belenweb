import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
