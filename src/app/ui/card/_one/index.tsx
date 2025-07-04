import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import InteractiveHoverCard from "@/components/ui/interactive-hover-card";

export default function CardOne() {
  return (
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
      <Link href="/strategic-solutions" className="block w-full relative group">
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
  );
}
