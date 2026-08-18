import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Our Work | ${agencyConfig.name}`,
  description: "View our portfolio of premium web development and data analytics projects.",
};

const WorkPage = () => {
  return (
    <main className="pt-[160px] md:pt-[180px]">
      <Portfolio />
    </main>
  );
};

export default WorkPage;
