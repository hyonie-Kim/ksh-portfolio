import CarouselProject from "@/components/Project/CarouselProject";
import Hero from "@/components/About/Hero";
import MainProject from "@/components/Project/MainProject";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/Contact/ContactForm";

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
