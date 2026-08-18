import Link from "next/link";
import Image from "next/image";
import { agencyConfig } from "@/config/agency";
import FadeIn from "@/components/Common/FadeIn";

const Hero = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark pt-[160px] pb-16 md:pt-[180px] xl:pt-[220px] xl:pb-[100px] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 text-center lg:w-10/12 xl:w-8/12 mx-auto">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-dark dark:text-white leading-tight lg:leading-[1.1] break-words">
                Premium websites & funnels that <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 dark:from-gray-300 dark:to-gray-100">convert traffic into revenue.</span>
              </h1>
              <p className="mb-12 text-base sm:text-lg md:text-xl font-medium text-body-color dark:text-dark-6 max-w-2xl mx-auto px-4 sm:px-0">
                {agencyConfig.description}
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 px-4 sm:px-0">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-dark px-8 py-4 text-base font-medium text-white transition-all hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90"
                >
                  {agencyConfig.cta.primary}
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-dark transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-dark-3"
                >
                  {agencyConfig.cta.secondary}
                </Link>
              </div>
            </div>
            
            {/* Real Workspace Image */}
            <div className="mt-12 sm:mt-20 relative mx-auto max-w-[1000px] rounded-[32px] bg-gray-50/50 p-2 sm:p-4 dark:bg-dark-2/50 backdrop-blur-sm border border-gray-200/50 dark:border-dark-3/50 shadow-2xl">
              <div className="w-full rounded-2xl bg-gray-100 dark:bg-dark-3 overflow-hidden shadow-sm border border-gray-200 dark:border-dark-4 flex items-center justify-center">
                <Image 
                  src="/images/hero_nomads.png" 
                  alt="Premium Workspace"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
