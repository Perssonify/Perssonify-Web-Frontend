'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Calendar, Target, TrendingUp, Users } from 'lucide-react';

const ContentStrategy: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Content Strategy & Planning',
      link: '/content-strategy/content-strategy-and-planning',
      description: 'Comprehensive content strategies aligned with business goals that drive engagement, traffic, and conversions.'
    },
    {
      icon: Calendar,
      title: 'Editorial Calendar & Content Planning',
      link: '/content-strategy/editorial-calendar-and-content-planning',
      description: 'Strategic content calendars and planning systems that ensure consistent, high-quality content across all channels.'
    },
    {
      icon: Users,
      title: 'Audience-Centric Content Development',
      link: '/content-strategy/audience-centric-content-development',
      description: 'Content development focused on your audience needs, pain points, and interests that drives meaningful engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Content Performance & Optimization',
      link: '/content-strategy/content-performance-and-optimization',
      description: 'Content performance analysis and optimization strategies that maximize reach, engagement, and conversion rates.'
    }
  ];

  return (
    <SolutionTemplate
      title="Content Strategy & Planning"
      description="Strategic content frameworks that engage audiences, support business objectives, and create consistent value for your target market."
      services={services}
      ctaTitle="Ready to Scale Your Content?"
      ctaDescription="Let&apos;s create a content strategy that consistently delivers value to your audience and drives business results."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );    
};

export default ContentStrategy;
