import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | [AGENCY NAME]",
  description: "Get in touch with us for a free website audit or to start a new project.",
};

const ContactPage = () => {
  return (
    <main className="pt-24 md:pt-32">
      <Contact />
    </main>
  );
};

export default ContactPage;
