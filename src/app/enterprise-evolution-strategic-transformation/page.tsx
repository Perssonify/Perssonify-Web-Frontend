"use client";
import React from "react";
import SolutionTemplate from "@/common/SolutionTemplate";
import { Cog, Settings, Users, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Business Model Reengineering",
    link: "/enterprise-evolution-strategic-transformation/business-model-reengineering",
    description:
      "Help leadership reshape how value is created, delivered, and captured across the business.",
  },
  {
    icon: Settings,
    title: "Scalable Operational Frameworks",
    link: "/enterprise-evolution-strategic-transformation/scalable-operational-frameworks",
    description:
      "Design operating structures that increase capacity without increasing complexity.",
  },
  {
    icon: Zap,
    title: "Strategic Planning & Roadmapping",
    link: "/enterprise-evolution-strategic-transformation/strategic-planning-roadmapping",
    description:
      "Guide long-term decisions on markets, teams, investments, and digital transformation.",
  },
  {
    icon: Users,
    title: "Cross-Functional Optimization",
    link: "/enterprise-evolution-strategic-transformation/cross-functional-optimization",
    description:
      "Break down silos, streamline collaboration, and align departments on shared outcomes.",
  },
  {
    icon: Cog,
    title: "Transformation Execution",
    link: "/enterprise-evolution-strategic-transformation/transformation-execution",
    description:
      "Support implementation of change initiatives with expert-led guidance, resource coordination, and measurable milestones.",
  },
];

export default function EnterpriseEvolutionStrategicTransformation() {
  return (
    <>
      <SolutionTemplate
        title="Enterprise Evolution & Strategic Transformation"
        description="Redefining Models, Reshaping Operations, and Scaling for Long-Term Success. As businesses grow, their operating models, structures, and strategies can become bottlenecks. Legacy systems, outdated workflows, or siloed teams can stall progress and limit adaptability. This isn't about technology for technology's sake—it's about enhancing business operations to adapt, evolve, and thrive."
        services={services}
        ctaTitle="Ready to Transform?"
        ctaDescription="Perssonify helps reduce the risk of transformation by combining big-picture thinking with execution-focused support. We ensure organizations don't just plan to change—they actually move forward with confidence and clarity."
        backLink="/strategic-solutions"
        backLinkText="View All Strategic Solutions"
        parentLabel="Strategic Solutions"
        parentHref="/strategic-solutions"
      />
      <div className="w-full px-4 max-w-6xl mx-auto">
        <div className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-muted/40 bg-muted/70 mb-20 rounded-2xl">
          <section className="max-w-3xl mx-auto px-4 pb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 mt-10">
              When to Apply
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground">
              <li>
                When leadership knows change is needed but clarity is lacking on
                where to begin or what to prioritize.
              </li>
              <li>
                When growth is limited by operational constraints, outdated
                structures, or internal friction.
              </li>
              <li>
                When organizations are entering a new phase—scaling,
                restructuring, or integrating after M&amp;A activity.
              </li>
              <li>
                When new revenue streams or innovation goals require a new
                go-to-market approach or cross-functional realignment.
              </li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
              Why It Matters
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>
                Businesses that fail to evolve become slow, reactive, and
                strategically irrelevant.
              </li>
              <li>
                Clear transformation strategies ensure that change efforts are
                aligned, resourced, and measurable.
              </li>
              <li>
                Perssonify helps reduce the risk of transformation by combining
                big-picture thinking with execution-focused support.
              </li>
              <li>
                We ensure organizations don&apos;t just plan to change—they
                actually move forward with confidence and clarity.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
