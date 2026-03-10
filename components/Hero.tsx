"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    // React StrictMode double-invokes effects in development.
    // The ref guard ensures the animation sequence runs exactly once.
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
    revealAll(".hero-word-inner", 260, 140);
    reveal(".hero-sub-group",  260 + 3 * 140 + 80);
    reveal(".hero-image-wrap", 180);
    reveal(".hero-badge",      1300);

    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow" aria-hidden="true">
          Nairobi · Africa · Now
        </p>

        <h1 className="hero-headline" aria-label="The job was always here.">
          <span className="hero-word hero-hl-1">
            <span className="hero-word-inner">The job</span>
          </span>
          <span className="hero-word hero-hl-2">
            <span className="hero-word-inner">was always</span>
          </span>
          <span className="hero-word hero-hl-3">
            <span className="hero-word-inner">here.</span>
          </span>
        </h1>

        <div className="hero-sub-group">
          <div className="hero-pill">
            <span className="hero-pill-dot" aria-hidden="true" />
            Africa&apos;s on-demand labor platform
          </div>
          <Link href="#waitlist" className="hero-cta">
            Get Early Access
          </Link>
        </div>
      </div>

      <div className="hero-image-col" aria-hidden="true">
        <div className="hero-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170&auto=format&fit=crop"
            alt="Kenyan fundi worker — skilled, ready, reliable"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="hero-image-overlay" />
        </div>
      </div>

      <div className="hero-badge" aria-label="240+ workers already waiting">
        <span className="hero-badge-num">240+</span>
        workers &amp; employers
        <br />already in
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
