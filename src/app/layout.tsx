import { headers } from "next/headers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToHash from "@/components/Common/ScrollToHash";
import WhatsAppButton from "@/components/WhatsAppButton";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import Providers from "./providers";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arclanestudios.space"),
  title: {
    template: `%s | ${agencyConfig.name}`,
    default: `${agencyConfig.name} | Premium Web Development`,
  },
  description: agencyConfig.description,
  keywords: [
    "Web Development",
    "Web Agency",
    "Premium Websites",
    "Arclane Studios",
    "Next.js",
    "React",
    "E-commerce",
    "Shopify",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = (headersList.get("host") || "").toLowerCase().split(":")[0];
  const isSubdomain =
    host.endsWith(".arclanestudios.space") &&
    host !== "arclanestudios.space" &&
    host !== "www.arclanestudios.space";

  return (
    <html suppressHydrationWarning className="scroll-pt-[90px] md:scroll-pt-[110px]" lang="en">
      <body>
        <Providers>
          <div className="isolate">
            {!isSubdomain && <Header />}

            {children}

            {!isSubdomain && (
              <>
                <Footer />
                <ScrollToTop />
                <ScrollToHash />
                <WhatsAppButton />
              </>
            )}
          </div>
        </Providers>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  );
}
