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
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-xl dark:bg-zinc-950/95 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <div className="flex-shrink-0 z-50">
            <Link
              href="/"
              className="group flex items-center gap-2 text-xl md:text-2xl font-black tracking-[-0.03em] text-zinc-950 dark:text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{agencyConfig.name}</span>
            </Link>
          </div>

          {/* Centered Navigation (Desktop) */}
          <nav className="hidden xl:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-1 bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800/60">
              {menuData.map((menuItem, index) => {
                const isActive = pathUrl === menuItem.path;
                return (
                  <li key={index} className="group relative">
                    <Link
                      href={menuItem.path || "/"}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                        isActive
                          ? "text-zinc-950 dark:text-white font-bold bg-white dark:bg-zinc-800 shadow-sm"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Items & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 z-50">
            {/* Theme Toggle Button */}
            <button
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800 hover:scale-105 active:scale-95"
            >
              {mounted && (
                <>
                  <svg viewBox="0 0 16 16" className="hidden h-4 w-4 fill-current dark:block">
                    <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                  </svg>
                  <svg viewBox="0 0 23 23" className="h-4 w-4 fill-current dark:hidden">
                    <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                  </svg>
                </>
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="hidden xl:inline-flex rounded-full px-5 py-2 text-xs font-semibold tracking-tight transition-all duration-200 bg-zinc-950 text-white hover:bg-black hover:scale-105 active:scale-95 shadow-sm dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {agencyConfig.cta.primary}
            </Link>

            {/* Apple-style Mobile Hamburger Button */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="flex h-9 w-9 items-center justify-center rounded-full xl:hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-white"
            >
              <div className="w-4 flex flex-col items-center justify-center gap-1">
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    navbarOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Apple-Grade Screen-Wide Mobile Menu Drawer */}
      <div
        id="navbarCollapse"
        className={`xl:hidden absolute left-0 right-0 top-full w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out overflow-hidden z-40 ${
          navbarOpen
            ? "max-h-[90vh] opacity-100 visible py-6 px-6 sm:px-8 border-t border-zinc-100 dark:border-zinc-900"
            : "max-h-0 opacity-0 invisible py-0 px-6 sm:px-8 pointer-events-none"
        }`}
      >
        <div className="container mx-auto max-w-lg">
          {/* Navigation Links */}
          <ul className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-900">
            {menuData.map((menuItem, index) => {
              const isActive = pathUrl === menuItem.path;
              return (
                <li key={index}>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    href={menuItem.path || "/"}
                    className={`flex items-center justify-between py-3.5 px-2 text-lg font-bold tracking-tight transition-colors ${
                      isActive
                        ? "text-zinc-950 dark:text-white"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                    }`}
                  >
                    <span>{menuItem.title}</span>
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      )}
                      <svg
                        className="w-4 h-4 opacity-30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Full-Width Mobile CTA Button */}
          <div className="pt-6 mt-2">
            <Link
              onClick={() => setNavbarOpen(false)}
              href="/#contact"
              className="w-full inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-zinc-950/10 transition-all hover:bg-black active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {agencyConfig.cta.primary}
            </Link>
            
            <p className="text-center text-xs text-zinc-600 dark:text-zinc-400 mt-4 tracking-tight">
              {agencyConfig.tagline}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
