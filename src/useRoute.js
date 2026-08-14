import { useCallback, useEffect, useState } from "react";

/**
 * Minimal hash-based router — no extra dependency required.
 * Reads/writes window.location.hash so it works on any static host
 * without server-side rewrite rules (unlike history/pushState routing).
 *
 * URLs look like:
 *   yoursite.com/#/         → home
 *   yoursite.com/#/about    → about page
 */
function readPath() {
  const raw = window.location.hash.replace(/^#/, "");
  return raw || "/";
}

export default function useRoute() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const onHashChange = () => setPath(readPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const navigate = useCallback((to) => {
    if (window.location.hash === `#${to}`) {
      // Already there — still reset scroll for a fresh visit
      window.scrollTo(0, 0);
      return;
    }
    window.location.hash = to;
  }, []);

  return { path, navigate };
}
