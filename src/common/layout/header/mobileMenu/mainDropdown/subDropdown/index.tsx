"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  section: {
    title: string;
    href: string;
    items?: { name: string; href: string }[];
  };
}

export const SubDropdown: React.FC<HeaderProps> = ({ section }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div key={section.title} className="space-y-1 mt-1">
      <Link
        href={section.href}
        onClick={() => {
          setIsMenuOpen((open) => !open);
        }}
        className="px-3 py-2 text-xs font-medium text-foreground/80 hover:text-primary transition-colors border-l-2 border-primary/20 flex items-center justify-between"
      >
        {section.title}
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
            {section.items?.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="block px-4 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors hover:bg-muted/30 rounded"
              >
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
