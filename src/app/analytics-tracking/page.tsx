'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Target, Zap, Database, TrendingUp } from 'lucide-react';

const AnalyticsTracking: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Advanced Analytics Setup',
      link: '/analytics-tracking/advanced-analytics-setup',
      description: 'Complete Google Analytics 4, Google Tag Manager, and custom tracking implementation that captures every important user interaction.'
    },
    {
      icon: Target,
      title: 'Custom Event Tracking',
      link: '/analytics-tracking/custom-event-tracking',
      description: 'Strategic event tracking setup that measures the metrics that matter most to your business goals and growth objectives.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Attribution Modeling',
      link: '/analytics-tracking/conversion-attribution-modeling',
      description: 'Multi-touch attribution modeling that helps you understand the true impact of each marketing channel on your conversions.'
    },
    {
      icon: Zap,
      title: 'Real-time Reporting & Dashboards',
      link: '/analytics-tracking/real-time-reporting-and-dashboards',
      description: 'Custom dashboards and automated reporting that provide real-time insights into your marketing performance and ROI.'
    }
  ];

  return (
    <SolutionTemplate
      title="Analytics and Event Tracking Setup"
      description="Advanced analytics implementation that provides deep insights into user behavior and marketing performance through precise tracking and measurement."
      services={services}
      ctaTitle="Ready to Track What Matters?"
      ctaDescription="Let&apos;s implement analytics that provide the insights you need to make data-driven marketing decisions."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default AnalyticsTracking;
