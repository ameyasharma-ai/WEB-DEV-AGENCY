import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | [AGENCY NAME]",
  description: "Learn more about our agency, our engineering-first approach, and how we help businesses grow.",
};

const AboutPage = () => {
  return (
    <main className="pt-24 md:pt-32">
      <About />
    </main>
  );
};

export default AboutPage;
