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
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `${agencyConfig.name} | Premium Web Development & Analytics`,
  description: agencyConfig.description,
  openGraph: {
    title: `${agencyConfig.name} | Premium Web Development & Analytics`,
    description: agencyConfig.description,
    url: "https://yourdomain.com",
    siteName: agencyConfig.name,
    images: [
      {
        url: "/images/hero_workspace.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${agencyConfig.name} | Premium Web Development & Analytics`,
    description: agencyConfig.description,
    images: ["/images/hero_workspace.png"],
  },
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
