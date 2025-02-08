import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import VideoComponentPage from "@/components/VideoComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <VideoComponentPage />
      <Stats />
      <Testimonial />
    </>
  );
}
