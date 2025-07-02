'use client';
import React from 'react';
import { Zap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { RotatingText } from '@/components/ui/rotating-text';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import Image from 'next/image';
import InteractiveHoverCard from '@/components/ui/interactive-hover-card';
import Link from 'next/link';

// Demo icon paths from public/Icons/
const iconPaths = [
  '/Icons/robot.svg',
  '/Icons/technical-support.svg',
  '/Icons/user.svg',
  '/Icons/web-development.svg',
  '/Icons/analytic-report.svg',
  '/Icons/market-analysis.svg',
];

function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[350px] w-full items-center justify-center">
      {/* Center fixed icon */}
      <div className="absolute z-10 flex items-center justify-center">
        <Image
          src={'/Icons/globe.svg'}
          alt="Center Icon"
          width={80}
          height={80}
          className="rounded-full shadow-lg bg-white dark:bg-black p-2 object-contain"
          priority
        />
      </div>
      {/* Orbiting icons */}
      <OrbitingCircles iconSize={48} color="var(--color-primary)">
        {iconPaths.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Orbit Icon ${i + 1}`}
            width={48}
            height={48}
            className="rounded-full bg-white dark:bg-black p-1.5 object-contain shadow"
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={32} radius={100} reverse speed={2} color="var(--color-primary)">
        {iconPaths.slice(1, 5).map((src, i) => (
          <Image
            key={src + '-small'}
            src={src}
            alt={`Orbit Icon Small ${i + 1}`}
            width={32}
            height={32}
            className="rounded-full bg-white dark:bg-black p-1 object-contain shadow"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  h-screen">
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left gap-6">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            >
              We bring{' '}
              <span className="text-primary relative inline-block">Growth</span>
              {' '}and{' '}
              <span className="text-primary relative inline-block">Scale</span>
              {' '}to life.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-foreground/90 dark:text-foreground/80 leading-relaxed"
            >
              <div className="mb-2">We help businesses grow fast and scale smart.</div>
              <div className="inline-flex items-center px-2 py-0.5 rounded-lg bg-primary border border-primary min-w-[180px] max-w-[220px] justify-center text-center">
                <RotatingText
                  texts={["The right solution.", "The right time.", "Delivered."]}
                  rotationInterval={2000}
                  mainClassName="inline font-semibold text-black dark:text-white"
                  splitBy="words"
                />
              </div>
            </motion.div>
          </div>
          {/* Right: Orbiting Circles Demo */}
          <div className="flex justify-center items-center">
            <OrbitingCirclesDemo />
          </div>
        </div>
         {/* Interactive Hover Cards */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.7 }}
           className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full mt-8"
         >
           <Link href="/growth-solutions" className="block w-full max-w-lg relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
             <div className="relative">
               <InteractiveHoverCard
                 imageUrl="/Icons/Growth Solutions.png"
                 heading="Growth Solutions"
                 text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
               />
               <div className="absolute top-4 right-4 transition-opacity duration-300">
                 <ArrowUpRight className="w-5 h-5 text-primary" />
               </div>
             </div>
           </Link>
           <Link href="/strategic-solutions" className="block w-full max-w-lg relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
             <div className="relative">
               <InteractiveHoverCard
                 imageUrl="/Icons/Strategic Solutions.png"
                 heading="Strategic Solutions"
                 text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
               />
               <div className="absolute top-4 right-4 transition-opacity duration-300">
                 <ArrowUpRight className="w-5 h-5 text-primary" />
               </div>
             </div>
           </Link>
         </motion.div>
      </div>
    </section>
  );
};

export default Hero;