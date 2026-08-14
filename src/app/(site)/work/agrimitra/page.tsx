import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `AgriMitra Case Study | ${agencyConfig.name}`,
  description: "AI-based platform to predict crop yields using historical agricultural data, weather patterns, and soil health metrics.",
};

const AgriMitraCaseStudy = () => {
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
            AgriMitra
          </h1>
          <p className="text-xl md:text-2xl text-body-color dark:text-dark-6 font-medium leading-relaxed mb-8">
            AI-based platform to predict crop yields using historical agricultural data, weather patterns, and soil health metrics.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://agri-mitra-sih.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-dark px-8 py-3 text-sm font-medium text-white hover:bg-dark/90 transition-all dark:bg-white dark:text-dark dark:hover:bg-white/90">
              Open Live Site
            </a>
            <a href="https://github.com/closeonop/AgriMitraSIH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-dark-4 bg-transparent px-8 py-3 text-sm font-medium text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-dark-3 transition-all">
              View Repository
            </a>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-gray-100 dark:border-dark-3 bg-gray-50 dark:bg-dark-2">
           <Image src="/images/projects/agrimitra/Screenshot_2026-08-14_082645.png" alt="AgriMitra Dashboard" fill className="object-cover object-top" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Short Explanation</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                AgriMitra consolidates weather, soil and historical crop data in a modern web app to forecast yields and assist farm planning. The application focuses on clean UX, responsive dashboards, and reliable integrations with external APIs for up-to-date insights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Project Goals</h2>
              <ul className="space-y-4 text-lg text-body-color dark:text-dark-6">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Aggregate multi-source weather and soil data into a unified view.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Provide yield predictions and visualizations for decision making.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Offer fast, accessible, multilingual UI for diverse users.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-2xl leading-none">•</span>
                  Structure a scalable frontend with robust state and routing.
                </li>
              </ul>
            </section>

            {/* In-content Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/agrimitra/Screenshot_2026-08-14_082614.png" alt="AgriMitra UI" fill className="object-cover" />
               </div>
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-md">
                 <Image src="/images/projects/agrimitra/Screenshot_2026-08-14_082716.png" alt="AgriMitra Charts" fill className="object-cover" />
               </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Development Details</h2>
              <p className="text-lg text-body-color dark:text-dark-6 leading-relaxed">
                The frontend is built with React and TypeScript, scaffolded via Vite for a fast DX. Tailwind CSS and MUI power styling and components, while Framer Motion adds subtle motion to improve perception of speed and interactivity. Data fetching and caching rely on React Query, forms are handled with React Hook Form, and Axios integrates external APIs. Internationalization support includes English, Hindi, and Punjabi using i18next and react-i18next. Charts are implemented via Chart.js and Recharts to visualize historical trends and forecasts.
              </p>
            </section>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-100 dark:border-dark-3 shadow-xl">
               <Image src="/images/projects/agrimitra/Screenshot_2026-08-14_082651.png" alt="AgriMitra Data Visualization" fill className="object-cover" />
            </div>

          </div>

          {/* Sidebar / Meta */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 bg-gray-50 dark:bg-dark-2 rounded-3xl p-8 border border-gray-100 dark:border-dark-3 shadow-sm">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-6 border-b border-gray-200 dark:border-dark-4 pb-4">Tech Stack Used</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Frontend & Build</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">React 18, TypeScript 5, Vite 4</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Styling & UI</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Tailwind CSS, Material-UI, Framer Motion, Radix UI</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">State & Data</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">React Query, React Hook Form, Axios</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Internationalization</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">i18next (English, Hindi, Punjabi)</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Charts</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">Chart.js, Recharts</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">APIs Integrations</h4>
                  <p className="text-body-color dark:text-dark-6 font-medium">OpenWeatherMap, OpenCage Geocoding, Agromonitoring, Ambee Soil</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default AgriMitraCaseStudy;
