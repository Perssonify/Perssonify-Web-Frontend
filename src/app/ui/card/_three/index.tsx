"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, ShieldCheck, BookOpen, BarChart3 } from "lucide-react";
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

export default function CardThree() {
  return (
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
  );
}
