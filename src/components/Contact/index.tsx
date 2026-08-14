"use client";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-dark-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-start">
          <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark dark:text-white tracking-tight mb-4 md:mb-6">
                Let's find what's holding your website back.
              </h2>
              <p className="text-lg md:text-xl text-body-color dark:text-dark-6 font-medium mb-8 md:mb-12">
                Get a free website & growth audit. We'll analyze your design, performance, SEO, and conversion architecture.
              </p>
              
              <div className="space-y-4 md:space-y-6 hidden sm:block">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-dark dark:text-white">Performance Analysis</h4>
                    <p className="text-body-color dark:text-dark-6">Deep dive into Core Web Vitals and load times.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-dark dark:text-white">UX/UI Evaluation</h4>
                    <p className="text-body-color dark:text-dark-6">Identify friction points in your user journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-dark dark:text-white">SEO Foundations</h4>
                    <p className="text-body-color dark:text-dark-6">Check technical SEO and structure optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 px-4">
            <div className="bg-gray-50 dark:bg-dark-2 rounded-[2rem] p-6 sm:p-12 shadow-sm border border-gray-100 dark:border-dark-3">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-dark dark:text-white mb-4">Audit Requested</h3>
                  <p className="text-body-color dark:text-dark-6 text-lg">
                    Thank you. Our team will review your details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Name</label>
                      <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Business Name</label>
                      <input type="text" name="business" required placeholder="Acme Corp" className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Email Address</label>
                      <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Phone / WhatsApp</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Website URL (Optional)</label>
                      <input type="url" name="website" placeholder="https://yourwebsite.com" className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">What do you need?</label>
                      <select name="service" required className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option value="web-dev">Web Development</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="digital-strategy">Digital Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Approximate Budget</label>
                      <select name="budget" required className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                        <option value="">Select budget range...</option>
                        <option value="under-25k">Under ₹25,000</option>
                        <option value="25k-50k">₹25,000 - ₹50,000</option>
                        <option value="50k-1L">₹50,000 - ₹1 Lakh</option>
                        <option value="1L+">₹1 Lakh+</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-dark dark:text-white mb-2">Message (Optional)</label>
                    <textarea name="message" rows={3} placeholder="Tell us more about your business..." className="w-full bg-white dark:bg-dark border border-gray-200 dark:border-dark-4 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-dark dark:text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
                  </div>
                  
                  <button type="submit" disabled={status === "submitting"} className="w-full bg-dark hover:bg-dark/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-dark text-lg font-bold py-5 rounded-xl transition-all hover:scale-[1.01] flex items-center justify-center">
                    {status === "submitting" ? (
                       <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                    ) : "Get My Free Audit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
