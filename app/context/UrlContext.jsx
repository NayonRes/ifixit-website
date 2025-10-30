"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";

const UrlContext = createContext({
  url: "",
  pathname: "",
  hash: "",
});

export function UrlProvider({ children }) {
  const pathnameFromRouter = usePathname();
  const searchParams = useSearchParams();

  const [url, setUrl] = useState(() =>
    typeof window !== "undefined" ? window.location.href || "" : ""
  );
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash || "" : ""
  );

  // Derive pathname primarily from the Next.js router for reactive updates
  const pathname = useMemo(
    () =>
      pathnameFromRouter ||
      (typeof window !== "undefined" ? window.location.pathname : ""),
    [pathnameFromRouter]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const computeUrl = () => {
      try {
        const current = new URL(window.location.href);
        setUrl(current.toString());
        setHash(current.hash || "");
      } catch {
        setUrl(window.location.href || "");
        setHash(window.location.hash || "");
      }
    };

    // Initial compute
    computeUrl();

    // Unified handler for any URL change
    const onAnyUrlChange = () => {
      const newHash = window.location.hash || "";
      setHash(newHash);
      try {
        const current = new URL(window.location.href);
        setUrl(current.toString());
      } catch {
        setUrl(window.location.href || "");
      }
    };

    // Patch history methods to emit a custom event when Next.js pushes/replaces state
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    try {
      window.history.pushState = function pushStatePatched() {
        const result = originalPushState.apply(this, arguments);
        window.dispatchEvent(new Event("urlchange"));
        return result;
      };
      window.history.replaceState = function replaceStatePatched() {
        const result = originalReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event("urlchange"));
        return result;
      };
    } catch {}

    window.addEventListener("hashchange", onAnyUrlChange);
    window.addEventListener("popstate", onAnyUrlChange);
    window.addEventListener("urlchange", onAnyUrlChange);

    return () => {
      window.removeEventListener("hashchange", onAnyUrlChange);
      window.removeEventListener("popstate", onAnyUrlChange);
      window.removeEventListener("urlchange", onAnyUrlChange);
      try {
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
      } catch {}
    };
  }, []);

  // Recompute full URL when pathname or search params change (client navigations)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const current = new URL(window.location.href);
      setUrl(current.toString());
    } catch {
      setUrl(window.location.href || "");
    }
  }, [pathnameFromRouter, searchParams]);

  const value = useMemo(
    () => ({
      url,
      pathname,
      hash,
    }),
    [url, pathname, hash]
  );

  return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>;
}

export function useUrl() {
  return useContext(UrlContext);
}
