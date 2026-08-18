"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Determine if we should smooth scroll or instant jump
            // If it's the very first mount (e.g. fresh page load from Pricing), jump instantly.
            const behavior = isInitialMount.current ? "instant" : "smooth";
            
            // Because we removed !scroll-smooth from HTML, this will respect the behavior option
            element.scrollIntoView({ behavior: behavior as ScrollBehavior });
          }
          isInitialMount.current = false;
        }, 100);
      } else {
        isInitialMount.current = false;
      }
    };

    scrollToHash();
    
    // Add smooth scrolling to the HTML element for all other interactions after initial load
    setTimeout(() => {
      document.documentElement.classList.add("scroll-smooth");
    }, 500);

    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
