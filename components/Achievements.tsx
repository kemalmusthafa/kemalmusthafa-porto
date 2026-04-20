"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

const iconMap: { [key: string]: React.ReactNode } = {
  Award: <Icons.Award size={32} />,
  BookOpen: <Icons.BookOpen size={32} />,
  Globe: <Icons.Globe size={32} />,
  Users: <Icons.Users size={32} />,
};

export const Achievements = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={containerRef} className="relative px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="font-press text-muted text-[10px] md:text-xs tracking-normal uppercase">
            {t("sectionAchievements")}
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {PORTFOLIO_DATA.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-surface/50 border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-all"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-accent mb-3 flex justify-center"
              >
                {iconMap[achievement.icon] || <Icons.Zap size={32} />}
              </motion.div>
              <p className="text-sm text-muted uppercase tracking-wider mb-3">
                {tv(achievement.title)}
              </p>
              <p className="font-press text-lg md:text-xl text-accent leading-tight">
                {tv(achievement.value)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
