import React from 'react';

const services = [
  {
    title: "Web Design & Development",
    description: "High-performance, high-converting marketing websites, web applications, and e-commerce platforms engineered for speed and SEO.",
    features: [
      "Custom Web Applications",
      "Marketing Websites",
      "Performance Optimization",
      "SEO Foundations"
    ]
  },
  {
    title: "Digital Growth",
    description: "Clear digital positioning and strategy based on your business objectives. We build the engine that drives your growth.",
    features: [
      "Website Audits",
      "Conversion Optimization",
      "Analytics Implementation",
      "Digital Strategy"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-dark-2 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6 leading-tight">
            Built for businesses that take their digital presence seriously.
          </h2>
          <p className="text-lg sm:text-xl text-body-color dark:text-dark-6 font-medium">
            We don't assemble websites from templates. We design, build, and optimize digital assets that produce measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-3xl bg-white dark:bg-dark p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-3 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-body-color dark:text-dark-6 mb-8 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 pt-6 border-t border-gray-100 dark:border-dark-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-dark dark:text-gray-300">
                    <svg className="w-4 h-4 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
