import { useCallback, useEffect, useState } from "react";

/**
 * SEO-Optimized HTML5 Path & Hash Router.
 * Reads window.location.pathname for canonical URLs (e.g. /about, /services/seo-geo)
 * while also gracefully handling hash-based fallbacks (e.g. /#/about).
 * Works seamlessly with Screaming Frog, Googlebot, and all SEO audit tools.
 */
function readPath() {
  if (typeof window === "undefined") return "/";
  
  // 1. Check window.location.pathname first
  const pathname = window.location.pathname;
  if (pathname && pathname !== "/" && !pathname.endsWith(".html")) {
    return pathname.replace(/\/$/, ""); // trim trailing slash
  }

  // 2. Check hash fallback if pathname is root
  const hash = window.location.hash.replace(/^#/, "");
  if (hash) {
    return hash.startsWith("/") ? hash : `/${hash}`;
  }

  return "/";
}

export default function useRoute() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const handleRouteChange = () => {
      setPath(readPath());
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  // Scroll to top on route change
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

    const target = to.startsWith("/") ? to : `/${to}`;

    if (window.location.pathname !== target && window.location.hash !== `#${target}`) {
      try {
        window.history.pushState({}, "", target);
        setPath(target);
      } catch {
        window.location.hash = target;
      }
    }
  }, []);

  return { path, navigate };
}

