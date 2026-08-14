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
    <main className="pt-24 md:pt-32 pb-24 bg-white dark:bg-dark">
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
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-gray-100 dark:border-dark-3 bg-gray-50 dark:bg-dark-2">
           <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083713.png" alt="Nomads elixir Storefront" fill className="object-cover object-top" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">How the Project Was Developed</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed mb-6">
                The Nomads elixir storefront was developed on Shopify, leveraging theme customization for a clean, conversion-oriented product experience. We implemented tailored product detail sections, collection layouts, and content blocks to highlight essential oils and wellness benefits.
              </p>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                Performance was prioritized with optimized imagery, structured metadata, and minimal script overhead to ensure a fast and accessible shopping experience across devices.
              </p>
            </section>

            {/* In-content Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083654.png" alt="Nomads elixir Collections" fill className="object-cover object-top" />
               </div>
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083636.png" alt="Nomads elixir Product Details" fill className="object-cover object-top" />
               </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Optimized for Conversion</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed mb-6">
                A key focus of this build was reducing friction in the purchasing journey. The site architecture was streamlined to guide users effortlessly from education about essential oils directly to the checkout flow.
              </p>
            </section>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-xl">
               <Image src="/images/projects/nomadselixir/Screenshot_2026-08-14_083614.png" alt="Nomads elixir Homepage" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-gray-50 dark:bg-dark-2 rounded-3xl p-8 border border-gray-100 dark:border-dark-3 shadow-sm">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6 border-b border-gray-200 dark:border-dark-4 pb-4">Key Technologies Used</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Platform</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Shopify Theme</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Frontend Stack</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">HTML, CSS, JavaScript</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Focus Areas</h4>
                  <ul className="text-body-color dark:text-dark-6 font-medium space-y-1">
                    <li>Theme Customization</li>
                    <li>Performance Optimization</li>
                    <li>Conversion Rate Optimization</li>
                  </ul>
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
