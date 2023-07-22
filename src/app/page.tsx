import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* @ts-expect-error Async Server Component */}
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
