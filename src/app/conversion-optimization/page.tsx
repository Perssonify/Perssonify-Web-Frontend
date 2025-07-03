'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Target, BarChart3, Zap, TestTube, TrendingUp } from 'lucide-react';

const ConversionOptimization: React.FC = () => {
  const services = [
    {
      icon: TestTube,
      title: 'A/B Testing & Experimentation',
      link: '/conversion-optimization/ab-testing-and-experimentation',
      description: 'Systematic A/B testing and multivariate experiments that identify the highest-converting variations of your pages and campaigns.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance Analysis',
      link: '/conversion-optimization/analytics-and-performance-analysis',
      description: 'Deep analytics analysis and user behavior tracking that reveals conversion bottlenecks and optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'Landing Page Optimization',
      link: '/conversion-optimization/landing-page-optimization',
      description: 'Strategic landing page design and optimization that improves user experience and maximizes conversion rates.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Funnel Analysis',
      link: '/conversion-optimization/conversion-funnel-analysis',
      description: 'Complete conversion funnel analysis and optimization that identifies and eliminates barriers to customer conversion.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Conversion Rate Optimization (CRO)"
      description="Data-driven optimization strategies that systematically improve your conversion rates and maximize the value of your existing traffic."
      categoryIcon={Target}
      services={services}
      ctaTitle="Ready to Convert More Visitors?"
      ctaDescription="Let&apos;s optimize your conversion funnel to turn more visitors into customers and maximize your marketing ROI."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default ConversionOptimization;
