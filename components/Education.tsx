"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t, tv } = useSitePreferences();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-12 py-20 bg-surface/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="font-press text-muted text-[10px] md:text-xs tracking-normal uppercase">
            {t("sectionEducation")}
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PORTFOLIO_DATA.education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-surface/50 border border-border rounded-lg p-8 hover:border-accent/50 transition-all"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-3 py-1 bg-accent/10 text-accent font-press text-[10px] rounded-full mb-4"
              >
                {edu.startDate} — {edu.graduation}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{tv(edu.degree)}</h3>
              <p className="text-muted mb-6">{edu.institution}</p>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted uppercase tracking-wider mb-2">
                  {edu.gpa ? "GPA" : t("finalScore")}
                </p>
                <p className="font-press text-xl md:text-2xl text-accent leading-tight">
                  {edu.gpa || edu.score}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
