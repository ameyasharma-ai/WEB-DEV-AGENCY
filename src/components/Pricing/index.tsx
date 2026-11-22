"use client";
import Link from "next/link";
import { useState } from "react";
import FadeIn from "@/components/Common/FadeIn";
import { agencyConfig } from "@/config/agency";

const cleanPhone = agencyConfig.phone.replace(/[^0-9]/g, "");

const pricingTiers = [
  {
    name: "Starter",
    tagline: "Essential Online Presence",
    price: "₹7,500",
    priceRange: "₹7,500 – ₹9,999",
    description: "For startups, clinics, salons, and local retail needing a fast, credible, and high-converting digital foothold.",
    badge: null,
    highlight: false,
    timeline: "3–5 Days Turnaround",
    deposit: "₹2,500 token booking to start",
    whatsappText: "Hi Arclane Studios, I'd like to book the Starter Website Plan (₹7,500). Let's discuss requirements.",
    features: [
      "1–3 High-Performance Mobile-First Pages",
      "Direct WhatsApp & Call Lead Funnel",
      "UPI & QR Code Payment Integration",
      "Google Maps Location & Local SEO Sync",
      "Free 1st-Year Cloudflare / Vercel CDN Hosting",
      "Automated SSL Encryption & Fast DNS Setup",
      "Contact Form with Instant Email Alerts",
      "100% Full Code Ownership & Asset Handover",
      "14 Days Post-Launch Warranty Support",
    ],
    cta: "Book Starter Plan",
    link: "/#contact",
  },
  {
    name: "Business Growth",
    tagline: "Revenue & Market Dominance",
    price: "₹18,500",
    priceRange: "₹18,500 – ₹24,500",
    description: "Our flagship conversion engine for serious clinics, brands, restaurants, and professional firms looking to dominate their market.",
    badge: "Most Popular in India",
    highlight: true,
    timeline: "10–14 Days Delivery",
    deposit: "30% - 40% - 30% Milestone Plan",
    whatsappText: "Hi Arclane Studios, I want to discuss the Business Growth Plan (₹18,500). Can you audit my business?",
    features: [
      "5–8 Bespoke Modern Web Pages",
      "Interactive Product / Service Showcase & Booking",
      "Razorpay, Cashfree & Instant UPI Payment Gateway",
      "Google Business Profile & 5-Star Local Maps SEO",
      "95+ Core Web Vitals Guaranteed (Sub-Second Load)",
      "Interactive WhatsApp Floating Widget & CRM Capture",
      "Free 1st-Year High-Speed Global CDN Hosting",
      "Google Analytics 4 & Meta Pixel Conversion Setup",
      "Zero Annual Agency Lock-in or Hostage Fees",
      "30 Days Dedicated Post-Launch Support",
    ],
    cta: "Claim Business Growth",
    link: "/#contact",
  },
  {
    name: "Custom Enterprise",
    tagline: "Bespoke Full-Stack Platforms",
    price: "₹55,000+",
    priceRange: "₹55,000 – ₹1,25,000+",
    description: "For established brands requiring custom SaaS portals, headless commerce, or complex web applications.",
    badge: "Full Custom Architecture",
    highlight: false,
    timeline: "3–5 Weeks Delivery",
    deposit: "Structured Milestone SOW",
    whatsappText: "Hi Arclane Studios, we have a custom platform/app requirement. Let's schedule a discovery call.",
    features: [
      "Complete Discovery, System Design & Figma Prototypes",
      "Full-Stack Next.js / React / Node Cloud Architecture",
      "Headless E-Commerce / Custom Multi-Vendor Portals",
      "Enterprise Payment Gateways (Razorpay / Stripe / Multi-Currency)",
      "Database Modeling, Auth0 / Clerk & Custom Dashboards",
      "Advanced Dynamic Schema, International SEO & API Sync",
      "Enterprise DDoS Protection, Cloudflare Edge & High Concurrency",
      "100% Tax Compliant B2B Invoicing with 18% GST Input Credit",
      "60 Days Priority Engineering Warranty & SLA",
      "Dedicated Project Lead & Private WhatsApp/Slack Desk",
    ],
    cta: "Discuss Custom Scope",
    link: "/#contact",
  },
];

const valuePillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Bespoke Aesthetic",
    description: "We craft distinct, Apple-grade interfaces tailored to your brand identity—never generic cookie-cutter WordPress themes.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sub-Second 4G/5G Speed",
    description: "Engineered with Next.js and Cloudflare edge caching for 95+ Core Web Vitals and lightning-fast loading across Indian mobile networks.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "WhatsApp & Frictionless Funnels",
    description: "Every button, headline, and layout structure is psychologically positioned to guide prospects directly into your WhatsApp and call funnel.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "100% Code Ownership & Zero Hostage Fees",
    description: "You own all code, assets, and design files outright. No vendor lock-in, recurring agency royalties, or hostage fees ever.",
  },
];

const faqs = [
  {
    question: "Why should we invest in Arclane over a cheap ₹5,000 WordPress freelancer?",
    answer: "Cheap ₹5,000 templates come with hidden costs: slow loading speeds on Indian mobile networks, broken bloated plugins, security vulnerabilities, zero local SEO, and developers who vanish after receiving payment. At Arclane, we engineer bespoke digital assets with 95+ Core Web Vitals, direct WhatsApp lead funnels, and sub-second load times designed to generate actual customer inquiries and sales.",
  },
  {
    question: "What is your payment structure? Do we have to pay 100% upfront?",
    answer: "Never. We operate on a risk-free milestone structure to give you total peace of mind: 30% token advance upon project kickoff, 40% upon staging demo approval, and the final 30% only after full production deployment, verification, and code handover. For Starter packages, you can begin with just a ₹2,500 token deposit.",
  },
  {
    question: "Are there hidden annual renewal fees or domain/hosting hostage costs?",
    answer: "Zero. Unlike traditional agencies that charge ₹10,000–₹15,000/year to keep your site alive, we include free 1st-year global enterprise CDN hosting on Cloudflare / Vercel with automated SSL encryption. You own 100% of your domain, codebase, and assets. After year one, your hosting costs remain negligible (typically under ₹1,500/year directly with Cloudflare or free on Vercel).",
  },
  {
    question: "Can we provide our GST number and claim Input Tax Credit (ITC)?",
    answer: "Yes! Arclane Studios issues formal GST B2B tax invoices with every project. You can claim the full 18% GST Input Tax Credit (ITC) for your business expenses.",
  },
  {
    question: "Can our website accept UPI, Google Pay, PhonePe, and Credit Cards?",
    answer: "Yes. Depending on your tier, we integrate instant UPI / QR code payment buttons (PhonePe, GPay, Paytm) or full payment gateway integrations via Razorpay and Cashfree, enabling zero-friction checkout for your Indian customers.",
  },
  {
    question: "How do we communicate and track progress during the build?",
    answer: "We believe in fast, zero-lag collaboration. In addition to email and scheduled calls, we create a dedicated WhatsApp project group with our design and development leads so you can share feedback, voice notes, and approve iterations instantly.",
  },
  {
    question: "Do you offer post-launch support and warranty?",
    answer: "Yes! Every project includes a dedicated 14 to 60-day post-launch warranty covering bug fixes, minor content updates, and performance monitoring. We also provide optional, flexible ongoing maintenance retainer plans.",
  },
];

const reassuranceBadges = [
  "✓ 100% Code & Asset Ownership",
  "✓ 18% GST Invoices for B2B Tax Credit",
  "✓ Free 1st Year Global CDN Hosting",
  "✓ Zero Hidden Annual Lock-in Fees",
  "✓ Transparent 30/40/30 Milestones",
  "✓ 95+ Core Web Vitals Guaranteed",
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white dark:bg-dark relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-zinc-200/50 via-zinc-100/30 to-transparent dark:from-zinc-800/20 dark:via-zinc-900/10 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="max-w-4xl mx-auto text-center">
              {/* Apple-style subtle status badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 mb-6 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
                  Transparent Indian Investment · High-Impact ROI
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-zinc-950 dark:text-white leading-[1.08] mb-6">
                Simple, transparent pricing.{" "}
                <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent inline-block">
                  Serious digital ROI.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal max-w-2xl mx-auto mb-4 leading-relaxed tracking-tight">
                Invest in a digital flagship crafted to command market authority, outpace competitors, and generate predictable revenue.
              </p>

              <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-8">
                ⚡ 100% Transparent Milestone Pricing · All plans include GST Invoices for Input Tax Credit (ITC)
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
                {reassuranceBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Arclane Studios, I'd like to get a free website audit & custom proposal for my business.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>💬</span> Discuss on WhatsApp
                </a>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-zinc-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-zinc-950/10 transition-all hover:bg-black hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:shadow-white/10 dark:hover:bg-zinc-100"
                >
                  Get a Free Proposal & Audit
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50/80 px-8 py-4 text-base font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-800"
                >
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pb-24 bg-white dark:bg-dark relative">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch relative z-10">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`flex flex-col h-full rounded-[28px] transition-all duration-300 relative p-8 md:p-9 ${
                    tier.highlight
                      ? "bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-2 border-emerald-500/80 dark:border-emerald-500/80 shadow-2xl shadow-emerald-950/20 lg:scale-[1.03] z-20"
                      : "bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800/80 shadow-md hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-emerald-500 text-zinc-950 text-[11px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-2xl font-extrabold tracking-tight ${tier.highlight ? "text-white" : "text-zinc-950 dark:text-white"}`}>
                        {tier.name}
                      </h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        tier.highlight
                          ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                      }`}>
                        {tier.timeline}
                      </span>
                    </div>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-4 ${tier.highlight ? "text-emerald-400" : "text-zinc-500 dark:text-zinc-400"}`}>
                      {tier.tagline}
                    </p>
                    
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight ${tier.highlight ? "text-white" : "text-zinc-950 dark:text-white"}`}>
                        {tier.priceRange}
                      </span>
                    </div>
                    <p className={`text-xs font-semibold mb-3 ${tier.highlight ? "text-emerald-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                      + 18% GST · Input Tax Credit (ITC) Available
                    </p>

                    <p className={`text-sm leading-relaxed min-h-[42px] ${tier.highlight ? "text-zinc-300" : "text-zinc-600 dark:text-zinc-400"}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Dual Action CTAs: Proposal & Direct WhatsApp */}
                  <div className="flex flex-col gap-2.5 mb-8">
                    <Link
                      href={tier.link}
                      className={`w-full inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 ${
                        tier.highlight
                          ? "bg-white text-zinc-950 hover:bg-zinc-100 hover:scale-[1.02] shadow-lg shadow-white/10 active:scale-[0.98]"
                          : "bg-zinc-950 text-white hover:bg-black hover:scale-[1.02] dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 active:scale-[0.98]"
                      }`}
                    >
                      {tier.cta} →
                    </Link>

                    <a
                      href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(tier.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all duration-200 ${
                        tier.highlight
                          ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800 hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                    >
                      <span>💬</span> Chat on WhatsApp
                    </a>

                    <div className="text-center mt-1">
                      <span className={`text-[11px] font-medium tracking-wide ${tier.highlight ? "text-emerald-300/90" : "text-emerald-700 dark:text-emerald-400"}`}>
                        ⚡ {tier.deposit}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className={`space-y-3.5 flex-grow border-t pt-6 ${
                    tier.highlight ? "border-zinc-800" : "border-zinc-100 dark:border-zinc-800"
                  }`}>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                      tier.highlight ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"
                    }`}>
                      What's Included:
                    </div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <span className={`flex-shrink-0 mr-3 mt-0.5 rounded-full p-0.5 ${
                          tier.highlight
                            ? "text-emerald-400 bg-emerald-950/60"
                            : "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30"
                        }`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className={`leading-snug ${
                          tier.highlight ? "text-zinc-200" : "text-zinc-700 dark:text-zinc-300"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Value Bento Grid Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 block">
                The Arclane Standard
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-zinc-950 dark:text-white leading-tight">
                You're not just buying web pages. You're investing in market dominance.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {valuePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white dark:bg-zinc-900/60 p-7 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 border border-zinc-200/60 dark:border-zinc-700/60">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-xs font-mono text-zinc-400 dark:text-zinc-600">
                    PILLAR 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Custom Enterprise Banner */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white p-8 md:p-14 border border-zinc-800 shadow-2xl relative overflow-hidden">
              {/* Radial glow */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl text-center lg:text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-zinc-700">
                    Need Custom Workflows?
                  </span>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                    Have a complex product or bespoke app in mind?
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                    We architect custom SaaS dashboards, multi-vendor marketplaces, headless e-commerce, and high-security web portals scoped precisely to your business objectives.
                  </p>
                </div>

                <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Arclane Studios, we have a custom enterprise project. Can we schedule a discovery call?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95 shadow-xl"
                  >
                    <span>💬</span> Chat on WhatsApp
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-xl"
                  >
                    Schedule a Discovery Call
                  </Link>
                  <span className="text-xs text-center text-zinc-500">
                    No obligation · 24-hr turn-around
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-xs font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase mb-3 block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-zinc-950 dark:text-white">
                  Clear answers to common questions.
                </h2>
              </div>

              <div className="space-y-3.5">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 shadow-md"
                          : "bg-white/80 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none gap-4"
                      >
                        <span className="font-bold text-base text-zinc-950 dark:text-white">
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-zinc-200 dark:bg-zinc-700" : ""
                        }`}>
                          <svg className="w-4 h-4 text-zinc-700 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 mt-1">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-24 md:py-32 bg-white dark:bg-dark border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-6">
                Ready to transform your digital presence?
              </h2>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your timeline, target audience, and growth objectives. Get a detailed roadmap and estimate within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Arclane Studios, I'm ready to transform my digital presence. Let's discuss a roadmap.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-950/20 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
                >
                  <span>💬</span> Instant WhatsApp Chat
                </a>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-zinc-950 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-zinc-950/10 transition-all hover:bg-black hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                >
                  Claim Your Free Audit
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50/80 px-8 py-4 text-base font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-800"
                >
                  View Client Results
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
