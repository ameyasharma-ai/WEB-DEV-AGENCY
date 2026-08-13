import Link from "next/link";
import { agencyConfig } from "@/config/agency";

const Hero = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-dark pt-[120px] pb-16 md:pt-[150px] xl:pt-[200px] xl:pb-[100px] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 text-center lg:w-10/12 xl:w-8/12 mx-auto">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-dark dark:text-white sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.1]">
                Websites that make businesses <span className="text-gray-400">impossible to ignore.</span>
              </h1>
              <p className="mb-12 text-lg md:text-xl font-medium text-body-color dark:text-dark-6 max-w-2xl mx-auto">
                {agencyConfig.description}
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-dark px-8 py-4 text-base font-medium text-white transition-all hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90"
                >
                  {agencyConfig.cta.primary}
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-dark transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-dark-3"
                >
                  {agencyConfig.cta.secondary}
                </Link>
              </div>
            </div>
            
            {/* Minimalist Visual Representation of Quality */}
            <div className="mt-20 relative mx-auto max-w-[1000px] rounded-[32px] bg-gray-50/50 p-4 dark:bg-dark-2/50 backdrop-blur-sm border border-gray-200/50 dark:border-dark-3/50 shadow-2xl">
              <div className="relative aspect-[16/9] w-full rounded-2xl bg-white dark:bg-dark-3 overflow-hidden shadow-sm border border-gray-100 dark:border-dark-4 group">
                <div className="absolute top-0 w-full h-8 bg-gray-100 dark:bg-dark-2 flex items-center px-4 space-x-2 border-b border-gray-200 dark:border-dark-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                </div>
                {/* Abstract Data/Web Visualization */}
                <div className="absolute inset-0 pt-8 flex p-6 gap-6">
                  <div className="w-1/3 flex flex-col gap-4">
                    <div className="w-1/2 h-6 bg-gray-200 dark:bg-dark-4 rounded-md animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-100 dark:bg-dark-5 rounded-md"></div>
                    <div className="w-4/5 h-4 bg-gray-100 dark:bg-dark-5 rounded-md"></div>
                    <div className="w-full h-48 bg-gray-50 dark:bg-dark-2 rounded-xl border border-gray-100 dark:border-dark-4 mt-auto p-4 flex items-end gap-2">
                       <div className="w-1/4 bg-blue-100 dark:bg-blue-900/30 rounded-t h-1/3 group-hover:h-2/3 transition-all duration-700 ease-in-out"></div>
                       <div className="w-1/4 bg-blue-200 dark:bg-blue-800/40 rounded-t h-1/2 group-hover:h-4/5 transition-all duration-700 delay-100 ease-in-out"></div>
                       <div className="w-1/4 bg-blue-300 dark:bg-blue-700/50 rounded-t h-2/3 group-hover:h-full transition-all duration-700 delay-200 ease-in-out"></div>
                       <div className="w-1/4 bg-blue-400 dark:bg-blue-600/60 rounded-t h-4/5 group-hover:h-1/2 transition-all duration-700 delay-300 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="w-2/3 bg-gray-50 dark:bg-dark-2 rounded-xl border border-gray-100 dark:border-dark-4 p-8 relative overflow-hidden">
                    <div className="w-32 h-32 rounded-full bg-primary/5 blur-3xl absolute top-10 left-10"></div>
                    <div className="w-full h-full border border-dashed border-gray-300 dark:border-dark-4 rounded-lg flex items-center justify-center">
                       <span className="text-gray-400 dark:text-dark-6 text-sm font-medium uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">Premium Execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
