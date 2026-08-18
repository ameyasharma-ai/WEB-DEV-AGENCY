import FadeIn from "@/components/Common/FadeIn";

const Problem = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-dark text-dark dark:text-white border-t border-gray-100 dark:border-dark-3">
      <div className="container mx-auto px-4">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              Your website is more than a brochure.
            </h2>
            <p className="text-lg sm:text-xl text-body-color dark:text-gray-400 font-medium max-w-lg">
              A poor website does more damage than you think. It silently loses potential customers, makes competitors appear stronger, and fails to provide useful business data.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center">
            <div className="space-y-8 pl-0 lg:pl-12">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">Lost Credibility</h3>
                <p className="text-body-color dark:text-gray-400">First impressions matter. If your site looks outdated, users assume your business is too.</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">Hidden Friction</h3>
                <p className="text-body-color dark:text-gray-400">Slow load times and confusing navigation create friction in contacting you.</p>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">Zero Data</h3>
                <p className="text-body-color dark:text-gray-400">Without proper analytics, you are flying blind. You don't know who is visiting or why they leave.</p>
              </div>
              
              <div className="pt-8 pl-6">
                <p className="text-3xl font-extrabold text-primary">We fix that.</p>
              </div>
            </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Problem;
