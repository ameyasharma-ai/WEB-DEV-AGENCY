import React from 'react';
import FadeIn from "@/components/Common/FadeIn";

const services = [
  {
    title: "High-Converting Websites",
    description: "Lightning-fast, beautifully designed marketing websites built with Next.js and React to instantly build trust and capture leads.",
    features: [
      "Custom Web Development",
      "Next.js & React Architectures",
      "Performance Optimization",
      "SEO Foundations"
    ]
  },
  {
    title: "E-Commerce & Sales Funnels",
    description: "We architect Shopify storefronts and dedicated sales funnels that guide your traffic seamlessly from discovery to purchase.",
    features: [
      "Shopify Theme Development",
      "Landing Page Funnels",
      "Conversion Rate Optimization",
      "Mobile-First Buyer Journeys"
    ]
  },
  {
    title: "Data & AI Integrations",
    description: "We plug powerful analytics and custom AI APIs into your infrastructure so you can make decisions based on real data.",
    features: [
      "Google Analytics Setup",
      "Custom API Integrations",
      "Predictive AI Models",
      "Data Dashboards"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-dark-2 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.1}>
          <div className="mb-16 md:mb-24 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6 leading-tight">
              We build websites, funnels, and apps that drive measurable outcomes.
            </h2>
            <p className="text-lg sm:text-xl text-body-color dark:text-dark-6 font-medium">
              We are an engineering-first agency. We combine cutting-edge tech (React, Next.js, AI) with proven conversion psychology to give your business an unfair advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group rounded-3xl bg-white dark:bg-dark p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-3 flex flex-col h-full"
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
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
