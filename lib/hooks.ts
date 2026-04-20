"use client";

import { useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return { scrollYProgress };
};

export const useParallax = (offset = 0.5) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${offset * 100}%`]);
  return { y };
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export const useInViewOnce = () => {
  const [isInView, setIsInView] = useState(false);

  return { isInView, setIsInView };
};
