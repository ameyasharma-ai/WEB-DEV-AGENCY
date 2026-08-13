import React from 'react';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand the business, audience and goals."
    },
    {
      num: "02",
      title: "Design",
      desc: "Create the visual direction and user experience."
    },
    {
      num: "03",
      title: "Build",
      desc: "Engineer the website with modern technologies and performance in mind."
    },
    {
      num: "04",
      title: "Launch",
      desc: "Deploy, optimize and validate."
    },
    {
      num: "05",
      title: "Measure",
      desc: "Use analytics to understand what happens after launch."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-white dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6">
            The Process
          </h2>
          <p className="text-xl text-body-color dark:text-dark-6 font-medium max-w-2xl">
            A systematic approach to building premium digital experiences that perform.
          </p>
        </div>

        <div className="relative">
          {/* Progress line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-[2px] bg-gray-100 dark:bg-dark-3">
             <div className="absolute top-0 left-0 h-full bg-primary/20 w-1/3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col relative group">
                <div className="w-24 h-24 lg:w-20 lg:h-20 rounded-full bg-gray-50 dark:bg-dark-2 border border-gray-200 dark:border-dark-3 flex items-center justify-center mb-6 text-2xl font-bold text-dark dark:text-white transition-transform group-hover:scale-110 shadow-sm mx-auto lg:mx-0">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-body-color dark:text-dark-6 text-sm text-center lg:text-left leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
