'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Zap, Target, Settings, CheckCircle } from 'lucide-react';

const ProcessAutomation: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Automation Readiness Assessment',
      link: '/process-automation/automation-readiness-assessment',
      description: 'Evaluate current processes to identify repetitive, error-prone, or high-cost tasks suitable for automation.'
    },
    {
      icon: Settings,
      title: 'Modular Workflow Design',
      link: '/process-automation/modular-workflow-design',
      description: 'Build scalable, logic-driven workflows that align with business rules and are easy to adapt over time.'
    },
    {
      icon: Zap,
      title: 'RPA & AI Integration',
      link: '/process-automation/rpa-and-ai-integration',
      description: 'Automate repetitive steps using bots and intelligent decisioning systems that route tasks based on data inputs.'
    },
    {
      icon: CheckCircle,
      title: 'Seamless Orchestration',
      link: '/process-automation/seamless-orchestration',
      description: 'Coordinate automated and human-in-the-loop steps to ensure end-to-end process flow across platforms.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Process & Workflow Automation"
      description="Streamlining Execution Across Teams with Intelligent Automation"
      categoryIcon={Zap}
      services={services}
      ctaTitle="Ready to Automate Your Processes?"
      ctaDescription="Let&apos;s streamline your operations with intelligent automation solutions."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default ProcessAutomation;
