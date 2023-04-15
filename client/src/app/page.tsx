import CarouselProject from "@/components/Project/CarouselProject";
import Hero from "@/components/About/Hero";
import MainProject from "@/components/Project/MainProject";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      {/* @ts-expect-error Async Server Component */}
      <ProjectsSection />
      {/* <MainProject /> */}
    </main>
  );
}
