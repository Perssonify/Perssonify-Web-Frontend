"use client";

import { Card, CardHeader, CardContent, CardTitle } from "./_cards";
// import { HoverCard } from "./_hover-cards";
import InteractiveHoverCard from "./_interactive-hover-cards";
import {
  ArrowUpRight,
  ChevronRight,
  UserPlus,
  ShieldCheck,
  BookOpen,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    icon: UserPlus,
    title: "Digital Onboarding & Offboarding",
    link: "/human-resources/digital-onboarding-and-offboarding",
    description:
      "Digitizing onboarding and offboarding workflows to eliminate manual steps and reduce time-to-productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Automated Compliance Tracking",
    link: "/human-resources/automated-compliance-tracking",
    description:
      "Automating compliance tracking for policies, access revocation, certifications, and regulatory acknowledgments.",
  },
  {
    icon: BookOpen,
    title: "HR System Integration",
    link: "/human-resources/hr-system-integration",
    description:
      "Integrating HR systems to ensure data consistency across recruitment, payroll, and performance tools.",
  },
  {
    icon: BarChart3,
    title: "Self-Service HR Portals",
    link: "/human-resources/self-service-hr-portals",
    description:
      "Enabling HR self-service and knowledge portals to reduce internal ticket volume and increase employee satisfaction.",
  },
];

export default function Home() {
  return (
    <div className="w-full px-4 max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl mb-4">Card One</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center w-full"
      >
        <Link href="/growth-solutions" className="block w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <div className="relative">
            <InteractiveHoverCard
              imageUrl="/Icons/Growth Solutions.png"
              heading="Growth Solutions"
              text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
              className="max-w-4xl"
            />
            <div className="absolute top-4 right-4 transition-opacity duration-300">
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Link>
        <Link
          href="/strategic-solutions"
          className="block w-full relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          <div className="relative">
            <InteractiveHoverCard
              imageUrl="/Icons/Strategic Solutions.png"
              heading="Strategic Solutions"
              text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
              className="max-w-4xl"
            />
            <div className="absolute top-4 right-4 transition-opacity duration-300">
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Link>
      </motion.div>
      <h2 className="text-2xl mt-10 mb-4">Card Two</h2>
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
      <h2 className="text-2xl mt-10 mb-4">Card Three</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            // className="px-2"
          >
            <Card className="h-full border-0 bg-card custom-shadow transition-all duration-300 ">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* <Card />
      <HoverCard />
      <InteractiveHoverCard /> */}
    </div>
  );
}
