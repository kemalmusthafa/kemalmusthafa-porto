"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let startValue = from;
    const increment = (to - from) / (duration * 60);

    const timer = setInterval(() => {
      startValue += increment;
      if (ref.current) {
        ref.current.textContent = Math.floor(startValue).toString();
      }
      if (startValue >= to) {
        clearInterval(timer);
        if (ref.current) ref.current.textContent = to.toString();
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{from}</span>;
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t, tv } = useSitePreferences();

  const words = tv(PORTFOLIO_DATA.about.description).split(" ");

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.015,
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="font-press text-muted text-[10px] md:text-xs tracking-normal uppercase">
            {t("sectionAbout")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Description with word reveal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-2xl leading-relaxed">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-8">
            {PORTFOLIO_DATA.about.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="border-l border-accent pl-6"
              >
                <div className="font-press text-2xl md:text-3xl text-accent mb-3 leading-tight">
                  <AnimatedCounter
                    to={parseInt(stat.value.replace("+", ""))}
                    duration={2}
                  />
                  {stat.value.endsWith("+") ? "+" : ""}
                </div>
                <p className="text-muted text-sm uppercase tracking-wider">
                  {tv(stat.label)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
