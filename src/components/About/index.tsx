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

            <div className="w-full px-4 lg:w-5/12 lg:ml-auto">
              <div className="flex flex-col gap-6">
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-dark-3 bg-white dark:bg-dark-2">
                  <Image
                    src="/images/about_agrimitra.png"
                    alt="Digital architecture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-dark-3 bg-white dark:bg-dark-2">
                    <Image
                      src="/images/about_kanyaadhan.png"
                      alt="Modern code editor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-primary flex flex-col justify-center items-center rounded-[2rem] p-4 sm:p-6 shadow-xl text-center text-white aspect-square">
                    <span className="block text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-extrabold mb-2">
                      09
                    </span>
                    <span className="block text-xs sm:text-sm font-bold tracking-wider uppercase opacity-90">
                      Years of<br />Experience
                    </span>
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
