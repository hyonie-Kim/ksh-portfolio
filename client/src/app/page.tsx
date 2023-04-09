import CarouselProject from "@/components/Project/CarouselProject";
import Hero from "@/components/About/Hero";
import MainProject from "@/components/Project/MainProject";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <MainProject /> */}
      {/* @ts-expect-error Async Server Component */}
      <CarouselProject />
    </>
  );
}
