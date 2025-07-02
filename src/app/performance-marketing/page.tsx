'use client'; 
import React from 'react';
import SolutionTemplate from '@/common/layout/SolutionTemplate';
import { TrendingUp, Target, BarChart3, Zap, Users } from 'lucide-react';

const PerformanceMarketing: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Paid Search & Display Advertising',
      link: '/performance-marketing/paid-search-and-display-advertising',
      description: 'Strategic Google Ads, Bing Ads, and display campaigns that maximize ROI and drive qualified traffic to your business.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics & Optimization',
      link: '/performance-marketing/performance-analytics-and-optimization',
      description: 'Data-driven campaign optimization with advanced tracking, A/B testing, and performance analysis for continuous improvement.'
    },
    {
      icon: Zap,
      title: 'Conversion Rate Optimization',
      link: '/performance-marketing/conversion-rate-optimization',
      description: 'Landing page optimization and conversion funnel improvements that turn more visitors into customers.'
    },
    {
      icon: Users,
      title: 'Audience Targeting & Retargeting',
      link: '/performance-marketing/audience-targeting-and-retargeting',
      description: 'Precision audience targeting and sophisticated retargeting campaigns that reach the right people at the right time.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Performance Marketing & Paid Media"
      description="High-ROI advertising campaigns that drive measurable results and accelerate customer acquisition through strategic paid media optimization."
      categoryIcon={TrendingUp}
      services={services}
      ctaTitle="Ready to Scale Your Advertising ROI?"
      ctaDescription="Let's create performance marketing campaigns that deliver measurable growth and maximize your advertising investment."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default PerformanceMarketing;
