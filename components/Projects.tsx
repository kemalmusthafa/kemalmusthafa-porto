"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSitePreferences } from "@/lib/sitePreferences";
import Image from "next/image";

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t } = useSitePreferences();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showcaseImages = [
    "/img/CV_Creative_Kemal Musthafa Rajabi_pages-to-jpg-0004.jpg",
    "/img/CV_Creative_Kemal Musthafa Rajabi_pages-to-jpg-0005.jpg",
    "/img/CV_Creative_Kemal Musthafa Rajabi_pages-to-jpg-0006.jpg",
    "/img/CV_Creative_Kemal Musthafa Rajabi_pages-to-jpg-0007.jpg",
    "/img/Kawane Studio.png",
  ];

  useEffect(() => {
    if (isPaused || showcaseImages.length <= 1) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3500);
    return () => window.clearInterval(intervalId);
  }, [isPaused, showcaseImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="font-press text-muted text-[10px] md:text-xs tracking-normal uppercase">
            {t("sectionShowcase")}
          </p>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <motion.div
            variants={galleryVariants}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface/50">
              <Image
                src={showcaseImages[activeIndex]}
                alt={`Portfolio showcase ${activeIndex + 1}`}
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? showcaseImages.length - 1 : prev - 1,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-bg/70 text-text hover:bg-bg transition-colors"
              aria-label="Previous showcase image"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % showcaseImages.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-bg/70 text-text hover:bg-bg transition-colors"
              aria-label="Next showcase image"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? "w-7 bg-accent" : "w-2.5 bg-white/65"
                  }`}
                  aria-label={`Go to showcase image ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
