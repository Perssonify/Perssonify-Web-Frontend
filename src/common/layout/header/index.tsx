"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "./switch";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { MobileMenu } from "./mobileMenu";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
    {
      key: "growth-solutions",
      name: "Growth Solutions",
      href: "/growth-solutions",
      hasDropdown: true,
      sections: [
        {
          title: "Core Growth Solutions",
          href: "/core-growth-solutions",
          items: [
            {
              name: "Performance Marketing & Paid Media",
              href: "/performance-marketing",
            },
            {
              name: "Social Media Marketing & Brand Engagement",
              href: "/social-media-marketing",
            },
            {
              name: "Email Marketing & Marketing Automation",
              href: "/email-marketing",
            },
            {
              name: "Creative Solutions",
              href: "/creative-solutions",
            },
            {
              name: "Conversion Rate Optimization (CRO)",
              href: "/conversion-optimization",
            },
            {
              name: "Search Engine Optimization (SEO) & Website Growth",
              href: "/seo-website-growth",
            },
            {
              name: "Website Solutions",
              href: "/website-solutions",
            },
          ],
        },
        {
          title: "Specialized Growth Solutions",
          href: "/specialized-growth-solutions",
          items: [
            {
              name: "Deep Dive Audit & Strategic Insights",
              href: "/audit-insights",
            },
            {
              name: "Analytics and Event Tracking Setup",
              href: "/analytics-tracking",
            },
            {
              name: "Lead Generation & Funnel Strategy",
              href: "/lead-generation",
            },
            {
              name: "Brand Architecture & Strategy",
              href: "/brand-strategy",
            },
            {
              name: "Content Strategy & Planning",
              href: "/content-strategy",
            },
            {
              name: "AI-Accelerated Content Production Pipelines",
              href: "/ai-content",
            },
            {
              name: "Executive Personal Branding & LinkedIn Marketing",
              href: "/executive-branding",
            },
          ],
        },
      ],
    },
    {
      key: "strategic-solutions",
      name: "Strategic Solutions",
      href: "/strategic-solutions",
      hasDropdown: true,
      sections: [
        {
          title: "Core Strategic Solutions",
          href: "/core-strategic-solutions",
          items: [
            {
              name: "Process & Workflow Automation",
              href: "/process-automation",
            },
            {
              name: "Digital Systems Enablement",
              href: "/digital-systems-enablement",
            },
            {
              name: "Custom Solution Engineering",
              href: "/custom-solution-engineering",
            },
            {
              name: "Enterprise Evolution & Strategic Transformation",
              href: "/enterprise-evolution-strategic-transformation",
            },
          ],
        },
        {
          title: "Solutions By Function",
          href: "/solutions-by-function",
          items: [
            {
              name: "Finance",
              href: "/finance-operations",
            },
            {
              name: "Human Resources",
              href: "/human-resources",
            },
            { name: "Operations", href: "/operations" },
            {
              name: "Compliance & Governance",
              href: "/compliance-governance",
            },
            {
              name: "Cross-Functional Leadership",
              href: "/cross-functional-leadership",
            },
          ],
        },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  // Clear timeout helper
  const clearDropdownTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle click to toggle dropdown
  const handleDropdownClick = (itemName: string) => {
    clearDropdownTimeout();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Handle mouse enter with delay
  const handleMouseEnter = (itemName: string) => {
    clearDropdownTimeout();
    setActiveDropdown(itemName);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    clearDropdownTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      clearDropdownTimeout();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
      <div className="px-4 w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 relative">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Navigate to home page"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo-Teal.png"
              alt="Perssonify Logo"
              className="object-contain h-6 w-16 sm:h-6 sm:w-20"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Center: Navigation (desktop only) */}
          <nav
            className="hidden lg:flex flex-1 items-center justify-center space-x-6"
            ref={dropdownRef}
          >
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      className="py-2"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <span className="flex items-center space-x-1">
                        <AnimatedUnderline
                          active={
                            activeDropdown === item.name || isActive(item.href)
                          }
                        >
                          {item.name}
                        </AnimatedUnderline>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown == item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute mt-2 bg-background border border-border rounded-xl shadow-2xl z-[100] overflow-hidden left-1/2 transform -translate-x-1/2`}
                          style={{ width: "640px" }}
                          onMouseEnter={clearDropdownTimeout}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Header Section */}
                          <div className="bg-muted/30 px-6 py-4 border-b border-border">
                            <Link
                              href={item.href}
                              className="block hover:text-primary transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <h3 className="font-bold text-lg text-foreground">
                                {item.name}
                              </h3>
                              <p className="text-muted-foreground text-sm mt-1">
                                {item.name === "Growth Solutions"
                                  ? "High-performance marketing strategy and execution"
                                  : "Technology-enhanced operational scaling solutions"}
                              </p>
                            </Link>
                          </div>

                          {/* Content Grid */}
                          <div className="grid grid-cols-2 gap-0">
                            {item.sections?.map((section, index) => (
                              <div
                                key={section.title}
                                className={`p-6 ${index === 0 ? "border-r border-border" : ""}`}
                              >
                                <Link
                                  href={section.href}
                                  className="block font-semibold text-sm text-foreground hover:text-primary transition-colors mb-4 pb-2 border-b border-border/30"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {section.title}
                                </Link>
                                <div className="space-y-2">
                                  {section.items?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-muted/50"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href} className={"py-2"}>
                    <AnimatedUnderline active={isActive(item.href)}>
                      {item.name}
                    </AnimatedUnderline>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Dark mode toggle and Get Started button (desktop only) */}
          <div className="hidden lg:flex items-center space-x-2">
            <Switch checked={isDarkMode} setChecked={toggleDarkMode} />
            <Button asChild size="sm" className="h-8 text-xs px-3">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Hamburger menu button on mobile */}
          <div className="flex items-center lg:hidden gap-2">
            <Switch checked={isDarkMode} setChecked={toggleDarkMode} />
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 ml-1 pr-0"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 text-primary" />
              ) : (
                <Menu className="w-4 h-4 text-primary" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <MobileMenu setIsMenuOpen={setIsMenuOpen} navigation={navigation} />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
