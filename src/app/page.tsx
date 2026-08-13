import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[AGENCY NAME] | Premium Web Development & Analytics",
  description: "We design and build high-performance websites and analytics systems that turn your digital presence into a growth asset.",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
