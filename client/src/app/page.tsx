import CarouselProject from "@/components/CarouselProject";
import Hero from "@/components/Hero";
import MainProject from "@/components/MainProject";

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
