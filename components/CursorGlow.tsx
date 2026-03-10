"use client";

import { useEffect, useRef } from "react";

// Subtle cursor radial glow — editorial touch, no DOM clutter
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef   = useRef({ x: 0, y: 0 });
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Only show on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      glow.style.opacity = "1";
      if (!rafRef.current) animate();
    };

    const onLeave = () => { glow.style.opacity = "0"; };

    const glowEl = glow;
    function animate() {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.08;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.08;
      glowEl.style.left = posRef.current.x + "px";
      glowEl.style.top  = posRef.current.y + "px";
      rafRef.current = requestAnimationFrame(animate);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "320px",
        height: "320px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(185,94,130,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9997,
        opacity: 0,
        transition: "opacity 0.3s ease",
        willChange: "left, top",
      }}
    />
  );
}
