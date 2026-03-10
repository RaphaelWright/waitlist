"use client";

import { useEffect, useRef } from "react";

export default function EscrowBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.classList.add("animated");
          observer.unobserve(bar);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return <div ref={barRef} className="mock-escrow-fill" />;
}
