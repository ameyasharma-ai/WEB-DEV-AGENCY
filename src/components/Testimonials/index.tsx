const testimonials = [
  {
    quote: "Arclane Studios completely reimagined our digital presence. We saw a 40% increase in lead conversion within the first month of launching the new site.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col h-full bg-white dark:bg-dark-2/50 rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-dark-3 transition-colors hover:shadow-lg dark:hover:bg-dark-2">
              <p className="text-lg md:text-xl font-medium text-dark dark:text-white mb-10 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 flex items-center justify-center text-lg font-bold text-dark dark:text-white shadow-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark dark:text-white">{testimonial.author}</p>
                  <p className="text-sm font-medium text-body-color dark:text-dark-6">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
