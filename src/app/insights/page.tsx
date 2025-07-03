//'use client';

//import React from 'react';
//import { motion } from 'framer-motion';
//import { ArrowLeft, Target, Search, Users, Zap, CheckCircle, BarChart3, AlertTriangle, TrendingUp, Settings, Clock, ArrowRight } from 'lucide-react';
//import { Button } from '@/components/ui/button';
//import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
//import Link from 'next/link';






//import { motion } from 'framer-motion';
//import { ArrowRight, CheckCircle } from 'lucide-react';
//import { Button } from '@/components/ui/button';
//import Link from 'next/link';

//const Insights: React.FC = () => {
  //const stages = [
    //{
    //  stage: "Stage 1: Identify Problems & Opportunities",
    //  purpose: "Identify pain points, inefficiencies, and areas of untapped value",
    //  questions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
    //  output: "Clear list of business-relevant problems and opportunities",
    //  icon: Search
    //},
    //{
    //  stage: "Stage 2: Investigate Root Causes & Dependencies",
    //  purpose: "Surface the true drivers and systemic factors behind what's happening",
    //  questions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
    //  output: "Root cause map with relevant people, tools, and processes",
    //  icon: Target
    //},

    //    stage: "Stage 3: Group & Prioritize",
    //  purpose: "Organize insights into focus areas and determine what matters most",
    //  questions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
    //  output: "Grouped themes, impact/effort map, or scored list",
    //  icon: BarChart3
    //},
    //{
    //  stage: "Stage 4: Translate Into Challenges",
    //  purpose: "Frame the right problems to solve in a way that guides thinking and action",
    //  questions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
    //  output: "Well-formed challenge statements",
    //  icon: Zap
    //},
    //{
    //  stage: "Stage 5: Develop Approaches",
    //  purpose: "Generate viable, creative paths to address the challenge",
    //  questions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
    //  output: "Prioritized list of strategic approaches",
    //  icon: Users
    //},
    //{
    //  stage: "Stage 6: Define Solutions",
    //  purpose: "Build implementable, validated solutions designed for near-term and long-term ROI",
    //  questions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
   
  //const approachTypes = [
    //{
    //  type: "Automate",
    //  description: "Remove repetitive manual work",
    //  icon: Zap
    //},
    //{
    //      type: "Streamline",
    //  description: "Reduce steps or complexity",
    //  icon: TrendingUp
    //},
    //{
    //  type: "Centralize",
    //  description: "Bring things into one place",
    //  icon: Target
    //},
    //{
    //  type: "Augment",
    //  description: "Add visibility, intelligence, or insight",
    //  icon: BarChart3
    //},
    //{
    //  type: "Restructure",
    //  description: "Change the sequence, model, or ownership",
    //  icon: Settings
    //}
  //];
  //const solutionTypes = [
    //{
    //  type: "Workflow Automation",
    //  description: "Scripted task automation, RPA, or low-code routines",
    //  example: "Automating invoice validation and approval routing"
    //},
    //{
    //  type: "System Integration Layer",
    //  description: "APIs or sync processes that unify platforms",
    //  example: "Connecting HRIS, payroll, and scheduling tools"
    //},
    //{
    //  type: "Enablement Tools",
    //  description: "Templates, dashboards, or knowledge systems",
    //  example: "Real-time inventory dashboard for ops managers"
    //},
    //{
    //  type: "Service Redesign",
    //  description: "Changes to delivery model or service interaction",
    //  example: "Shifting support triage to a priority-based chatbot"
    //},
    //{
    //  type: "Digital Product or Feature",
    //  description: "A new application or internal tool",
    //  example: "Creating a supplier onboarding portal"
    //}
  //];

  {/*return (
    <div className="min-h-screen bg-background pt-20 w-full px-4 max-w-6xl mx-auto">
      <div className="container">
        {/* Hero Section */}
       {/* <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 py-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            The Solution Design Framework
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Clarity, Structure, and Momentum for Solving What Matters Most.
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Solution Design Framework is a structured thinking and execution framework for translating complex business problems and opportunities into actionable, scalable solutions. It&apos;s designed for situations where the path forward isn&apos;t obvious, where surface-level fixes fall short, and where deeper insight, structured alignment, and rigorous execution are required.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This framework brings a consistent methodology to uncovering root causes, defining strategic challenges, and engineering high-ROI solutions. It gives teams a shared language and mental model to move from ambiguity to action—fast, clearly, and effectively.
            </p>
          </div>
        </motion.section>

        {/* Framework Purpose Section */}
       {/* <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/50 rounded-2xl py-8 px-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution Design Framework is used to:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Diagnose and untangle complex, interdependent issues",
                "Identify meaningful opportunities hidden within operations, systems, or customer journeys",
                "Convert loosely defined pain points into structured, high-value solution spaces",
                "Develop and deliver scalable solutions through concept design, validation, and execution"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-background rounded-xl border">
              <p className="text-muted-foreground leading-relaxed">
                The Solution Design Framework is not a theory or abstraction—it&apos;s a practical sequence built to help decision-makers and operators move forward with confidence and clarity. It adapts to cross-functional use cases, supports both strategic and tactical problem solving, and allows for modular implementation depending on context and stage.
              </p>
            </div>
          </motion.div>
        </section>



{/* CTA Section - clean, centered, no colored box */}
{/*<section className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-muted/40 bg-muted/70 mb-20 rounded-2xl">
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
          //  </div>
        //  </div>
      //  </section>
    //  </div>
  //  </div>*/}
  //);
//};

//export default Insights;