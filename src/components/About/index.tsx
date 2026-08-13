import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
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
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-4">
                      <Image
                        src="/images/about_architecture.png"
                        alt="Digital architecture and wireframe visualization"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-4">
                      <Image
                        src="/images/about_code.png"
                        alt="Modern code editor with syntax highlighting"
                        fill
                        className="object-cover"
                      />
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
