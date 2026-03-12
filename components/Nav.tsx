"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isDark, setIsDark] = useState(true); // hero is dark midnight by default
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Watch the dark sections — when one intersects the nav, flip to light text
    const darkSections = document.querySelectorAll(
      ".hero, .tension, .categories, .trust, .footer"
    );

    const observer = new IntersectionObserver(
      () => {
        const navBottom = 72; // approximate nav height
        const anyDark = Array.from(darkSections).some((s) => {
          const rect = s.getBoundingClientRect();
          return rect.top <= navBottom && rect.bottom >= navBottom;
        });
        setIsDark(anyDark);
      },
      { threshold: 0, rootMargin: `-72px 0px 0px 0px` }
    );

    darkSections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`nav ${isDark ? "nav--dark" : "nav--light"}`}
      style={{ color: isDark ? "var(--bg)" : "var(--dark)" }}
      aria-label="Main navigation"
    >
      <Link href="/" className="nav-logo" aria-label="Huzlla home">
        Huzlla
        <span className="nav-dot" aria-hidden="true" />
      </Link>
      <Link href="#waitlist" className="nav-cta">
        Join Waitlist
      </Link>
    </nav>
  );
}
