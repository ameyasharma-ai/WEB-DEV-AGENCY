const testimonials = [
  {
    quote: "Vanguard completely reimagined our digital presence. We saw a 40% increase in lead conversion within the first month of launching the new site.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
  },
  {
    quote: "They don't just build websites, they engineer growth. The custom analytics dashboard they developed finally gave us clarity on our customer journey.",
    author: "David Chen",
    role: "Founder, Apex Retail",
  },
  {
    quote: "The level of engineering precision and design taste is unmatched. Our enterprise clients immediately noticed the difference in our brand positioning.",
    author: "Marcus Thorne",
    role: "Director of Product, Nexus Systems",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-3">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-6">
            The results speak for themselves.
          </h2>
          <p className="text-lg sm:text-xl text-body-color dark:text-dark-6 font-medium">
            We partner with ambitious companies to build digital products that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col h-full border-l-2 border-primary/20 dark:border-primary/10 pl-6 md:pl-8">
              <svg className="w-8 h-8 text-primary/40 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-lg md:text-xl font-medium text-dark dark:text-white mb-8 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-dark dark:text-white">{testimonial.author}</p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
