import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Observes all .reveal elements and adds .in-view when they
 * enter the viewport. Re-runs on every route change.
 */
export function useRevealOnScroll() {
  const location = useLocation();

  useEffect(() => {
    let observer;

    const initObserver = () => {
      const targets = document.querySelectorAll(".reveal:not(.in-view)");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      targets.forEach((el) => observer.observe(el));
    };

    // Small delay so React has rendered the new page's DOM
    const t = setTimeout(initObserver, 60);

    return () => {
      clearTimeout(t);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);
}
