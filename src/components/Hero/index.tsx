import Link from "next/link";
import Image from "next/image";
import { agencyConfig } from "@/config/agency";
import FadeIn from "@/components/Common/FadeIn";

const Hero = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark pt-[130px] pb-16 md:pt-[150px] xl:pt-[180px] xl:pb-[100px] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 text-center lg:w-10/12 xl:w-9/12 mx-auto">
            <div className="mx-auto max-w-4xl text-center mb-12">
              {/* Apple-style subtle badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
                  Elevated Web Design & Engineering
                </span>
              </div>

              <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] text-zinc-950 dark:text-white leading-[1.08] break-words">
                Premium websites & funnels that{" "}
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent inline-block">
                  convert traffic into revenue.
                </span>
              </h1>
              <p className="mb-12 text-base sm:text-lg md:text-xl font-normal text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed tracking-tight">
                {agencyConfig.description}
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 px-4 sm:px-0">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100"
                >
                  {agencyConfig.cta.primary}
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50/80 px-8 py-4 text-base font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-800"
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
