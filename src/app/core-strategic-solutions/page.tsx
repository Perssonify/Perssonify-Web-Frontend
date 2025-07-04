"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Workflow, 
  Settings, 
  Wrench, 
  Building2,
  SquareArrowOutUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';
import { motion } from 'motion/react';

const CoreStrategicSolutions: React.FC = () => {
  const solutions = [
    {
      title: "Process & Workflow Automation",
      description: "Designing and implementing seamless workflows that combine Robotic Process Automation (RPA), AI, and orchestration to optimize execution across teams.",
      icon: Workflow,
      link: "/process-workflow-automation",
      useCases: "approvals streamlining, document processing, task routing, data reconciliation"
    },
    {
      title: "Digital Systems Enablement",
      description: "Optimizing platform strategy and enhancing workforce effectiveness with AI-powered tools, system integration, and automation frameworks.",
      icon: Settings,
      link: "/digital-systems-enablement",
      useCases: "CRM/ERP integration, platform optimization, AI copilots, digital dashboards"
    },
    {
      title: "Custom Solution Engineering",
      description: "Diagnosing and designing purpose-built solutions for high-complexity, high-impact challenges that require rapid scoping, structured planning, and tailored execution.",
      icon: Wrench,
      link: "/custom-solution-engineering",
      useCases: "cross-functional workflows, legacy system extensions, urgent automation needs"
    },
    {
      title: "Enterprise Evolution & Strategic Transformation",
      description: "Supporting organizational structural shifts with business model restructuring, cross-functional collaboration optimization, and digital capability upgrades.",
      icon: Building2,
      link: "/enterprise-evolution-strategic-transformation",
      useCases: "post-merger integration, operating model redesign, scaling functions globally"
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full px-4 max-w-6xl mx-auto">
      <div className="container mx-auto max-w-6xl">
        <ThemeBreadcrumb />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-[60vh] py-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Core Strategic Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For businesses looking to streamline execution, reduce inefficiencies, and scale smarter, our Core Strategic Solutions focus on intelligent automation, digital system enablement, and enterprise-ready transformation to unlock operational capacity and long-term efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-2">Use cases:</p>
                      <p className="text-sm text-muted-foreground italic">
                        {solution.useCases}
                      </p>
                    </div>
                    <Button asChild className="w-full flex items-center justify-center gap-2">
                      <Link href={solution.link} className="flex items-center justify-center w-full">
                        Learn More
                        <SquareArrowOutUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-muted/40 bg-muted/70 mb-20 rounded-2xl">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Looking for tighter workflows, smarter automation, and systems that won&apos;t slow you down?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s streamline the way your business runs.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreStrategicSolutions;