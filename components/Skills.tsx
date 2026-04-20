"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import type { IconType } from "react-icons";
import {
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiJira,
  SiFigma,
} from "react-icons/si";
import { Layers3 } from "lucide-react";
import { useSitePreferences } from "@/lib/sitePreferences";

type SkillIconMap = Record<string, IconType>;

const SKILL_ICON_MAP: SkillIconMap = {
  Laravel: SiLaravel,
  MySQL: SiMysql,
  "Next.js": SiNextdotjs,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Git: SiGit,
  Agile: SiJira,
  "UI/UX Analysis": SiFigma,
};

const SkillCard = ({ skill }: { skill: string }) => {
  const Icon = SKILL_ICON_MAP[skill];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-subtle2 bg-surface/60 px-4 py-3 flex items-center gap-3"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent">
        {Icon ? <Icon size={18} /> : <Layers3 size={18} />}
      </span>
      <span className="text-sm md:text-base text-text">{skill}</span>
    </motion.div>
  );
};

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t } = useSitePreferences();

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
            {t("sectionSkills")}
          </p>
        </motion.div>

        {/* Static Skill Grid (No Marquee) */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm text-muted mb-3 uppercase tracking-wider">
              {t("skillsLang")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.skills.languages.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm text-muted mb-3 uppercase tracking-wider">
              {t("skillsSystems")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.skills.systems.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm text-muted mb-3 uppercase tracking-wider">
              {t("skillsTools")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PORTFOLIO_DATA.skills.tools.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
