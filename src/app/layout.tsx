import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";
import { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arclanestudios.space"),
  title: {
    template: `%s | ${agencyConfig.name}`,
    default: `${agencyConfig.name} | Premium Web Development`,
  },
  description: agencyConfig.description,
  keywords: ["Web Development", "Web Agency", "Premium Websites", "Arclane Studios", "Next.js", "React", "E-commerce", "Shopify"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="!scroll-smooth scroll-pt-[140px] md:scroll-pt-[160px]" lang="en">
      <body>
        <Providers>
          <div className="isolate">
            <Header />

            {children}

            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
          </div>
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  );
}
