"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

const SplitTextHover = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-12 overflow-hidden">
      <motion.span
        className="absolute inset-0 flex items-center"
        whileHover={{ y: -48 }}
        transition={{ duration: 0.3 }}
      >
        <span>{text}</span>
      </motion.span>
      <motion.span
        className="absolute inset-0 flex items-center"
        initial={{ y: 48 }}
        whileHover={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-accent">{text}</span>
      </motion.span>
    </div>
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { t, tv } = useSitePreferences();

  const contactItems = [
    {
      icon: Mail,
      label: t("contactEmail"),
      value: PORTFOLIO_DATA.contact.email,
      href: `mailto:${PORTFOLIO_DATA.contact.email}`,
    },
    {
      icon: Phone,
      label: t("contactPhone"),
      value: PORTFOLIO_DATA.contact.phone,
      href: `tel:${PORTFOLIO_DATA.contact.phone}`,
    },
    {
      icon: MapPin,
      label: t("contactLocation"),
      value: tv(PORTFOLIO_DATA.contact.location),
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: t("contactConnect"),
      href: PORTFOLIO_DATA.contact.linkedin,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative px-6 md:px-12 py-20 min-h-screen flex items-center"
    >
      {/* Blurred glow background */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-press text-2xl md:text-4xl leading-tight">
            {t("contactHeading").split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="block md:inline md:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, color: "#E8FF00" }}
                    className="text-muted group-hover:text-accent transition-colors"
                  >
                    <Icon size={28} />
                  </motion.div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-text group-hover:text-accent transition-colors break-all">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block px-12 py-4 border-2 border-accent text-accent font-press text-[10px] md:text-xs rounded-lg hover:bg-accent hover:text-bg transition-all"
        >
          {t("startProject")}
        </motion.a>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted"
      >
        <p>© 2026 Kemal Musthafa Rajabi · {t("footerBuilt")}</p>
      </motion.div>
    </section>
  );
};

export default Contact;
