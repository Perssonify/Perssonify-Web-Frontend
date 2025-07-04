'use client';
import React from 'react';
import { Mail, Target, Users, BarChart } from 'lucide-react';
import SolutionTemplate from '@/common/SolutionTemplate';

const EmailMarketing: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Email Campaign Design',
      link: '/email-marketing/email-campaign-design',
      description: 'Beautiful, responsive email templates that drive engagement and reflect your brand perfectly.'
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      link: '/email-marketing/marketing-automation',
      description: 'Sophisticated automated email sequences that nurture leads and convert prospects into customers.'
    },
    {
      icon: Users,
      title: 'List Segmentation & Personalization',
      link: '/email-marketing/list-segmentation-and-personalization',
      description: 'Target the right audience with personalized messaging based on behavior and preferences.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      link: '/email-marketing/performance-analytics',
      description: 'Comprehensive tracking of opens, clicks, conversions, and ROI to optimize campaign performance.'
    }
  ];

  return (
    <SolutionTemplate
      title="Email Marketing & Marketing Automation"
      description="Build lasting relationships with your audience through strategic email marketing campaigns and intelligent automation workflows that convert prospects into loyal customers."
      services={services}
      ctaTitle="Ready to Boost Your Email ROI?"
      ctaDescription="Let&apos;s create email campaigns that your audience actually wants to read and engage with."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default EmailMarketing;
