"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSitePreferences } from "@/lib/sitePreferences";

export const Preloader = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [count, setCount] = useState(0);
  const { t } = useSitePreferences();

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(
        () => {
          setCount((prev) => prev + Math.random() * 30);
        },
        100 + Math.random() * 200,
      );
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [count]);

  useEffect(() => {
    if (count >= 100) {
      const timer = setTimeout(() => setIsComplete(true), 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [count]);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-bg z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-6xl font-bold gradient-text mb-4"
        >
          {Math.floor(Math.min(count, 100))}%
        </motion.div>
        <div className="w-64 h-1 bg-surface rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(count, 100)}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-accent"
          />
        </div>
        <p className="text-muted mt-4 text-sm tracking-widest">{t("loading")}</p>
      </div>
    </motion.div>
  );
};

export default Preloader;
