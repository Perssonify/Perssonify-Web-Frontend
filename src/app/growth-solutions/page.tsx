"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Palette, 
  Target, 
  Search, 
  Globe, 
  SquareArrowOutUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};
const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const solutions = [
  {
    title: 'Performance Marketing & Paid Media',
    description:
      'High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.',
    icon: TrendingUp,
    link: '/growth-solutions/performance-marketing',
  },
  {
    title: 'Social Media Marketing & Brand Engagement',
    description:
      'Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.',
    icon: Users,
    link: '/growth-solutions/social-media',
  },
  {
    title: 'Email Marketing & Marketing Automation',
    description:
      'Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.',
    icon: Mail,
    link: '/growth-solutions/email-marketing',
  },
  {
    title: 'Creative Solutions',
    description:
      'Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions.',
    icon: Palette,
    link: '/growth-solutions/creative-solutions',
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    description:
      'Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement.',
    icon: Target,
    link: '/growth-solutions/conversion-optimization',
  },
  {
    title: 'Search Engine Optimization (SEO) & Website Growth',
    description:
      'Rank higher. Grow faster. Comprehensive SEO strategies that improve your search visibility and drive organic traffic growth.',
    icon: Search,
    link: '/growth-solutions/seo',
  },
  {
    title: 'Website Solutions',
    description:
      'Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth.',
    icon: Globe,
    link: '/growth-solutions/website-solutions',
  },
];

const CoreGrowthSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Breadcrumb */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto max-w-6xl px-4">
          <ThemeBreadcrumb />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Core Growth Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              High-performance marketing strategy and execution that engineers demand, amplifies brand value, and accelerates customer acquisition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={scaleIn}
                whileHover={{ scale: 1.025, y: -6, transition: { duration: 0.25 } }}
                className="flex h-full"
              >
                <Link href={solution.link} className="flex flex-1 h-full">
                  <Card className="flex flex-col h-full w-full group cursor-pointer transition-shadow hover:shadow-xl">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {solution.description}
                      </p>
                      <Button className="w-full mt-auto" tabIndex={-1} aria-hidden>
                        <span className="flex items-center justify-center w-full">
                          Learn More
                          <SquareArrowOutUpRight className="w-4 h-4 ml-2" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to grow faster?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how our core growth solutions can transform your business.
            </p>
            <Button size="lg" className="btn-primary" asChild>
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreGrowthSolutions;