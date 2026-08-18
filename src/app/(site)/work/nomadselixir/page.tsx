import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Nomads elixir Case Study | ${agencyConfig.name}`,
  description: "Essential oil website storefront developed on Shopify, leveraging theme customization for a clean, conversion-oriented product experience.",
};

const NomadsElixirCaseStudy = () => {
  return (
    <main className="pt-[160px] md:pt-[180px] pb-24 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/work" className="inline-flex items-center space-x-2 text-body-color hover:text-primary transition-colors font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark dark:text-white tracking-tight mb-6">
            Nomads elixir
          </h1>
          <p className="text-xl md:text-2xl text-body-color dark:text-dark-6 font-medium leading-relaxed mb-8">
            Essential oil website storefront developed on Shopify, leveraging theme customization for a clean, conversion-oriented product experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://nomadselixir.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-dark px-8 py-3 text-sm font-medium text-white hover:bg-dark/90 transition-all dark:bg-white dark:text-dark dark:hover:bg-white/90">
              Open Live Site
            </a>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="w-full rounded-3xl overflow-hidden mb-20 shadow-2xl border border-gray-100 dark:border-dark-3 bg-gray-50 dark:bg-dark-2">
           <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083614.png" alt="Nomads elixir Storefront" width={1920} height={1080} className="w-full h-auto object-contain" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Short Explanation</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                Nomads elixir is a high-converting e-commerce storefront dedicated to premium essential oils. The platform focuses on educating customers about wellness benefits while ensuring a frictionless purchasing journey. Built on Shopify, it utilizes a custom-designed theme that balances aesthetics with robust e-commerce functionality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Project Goals</h2>
              <ul className="space-y-4 text-lg text-body-color dark:text-dark-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Create a visually immersive experience that highlights the purity of essential oils.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Optimize the conversion funnel from product discovery to checkout.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Ensure rapid page load times and mobile-first responsiveness.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Implement tailored collection layouts for seamless inventory browsing.
                </li>
              </ul>
            </section>

            {/* In-content Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md bg-gray-50 dark:bg-dark-2">
                 <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083654.png" alt="Nomads elixir Collections" width={960} height={720} className="w-full h-auto object-contain" />
               </div>
               <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md bg-gray-50 dark:bg-dark-2">
                 <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083636.png" alt="Nomads elixir Product Details" width={960} height={720} className="w-full h-auto object-contain" />
               </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Development Details</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                The storefront was engineered using Shopify's modern theme architecture (Liquid, HTML5, CSS3, Vanilla JavaScript). We heavily customized the template to introduce specialized product detail sections, dynamic content blocks, and optimized imagery. Performance was a key focus, achieved by minimizing script overhead, lazy loading images, and structuring metadata for maximum SEO visibility. The resulting platform delivers a premium, app-like shopping experience directly in the browser.
              </p>
            </section>
            
            <div className="w-full rounded-3xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-xl bg-gray-50 dark:bg-dark-2">
               <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083713.png" alt="Nomads elixir Homepage" width={1920} height={1080} className="w-full h-auto object-contain" />
            </div>

          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-gray-50 dark:bg-dark-2 rounded-3xl p-8 border border-gray-100 dark:border-dark-3 shadow-sm">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6 border-b border-gray-200 dark:border-dark-4 pb-4">Tech Stack Used</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Platform & Build</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Shopify OS 2.0, Liquid</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Frontend Stack</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">HTML5, Custom CSS, Vanilla JavaScript</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Performance</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Lazy Loading, Image Optimization, Minified Scripts</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Focus Areas</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Theme Customization, Conversion Optimization</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default NomadsElixirCaseStudy;
