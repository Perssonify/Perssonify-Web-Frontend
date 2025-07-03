"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { MainDropdown } from "./mainDropdown";

interface HeaderProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  navigation: any[];
}

export const MobileMenu: React.FC<HeaderProps> = ({
  setIsMenuOpen,
  navigation,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100dvh" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed top-0 left-0 w-full border bg-background overflow-y-auto z-[100] flex flex-col px-4"
    >
      <div className="flex items-center justify-between py-4 fixed top-0 left-0 w-full bg-background border-b px-4">
        <Link
          href="/"
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
          aria-label="Navigate to home page"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo-Teal.png"
            alt="Perssonify Logo"
            className="object-contain h-6 w-16 sm:h-8 sm:w-24"
            style={{ width: "auto" }}
          />
        </Link>
        <div onClick={() => setIsMenuOpen(false)} className="p-1 ml-1 pr-0">
          <X className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="py-4 space-y-3 flex flex-col mt-16">
        {navigation.map((item: any) => (
          <div key={item.name} className="flex flex-col">
            {item.hasDropdown ? (
              <MainDropdown item={item} />
            ) : (
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium transition-colors hover:text-primary text-foreground/80 hover:bg-muted/30 rounded-lg mx-2"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
        <div className="px-4 py-3 border-t border-border/30 mt-4">
          <Button asChild className="w-full">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
