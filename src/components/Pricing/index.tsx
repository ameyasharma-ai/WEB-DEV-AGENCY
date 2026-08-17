"use client";
import Link from "next/link";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Starter",
    price: "₹7,500 – ₹10,000",
    description: "For businesses that need a clean, professional online presence.",
    note: "Best for getting your business online quickly.",
    features: [
      "1–3 pages",
      "Responsive design",
      "Template-based/customized design",
      "WhatsApp / contact CTA",
      "Basic deployment",
      "Client-provided content",
      "Limited revisions",
      "Basic setup",
    ],
    cta: "Start with Starter",
    link: "/contact",
    isRecommended: false,
  },
  {
    name: "Growth",
    price: "₹35,000 – ₹50,000",
    description: "For businesses that want their website to actively support growth.",
    note: "Our most popular starting point for businesses serious about their digital presence.",
    features: [
      "Custom UI design",
      "5–7 pages",
      "Conversion-focused structure",
      "Mobile optimization",
      "Performance optimization",
      "SEO fundamentals",
      "Analytics setup",
      "Lead/contact forms",
      "CTA and conversion optimization",
      "Deployment",
      "30 days post-launch support",
    ],
    cta: "Choose Growth",
    link: "/contact",
    isRecommended: true,
  },
  {
    name: "Premium",
    price: "₹75,000 – ₹1,50,000+",
    description: "For businesses that need a highly customized digital experience.",
    note: "Final pricing depends on scope, integrations, and complexity.",
    features: [
      "Deep discovery",
      "Custom design system",
      "Advanced interactions",
      "Advanced conversion optimization",
      "Analytics / BI integration",
      "Custom integrations",
      "Advanced SEO foundations",
      "Complex functionality",
      "Deployment",
      "Post-launch support",
    ],
    cta: "Discuss Your Project",
    link: "/contact",
    isRecommended: false,
  },
];

const values = [
  {
    title: "Design",
    description: "Interfaces designed to make your business look credible and memorable.",
  },
  {
    title: "Performance",
    description: "Fast, responsive experiences built for real users and real devices.",
  },
  {
    title: "Conversion",
    description: "Clearer journeys, stronger calls to action, and fewer points of friction.",
  },
  {
    title: "Data",
    description: "Analytics and measurement that help you understand what your website is actually doing.",
  },
];

const faqs = [
  {
    question: "Why don't you offer a ₹5,000 website?",
    answer: "We can build a simple website at a lower scope, which is why our Starter package exists. Our Growth and Premium projects go beyond simply putting pages online—they focus on design quality, performance, conversion, analytics, and the specific goals of the business.",
  },
  {
    question: "Can I request changes to a package?",
    answer: "Yes. Packages provide a starting scope, but projects can be customized based on your requirements. Additional functionality or scope may change the final price.",
  },
  {
    question: "Do you provide website hosting?",
    answer: "Hosting and deployment can be included depending on the project requirements. We'll recommend the appropriate setup during the project.",
  },
  {
    question: "Do you provide SEO?",
    answer: "Our Growth and Premium projects include foundational SEO considerations such as technical structure, performance, metadata, and search-friendly implementation. Ongoing SEO campaigns can be scoped separately.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes. Post-launch support is included according to the selected package, and ongoing maintenance or growth support can be arranged separately.",
  },
  {
    question: "How long does a website take?",
    answer: "Timeline depends on the scope, content readiness, feedback cycles, and technical requirements. We'll provide an estimated timeline before the project begins.",
  },
  {
    question: "Can you build something completely custom?",
    answer: "Yes. Custom projects can be scoped around advanced functionality, integrations, dashboards, e-commerce, and other requirements.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block text-sm font-bold tracking-widest text-primary uppercase mb-6">Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-dark dark:text-white leading-tight mb-8">
              Simple pricing. Serious websites.
            </h1>
            <p className="text-lg md:text-xl text-body-color dark:text-dark-6 font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
              Choose the level of website experience your business needs. From focused starter sites to fully custom digital experiences, we build around your goals—not just a list of pages.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-dark px-8 py-4 text-base font-bold text-white transition-all hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90">
                Get a Free Website Audit
              </Link>
              <Link href="/work" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-dark transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-dark-3">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pb-24 bg-white dark:bg-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`flex flex-col h-full rounded-3xl bg-white dark:bg-dark-2/50 border transition-all duration-300 p-8 md:p-10 ${
                  tier.isRecommended 
                    ? "border-primary shadow-2xl scale-100 lg:scale-[1.02] relative" 
                    : "border-gray-200 dark:border-dark-3 shadow-sm hover:shadow-xl hover:border-gray-300 dark:hover:border-dark-4"
                }`}
              >
                {tier.isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">{tier.name}</h3>
                <div className="text-3xl md:text-4xl font-extrabold text-dark dark:text-white mb-4">
                  {tier.price}
                </div>
                <p className="text-body-color dark:text-dark-6 font-medium mb-6 min-h-[48px]">
                  {tier.description}
                </p>
                
                <Link href={tier.link} className={`w-full inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold transition-all mb-8 ${
                  tier.isRecommended
                    ? "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20"
                    : "bg-gray-100 text-dark hover:bg-gray-200 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-4"
                }`}>
                  {tier.cta}
                </Link>

                <div className="space-y-4 flex-grow border-t border-gray-100 dark:border-dark-3 pt-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-sm font-medium text-dark dark:text-gray-300">
                      <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.isRecommended ? "text-primary" : "text-gray-400 dark:text-dark-5"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-tight pt-0.5">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-gray-500 dark:text-dark-6 mt-8 pt-6 border-t border-gray-100 dark:border-dark-3 text-center italic">
                  {tier.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Which Plan Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-dark-2">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark dark:text-white mb-6">
              Not sure which one is right for you?
            </h2>
            <p className="text-lg md:text-xl text-body-color dark:text-dark-6 font-medium mb-10">
              Tell us what you're trying to accomplish. We'll recommend the right level of solution based on your business, goals, and requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-dark px-8 py-4 text-base font-bold text-white transition-all hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90">
              Get a Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Value Differentiation Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark dark:text-white mb-6 leading-tight">
                You're not just paying for pages.
              </h2>
              <p className="text-lg md:text-xl text-body-color dark:text-dark-6 font-medium leading-relaxed">
                A website can simply exist—or it can work as part of your business. Our higher-tier projects combine design, performance, conversion thinking, analytics, and technical execution to create a stronger digital experience.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((val, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-3 border border-primary/20">0{idx + 1}</span>
                      {val.title}
                    </h3>
                    <p className="text-body-color dark:text-dark-6 font-medium pl-11">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Project Section */}
      <section className="py-24 bg-dark text-white border-t border-dark-3">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Have something more complex?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium mb-12 leading-relaxed">
              Not every project fits into a package. If you need a custom web application, advanced integrations, dashboards, e-commerce functionality, or a more involved digital experience, we'll scope the project around your requirements.
            </p>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-6 block border border-primary/30 px-6 py-2 rounded-full bg-primary/5">
                Custom pricing based on scope
              </span>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-dark transition-all hover:bg-gray-100 hover:scale-[1.02]">
                Discuss a Custom Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50 dark:bg-dark-2">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark dark:text-white mb-6">
                Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark border border-gray-200 dark:border-dark-3 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-dark dark:text-white pr-8">{faq.question}</span>
                    <span className={`flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}>
                      <svg className="w-5 h-5 text-gray-400 dark:text-dark-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-body-color dark:text-dark-6 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-3">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark dark:text-white mb-6">
              Your website should do more than exist.
            </h2>
            <p className="text-lg md:text-xl text-body-color dark:text-dark-6 font-medium mb-10">
              Let's find out what your current digital presence could be doing better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-dark px-8 py-4 text-base font-bold text-white transition-all hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90">
                Get a Free Website Audit
              </Link>
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-dark transition-all hover:bg-gray-100 dark:text-white dark:hover:bg-dark-3 border border-gray-200 dark:border-dark-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
