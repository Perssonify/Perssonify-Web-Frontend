"use client";

// Hero Section
import React from "react";
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { RotatingText } from "@/components/ui/rotating-text";
import OrbitingCirclesDemo from "@/common/OrbitingCircles";
import { cn } from "@/lib/utils"; // Make sure this import is correct
import { DotPattern } from "@/components/magicui/dot-pattern";

const HeroFive: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* DotPattern background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center pt-20 h-auto md:h-screen">
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left gap-6 py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-sm font-medium backdrop-blur-sm mb-2"
            >
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Growth & Strategic Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-left "
            >
              We bring{" "}
              <span className="text-primary relative inline-block">Growth</span>{" "}
              and{" "}
              <span className="text-primary relative inline-block">Scale</span>{" "}
              to life.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-foreground/90 dark:text-foreground/80 leading-relaxed"
            >
              <div className="mb-2">
                We help businesses grow fast and scale smart.
              </div>
              <div className="inline-flex items-center  py-0.5 rounded-lg bg-primary border border-primary min-w-[180px] max-w-[220px] justify-center text-center">
                <RotatingText
                  texts={[
                    "The right solution.",
                    "Delivered.",
                  ]}
                  rotationInterval={2000}
                  mainClassName="inline font-semibold text-black dark:text-white"
                  splitBy="words"
                />
              </div>
            </motion.div>
          </div>
          {/* Right: Orbiting Circles Demo */}
          <div className="flex justify-center items-center mb-12">
            <OrbitingCirclesDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFive;
