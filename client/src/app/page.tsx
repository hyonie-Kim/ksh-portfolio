import Hero from "@/components/Hero";
import MainProject from "@/components/MainProject";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <MainProject />
    </>
  );
}
