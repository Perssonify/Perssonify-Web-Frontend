import React from "react";
import {
  TrendingUp,
  Target,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Search,
  Layers,
  Flag,
  Wrench,
  Cog,
  Eye,
  Dribbble,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We focus on measurable outcomes that directly impact your bottom line and drive performance at speed and scale.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description:
        "From strategy to implementation, we move at the speed of business with urgency and bias for action.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "We work as an extension of your team, bringing the same high standards whether it's growth or operational challenges.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description:
        "Every solution is built for precision, scalability, and long-term success with world-class outcomes.",
    },
  ];

  const solvepathSteps = [
    {
      icon: Search,
      title: "Identify",
      description: "Problems & Opportunities",
    },
    {
      icon: Eye,
      title: "Investigate",
      description: "Root Causes & Dependencies",
    },
    {
      icon: Layers,
      title: "Group",
      description: "& Prioritize",
    },
    {
      icon: Flag,
      title: "Translate",
      description: "Into Challenges",
    },
    {
      icon: Lightbulb,
      title: "Develop",
      description: "Approaches",
    },
    {
      icon: Wrench,
      title: "Define",
      description: "Solutions",
    },
  ];

  const executionSteps = [
    "Strategize",
    "Plan",
    "Implement",
    "Execute",
    "Oversee",
    "Analyze",
    "Understand",
    "Optimize",
    "Innovate",
  ];

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

  const people = [
    {
      id: "person-1",
      name: "Stefan Persson",
      role: "Founder & CEO",
      description:
        "Building the right solutions, at the right time, for every client.",
      avatar: "#",
      github: "https://github.com/stefanpersson",
      linkedin: "https://linkedin.com/in/stefanpersson",
      dribbble: "https://dribbble.com/stefanpersson",
    },
    {
      id: "person-2",
      name: "Stefan Persson",
      role: "Founder & CEO",
      description: "Delivering results, at speed and scale, for every client.",
      avatar: "#",
      github: "https://github.com/Syed-Perssonify/Perssonify-Website",
      linkedin: "https://linkedin.com/in/stefanpersson2",
      dribbble: "https://dribbble.com/stefanpersson2",
    },
  ];

  return (
    <div className="bg-background ">
      {" "}
      {/* Page background color (light/dark mode) */}
      {/* Hero Section with Wavy Background */}
      <WavyBackground className="py-28 sm:py-28 md:py-28 mt-16 md:mt-20">
        {" "}
        {/* Vertical padding for hero, margin-top for spacing from header */}
        <div className="container max-w-6xl mx-auto px-4 ">
          {" "}
          {/* Centered, max width, horizontal padding for mobile/desktop */}
          <div className="text-center">
            {" "}
            {/* Center all hero content */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold font-playfair text-black dark:text-white mb-6 lg:mb-8">
              {" "}
              {/* Responsive heading size, bold, custom font, color, margin-bottom */}
              We bring{" "}
              <span className="text-primary dark:text-primary">
                {" "}
                {/* Brand color for emphasis */}
                Growth
              </span>{" "}
              and{" "}
              <span className="text-primary dark:text-primary">
                {" "}
                {/* Brand color for emphasis */}
                Scale
              </span>{" "}
              to life
            </h1>
            <p className="text-xl md:text-2xl text-black/80 dark:text-white mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
              {" "}
              {/* Responsive text size, color, relaxed line height, max width, centered */}
              Perssonify was built around one simple idea: The right solution at
              the right time can change everything. We make the right solutions
              happen right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {" "}
              {/* Stack buttons on mobile, row on small+, gap between, center */}
              <Button size="lg" asChild>
                <a href="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                className="text-primary dark:text-primary"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="/growth-solutions">Explore Solutions</a>
              </Button>
              <Button
                className="text-primary dark:text-primary"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="/blog">Read Our Blog</a>
              </Button>
            </div>
          </div>
        </div>
      </WavyBackground>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content container: aligns all sections with header/logo and submit button */}
        {/* Our Story Section */}
        <section className="py-10 md:py-16 bg-background">
          {/* Consistent vertical padding, background color */}
          <div className="text-center">
            {/* Center content, limit width for readability */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-primary">
              {/* Responsive heading, bold, color, margin-bottom */}
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 dark:prose-invert">
              {" "}
              {/* Typography, color, spacing between paragraphs, dark mode */}
              <p>
                We started in performance marketing and branding, where speed,
                efficiency, and ROI are non-negotiable—they&apos;re expected. As
                we worked with ambitious businesses to drive growth, we saw a
                deeper pattern: challenges beyond growth and marketing—like
                process gaps, operational slowdowns, and disconnected
                systems—were limiting performance.
              </p>
              <p>
                By solving what slowed growth, we unlocked new value,
                accelerated results, and expanded what growth achieved. The
                insight was simple but powerful: the same thinking that
                optimized campaigns could optimize companies.
              </p>
              <p>
                That shift didn&apos;t change who we are—it sharpened it. We
                still move with urgency. We still focus relentlessly on ROI. We
                still bring the same bias for action, comfort with high-stakes
                decisions, and clarity in fast-moving environments. And we still
                thrive where the pressure&apos;s high and the expectations even
                higher.
              </p>
              <p className="text-xl text-center font-semibold text-primary">
                What changed is how far we can go.
              </p>
              <p>
                We apply the same logic, structure, and high standards to
                solving both growth and operational challenges—independently or
                in tandem—so businesses can scale with confidence and adapt
                without friction. Whether we&apos;re streamlining how work gets
                done or accelerating how demand is created, we help businesses
                move faster and scale with confidence.
              </p>
            </div>
          </div>
        </section>
        {/* SolvePath Framework Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold  mb-6  text-primary">
              How We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              At the heart of how we work, the SolvePath Framework ensures
              we&apos;re always solving the right things, the right way. The
              SolvePath Framework lets us turn problems and opportunities into
              actionable, measurable high-yield solutions that drive
              performance, at speed and at scale.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {" "}
            {/* Responsive grid: 2 cols mobile, 3 small, 6 large; responsive gap; margin-bottom */}
            {solvepathSteps.map((step) => (
              <Card
                key={step.title}
                className="text-center bg-primary/10 border-0 p-4 sm:p-6 md:p-8"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold  mb-2">
                    {step.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            {" "}
            {/* Center button */}
            <Button variant="outline" size="lg" asChild>
              <a href="/about/solvepath-framework">
                Learn More About SolvePath Framework
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
        {/* Execution Model Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold  mb-6  text-primary">
              Perssonify Execution Model
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              But strategy only matters if it moves. So we built the Perssonify
              Execution model around it. This model turns insight into delivery,
              and delivery into improvement. It&apos;s a continuous loop
              that&apos;s built to move fast without breaking what matters.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            {" "}
            {/* Center card, limit width, margin-bottom */}
            <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-0">
              <div className="flex items-center justify-center mb-8"></div>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {executionSteps.map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-primary font-semibold">{step}</span>
                    </div>
                    {step !== executionSteps[executionSteps.length - 1] && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Whether it&apos;s a campaign, a transformation, or an ecosystem
                rollout, this model ensures everything we implement works in
                context, adapts in real time, and gets better over time.
              </p>
            </Card>
          </div>
          <div className="text-center mt-8">
            {" "}
            {/* Center button, margin-top */}
            <Button variant="outline" size="lg" asChild>
              <a href="/about#execution">
                Learn More About Our Execution Model
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
            {" "}
            {/* Center, responsive margin-top, limit width */}
            <p className="text-lg text-muted-foreground">
              Together, the SolvePath Framework and our Execution Model are two
              sides of the same system:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6 md:mt-8">
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-0 p-4 sm:p-6 md:p-8">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold ">
                    One Creates Structure
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-0 p-4 sm:p-6 md:p-8">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold ">
                    One Drives Momentum
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
            <p className="text-lg font-semibold  mt-6">
              Both are built to generate measurable results —{" "}
              <span className="text-primary">Fast.</span>
            </p>
          </div>
        </section>
        {/* Two Solution Families Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold  mb-6  text-primary">
              Two Solution Families Under One Roof
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our <span className="text-primary">two solution</span> families
              are part of the same system,{" "}
              <span className="text-primary">two complementary engines</span>{" "}
              that help businesses scale what works and fix what doesn&apos;t.
              That integrated approach lets us expand and evolve our offerings
              across both tracks without losing speed, clarity, or control. As
              the needs of our clients have evolved, so have we. Our ability to{" "}
              <span className="text-primary">
                think strategically, execute efficiently,
              </span>{" "}
              and <span className="text-primary">adapt intelligently</span> is
              what keeps us relevant and makes us invaluable.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {" "}
            {/* Responsive grid: 1 col mobile, 2 large; responsive gap */}
            <Card className="bg-primary/10 border-0 p-4 sm:p-6 md:p-8">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-playfair">
                  Growth Solutions
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  High-Performance Marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  High-performance growth marketing that drives demand,
                  accelerates acquisition, and amplifies brand impact. If your
                  priority is to attract the right audience, convert
                  consistently, and expand your market reach.
                </p>
                <Button
                  className="w-full flex items-center justify-center whitespace-nowrap"
                  asChild
                >
                  <a href="/growth-solutions">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-0 p-4 sm:p-6 md:p-8">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-playfair">
                  Strategic Solutions
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  Technology-Enhanced Operational Scaling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  High-ROI business process enhancement that streamlines
                  operations, automates intelligently, and scales with
                  precision. We help you improve efficiency and ensure
                  operations scale without chaos.
                </p>
                <Button
                  className="w-full flex items-center justify-center whitespace-nowrap"
                  asChild
                >
                  <a href="/strategic-solutions">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* What We Deliver Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold  mb-6  text-primary">
              What We Deliver
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Across both Growth Solutions and Strategic Solutions, we use the
              same structured foundation. One that starts with understanding,
              adapts to context, and ends in execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {" "}
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
        </section>
        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold  mb-6  text-primary">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach is built on partnership, precision, and proven
              results. As the needs of our clients have evolved, so have we. Our
              ability to think strategically, execute efficiently, and adapt
              intelligently is what keeps us relevant and makes us invaluable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {" "}
            {/* Responsive grid: 1 col mobile, 2 medium, 4 large; responsive gap */}
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center h-full bg-primary/10 border-0 p-4 sm:p-6 md:p-8"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-playfair">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Meet the Team Section */}
        <section className="py-16 md:py-24 bg-background">
          {" "}
          {/* Section spacing, background */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            {" "}
            {/* Centered heading, responsive margin-bottom */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6  text-primary">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The team you&apos;ll be working with.
            </p>
          </div>
          <div className="grid gap-y-8 gap-x-6 sm:gap-y-12 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {" "}
            {/* Responsive grid: 1 col mobile, 2 small, 4 large; responsive gap-y and gap-x */}
            {people.map((person) => (
              <Card
                key={person.id}
                className="text-center p-4 sm:p-6 md:p-8 h-full bg-primary/10 border-0"
              >
                <Avatar className="mb-4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shadow-md border-2 border-primary/30 mx-auto">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name[0]}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-lg  text-center mt-2 mb-1">
                  {person.name}
                </p>
                <p className="text-primary text-sm font-medium mb-2 text-center">
                  {person.role}
                </p>
                <p className="text-sm text-muted-foreground text-center mb-3">
                  {person.description.replace("'", "&apos;")}
                </p>
                <div className="mt-auto flex gap-4 justify-center">
                  <a
                    href={person.github}
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={person.linkedin}
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={person.dribbble}
                    aria-label="Dribbble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dribbble className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* CTA Section - clean, centered, no colored box */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-muted/40 bg-muted/70 mb-20 rounded-2xl">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6  text-primary">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                If you&apos;re looking for a partner that&apos;s just as focused
                on results as you are—one that works fast, thinks strategically,
                and makes complex things executable—Perssonify is built for
                that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/growth-solutions">View Our Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
