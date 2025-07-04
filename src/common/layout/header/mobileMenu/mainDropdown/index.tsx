"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SubDropdown } from "./subDropdown";

interface HeaderProps {
  item: {
    key?: string;
    name: string;
    href: string;
    sections?: {
      title: string;
      href: string;
      items?: { name: string; href: string }[];
    }[];
  };
  handleMenuClose: () => void;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

export const MainDropdown: React.FC<HeaderProps> = ({
  item,
  handleMenuClose,
  activeMenu,
  setActiveMenu,
}) => {
  // Check if the current item is the active menu
  const isMenuOpen = activeMenu === item.key;

  return (
    <div className="space-y-2 px-4 py-3 text-sm font-semibold transition-colors hover:text-primary text-foreground bg-muted/30 rounded-lg mx-2">
      <div className="flex items-center justify-between">
        <Link href={item.href} onClick={handleMenuClose}>
          {item.name}
        </Link>
        <ChevronDown
          className="w-4 h-4 text-primary transition-transform duration-200"
          style={{ transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu(activeMenu === item.key ? null : item.key || null)
          }}
        />
      </div>
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            className="px-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {item.sections?.map(
              (section: {
                title: string;
                href: string;
                items?: { name: string; href: string }[];
              }) => (
                <SubDropdown
                  key={section.title}
                  section={section}
                  handleMenuClose={handleMenuClose}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
