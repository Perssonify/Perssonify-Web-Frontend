import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import InteractiveHoverCard from "@/components/ui/interactive-hover-card";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function CardSix() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center w-full"
    >
      <Link href="/growth-solutions" className="block w-full relative group">
        {/* FlickeringGrid as background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FlickeringGrid />
        </div>
        <div className="relative z-10">
          <InteractiveHoverCard
            imageUrl="/Icons/Growth Solutions.png"
            heading="Growth Solutions"
            text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
            className="max-w-4xl bg-background text-foreground border border-primary/20 shadow-lg"
          />
          <div className="absolute top-4 right-4 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-blue-500" />
          </div>
          <div className="absolute inset-0 z-0 pointer-events-none">
            <FlickeringGrid />
          </div>
        </div>
      </Link>
      <Link href="/strategic-solutions" className="block w-full relative group">
        {/* FlickeringGrid as background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FlickeringGrid />
        </div>
        <div className="relative z-10">
          <InteractiveHoverCard
            imageUrl="/Icons/Strategic Solutions.png"
            heading="Strategic Solutions"
            text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
            className="max-w-4xl bg-background text-foreground border border-primary/20 shadow-lg"
          />
          <div className="absolute top-4 right-4 transition-opacity duration-300">
            <ArrowUpRight className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
