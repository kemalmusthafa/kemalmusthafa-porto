"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { useSitePreferences } from "@/lib/sitePreferences";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { theme, language, toggleTheme, toggleLanguage, t } =
    useSitePreferences();

  const navLinks = useMemo(
    () => [
      { id: "about", href: "#about", label: t("navAbout") },
      { id: "experience", href: "#experience", label: t("navExperience") },
      { id: "work", href: "#work", label: t("navWork") },
      { id: "contact", href: "#contact", label: t("navContact") },
    ],
    [t],
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < 100 && rect.bottom > 100) {
            setActiveLink(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 md:py-6 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-press text-[10px] md:text-xs cursor-pointer tracking-normal"
          >
            <span className="text-accent">{PORTFOLIO_DATA.name}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-text hover:text-accent transition-colors relative group"
                whileHover={{ color: "#E8FF00" }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
                {activeLink === link.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                  />
                )}
              </motion.button>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-border hover:border-accent/60 text-muted hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-border hover:border-accent/60 text-muted hover:text-accent transition-colors text-xs font-semibold"
              aria-label="Toggle language"
            >
              <Languages size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 right-0 z-30 md:hidden bg-surface border-b border-border ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-text hover:text-accent transition-colors"
            >
              {link.label}
            </motion.button>
          ))}

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-border text-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-border text-muted text-xs font-semibold"
              aria-label="Toggle language"
            >
              <Languages size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
