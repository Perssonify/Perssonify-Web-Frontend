"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Eye, Cog, TrendingUp } from "lucide-react";

const deliverables = [
  {
    icon: Eye,
    title: "Clarity Where Others Get Stuck",
    description:
      "We surface the root causes, not just the symptoms. We don't stop until we've built the plan.",
  },
  {
    icon: Cog,
    title: "Execution That Fits",
    description:
      "Strategy is only as good as what gets implemented. We build and deliver solutions that work in real life, not just on slides.",
  },
  {
    icon: TrendingUp,
    title: "Momentum That Compounds",
    description:
      "We are built for forward motion, iterative improvement, and long-term scale.",
  },
];

export default function StaticThree() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
      {/* Responsive grid: 1 col mobile, 3 medium+; responsive gap */}
      {deliverables.map((item) => (
        <Card
          key={item.title}
          className="text-center h-full bg-primary/10 border-0 p-4 sm:p-6 md:p-8"
        >
          <CardHeader>
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-xl font-playfair">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
