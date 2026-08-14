import About from "@/components/About";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `About Us | ${agencyConfig.name}`,
  description: "Learn more about our agency, our engineering-first approach, and how we help businesses grow.",
};

const AboutPage = () => {
  return (
    <main className="pt-[160px] md:pt-[180px]">
      <About />
    </main>
  );
};

export default AboutPage;
