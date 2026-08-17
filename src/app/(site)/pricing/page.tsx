import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Pricing | ${agencyConfig.name}`,
  description: "Explore our website design and development pricing, from focused starter websites to custom digital experiences.",
};

const PricingPage = () => {
  return (
    <main className="pt-[160px] md:pt-[180px]">
      <Pricing />
    </main>
  );
};

export default PricingPage;
