'use client';
import React from 'react';
import SolutionTemplate from '@/common/layout/SolutionTemplate';
import { SearchCheck, FileText, TrendingUp, Target } from 'lucide-react';

const AuditInsights: React.FC = () => {
  const services = [
    {
      icon: SearchCheck,
      title: 'Comprehensive Marketing Audit',
      link: '/audit-insights/comprehensive-marketing-audit',
      description: 'Complete analysis of your current marketing efforts, identifying strengths, weaknesses, and untapped opportunities for growth.'
    },
    {
      icon: FileText,
      title: 'Strategic Recommendations Report',
      link: '/audit-insights/strategic-recommendations-report',
      description: 'Detailed report with actionable recommendations prioritized by impact and feasibility for immediate implementation.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Analysis & Benchmarking',
      link: '/audit-insights/competitive-analysis-and-benchmarking',
      description: 'In-depth competitive analysis that reveals market positioning opportunities and strategic advantages.'
    },
    {
      icon: Target,
      title: 'Growth Opportunity Mapping',
      link: '/audit-insights/growth-opportunity-mapping',
      description: 'Strategic roadmap that identifies and prioritizes the highest-impact growth opportunities for your business.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Deep Dive Audit & Strategic Insights"
      description="Comprehensive marketing and business audits that uncover hidden opportunities and provide actionable strategic recommendations for accelerated growth."
      categoryIcon={SearchCheck}
      services={services}
      ctaTitle="Ready for Strategic Clarity?"
      ctaDescription="Let&apos;s audit your current approach and uncover the strategic insights that will drive your next phase of growth."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default AuditInsights;
