'use client';
import React from 'react';
import { Cpu, Zap, Settings, TrendingUp, FileText } from 'lucide-react';
import SolutionTemplate from '@/common/SolutionTemplate';

const AIContent: React.FC = () => {
  const services = [
    {
      icon: Settings,
      title: 'AI Content Production Setup',
      link: '/ai-content/ai-content-production-setup',
      description: 'Custom AI-powered content production systems that scale your content creation while maintaining quality and brand consistency.'
    },
    {
      icon: Zap,
      title: 'Automated Content Workflows',
      link: '/ai-content/automated-content-workflows',
      description: 'Streamlined content production workflows that leverage AI to accelerate ideation, creation, and optimization processes.'
    },
    {
      icon: FileText,
      title: 'Content Quality & Brand Alignment',
      link: '/ai-content/content-quality-and-brand-alignment',
      description: 'Quality control systems that ensure AI-generated content meets your brand standards and maintains authentic voice.'
    },
    {
      icon: TrendingUp,
      title: 'Performance-Driven Content Optimization',
      link: '/ai-content/performance-driven-content-optimization',
        description: 'AI-powered content optimization that continuously improves performance based on engagement and conversion data.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="AI-Accelerated Content Production Pipelines"
      description="Advanced AI-powered content systems that scale your content creation capabilities while maintaining quality and driving results."
      categoryIcon={Cpu}
      services={services}
      ctaTitle="Ready to Scale Content with AI?"
        ctaDescription="Let&apos;s implement AI systems that accelerate your content production without compromising quality or brand integrity."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default AIContent;
