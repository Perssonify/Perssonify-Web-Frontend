"use client";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Settings,
  Shield,
  Target,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function TimelineSection() {
  const [activeSection, setActiveSection] = useState("growth-solutions");
  const sectionRef = useRef<HTMLDivElement>(null);
  const strategicRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visibleSections.length > 0) {
          visibleSections.sort(
            (a, b) =>
              a.getBoundingClientRect().top - b.getBoundingClientRect().top
          );
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.2,
      }
    );

    const sectionsToObserve = document.querySelectorAll("section[id]");
    sectionsToObserve.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const rect = sectionRef.current.getBoundingClientRect();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    let element: HTMLElement | null = null;
    if (id === "strategic-solutions" && strategicRef.current) {
      element = strategicRef.current;
    } else {
      element = document.getElementById(id);
    }
    if (element) {
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const sections = [
    { id: "growth-solutions", title: "Growth Solutions" },
    { id: "strategic-solutions", title: "Strategic Solutions" },
  ];

  const showNav = true;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section at the top */}
      <div className="bg-background py-12 sm:py-16 ">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tcpcext-left text-primary">
            Our Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-left max-w-4xl">
            Whether you&apos;re launching something new or optimizing
            what&apos;s already working, we deliver what your business needs to
            grow, adapt, and move faster.
          </p>
        </div>
      </div>

      {/* LEFT NAVIGATION - STICKY WITHIN THIS SECTION ONLY */}
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl py-8 relative"
      >
        <div className="flex flex-row items-start gap-8 pt-4">
          {/* Sticky Left Nav with Both Items - Only sticky within this container */}
          {showNav && (
            <div
              className={cn(
                "hidden lg:flex flex-col w-[280px] space-y-4",
                // isNavFixed ? "fixed top-24 z-50" :
                "sticky top-24 pb-20 z-50"
              )}
              // style={isNavFixed ? { left: '6rem' } : { marginLeft: '4rem' }}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-xl font-bold w-[220px] text-left whitespace-nowrap transition-colors flex items-center justify-between cursor-pointer",
                    activeSection === section.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Main Content */}
          <div
            className={cn(
              "flex-1"
              // showNav && isNavFixed ? "ml-80" : showNav ? "ml-0" : ""
            )}
          >
            <main className="max-w-none">
              {/* Growth Solutions Section */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-0 mb-2 text-primary ">
                Growth Solutions
              </h2>
              <section
                id="growth-solutions"
                className="py-0 mb-12 sm:mb-16 mt-0"
              >
                <p className="mb-6 mt-0 text-muted-foreground leading-relaxed">
                  You need more customers, more engagement, and more momentum.
                  If your priority is to attract the right audience, convert
                  consistently, and expand your market reach, our Growth
                  Solutions are built for you. We deliver high-performance
                  marketing strategy and execution that engineers demand,
                  amplifies brand value, and accelerates customer acquisition.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-primary">
                  Core Growth Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  {[
                    {
                      link: "/performance-marketing",
                      icon: "/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png",
                      title: "Performance Marketing & Paid Media",
                      desc: "High-ROI ads that convert.",
                    },
                    {
                      link: "/social-media-marketing",
                      icon: "/Growth Solutions Icons/Social Media Marketing & Brand Engagement.png",
                      title: "Social Media Marketing & Brand Engagement",
                      desc: "Build audience, spark action.",
                    },
                    {
                      link: "/email-marketing",
                      icon: "/Growth Solutions Icons/Email Marketing & Marketing Automation.png",
                      title: "Email Marketing & Marketing Automation",
                      desc: "Automate nurture, drive loyalty.",
                    },
                    {
                      link: "/creative-solutions",
                      icon: "/Growth Solutions Icons/Creative Solutions.png",
                      title: "Creative Solutions",
                      desc: "Visuals that get results.",
                    },
                    {
                      link: "/conversion-optimization",
                      icon: "/Growth Solutions Icons/Conversion Rate Optimization.png",
                      title: "Conversion Rate Optimization (CRO)",
                      desc: "Test. Refine. Convert more.",
                    },
                    {
                      link: "/seo-website-growth",
                      icon: "/Growth Solutions Icons/Search Engine Optimization (SEO) & Website Growth.png",
                      title:
                        "Search Engine Optimization (SEO) & Website Growth",
                      desc: "Rank higher. Grow faster.",
                    },
                    {
                      link: "/website-solutions",
                      icon: "/Growth Solutions Icons/Website Solutions.png",
                      title: "Website Solutions",
                      desc: "Seamless, scalable, conversion-ready.",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 mb-3"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-black dark:text-white text-sm mb-1 leading-tight line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-primary">
                  Specialized Growth Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  {[
                    {
                      link: "/audit-insights",
                      icon: "/Specialized Growth Solutions Icons/Deep Dive Audit & Strategic Insights.png",
                      title: "Deep Dive Audit & Strategic Insights",
                      desc: "Clarity through expert analysis.",
                    },
                    {
                      link: "/analytics-tracking",
                      icon: "/Specialized Growth Solutions Icons/Analytics and Event Tracking Setup.png",
                      title: "Analytics and Event Tracking Setup",
                      desc: "Track what matters, measure what works.",
                    },
                    {
                      link: "/lead-generation",
                      icon: "/Specialized Growth Solutions Icons/Lead Generation & Funnel Strategy.png",
                      title: "Lead Generation & Funnel Strategy",
                      desc: "Build funnels that convert.",
                    },
                    {
                      link: "/brand-architecture",
                      icon: "/Specialized Growth Solutions Icons/Brand Architecture & Strategy.png",
                      title: "Brand Architecture & Strategy",
                      desc: "Define, differentiate, scale.",
                    },
                    {
                      link: "/content-strategy",
                      icon: "/Specialized Growth Solutions Icons/Content Strategy & Planning.png",
                      title: "Content Strategy & Marketing",
                      desc: "Create content that drives action.",
                    },
                    {
                      link: "/ai-content",
                      icon: "/Specialized Growth Solutions Icons/AI-Accelerated Content Production Pipelines.png",
                      title: "AI-Accelerated Content Production Pipelines",
                      desc: "Scale content with AI precision.",
                    },
                    {
                      link: "/executive-branding",
                      icon: "/Specialized Growth Solutions Icons/Executive Personal Branding & LinkedIn Marketing.png",
                      title: "Executive Personal Branding & LinkedIn Marketing",
                      desc: "Elevate presence, grow influence.",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 mb-3"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-black dark:text-white text-sm mb-1 leading-tight line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="/contact">
                    <Button
                      className="font-semibold text-lg mb-4"
                      size="lg"
                      asChild
                    >
                      Ready to move faster? Let&apos;s talk.
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Strategic Solutions Section */}
              <h2
                ref={strategicRef}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mt-0 mb-2 text-primary"
              >
                Strategic Solutions
              </h2>
              <section
                id="strategic-solutions"
                className="py-0 mb-12 sm:mb-16 mt-0"
              >
                <p className="mb-6 mt-0 text-muted-foreground leading-relaxed">
                  You need to improve efficiency, automate intelligently, and
                  ensure operations scale without chaos. If you&apos;re
                  navigating operational bottlenecks, automation gaps, or
                  complex scaling challenges, our Strategic Solutions offer
                  high-ROI tailored strategy and implementations that are built
                  for precision, scalability, and efficiency. From workflow
                  orchestration to platform optimization, we help you execute at
                  the next level with minimal disruption.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-primary">
                  Core Strategic Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  {[
                    {
                      link: "/process-automation",
                      icon: "/Strategic Solutions Icons/Process & Workflow Automation.png",
                      title: "Process & Workflow Automation",
                      desc: "Automate execution. Eliminate friction.",
                    },
                    {
                      link: "/digital-systems-enablement",
                      icon: "/Strategic Solutions Icons/Digital Systems Enablement.png",
                      title: "Digital Systems Enablement",
                      desc: "Optimize platforms. Empower teams.",
                    },
                    {
                      link: "/custom-solution-engineering",
                      icon: "/Strategic Solutions Icons/Custom Solution Engineering.png",
                      title: "Custom Solution Engineering",
                      desc: "Solve complex. Deliver fast.",
                    },
                    {
                      link: "/enterprise-evolution-strategic-transformation",
                      icon: "/Strategic Solutions Icons/Enterprise Evolution & Strategic Transformation.png",
                      title: "Enterprise Evolution & Strategic Transformation",
                      desc: "Reshape. Scale. Future-proof.",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 mb-3"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-10 h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-black dark:text-white text-sm mb-1 leading-tight line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-primary">
                  Solutions By Function
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  {[
                    {
                      title: "Finance",
                      desc: "Automate reporting. Accelerate reconciliation.",
                      icon: DollarSign,
                      link: "/finance-operations",
                    },
                    {
                      title: "Operations",
                      desc: "Unblock execution. Speed up critical workflows.",
                      icon: Settings,
                      link: "/operations",
                    },
                    {
                      title: "Compliance & Governance",
                      desc: "Reduce risk. Ensure audit-ready control.",
                      icon: Shield,
                      link: "/compliance-governance",
                    },
                    {
                      title: "Cross-Functional Leadership",
                      desc: "Align departments. Orchestrate complex delivery.",
                      icon: Target,
                      link: "/cross-functional-leadership",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 mb-3"
                    >
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-black dark:text-white text-sm mb-1 leading-tight line-clamp-2">
                          {item.title}
                        </h5>
                        <p className="text-xs text-black dark:text-white leading-tight line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 ml-2 flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="/contact">
                    <Button
                      className="font-semibold text-lg mb-4"
                      size="lg"
                      asChild
                    >
                      Ready to move faster? Let&apos;s talk.
                    </Button>
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
