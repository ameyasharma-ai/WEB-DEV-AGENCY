import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Terms of Service | ${agencyConfig.name}`,
  description: "Terms and conditions of service.",
};

const TermsPage = () => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-body-color dark:text-dark-6">
          <p className="font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>

          <h2>2. Services Provided</h2>
          <p>{agencyConfig.name} provides professional web development, UI/UX design, data analytics, and digital strategy services. The specific scope, deliverables, timeline, and pricing of any project will be outlined in a separate Statement of Work (SOW) or formal contract signed by both parties.</p>

          <h2>3. Client Responsibilities</h2>
          <p>To ensure the successful and timely delivery of our services, clients agree to:</p>
          <ul>
            <li>Provide necessary access to hosting environments, domain registrars, or legacy codebases as required.</li>
            <li>Deliver brand assets, copy, and feedback in a timely manner according to agreed project schedules.</li>
            <li>Ensure they have the legal right to use any materials, logos, or copy provided to us for inclusion in the project.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>Upon final payment, the client assumes full ownership of the final deliverables, including custom code, design assets, and analytics dashboards, unless otherwise specified in the project contract. {agencyConfig.name} retains the right to display the completed project in our portfolio, marketing materials, and case studies unless a Non-Disclosure Agreement (NDA) explicitly prohibits it.</p>

          <h2>5. Payment Terms</h2>
          <p>Payment schedules will be defined in the individual project proposal. Typically, this involves an upfront deposit before work begins, with subsequent milestone payments. All invoices are due upon receipt unless otherwise stated. {agencyConfig.name} reserves the right to suspend services or withhold final deployment if payments are delayed.</p>

          <h2>6. Limitation of Liability</h2>
          <p>In no event shall {agencyConfig.name}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2>7. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, specifically the jurisdiction of Karnataka, without regard to its conflict of law provisions.</p>

          <h2>8. Contact Information</h2>
          <p>For any questions regarding these Terms, please contact us at <strong>{agencyConfig.email}</strong>.</p>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
