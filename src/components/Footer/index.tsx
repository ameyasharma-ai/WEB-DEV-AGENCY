import Link from "next/link";
import { agencyConfig } from "@/config/agency";

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white selection:bg-primary/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between -mx-4">
          <div className="w-full lg:w-4/12 px-4 mb-12 lg:mb-0">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-6">
              {agencyConfig.name}
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 text-base">
              {agencyConfig.description}
            </p>
            <div className="flex items-center space-x-5">
              <a href={agencyConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={agencyConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-12 lg:mb-0">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-tight">Work</h4>
            <ul className="space-y-3">
              <li><Link href="/work" className="text-gray-400 hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/#process" className="text-gray-400 hover:text-white transition">Our Process</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/12 px-4 mb-12 lg:mb-0">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-tight">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-white transition">Journal</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-3/12 px-4">
            <h4 className="text-lg font-semibold mb-6 text-white tracking-tight">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">{agencyConfig.email}</li>
              <li className="text-gray-400">{agencyConfig.phone}</li>
              <li className="text-gray-400 pt-2">{agencyConfig.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {agencyConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
