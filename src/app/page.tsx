import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import FadeInSection from "./components/FadeInSection";
import LifeGallery from "./components/LifeGallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section id="about" className="scroll-mt-20">
        <FadeInSection delay={0.1}>
          <AboutSection />
        </FadeInSection>
      </section>

      <section id="services" className="scroll-mt-20">
        <FadeInSection delay={0.2}>
          <ServicesSection />
        </FadeInSection>
      </section>

      <section id="projects" className="scroll-mt-20">
        <FadeInSection delay={0.3}>
          <PortfolioSection />
        </FadeInSection>
      </section>

      <section id="skills" className="scroll-mt-20">
        <FadeInSection delay={0.4}>
          <ExperienceSection />
        </FadeInSection>
      </section>

      <section id="lifegallery" className="scroll-mt-20">
        <FadeInSection delay={0.5}>
          <LifeGallery />
        </FadeInSection>
      </section>

      <section id="contact" className="scroll-mt-20">
        <FadeInSection delay={0.5}>
          <ContactSection />
        </FadeInSection>
      </section>

      {/* Other sections here */}
    </>
  );
}
