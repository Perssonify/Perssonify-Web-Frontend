"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SubDropdown } from "./subDropdown";

interface HeaderProps {
  item: {
    name: string;
    href: string;
    sections?: {
      title: string;
      href: string;
      items?: { name: string; href: string }[];
    }[];
  };
}

export const MainDropdown: React.FC<HeaderProps> = ({ item }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="space-y-2 px-4 py-3 text-sm font-semibold transition-colors hover:text-primary text-foreground bg-muted/30 rounded-lg mx-2">
      <Link
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          setIsMenuOpen((open) => !open);
        }}
        className=" flex items-center justify-between"
      >
        {item.name}
        <ChevronDown
          className="w-4 h-4 text-primary transition-transform duration-200"
          style={{ transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </Link>
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
            {item.sections?.map((section: any) => (
              <SubDropdown key={section.title} section={section} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
