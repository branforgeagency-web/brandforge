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

  // Scroll to top whenever the page changes (including Lenis scroll engine reset)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, [path]);

  const navigate = useCallback((to) => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    if (window.location.hash === `#${to}`) {
      return;
    }
    window.location.hash = to;
  }, []);

  return { path, navigate };
}
