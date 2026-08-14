import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name: "Nomads elixir",
    slug: "nomadselixir",
    type: "Live Project",
    industry: "E-Commerce / Wellness",
    problem: "Needed a clean, conversion-oriented Shopify storefront to highlight essential oils.",
    solution: "A custom Shopify theme with tailored sections, optimized imagery, and fast performance.",
    image: "/images/projects/nomadselixir/main.png",
    imageColor: "bg-amber-100 dark:bg-amber-900/20"
  },
  {
    name: "AgriMitra",
    slug: "agrimitra",
    type: "Live Project",
    industry: "Agritech / AI",
    problem: "Lack of consolidated weather and soil data for accurate crop yield prediction.",
    solution: "A scalable, multilingual AI-based platform with interactive dashboards and API integrations.",
    image: "/images/projects/agrimitra/main.png",
    imageColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    name: "Kanyaadhan",
    slug: "kanyaadhan",
    type: "Live Project",
    industry: "E-Commerce / Jewelry",
    problem: "Needed a refined shopping experience for bespoke bridal jewelry.",
    solution: "A customized Shopify theme featuring specialized product discovery and streamlined checkout.",
    image: "/images/projects/kanyaadhan/main.png",
    imageColor: "bg-emerald-100 dark:bg-emerald-900/20"
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6">
              The Work
            </h2>
            <p className="text-xl text-body-color dark:text-dark-6 font-medium">
              We design and build digital experiences that perform. 
              Here is a selection of our recent concept work demonstrating our technical and visual capabilities.
            </p>
          </div>
          <div>
            <Link href="/work" className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-dark dark:hover:text-white transition-colors">
              <span>View All Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.slug ? `/work/${project.slug}` : "/work"} className="group cursor-pointer block w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
              <div className={`w-full aspect-[4/3] rounded-2xl ${project.imageColor} mb-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl border border-gray-100 dark:border-dark-3`}>
                <div className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-dark-2/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-dark dark:text-white uppercase tracking-wider">
                  {project.type}
                </div>
                
                {project.image ? (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute top-16 left-8 right-8 bottom-[-20px] bg-white dark:bg-dark-2 rounded-t-xl shadow-lg border border-gray-200 dark:border-dark-4 overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                     <div className="w-full h-6 border-b border-gray-100 dark:border-dark-3 flex items-center px-3 space-x-1.5">
                       <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                       <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-dark-4"></div>
                     </div>
                     <div className="p-4 opacity-50">
                       <div className="w-1/3 h-4 bg-gray-200 dark:bg-dark-4 rounded mb-4"></div>
                       <div className="w-full h-24 bg-gray-100 dark:bg-dark-5 rounded mb-4"></div>
                       <div className="w-2/3 h-2 bg-gray-200 dark:bg-dark-4 rounded"></div>
                     </div>
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-widest">{project.industry}</p>
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="space-y-2">
                  <p className="text-body-color dark:text-dark-6 text-sm">
                    <strong className="text-dark dark:text-white">Problem:</strong> {project.problem}
                  </p>
                  <p className="text-body-color dark:text-dark-6 text-sm">
                    <strong className="text-dark dark:text-white">Solution:</strong> {project.solution}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
