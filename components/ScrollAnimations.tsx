"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimations() {
  const hasRun = useRef(false);

  useEffect(() => {
    // StrictMode guard — observers should only be registered once
    if (hasRun.current) return;
    hasRun.current = true;

    const SELECTORS = [
      ".tension-headline",
      ".tension-stat",
      ".problem-card",
      ".step",
      ".cat-tile",
      ".pillar",
      ".trust-right",
      ".reveal-clip",
      ".reveal-up",
      ".reveal-left",
      ".reveal-scale",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    // rAF ensures DOM is fully painted before we start observing
    const rafId = requestAnimationFrame(() => {
      const elements = document.querySelectorAll(SELECTORS.join(","));
      elements.forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
