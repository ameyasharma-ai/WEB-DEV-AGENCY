"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { agencyConfig } from "@/config/agency";
import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`ud-header left-0 top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? "fixed z-[999] border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-dark-3/20 dark:bg-dark-2/90"
          : "absolute bg-transparent"
      }`}
    >
      <div className="w-full bg-gradient-to-r from-orange-500 via-white to-green-500 py-2.5 px-4 flex justify-center">
        <div className="bg-white/95 px-4 py-1.5 rounded-full shadow-sm text-xs sm:text-sm font-extrabold text-dark flex items-center gap-2 border border-gray-100">
          <span>🇮🇳 Independence Day Special: Premium Websites starting at ₹19,999!</span>
          <Link href="/#contact" className="text-primary underline hover:opacity-80">Claim Offer</Link>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20 md:h-24">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 z-50">
            <Link
              href="/"
              className={`navbar-logo block text-2xl font-extrabold tracking-tighter text-dark dark:text-white`}
            >
              {agencyConfig.name}
            </Link>
          </div>

          {/* Centered Navigation (Desktop) / Mobile Toggle */}
          <div className="flex flex-1 items-center justify-end xl:justify-center gap-2">
            
            {/* Mobile Theme Toggle */}
            <button
              aria-label="theme toggler"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors text-body-color hover:bg-gray-100 hover:text-dark dark:text-gray-300 dark:hover:bg-dark-3 dark:hover:text-white xl:hidden z-50"
            >
              <svg viewBox="0 0 16 16" className="hidden h-5 w-5 fill-current dark:block">
                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
              </svg>
              <svg viewBox="0 0 23 23" className="h-5 w-5 fill-current dark:hidden">
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            </button>
            
            {/* Mobile Toggle Button */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="block rounded-lg px-3 py-[6px] xl:hidden z-50"
            >
              <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : ""} bg-dark dark:bg-white`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0" : ""} bg-dark dark:bg-white`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : ""} bg-dark dark:bg-white`} />
            </button>
            
            {/* Navigation Menu */}
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-4 z-40 w-[250px] rounded-xl border border-gray-200 bg-white px-6 py-4 duration-300 shadow-xl dark:border-dark-3 dark:bg-dark-2 xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:shadow-none xl:opacity-100 ${
                navbarOpen ? "visibility top-[110%] opacity-100" : "invisible top-[120%] opacity-0 xl:visible"
              }`}
            >
              <ul className="block xl:flex xl:gap-x-6 2xl:gap-x-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    <Link
                      onClick={() => setNavbarOpen(false)}
                      href={menuItem.path || "/"}
                      className={`ud-menu-scroll flex py-2 text-sm font-semibold transition-colors xl:inline-flex xl:py-6 ${
                        pathUrl === menuItem.path
                          ? "text-primary"
                          : "text-body-color hover:text-dark dark:text-gray-300 dark:hover:text-white"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* CTA & Theme Toggle (Right) */}
          <div className="hidden xl:flex items-center justify-end flex-shrink-0 z-50">
            <button
              aria-label="theme toggler"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors mr-4 text-body-color hover:bg-gray-100 hover:text-dark dark:text-gray-300 dark:hover:bg-dark-3 dark:hover:text-white"
            >
              {/* Sun icon for dark mode */}
              <svg viewBox="0 0 16 16" className="hidden h-5 w-5 fill-current dark:block">
                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
              </svg>
              {/* Moon icon for light mode */}
              <svg viewBox="0 0 23 23" className="h-5 w-5 fill-current dark:hidden">
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            </button>

            <Link
              href="/#contact"
              className="rounded-full px-6 py-2.5 text-sm font-bold transition-all bg-dark text-white hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90"
            >
              {agencyConfig.cta.primary}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
