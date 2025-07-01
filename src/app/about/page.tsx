"use client";

import React from 'react';
import { 
  TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle, 
  Lightbulb, Search, Layers, Flag, Wrench, Cog, 
  Eye, Dribbble, Github, Linkedin 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WavyBackground } from '@/components/ui/wavy-background';

// Professional animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line and drive performance at speed and scale.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'From strategy to implementation, we move at the speed of business with urgency and bias for action.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, bringing the same high standards whether it\'s growth or operational challenges.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Every solution is built for precision, scalability, and long-term success with world-class outcomes.'
    }
  ];

  const solvepathSteps = [
    {
      icon: Search,
      title: 'Identify',
      description: 'Problems & Opportunities'
    },
    {
      icon: Eye,
      title: 'Investigate',
      description: 'Root Causes & Dependencies'
    },
    {
      icon: Layers,
      title: 'Group',
      description: '& Prioritize'
    },
    {
      icon: Flag,
      title: 'Translate',
      description: 'Into Challenges'
    },
    {
      icon: Lightbulb,
      title: 'Develop',
      description: 'Approaches'
    },
    {
      icon: Wrench,
      title: 'Define',
      description: 'Solutions'
    }
  ];

  const executionSteps = [
    'Strategize', 'Plan', 'Implement', 'Execute', 'Oversee', 'Analyze', 'Understand', 'Optimize', 'Innovate'
  ];

  const deliverables = [
    {
      icon: Eye,
      title: 'Clarity Where Others Get Stuck',
      description: 'We surface the root causes, not just the symptoms. We don\'t stop until we\'ve built the plan.'
    },
    {
      icon: Cog,
      title: 'Execution That Fits',
      description: 'Strategy is only as good as what gets implemented. We build and deliver solutions that work in real life, not just on slides.'
    },
    {
      icon: TrendingUp,
      title: 'Momentum That Compounds',
      description: 'We are built for forward motion, iterative improvement, and long-term scale.'
    }
  ];

  const people = [
    {
      id: "person-1",
      name: "Stefan Persson",
      role: "Founder & CEO",
      description: "Building the right solutions, at the right time, for every client.",
      avatar: "#",
      github: "https://github.com/stefanpersson",
      linkedin: "https://linkedin.com/in/stefanpersson",
      dribbble: "https://dribbble.com/stefanpersson"
    },
    {
      id: "person-2",
      name: "Stefan Persson",
      role: "Founder & CEO",
      description: "Delivering results, at speed and scale, for every client.",
      avatar: "#",
      github: "https://github.com/Syed-Perssonify/Perssonify-Website",
      linkedin: "https://linkedin.com/in/stefanpersson2",
      dribbble: "https://dribbble.com/stefanpersson2"
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section with Professional Spacing */}
      <section className="relative overflow-hidden pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 md:pb-36">
        <WavyBackground className="absolute inset-0">
          <div className="relative z-10 max-w-6xl mx-auto container-padding">
            <motion.div 
              className="text-center content-spacing-lg"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 
                className="heading-responsive-xl mb-6 lg:mb-8"
                variants={fadeInUp}
              >
                We bring{' '}
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent drop-shadow-md">
                  Growth
                </span>{' '}
                and{' '}
                <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent drop-shadow-md">
                  Scale
                </span>{' '}
                to life
              </motion.h1>
              
              <motion.p 
                className="text-responsive-lg mb-8 lg:mb-10 max-w-3xl mx-auto text-black/80 dark:text-white/80"
                variants={fadeInUp}
              >
                Perssonify was built around one simple idea: The right solution at the right time can change everything. We make the right solutions happen right now.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <Button size="lg" className="btn-primary" asChild>
                  <a href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/growth-solutions">Explore Solutions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/blog">Read Our Blog</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </WavyBackground>
      </section>

      {/* Our Story Section */}
      <section className="section-padding-xl gradient-muted">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="max-w-4xl mx-auto content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="heading-responsive-lg text-center text-primary mb-8"
              variants={fadeInUp}
            >
              Our Story
            </motion.h2>
            
            <motion.div 
              className="content-spacing text-responsive"
              variants={fadeInUp}
            >
              <p className="text-muted-foreground">
                We started in performance marketing and branding, where speed, efficiency, and ROI are non-negotiable—they&apos;re expected. As we worked with ambitious businesses to drive growth, we saw a deeper pattern: challenges beyond growth and marketing—like process gaps, operational slowdowns, and disconnected systems—were limiting performance.
              </p>
              <p className="text-muted-foreground">
                By solving what slowed growth, we unlocked new value, accelerated results, and expanded what growth achieved. The insight was simple but powerful: the same thinking that optimized campaigns could optimize companies.
              </p>
              <p className="text-muted-foreground">
                That shift didn&apos;t change who we are—it sharpened it. We still move with urgency. We still focus relentlessly on ROI. We still bring the same bias for action, comfort with high-stakes decisions, and clarity in fast-moving environments. And we still thrive where the pressure&apos;s high and the expectations even higher.
              </p>
              <p className="text-responsive-lg font-semibold text-foreground">
                What changed is how far we can go.
              </p>
              <p className="text-muted-foreground">
                We apply the same logic, structure, and high standards to solving both growth and operational challenges—independently or in tandem—so businesses can scale with confidence and adapt without friction. Whether we&apos;re streamlining how work gets done or accelerating how demand is created, we help businesses move faster and scale with confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SolvePath Framework Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                How We Solve
              </h2>
              <p className="text-responsive max-w-4xl mx-auto text-muted-foreground">
                At the heart of how we work, the SolvePath Framework ensures we&apos;re always solving the right things, the right way. The SolvePath Framework lets us turn problems and opportunities into actionable, measurable high-yield solutions that drive performance, at speed and at scale.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
              variants={staggerContainer}
            >
                {solvepathSteps.map((step) => (
                <motion.div
                  key={step.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center card-interactive bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-soft">
                    <CardHeader className="pb-4">
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-lg font-bold text-foreground mb-2">
                        {step.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <a href="/about/solvepath-framework">
                  Learn More About SolvePath Framework
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Execution Model Section */}
      <section className="section-padding gradient-muted">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                Perssonify Execution Model
              </h2>
              <p className="text-responsive max-w-4xl mx-auto text-muted-foreground">
                But strategy only matters if it moves. So we built the Perssonify Execution model around it. This model turns insight into delivery, and delivery into improvement. It&apos;s a continuous loop that&apos;s built to move fast without breaking what matters.
              </p>
            </motion.div>

            <motion.div className="max-w-4xl mx-auto mb-12" variants={fadeInUp}>
              <Card className="p-8 card-base bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-medium">
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                  {executionSteps.map((step) => (
                    <React.Fragment key={step}>
                      <motion.div 
                        className="flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-primary font-semibold text-sm">{step}</span>
                      </motion.div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-muted-foreground text-responsive">
                  Whether it&apos;s a campaign, a transformation, or an ecosystem rollout, this model ensures everything we implement works in context, adapts in real time, and gets better over time.
                </p>
              </Card>
            </motion.div>

            <motion.div className="text-center max-w-3xl mx-auto content-spacing" variants={fadeInUp}>
              <p className="text-responsive text-muted-foreground">
                Together, the SolvePath Framework and our Execution Model are two sides of the same system:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="text-center card-interactive bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-soft">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Layers className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">One Creates Structure</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="text-center card-interactive bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-soft">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">One Drives Momentum</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              </div>
              
              <p className="text-responsive-lg font-semibold text-foreground">
                Both are built to generate measurable results — <span className="text-primary">Fast.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two Solution Families Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                Two Solution Families Under One Roof
              </h2>
              <p className="text-responsive max-w-4xl mx-auto text-muted-foreground">
                Our <span className="text-primary">two solution</span> families are part of the same system, <span className="text-primary">two complementary engines</span> that help businesses scale what works and fix what doesn&apos;t. That integrated approach lets us expand and evolve our offerings across both tracks without losing speed, clarity, or control.
                As the needs of our clients have evolved, so have we. Our ability to <span className="text-primary">think strategically, execute efficiently,</span> and <span className="text-primary">adapt intelligently</span> is what keeps us relevant and makes us invaluable.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={scaleIn} whileHover={{ scale: 1.02 }}>
                <Card className="card-interactive h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Growth Solutions</CardTitle>
                    <CardDescription className="text-lg font-semibold">
                      High-Performance Marketing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-responsive">
                      High-performance growth marketing that drives demand, accelerates acquisition, 
                      and amplifies brand impact. If your priority is to attract the right audience, 
                      convert consistently, and expand your market reach, our Growth Solutions are built for you.
                    </p>
                    <Button className="w-full btn-primary" asChild>
                      <a href="/growth-solutions">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.02 }}>
                <Card className="card-interactive h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">Strategic Solutions</CardTitle>
                    <CardDescription className="text-lg font-semibold">
                      Technology-Enhanced Operational Scaling
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-responsive">
                      High-ROI business process enhancement that streamlines operations, automates intelligently, 
                      and scales with precision. We help you improve efficiency and ensure operations scale without chaos.
                    </p>
                    <Button className="w-full btn-primary" asChild>
                      <a href="/strategic-solutions">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="section-padding gradient-muted">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                What We Deliver
              </h2>
              <p className="text-responsive max-w-3xl mx-auto text-muted-foreground">
                Across both Growth Solutions and Strategic Solutions, we use the same structured foundation. One that starts with understanding, adapts to context, and ends in execution.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {deliverables.map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center h-full card-interactive">
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-responsive">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                How We Work
              </h2>
              <p className="text-responsive max-w-3xl mx-auto text-muted-foreground">
                Our approach is built on partnership, precision, and proven results. As the needs of our clients have evolved, so have we. Our ability to think strategically, execute efficiently, and adapt intelligently is what keeps us relevant and makes us invaluable.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
                {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center h-full card-interactive">
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-responsive">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="section-padding gradient-muted">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="heading-responsive-lg text-primary mb-6">
                Meet the Team
              </h2>
              <p className="text-responsive max-w-3xl mx-auto text-muted-foreground">
                    The team you&apos;ll be working with
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
            >
              {people.map((person) => (
                <motion.div
                  key={person.id}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center p-6 h-full card-interactive">
                    <Avatar className="mb-4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shadow-medium border-2 border-primary/30 mx-auto">
                      <AvatarImage src={person.avatar} />
                      <AvatarFallback>{person.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-lg text-foreground text-center mt-2 mb-1">
                      {person.name}
                    </p>
                    <p className="text-primary text-sm font-medium mb-2 text-center">
                      {person.role}
                    </p>
                    <p className="text-sm text-muted-foreground text-center mb-3">
                      {person.description}
                    </p>
                    <div className="mt-auto flex gap-4 justify-center">
                      <motion.a 
                        href={person.github} 
                        aria-label="Github" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Github className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                      </motion.a>
                      <motion.a 
                        href={person.linkedin} 
                        aria-label="Linkedin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Linkedin className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                      </motion.a>
                      <motion.a 
                        href={person.dribbble} 
                        aria-label="Dribbble" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Dribbble className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                      </motion.a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <motion.div 
            className="text-center content-spacing"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="heading-responsive-lg text-primary mb-6"
              variants={fadeInUp}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-responsive mb-8 max-w-4xl mx-auto text-muted-foreground"
              variants={fadeInUp}
            >
              If you&apos;re looking for a partner that&apos;s just as focused on results as you are—one that works fast, thinks strategically, and makes complex things executable—Perssonify is built for that.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="btn-primary" asChild>
                <a href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <a href="/growth-solutions">View Our Solutions</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;                           