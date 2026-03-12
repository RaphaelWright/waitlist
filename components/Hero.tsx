"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ids: ReturnType<typeof setTimeout>[] = [];

    const reveal = (selector: string, delay: number) => {
      const el = document.querySelector(selector);
      if (el) ids.push(setTimeout(() => el.classList.add("revealed"), delay));
    };

    const revealAll = (selector: string, baseDelay: number, step: number) => {
      document.querySelectorAll(selector).forEach((el, i) =>
        ids.push(
          setTimeout(() => el.classList.add("revealed"), baseDelay + i * step)
        )
      );
    };

    reveal(".hero-eyebrow",    100);
    revealAll(".hero-word-inner", 260, 160);
    reveal(".hero-sub-group",  260 + 3 * 160 + 60);
    reveal(".hero-stats",      260 + 3 * 160 + 300);
    reveal(".hero-image-wrap", 180);
    reveal(".hero-badge",      1500);

    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          Ghana · Kenya · Nigeria · South Africa
        </p>

        <h1 className="hero-headline" aria-label="Find. Hire. Pay. Huzlla.">
          <span className="hero-word hero-hl-1">
            <span className="hero-word-inner">Find.</span>
          </span>
          <span className="hero-word hero-hl-2">
            <span className="hero-word-inner">Hire. Pay.</span>
          </span>
          <span className="hero-word hero-hl-3">
            <span className="hero-word-inner">Huzlla.</span>
          </span>
        </h1>

        <div className="hero-sub-group">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            Africa&apos;s on-demand labour platform — verified workers, escrow-protected pay, GPS check-in. Launching across 4 markets.
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="#waitlist" className="hero-cta">
              Get Early Access
            </Link>
            <a href="#solution" className="hero-cta-ghost">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Platform stats">
          <div className="hero-stat">
            <span className="hero-stat-val">10</span>
            <span className="hero-stat-lbl">job categories</span>
          </div>
          <div className="hero-stat-div" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-val">4</span>
            <span className="hero-stat-lbl">markets launching</span>
          </div>
          <div className="hero-stat-div" aria-hidden="true" />
          <div className="hero-stat">
            <span className="hero-stat-val">0%</span>
            <span className="hero-stat-lbl">worker deductions</span>
          </div>
        </div>
      </div>

      <div className="hero-image-col" aria-hidden="true">
        <div className="hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop"
            alt="African fundi worker — skilled, ready, reliable"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="hero-image-overlay" />
        </div>
      </div>

      <div className="hero-badge" aria-label="Workers receive 100% of agreed pay">
        <span className="hero-badge-num">100%</span>
        of pay goes
        <br />to the worker
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
