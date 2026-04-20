"use client";

import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const animate = () => {
      // Smooth follow without fixed delay.
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX - 15}px, ${ringY - 15}px, 0)`;
      rafId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 bg-accent rounded-full z-50 mix-blend-screen"
      />
      {/* Ring cursor */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-accent rounded-full z-50 mix-blend-screen opacity-50"
      />
    </>
  );
};

export default CustomCursor;
