import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  Settings,
  SquareArrowOutUpRight,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function CardFour() {
  const solutions = [
    {
      title: "Process & Workflow Automation",
      description:
        "Designing and implementing seamless workflows that combine Robotic Process Automation (RPA), AI, and orchestration to optimize execution across teams.",
      icon: Workflow,
      link: "/process-workflow-automation",
      useCases:
        "approvals streamlining, document processing, task routing, data reconciliation",
    },
    {
      title: "Digital Systems Enablement",
      description:
        "Optimizing platform strategy and enhancing workforce effectiveness with AI-powered tools, system integration, and automation frameworks.",
      icon: Settings,
      link: "/digital-systems-enablement",
      useCases:
        "CRM/ERP integration, platform optimization, AI copilots, digital dashboards",
    },
  ];
  return (
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
                <p className="text-sm font-medium text-foreground mb-2">
                  Use cases:
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {solution.useCases}
                </p>
              </div>
              <Link
                href={solution.link}
                className="flex items-center justify-center w-full"
              >
                <Button className="w-full flex items-center justify-center gap-1">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
