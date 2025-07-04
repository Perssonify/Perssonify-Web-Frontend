'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { BarChart, Users, Zap, Settings } from 'lucide-react';

const DigitalSystemsEnablement: React.FC = () => {
  const services = [
    {   
      icon: BarChart,
      title: 'Platform Performance Audit',
      link: '/digital-systems-enablement/platform-performance-audit',
      description: 'Analyze core systems (e.g., CRM, ERP, PM tools) to identify inefficiencies, friction points, and underutilized capabilities.'
    },
    {
      icon: Users,
      title: 'User Experience & Enablement Strategy',
      link: '/digital-systems-enablement/user-experience-and-enablement-strategy',
      description: 'Optimize interface layouts, workflows, and data access to reduce effort and increase adoption.'
    },
    {
      icon: Zap,
      title: 'AI Copilot & Assistant Integration',
      link: '/digital-systems-enablement/ai-copilot-and-assistant-integration',
      description: 'Embed AI into daily workflows to enhance task support, predictive analytics, and decision augmentation.'
    },
    {
      icon: Settings,
      title: 'Custom Dashboards & Reporting Layers',
      link: '/digital-systems-enablement/custom-dashboards-and-reporting-layers',
      description: 'Build real-time visibility tools that centralize performance insights and operational health indicators.'
    }
  ];

  return (
    <SolutionTemplate
      title="Digital Systems Enablement"
      description="Enhancing Platform Strategy & Workforce Effectiveness with Intelligent Systems"
      services={services}
      ctaTitle="Ready to Enable Your Digital Systems?"
      ctaDescription="Let&apos;s optimize your platforms and empower your teams with intelligent systems."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
      parentLabel="Strategic Solutions"
      parentHref="/strategic-solutions"
    />
  );
};

export default DigitalSystemsEnablement;
