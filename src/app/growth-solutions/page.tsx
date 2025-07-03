"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Mail,
  Palette,
  Target,
  Search,
  Globe,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WavyBackground } from "@/components/ui/wavy-background";
import ThemeBreadcrumb from "@/components/ui/theme-breadcrumb";
import { motion } from "framer-motion";
import StartGrowingForm from "@/common/StartGrowingForm";

const GrowthSolutions: React.FC = () => {
  const coreServices = [
    {
      icon: Users,
      title: "Performance Marketing & Paid Media",
      description:
        "High-ROI ads that convert. Strategic campaign management across platforms to maximize your advertising spend and drive measurable results.",
      link: "/performance-marketing",
    },
    {
      icon: Users,
      title: "Social Media Marketing & Brand Engagement",
      description:
        "Build audience, spark action. Comprehensive social media strategies that create meaningful connections and drive engagement across all platforms.",
      link: "/social-media",
    },
    {
      icon: Mail,
      title: "Email Marketing & Marketing Automation",
      description:
        "Automate nurture, drive loyalty. Sophisticated email campaigns and automation workflows that convert prospects into loyal customers.",
      link: "/email-marketing",
    },
    {
      icon: Palette,
      title: "Creative Solutions",
      description:
        "Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions.",
      link: "/creative-solutions",
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement.",
      link: "/conversion-optimization",
    },
    {
      icon: Search,
      title: "SEO & Website Growth",
      description:
        "Rank higher. Grow faster. Comprehensive SEO strategies that improve your search visibility and drive organic traffic growth.",
      link: "/seo",
    },
    {
      icon: Globe,
      title: "Website Solutions",
      description:
        "Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth.",
      link: "/website-solutions",
    },
  ];

  const benefits = [
    "Measurable ROI on every campaign",
    "Data-driven decision making",
    "Scalable growth strategies",
    "Multi-channel integration",
    "Continuous optimization",
    "Transparent reporting",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <WavyBackground className="py-20 sm:py-28 md:py-36 mt-16 md:mt-20">
        <div className="container mx-auto px-4  lg:px-8 max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold font-playfair text-black dark:text-white mb-6 lg:mb-8">
              Growth Solutions
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
              High-performance marketing strategy and execution that engineers
              demand, amplifies brand value, and accelerates customer
              acquisition.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <StartGrowingForm
                title="Ready to Scale Operations?"
                description="Tell us about your operational challenges and we'll design solutions that drive efficiency and growth."
                buttonText="Start Growing Today"
              />
              <Button variant="outline" size="lg" asChild>
                <Link href="/growth-solutions">View Growth Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </WavyBackground>

      <div className="w-full px-4 max-w-6xl mx-auto">
        {/* Solutions Grid */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-primary px-2">
                Our Core Growth Services
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                Comprehensive marketing solutions designed to drive measurable
                growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gap-y-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="px-2"
                >
                  <Link href={service.link}>
                    <Card className="h-full flex flex-col group cursor-pointer relative">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-1 justify-between">
                        <div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                            {service.description}
                          </p>
                        </div>
                        <Button asChild className="w-full mt-4">
                          <Link href={service.link}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4  lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="px-2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Why Choose Our Growth Solutions?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  We don&apos;t just create campaigns—we engineer growth systems
                  that scale with your business. Every strategy is built on
                  data, optimized for results, and designed to deliver
                  sustainable growth.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="px-2"
              >
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      Ready to Scale?
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg">
                      Let&apos;s build your growth engine together
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      Schedule a consultation to discuss your specific growth
                      goals and challenges. We&apos;ll create a custom strategy
                      that fits your business perfectly.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-muted/40 bg-muted/70 mb-20 rounded-2xl">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-2">
                Ready to Transform Your Growth?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Let&apos;s build a growth strategy that delivers measurable
                results and scales with your ambitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/strategic-solutions">
                    Explore Strategic Solutions
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrowthSolutions;
