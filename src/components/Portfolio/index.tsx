import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name: "Fintech Dashboard",
    type: "Studio Concept",
    industry: "Financial Services",
    problem: "Complex data presentation was leading to user drop-off.",
    solution: "A streamlined, intuitive dashboard focusing on actionable insights.",
    imageColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    name: "E-Commerce Platform",
    type: "Studio Concept",
    industry: "Retail",
    problem: "Slow load times and confusing navigation reduced conversions.",
    solution: "A high-performance Next.js storefront with sub-second transitions.",
    imageColor: "bg-purple-100 dark:bg-purple-900/20"
  },
  {
    name: "Corporate Marketing Site",
    type: "Studio Concept",
    industry: "B2B SaaS",
    problem: "The website failed to communicate enterprise-level trust.",
    solution: "A complete brand repositioning and Apple-level visual redesign.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Image Placeholder */}
              <div className={`w-full aspect-[4/3] rounded-2xl ${project.imageColor} mb-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl border border-gray-100 dark:border-dark-3`}>
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-dark-2/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-dark dark:text-white uppercase tracking-wider">
                  {project.type}
                </div>
                
                {/* Minimal browser frame for preview */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
