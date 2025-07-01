"use client"

import React, { useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Target, Zap, Lightbulb, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { RotatingText } from '@/components/ui/RotatingText';
import InteractiveHoverCard from '@/components/ui/InteractiveHoverCard';

// Animation variants - optimized for performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CombinedHeroAbout: React.FC = () => {
  // Memoized features data
  const features = useMemo(() => [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every action with your business goals for maximum impact.'
    },
    {
      icon: Zap,
      title: 'Rapid Execution',
      description: 'Fast implementation without compromising on quality or results.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with proven track records in growth.'
    }
  ], []);

  // Memoized rotating texts
  const rotatingTexts = useMemo(() => [
    "The right solution.",
    "The right time.",
    "Delivered."
  ], []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="relative flex items-center justify-center overflow-hidden pt-32 pb-24">
            <motion.div 
              className="container relative z-10"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary text-sm font-medium mb-8 backdrop-blur-sm"
                >
                  <Zap className="w-4 h-4 mr-2 animate-pulse" />
                  Growth & Strategic Solutions
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-center"
                >
                  We bring{' '}
                  <span className="text-primary relative inline-block">
                    Growth
                  </span>
                  {' '}and{' '}
                  <span className="text-primary relative inline-block">
                    Scale
                  </span>
                  {' '}to life.
                </motion.h1>

                {/* Subtitle with Fixed Layout */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-base sm:text-lg md:text-xl text-foreground/90 dark:text-foreground/80 mb-16 leading-relaxed"
                >
                  <div className="flex flex-wrap items-center justify-center gap-1">
                    <span>We help businesses grow fast and scale smart.</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-primary border border-primary min-w-[180px] max-w-[220px] justify-center text-center">
                      <RotatingText
                        texts={rotatingTexts}
                        rotationInterval={2000}
                        mainClassName="inline font-semibold text-black dark:text-white"
                        splitBy="words"
                      />
                    </span>
                  </div>
                </motion.div>

                {/* Interactive Hover Cards */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full mt-8"
                >
                  <Link href="/growth-solutions" className="block w-full max-w-lg relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className="relative">
                      <InteractiveHoverCard
                        imageUrl="/Icons/Growth Solutions.png"
                        heading="Growth Solutions"
                        text="High-performance marketing strategy and execution that amplifies brand value and accelerates customer acquisition."
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/strategic-solutions" className="block w-full max-w-lg relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className="relative">
                      <InteractiveHoverCard
                        imageUrl="/Icons/Strategic Solutions.png"
                        heading="Strategic Solutions"
                        text="Tailored strategy and implementations built for precision, scalability, and operational efficiency."
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/60" />
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <motion.div 
              className="w-2 h-2 bg-primary/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          {/* About Us Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
            {/* Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 px-2">
                About <span className="text-primary">Us</span>
              </h2>
              <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed px-2">
                The right solution at the right time can change everything. We make the right solutions happen right now.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                We solve what&apos;s really holding you back—whether it&apos;s growth, operations or both. Born from performance marketing where speed and ROI are non-negotiable, we apply the same relentless focus to optimize entire businesses.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                Our approach: Identify the real problem. Design solutions that fit your reality. Execute with urgency.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-6 sm:mb-8 leading-relaxed">
                World-class outcomes don&apos;t require world-size teams. We&apos;re lean, expert-driven, and built for speed without compromise.
              </p>
              <p className="text-base sm:text-lg font-semibold text-primary mb-6 sm:mb-8">
                Ready to scale with confidence? Let&apos;s talk.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about">
                  <Button size="lg" className="group text-white bg-primary hover:bg-primary/90 hover:text-white transition-all duration-300">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-4 sm:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInRight}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/20">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section Divider */}
          <motion.div 
            className="relative my-16 sm:my-24"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-6">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-primary/60' : 'bg-primary/40'}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Journey So Far Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
            {/* Journey Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInLeft}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Our Journey <span className="text-primary">So Far</span>
              </h2>
              <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed">
                It started with a simple observation: the best campaigns weren&apos;t just creative—they were surgical.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                We began in performance marketing, obsessing over every conversion and ROI point. But as we drove growth for ambitious businesses, we kept hitting the same wall—great campaigns throttled by slow processes and operational bottlenecks.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                The breakthrough: the same precision that optimized ad spend could optimize entire operations.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                We didn&apos;t abandon our marketing DNA, we expanded it. The urgency, data-driven decisions and relentless focus on results stayed. Now we solve the problems that were limiting success in the first place.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                Today, we&apos;re the partner businesses call when speed matters, stakes are high, and &ldquo;good enough&rdquo; isn&apos;t enough.
              </p>
              <p className="text-base sm:text-lg font-semibold text-primary mb-6 sm:mb-8">
                The lesson: breakthrough results don&apos;t come from doing more—they come from solving what&apos;s really in the way.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about/solvepath-framework">
                  <Button size="lg" className="group text-white bg-primary hover:bg-primary/90 hover:text-white transition-all duration-300">
                    Learn More About SolvePath Framework
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Journey Visual */}
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInRight}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-4 sm:gap-6"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div 
                      className="flex items-center justify-center mb-4 sm:mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-center text-foreground mb-3 sm:mb-4">
                      From Campaigns to Complete Solutions
                    </h3>
                    <p className="text-center text-muted-foreground text-sm sm:text-base">
                      We evolved from performance marketing specialists to comprehensive business accelerators, maintaining our core DNA of speed, precision, and results.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedHeroAbout;