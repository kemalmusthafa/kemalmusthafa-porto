"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t, tv } = useSitePreferences();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative px-6 md:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="font-press text-muted text-[10px] md:text-xs tracking-normal uppercase">
            {t("sectionExperience")}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-1"
        >
          {PORTFOLIO_DATA.experience.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants}>
              <motion.button
                onClick={() =>
                  setExpandedId(expandedId === job.id ? null : job.id)
                }
                className="w-full text-left"
                whileHover={{ x: 8 }}
              >
                <motion.div
                  className={`flex items-center justify-between gap-4 px-6 py-4 border-b border-border hover:bg-surface/30 transition-colors ${
                    expandedId === job.id ? "bg-surface/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    {/* Index Number */}
                    <div className="text-accent font-press text-[10px] md:text-xs min-w-12">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-text mb-1">
                        {tv(job.position)}
                      </h3>
                      <p className="text-muted text-sm">{job.company}</p>
                    </div>
                  </div>

                  {/* Date Range */}
                  <div className="flex items-center gap-3 md:gap-6 min-w-fit">
                    <p className="text-muted text-xs md:text-sm whitespace-nowrap">
                      {job.startDate} — {job.endDate}
                    </p>
                    <motion.div
                      animate={{ rotate: expandedId === job.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight size={18} className="text-accent" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-surface/20 overflow-hidden"
                    >
                      <div className="px-6 py-4 pl-14">
                        <ul className="space-y-2">
                          {job.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex gap-3 text-sm text-muted"
                            >
                              <span className="text-accent mt-1">→</span>
                              <span>{tv(detail)}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
