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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md dark:bg-dark/95 border-b border-gray-100 dark:border-dark-3/40"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 z-50">
            <Link
              href="/"
              className="navbar-logo block text-2xl font-extrabold tracking-tighter text-dark dark:text-white whitespace-nowrap"
            >
              {agencyConfig.name}
            </Link>
          </div>

          {/* Centered Navigation (Desktop) */}
          <nav className="hidden xl:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-x-8">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={menuItem.path || "/"}
                    className={`ud-menu-scroll text-sm font-semibold transition-colors py-2 ${
                      pathUrl === menuItem.path
                        ? "text-primary font-bold"
                        : "text-body-color hover:text-dark dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Items & Mobile Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0 z-50">
            {/* Theme Toggle Button */}
            <button
              aria-label="theme toggler"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors text-body-color hover:bg-gray-100 hover:text-dark dark:text-gray-300 dark:hover:bg-dark-3 dark:hover:text-white"
            >
              {mounted && (
                <>
                  <svg viewBox="0 0 16 16" className="hidden h-5 w-5 fill-current dark:block">
                    <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                  </svg>
                  <svg viewBox="0 0 23 23" className="h-5 w-5 fill-current dark:hidden">
                    <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                  </svg>
                </>
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden xl:inline-flex rounded-full px-6 py-2.5 text-sm font-bold transition-all bg-dark text-white hover:bg-dark/90 hover:scale-[1.02] dark:bg-white dark:text-dark dark:hover:bg-white/90"
            >
              {agencyConfig.cta.primary}
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="block rounded-lg px-2 py-1 xl:hidden"
            >
              <span className={`relative my-1.5 block h-0.5 w-[28px] transition-all duration-300 ${navbarOpen ? "top-[7px] rotate-45" : ""} bg-dark dark:bg-white`} />
              <span className={`relative my-1.5 block h-0.5 w-[28px] transition-all duration-300 ${navbarOpen ? "opacity-0" : ""} bg-dark dark:bg-white`} />
              <span className={`relative my-1.5 block h-0.5 w-[28px] transition-all duration-300 ${navbarOpen ? "top-[-8px] -rotate-45" : ""} bg-dark dark:bg-white`} />
            </button>
          </div>
        </div>
      </div>

      {/* Screen-Wide Upper Mobile Menu Drawer */}
      <div
        id="navbarCollapse"
        className={`xl:hidden absolute left-0 right-0 top-full w-full bg-white/98 dark:bg-dark/98 backdrop-blur-2xl border-b border-gray-200/80 dark:border-dark-3 shadow-2xl transition-all duration-300 ease-out overflow-hidden ${
          navbarOpen
            ? "max-h-[85vh] opacity-100 visible py-6 px-6 border-t border-gray-100 dark:border-dark-3/50"
            : "max-h-0 opacity-0 invisible py-0 px-6 pointer-events-none"
        }`}
      >
        <div className="container mx-auto">
          <ul className="flex flex-col space-y-1">
            {menuData.map((menuItem, index) => {
              const isActive = pathUrl === menuItem.path;
              return (
                <li key={index}>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    href={menuItem.path || "/"}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                        : "text-dark dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-3"
                    }`}
                  >
                    <span>{menuItem.title}</span>
                    <svg
                      className="w-4 h-4 opacity-40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Full-Width Mobile CTA Button */}
          <div className="pt-4 mt-3 border-t border-gray-100 dark:border-dark-3">
            <Link
              onClick={() => setNavbarOpen(false)}
              href="/#contact"
              className="w-full inline-flex items-center justify-center rounded-full bg-dark px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-dark/90 active:scale-[0.98] dark:bg-white dark:text-dark dark:hover:bg-white/90 shadow-md"
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
