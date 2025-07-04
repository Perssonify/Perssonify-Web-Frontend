'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Search, Users, Zap, CheckCircle, BarChart3, AlertTriangle, TrendingUp, Settings, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const Insights: React.FC = () => {
  // Move all data arrays inside the component
  const stages = [
    {
      stage: "Stage 1: Identify Problems & Opportunities",
      purpose: "Identify pain points, inefficiencies, and areas of untapped value",
      questions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
      output: "Clear list of business-relevant problems and opportunities",
      icon: Search
    },
    {
      stage: "Stage 2: Investigate Root Causes & Dependencies",
      purpose: "Surface the true drivers and systemic factors behind what's happening",
      questions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
      output: "Root cause map with relevant people, tools, and processes",
      icon: Target
    },
    {
      stage: "Stage 3: Group & Prioritize",
      purpose: "Organize insights into focus areas and determine what matters most",
      questions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
      output: "Grouped themes, impact/effort map, or scored list",
      icon: BarChart3
    },
    {
      stage: "Stage 4: Translate Into Challenges",
      purpose: "Frame the right problems to solve in a way that guides thinking and action",
      questions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
      output: "Well-formed challenge statements",
      icon: Zap
    },
    {
      stage: "Stage 5: Develop Approaches",
      purpose: "Generate viable, creative paths to address the challenge",
      questions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
      output: "Prioritized list of strategic approaches",
      icon: Users
    },
    {
      stage: "Stage 6: Define Solutions",
      purpose: "Build implementable, validated solutions designed for near-term and long-term ROI",
      questions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
      output: "De-risked, staged solution plans with clear criteria",
      icon: CheckCircle
    }
  ];
  const approachTypes = [
    {
      type: "Automate",
      description: "Remove repetitive manual work",
      icon: Zap
    },
    {
      type: "Streamline",
      description: "Reduce steps or complexity",
      icon: TrendingUp
    },
    {
      type: "Centralize",
      description: "Bring things into one place",
      icon: Target
    },
    {
      type: "Augment",
      description: "Add visibility, intelligence, or insight",
      icon: BarChart3
    },
    {
      type: "Restructure",
      description: "Change the sequence, model, or ownership",
      icon: Settings
    }
  ];
  const solutionTypes = [
    {
      type: "Workflow Automation",
      description: "Scripted task automation, RPA, or low-code routines",
      example: "Automating invoice validation and approval routing"
    },
    {
      type: "System Integration Layer",
      description: "APIs or sync processes that unify platforms",
      example: "Connecting HRIS, payroll, and scheduling tools"
    },
    {
      type: "Enablement Tools",
      description: "Templates, dashboards, or knowledge systems",
      example: "Real-time inventory dashboard for ops managers"
    },
    {
      type: "Service Redesign",
      description: "Changes to delivery model or service interaction",
      example: "Shifting support triage to a priority-based chatbot"
    },
    {
      type: "Digital Product or Feature",
      description: "A new application or internal tool",
      example: "Creating a supplier onboarding portal"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 w-full px-4 max-w-6xl mx-auto">
      <div>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 py-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            The Solution Design Framework
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Clarity, Structure, and Momentum for Solving What Matters Most
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
        <section className="mb-16">
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

        {/* Framework Overview */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Solution Design Framework Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At its core, the Solution Design Framework answers a simple but essential question: &quot;What&apos;s the smartest, clearest way to move from challenge to solution—without wasting time, resources, or momentum?&quot;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-card py-6">
                  <CardHeader className='px-2'>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-2">{stage.stage}</CardTitle>
                        <p className="text-muted-foreground mb-4">{stage.purpose}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className='px-2 pt-0 pb-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Questions:</h4>
                        <p className="text-muted-foreground text-sm">{stage.questions}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Output:</h4>
                        <p className="text-muted-foreground text-sm">{stage.output}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stage 1 Detailed Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Stage 1: Identify Problems & Opportunities</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Pinpoint what&apos;s holding the business back—or what could propel it forward.
              </p>
              <p className="text-muted-foreground mb-6">
                The first step in the Solution Design Framework is to define what&apos;s worth solving. This means identifying the problems that create measurable friction or risk, and surfacing the opportunities that represent untapped value or strategic upside.
              </p>
              <p className="text-muted-foreground">
                This stage requires moving beyond vague complaints or open-ended goals. It&apos;s about surfacing the right inputs to work on—those with enough significance, urgency, or potential return to justify structured attention and resource investment.
              </p>
            </div>

            {/* Problems vs Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Problems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Problems are recurring inefficiencies, constraints, or breakdowns that degrade performance, increase cost, or limit growth.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Guidelines:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Focus on the impact</li>
                      <li>• Separate symptoms from root problems</li>
                      <li>• Validate with data and observation</li>
                      <li>• Be precise with language</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Opportunities represent leverage points—places where the organization can unlock growth, efficiency, or strategic advantage.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Guidelines:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Look at external forces</li>
                      <li>• Consider internal strengths</li>
                      <li>• Evaluate competitive gaps</li>
                      <li>• Tie to specific outcomes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Problem vs Opportunity Statement Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Problem Statement Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded">
                      <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">Poor Statement:</p>
                        <p className="text-sm text-muted-foreground">&quot;Our onboarding process is a mess.&quot;</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Refined Statement:</p>
                      <p className="text-sm text-muted-foreground">&quot;Customer onboarding takes an average of 14 days, resulting in a 22% drop-off rate before activation.&quot;</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Opportunity Statement Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded">
                      <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">Vague Statement:</p>
                      <p className="text-sm text-muted-foreground">&quot;We should improve customer retention.&quot;</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Refined Statement:</p>
                      <p className="text-sm text-muted-foreground">&quot;Competitors using AI-powered personalization have increased customer retention by 20%. We currently lack personalization capabilities in post-sale communications.&quot;</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Examples Table */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Examples of Problems and Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Type</th>
                        <th className="text-left p-3 font-semibold">Example</th>
                        <th className="text-left p-3 font-semibold">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-red-600 font-medium">Problem</td>
                        <td className="p-3 text-sm">&quot;Manual invoice processing is delaying payments by 10–15 days, causing friction with vendors.&quot;</td>
                        <td className="p-3 text-sm text-muted-foreground">Clear financial impact and operational drag</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-red-600 font-medium">Problem</td>
                        <td className="p-3 text-sm">&quot;Internal ticketing takes 4+ touchpoints before resolution, frustrating both users and IT.&quot;</td>
                        <td className="p-3 text-sm text-muted-foreground">Reveals a need for better routing and workflow logic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-green-600 font-medium">Opportunity</td>
                        <td className="p-3 text-sm">&quot;We have clean access to historical performance data that hasn&apos;t been centralized for analysis.&quot;</td>
                        <td className="p-3 text-sm text-muted-foreground">Unused asset that could support better decisions</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-green-600 font-medium">Opportunity</td>
                        <td className="p-3 text-sm">&quot;Customers have shown interest in live onboarding, but we haven&apos;t explored real-time support.&quot;</td>
                        <td className="p-3 text-sm text-muted-foreground">Direct customer signal tied to conversion potential</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Discovery Checklists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-red-600" />
                    Problem Discovery Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Use this to uncover where friction and failure points exist in your current workflows or systems.</p>
                  <ul className="text-sm space-y-2">
                    <li>• Where are delays, rework, or confusion happening most often?</li>
                    <li>• What problems keep getting escalated, flagged, or revisited?</li>
                    <li>• What processes consistently break down under volume, pressure, or scale?</li>
                    <li>• Where do mistakes, handoffs, or breakdowns regularly occur?</li>
                    <li>• What are people manually working around—or actively avoiding?</li>
                    <li>• Are there persistent gaps between expectations and actual delivery?</li>
                    <li>• Do performance metrics show recurring underperformance in key areas?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Opportunity Discovery Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Use this to identify untapped potential, leverage points, or strategic gaps.</p>
                  <ul className="text-sm space-y-2">
                    <li>• Where is customer demand or expectation increasing—but not being met?</li>
                    <li>• What internal strengths, assets, or workflows aren&apos;t being fully utilized?</li>
                    <li>• Where could optimization unlock higher margin, speed, or efficiency?</li>
                    <li>• What outcomes are stakeholders asking for that don&apos;t yet exist?</li>
                    <li>• Where are competitors operating faster, cheaper, or more intelligently?</li>
                    <li>• Are there shifts in behavior, tools, or market trends we&apos;ve yet to capitalize on?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Stage 2 Detailed Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Stage 2: Investigate Root Causes & Dependencies</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Understand what&apos;s really driving the problem—or blocking the opportunity.
              </p>
              <p className="text-muted-foreground mb-6">
                Most issues are caused by a small set of underlying factors that drive larger patterns of inefficiency, friction, or missed potential. This stage focuses on uncovering the true root causes and understanding the systems, tools, and processes they depend on.
              </p>
              <p className="text-muted-foreground">
                Effective solutions start with clear diagnosis. This step ensures you&apos;re not solving the wrong thing—or building on broken foundations.
              </p>
            </div>

            {/* Additional Root Cause Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Failure Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Chronologically map breakdowns or errors over time to find patterns in when and how issues arise.</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Use when:</h5>
                    <p className="text-sm text-muted-foreground">You have recurring failures or escalating issues, but unclear causes.</p>
                    <h5 className="font-semibold text-sm mt-3">What it highlights:</h5>
                    <ul className="text-sm text-muted-foreground">
                      <li>• Trigger events</li>
                      <li>• Process gaps that allow errors</li>
                      <li>• Latent weaknesses in scale, speed, or visibility</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Data-Driven Pattern Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Use performance, error, or workflow data to surface trends that can point to deeper issues.</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Use when:</h5>
                    <p className="text-sm text-muted-foreground">You have access to logs, metrics, or historical performance records.</p>
                    <h5 className="font-semibold text-sm mt-3">What it enables:</h5>
                    <ul className="text-sm text-muted-foreground">
                      <li>• Objective view of problem areas</li>
                      <li>• Quantified root cause signals</li>
                      <li>• Validation of hypotheses with hard data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Root Cause & Dependencies Examples */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Root Cause & Dependency Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Surface Issue</th>
                        <th className="text-left p-3 font-semibold">Root Cause</th>
                        <th className="text-left p-3 font-semibold">Key Dependencies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Sales follow-ups are inconsistent</td>
                        <td className="p-3 text-sm">No standardized post-demo workflow</td>
                        <td className="p-3 text-sm text-muted-foreground">CRM logic, SDR workflow, team availability, content library</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">High employee churn in one department</td>
                        <td className="p-3 text-sm">Poor onboarding and unclear expectations</td>
                        <td className="p-3 text-sm text-muted-foreground">HR onboarding, manager training, performance reviews</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Product usage drops after trial</td>
                        <td className="p-3 text-sm">Users lose context or momentum after setup</td>
                        <td className="p-3 text-sm text-muted-foreground">In-app messaging, email automation, CS handoff, analytics</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">Ops process stalls under volume</td>
                        <td className="p-3 text-sm">Manual routing for multi-team approvals</td>
                        <td className="p-3 text-sm text-muted-foreground">Permissions setup, workflow engine, escalation rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Checklists for Stage 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Root Cause Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Use this to identify the real issue behind what you&apos;re seeing.</p>
                  <ul className="text-sm space-y-2">
                    <li>• Have we asked &quot;why&quot; enough times to get past the surface and uncover the actual cause?</li>
                    <li>• What causes repeated delays, confusion, or rework?</li>
                    <li>• Where are mistakes or errors happening most often?</li>
                    <li>• What gets flagged, escalated, or complained about over and over?</li>
                    <li>• Where does the process consistently slow down, break, or fall through the cracks?</li>
                    <li>• What are people manually working around instead of using the system as intended?</li>
                    <li>• What tools, teams, or approvals are creating friction or dependency?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dependency Mapping Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Use this to surface what the solution must account for.</p>
                  <ul className="text-sm space-y-2">
                    <li>• Who is involved in making this work today?</li>
                    <li>• What systems, tools, or workflows will need to change or stay aligned?</li>
                    <li>• What other teams, partners, or vendors interact with this process?</li>
                    <li>• What data inputs or outputs are required?</li>
                    <li>• What policies, rules, or approval processes will influence success?</li>
                    <li>• Who needs to be consulted, informed, or trained?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Stage 5 Detailed Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Stage 5: Develop Approaches</h2>
              <p className="text-xl text-muted-foreground mb-6">
                From insight to intent: shaping how we solve the challenge.
              </p>
              <p className="text-muted-foreground mb-6">
                Once a challenge is clearly framed, the next step is to explore multiple ways it could be solved—then narrow in on the most promising. Strategic approaches are not yet full solutions; they&apos;re structured concepts that outline direction, intent, and tradeoffs.
              </p>
              <p className="text-muted-foreground">
                This is the bridge between the challenge and the actual solution.
              </p>
            </div>

            {/* What Makes an Effective Approach */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What Makes an Effective Approach?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">A strong approach is:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <ul className="space-y-2 text-sm">
                    <li>• Aligned with the challenge and its root causes</li>
                    <li>• Feasible within real-world constraints (time, cost, talent, etc.)</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li>• Scalable enough to drive meaningful ROI beyond a one-time fix</li>
                    <li>• Flexible to evolve into different solution formats</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 p-4 rounded">
                  <h5 className="font-semibold mb-2">Each approach needs to include:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• A core idea or method (e.g. automate, consolidate, restructure)</li>
                    <li>• A reasoning path (why it fits the challenge)</li>
                    <li>• Early consideration of constraints, feasibility, or resources</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Key Considerations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Key Considerations When Designing Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-sm">
                    <li><strong>Who is impacted?</strong> (Users, teams, systems)</li>
                    <li><strong>What resources are available?</strong> (Data, tools, budget, skills)</li>
                    <li><strong>What change is required?</strong> (Behavioral, technical, organizational)</li>
                  </ul>
                  <ul className="space-y-2 text-sm">
                    <li><strong>What constraints must be respected?</strong> (Regulatory, budgetary, timeline)</li>
                    <li><strong>How will we measure if it works?</strong> (KPIs, milestones, qualitative feedback)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold text-foreground mb-6">Approach Archetypes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {approachTypes.map((approach, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <approach.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{approach.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Decentralize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Empower teams with autonomy</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <ArrowLeft className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Outsource</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Shift ownership of effort externally</p>
                </CardContent>
              </Card>
            </div>

            {/* Thinking Methods */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Divergent & Convergent Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Approach development benefits from two mental modes:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-green-600">Divergent Thinking</h5>
                    <p className="text-sm text-muted-foreground mb-3">Generate as many potential approaches as possible, even ones that seem out of scope or impractical at first.</p>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-sm">
                      <strong>Brainstorming techniques:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• &quot;What if we did the opposite?&quot;</li>
                        <li>• &quot;How would a startup tackle this?&quot;</li>
                        <li>• &quot;How might we use what we already have differently?&quot;</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-blue-600">Convergent Thinking</h5>
                    <p className="text-sm text-muted-foreground mb-3">Narrow down ideas by filtering based on criteria.</p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-sm">
                      <strong>Filter based on:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Alignment with goals</li>
                        <li>• Ease of implementation</li>
                        <li>• Potential for ROI</li>
                        <li>• Risk and complexity</li>
                        <li>• Speed to value</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compare and Contrast */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Compare-and-Contrast Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Lay out multiple directional options side-by-side to clarify trade-offs.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Approach Option</th>
                        <th className="text-left p-3 font-semibold">Strength</th>
                        <th className="text-left p-3 font-semibold">Risk or Constraint</th>
                        <th className="text-left p-3 font-semibold">Best Fit For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Automate onboarding steps</td>
                        <td className="p-3 text-sm">Speeds up delivery</td>
                        <td className="p-3 text-sm">Requires upfront dev time</td>
                        <td className="p-3 text-sm">High-volume onboarding environments</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm">Centralize tracking dashboards</td>
                        <td className="p-3 text-sm">Easier visibility</td>
                        <td className="p-3 text-sm">May slow team autonomy</td>
                        <td className="p-3 text-sm">Executive visibility challenges</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm">Build role-specific playbooks</td>
                        <td className="p-3 text-sm">Easier handoffs</td>
                        <td className="p-3 text-sm">Requires training</td>
                        <td className="p-3 text-sm">Cross-functional alignment issues</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Approach Types */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Strategic Approach Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Approach Type</th>
                        <th className="text-left p-3 font-semibold">Description</th>
                        <th className="text-left p-3 font-semibold">Example Use Case</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 text-sm font-medium">Process Reengineering</td>
                        <td className="p-3 text-sm">Rethinking and redesigning workflows from the ground up</td>
                        <td className="p-3 text-sm">Replacing multi-step approvals with auto-routing rules</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm font-medium">Automation Injection</td>
                        <td className="p-3 text-sm">Using RPA, scripts, or triggers to reduce manual effort</td>
                        <td className="p-3 text-sm">Auto-generating reports from real-time system data</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm font-medium">System Integration</td>
                        <td className="p-3 text-sm">Connecting siloed tools or platforms</td>
                        <td className="p-3 text-sm">Syncing CRM and finance systems for unified reporting</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 text-sm font-medium">Role Redesign</td>
                        <td className="p-3 text-sm">Shifting responsibilities or team structures</td>
                        <td className="p-3 text-sm">Moving support triage from email to dedicated Slack channels</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-sm font-medium">Self-Service Enablement</td>
                        <td className="p-3 text-sm">Empowering users with tools, templates, or interfaces</td>
                        <td className="p-3 text-sm">Giving managers access to editable forecasting dashboards</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Approach Checklist */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Checklist: Is the Approach Worth Pursuing?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Does it address the root cause, not just the symptoms?</li>
                  <li>• Can it scale to other teams or contexts if it works?</li>
                  <li>• Is it realistic to prototype or validate in a short timeframe?</li>
                  <li>• Does it create measurable value if successful?</li>
                  <li>• Can we explain it clearly in one sentence?</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Stage 6 - Define Solutions */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-muted/30 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Stage 6: Define Solutions</h2>
              <p className="text-xl text-muted-foreground mb-6">
                From approach to execution: designing the real-world answer.
              </p>
              <p className="text-muted-foreground">
                A solution is a specific, validated, and actionable implementation of a strategic approach. It accounts for real-world constraints, defines success clearly, and is engineered for measurable business impact.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Solution Formats & Examples</h3>
            <div className="space-y-4 mb-8">
              {solutionTypes.map((solution, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{solution.type}</h4>
                        <p className="text-muted-foreground mb-2">{solution.description}</p>
                        <p className="text-sm text-primary font-medium">Example: {solution.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What Makes a Great Solution */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What Makes a Great Solution?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold">Immediate ROI</h5>
                        <p className="text-sm text-muted-foreground">Clear, measurable outcomes on a short time horizon</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold">Long-Term Value</h5>
                        <p className="text-sm text-muted-foreground">Built to scale, evolve, and sustain value over time</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold">Feasibility</h5>
                        <p className="text-sm text-muted-foreground">Can be delivered with available resources and within constraints</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold">Adaptability</h5>
                        <p className="text-sm text-muted-foreground">Modular and flexible enough to evolve with business needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Framework Summary */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/50 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution Design Framework Summary</h2>
            <p className="text-xl text-muted-foreground mb-6">A clear path from insight to impact.</p>
            <p className="text-muted-foreground mb-6">
              The Solution Design Framework provides a clear, repeatable path from complexity to clarity—transforming scattered problems and untapped opportunities into strategic, high-impact solutions. This framework is designed to be applied flexibly across industries and use cases, while providing shared clarity around what each stage means, why it matters, and how to execute it well.
            </p>
            
            <h3 className="text-xl font-bold text-foreground mb-4">How This Framework Helps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Clarity", desc: "Everyone speaks the same language about where we are and what&apos;s next" },
                { title: "Speed", desc: "Cut through confusion and opinion with a clear process" },
                { title: "Impact", desc: "Build smarter solutions that solve for both ROI and risk" },
                { title: "Scalability", desc: "Apply this process from quick wins to enterprise-wide transformations" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background rounded-xl border">
              <h4 className="font-semibold text-foreground mb-2">Apply It Across the Business</h4>
              <p className="text-muted-foreground">
                This framework is designed to work across growth, strategic, operational, and creative projects. Whether you&apos;re designing a new marketing engine, automating internal processes, or tackling a large-scale transformation, this gives you a common structure to align teams, move faster, and deliver better outcomes.
              </p>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
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

export default Insights;