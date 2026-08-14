import { Metadata } from "next";
import { agencyConfig } from "@/config/agency";

export const metadata: Metadata = {
  title: `Privacy Policy | ${agencyConfig.name}`,
  description: "Privacy policy and data handling practices.",
};

const PrivacyPage = () => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-body-color dark:text-dark-6">
          <p className="font-semibold">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>This Privacy Policy explains how {agencyConfig.name} ("we," "our," or "us") collects, uses, protects, and discloses your information when you visit our website or engage our web development and data analytics services.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul>
            <li><strong>Contact Information:</strong> Names, business names, email addresses, phone numbers, and WhatsApp contact details.</li>
            <li><strong>Business Information:</strong> Website URLs, business goals, project budgets, and service requirements.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, operating systems, and basic analytics data on how you interact with our website.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use personal information collected via our website for a variety of business purposes described below:</p>
          <ul>
            <li><strong>To provide services:</strong> To communicate with you regarding your project, deliver website audits, and fulfill our contractual obligations.</li>
            <li><strong>To improve our website:</strong> We use aggregated, anonymized data to improve the user experience and functionality of our platform.</li>
            <li><strong>For marketing and communication:</strong> With your consent, we may send you promotional emails or messages regarding our services, updates, or special offers.</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. This helps us understand website traffic patterns and optimize our site for better conversion and performance. You can choose to disable cookies through your browser settings.</p>

          <h2>5. Data Security</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

          <h2>6. Third-Party Disclosures</h2>
          <p>We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

          <h2>7. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may email us at {agencyConfig.email} or by post to:</p>
          <address className="not-italic opacity-80 border-l-2 border-primary pl-4 mt-4">
            <strong>{agencyConfig.name}</strong><br/>
            {agencyConfig.address}<br/>
            Phone: {agencyConfig.phone}
          </address>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
