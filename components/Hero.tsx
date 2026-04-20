"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import dynamic from "next/dynamic";
import { useSitePreferences } from "@/lib/sitePreferences";

const HeroScene3D = dynamic(() => import("@/components/HeroScene3D"), {
  ssr: false,
});

export const Hero = () => {
  const { t, theme, language } = useSitePreferences();
  const roleOptions = useMemo(
    () =>
      language === "id"
        ? ["Software Engineer", "Manajer Proyek", "Fullstack Developer"]
        : ["Software Engineer", "Project Manager", "Fullstack Developer"],
    [language],
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roleOptions[roleIndex];
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;

    let timeoutMs = isDeleting ? 45 : 85;

    // Debounce pause when text fully typed.
    if (!isDeleting && isComplete) {
      timeoutMs = 1200;
    }
    // Small pause before typing next role.
    if (isDeleting && isEmpty) {
      timeoutMs = 280;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roleOptions.length);
        return;
      }

      setTypedRole((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1),
      );
    }, timeoutMs);

    return () => window.clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex, roleOptions]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      <HeroScene3D />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      </div>

      {/* Blurred radial gradient glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12 md:mb-16 mt-8 md:mt-10"
        >
          <p
            className="text-sm md:text-base tracking-widest uppercase"
            style={{
              color:
                theme === "dark"
                  ? "rgba(240, 240, 240, 0.78)"
                  : "rgba(18, 20, 23, 0.92)",
            }}
          >
            {typedRole}
            <span className="opacity-70"> |</span> {PORTFOLIO_DATA.subtitle.split(" · ")[1]}
          </p>
          <p
            className="text-sm md:text-base mt-2"
            style={{
              color:
                theme === "dark"
                  ? "rgba(240, 240, 240, 0.72)"
                  : "rgba(18, 20, 23, 0.86)",
            }}
          >
            {PORTFOLIO_DATA.subtitle.split(" · ")[2]}
          </p>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 inset-x-0 flex justify-center text-center"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted tracking-widest">
            {t("heroScroll")}
          </p>
          <ChevronDown size={20} className="text-accent" />
        </div>
      </motion.div>

      {/* Scroll Indicator Line */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ originX: 0 }}
      />
    </section>
  );
};

export default Hero;
