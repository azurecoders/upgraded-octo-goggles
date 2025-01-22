import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Timeline />
      {/* <About /> */}
    </>
  );
}
