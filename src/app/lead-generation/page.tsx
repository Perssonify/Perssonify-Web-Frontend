'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Users, Target, Zap, Funnel } from 'lucide-react';

const LeadGeneration: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Magnet Development',
      link: '/lead-generation/lead-magnet-development',
      description: 'High-converting lead magnets and content offers that attract qualified prospects and build your email list.'
    },
    {
      icon: Funnel,
      title: 'Sales Funnel Design & Optimization',
      link: '/lead-generation/sales-funnel-design-and-optimization',
      description: 'Strategic sales funnel development that guides prospects through each stage of the buyer journey to conversion.'
    },
    {
      icon: Users,
      title: 'Multi-Channel Lead Generation',
      link: '/lead-generation/multi-channel-lead-generation',
      description: 'Integrated lead generation campaigns across multiple channels including content marketing, social media, and paid advertising.'
    },
    {
      icon: Zap,
      title: 'Lead Qualification & Nurturing',
      link: '/lead-generation/lead-qualification-and-nurturing',
      description: 'Automated lead scoring and nurturing sequences that identify sales-ready prospects and move them toward purchase.'
    }
  ];

  return (
    <SolutionTemplate
      title="Lead Generation & Funnel Strategy"
      description="Strategic lead generation systems that attract qualified prospects and convert them into customers through optimized funnel experiences."
      services={services}
      ctaTitle="Ready to Generate Quality Leads?"
      ctaDescription="Let&apos;s build lead generation systems that consistently deliver qualified prospects for your sales team."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default LeadGeneration;
