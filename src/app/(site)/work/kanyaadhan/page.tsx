import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Kanyaadhan Case Study | ${agencyConfig.name}`,
  description: "Custom Bridal jewellery e-commerce website built on Shopify.",
};

const KanyaadhanCaseStudy = () => {
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
            Kanyaadhan
          </h1>
          <p className="text-xl md:text-2xl text-body-color dark:text-dark-6 font-medium leading-relaxed mb-8">
            Custom Bridal jewellery e-commerce website
          </p>
          {/* Missing URL for live site, omitting button to avoid broken links */}
        </div>

        {/* Main Cover Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-gray-100 dark:border-dark-3 bg-gray-50 dark:bg-dark-2">
           <Image src="/images/projects/kanyaadhan/Screenshot_2026-08-14_084313.png" alt="Kanyaadhan Storefront" fill className="object-cover object-top" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Short Explanation</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                Kanyaadhan is a bespoke bridal jewellery e-commerce platform built on Shopify. The project focuses on a refined shopping experience with custom theme work, optimized product discovery, and streamlined checkout, tailored for high-quality imagery and mobile-first buyers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Project Goals</h2>
              <ul className="space-y-4 text-lg text-body-color dark:text-dark-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Design a tasteful, high-conversion storefront for bridal jewellery.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Enable fast product browsing with collection filters and rich media.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Customize theme sections for editorial storytelling and brand trust.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Ensure accessibility, mobile performance, and SEO fundamentals.
                </li>
              </ul>
            </section>

            {/* In-content Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/kanyaadhan/Screenshot_2026-08-14_084427.png" alt="Kanyaadhan Collections" fill className="object-cover object-top" />
               </div>
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/kanyaadhan/Screenshot_2026-08-14_084337.png" alt="Kanyaadhan Product Details" fill className="object-cover object-top" />
               </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Development Details</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                The site was developed by extending a Shopify theme with bespoke Liquid templates, section blocks, and metafields for flexible content. We implemented custom product galleries, variant selectors, and cart interactions using JavaScript. CSS and theme settings were tuned for consistent spacing, typography, and imagery across collections. The result is a performant, brand-aligned experience that elevates product storytelling and checkout clarity.
              </p>
            </section>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-xl">
               <Image src="/images/projects/kanyaadhan/Screenshot_2026-08-14_084415.png" alt="Kanyaadhan Homepage" fill className="object-cover object-top" />
            </div>

          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-gray-50 dark:bg-dark-2 rounded-3xl p-8 border border-gray-100 dark:border-dark-3 shadow-sm">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6 border-b border-gray-200 dark:border-dark-4 pb-4">Tech Stack Used</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Platform</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Shopify Theme</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Frontend Stack</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">HTML, CSS, JavaScript, Liquid</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Focus Areas</h4>
                  <ul className="text-body-color dark:text-dark-6 font-medium space-y-1">
                    <li>Bespoke Liquid Templates</li>
                    <li>Editorial Storytelling</li>
                    <li>Mobile Performance</li>
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

export default KanyaadhanCaseStudy;
