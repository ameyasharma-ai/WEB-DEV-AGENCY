import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container mx-auto px-4">
        <div className="wow fadeInUp flex items-center" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-extrabold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Engineering-first.<br/>
                  Business-focused.<br/>
                  Data-aware.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  We don't assemble websites from templates and call it development. 
                  Every page has a purpose beyond looking good. We build analytics into the growth loop.
                  <br />
                  <br />
                  Modern infrastructure, optimized assets and performance-conscious development. Your website should not become obsolete six months after launch.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-primary/90"
                >
                  Start a Conversation
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <div className="relative h-full w-full rounded-2xl bg-gray-50 dark:bg-dark-3 border border-gray-100 dark:border-dark-4 overflow-hidden flex items-center justify-center p-6 shadow-inner">
                       <svg className="w-full h-full max-h-64 text-gray-300 dark:text-dark-4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <rect x="20" y="40" width="160" height="100" rx="4" fill="currentColor" opacity="0.2"/>
                         <rect x="30" y="50" width="140" height="80" rx="2" fill="currentColor" opacity="0.4"/>
                         <path d="M100 140L80 170H120L100 140Z" fill="currentColor" opacity="0.2"/>
                         <rect x="60" y="170" width="80" height="10" rx="2" fill="currentColor" opacity="0.3"/>
                         
                         <circle cx="160" cy="70" r="15" fill="var(--color-primary, #3b82f6)" opacity="0.8"/>
                         <path d="M40 120C60 100 80 140 100 110C120 80 140 120 160 90" stroke="var(--color-primary, #3b82f6)" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                       </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <div className="relative h-full w-full rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden shadow-2xl flex flex-col">
                       <div className="h-8 w-full bg-gray-950 flex items-center px-4 space-x-2 border-b border-gray-800">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                       </div>
                       <div className="p-4 flex-1">
                          <svg className="w-full h-full max-h-32" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="5" width="25" height="4" rx="2" fill="#e2e8f0" opacity="0.6"/>
                            <rect x="30" y="5" width="40" height="4" rx="2" fill="#3b82f6" opacity="0.8"/>
                            <rect x="10" y="20" width="35" height="4" rx="2" fill="#e2e8f0" opacity="0.4"/>
                            <rect x="10" y="35" width="60" height="4" rx="2" fill="#3b82f6" opacity="0.5"/>
                            <rect x="10" y="50" width="20" height="4" rx="2" fill="#e2e8f0" opacity="0.6"/>
                            <rect x="35" y="50" width="30" height="4" rx="2" fill="#10b981" opacity="0.7"/>
                          </svg>
                       </div>
                    </div>
                  </div>
                  <div className="bg-primary relative z-10 mb-4 flex items-center justify-center overflow-hidden rounded-2xl px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
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

export default About;
