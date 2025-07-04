'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Building, Target, Users, Sparkles, TrendingUp } from 'lucide-react';

const BrandStrategy: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Brand Positioning & Messaging',
      link: '/brand-strategy/brand-positioning-and-messaging',
      description: 'Strategic brand positioning that differentiates you in the market and resonates with your target audience.'
    },
    {
      icon: Users,
      title: 'Audience Research & Personas',
      link: '/brand-strategy/audience-research-and-personas',
      description: 'Deep audience research and detailed buyer persona development that informs all brand and marketing decisions.'
    },
    {
      icon: Sparkles,
      title: 'Brand Identity & Voice Development',
      link: '/brand-strategy/brand-identity-and-voice-development',
      description: 'Complete brand identity system including visual elements, tone of voice, and brand personality that creates consistency.'
    },
    {
      icon: TrendingUp,
      title: 'Brand Architecture & Portfolio Strategy',
      link: '/brand-strategy/brand-architecture-and-portfolio-strategy',
      description: 'Strategic brand architecture that organizes your brand portfolio and optimizes market positioning across all offerings.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Brand Architecture & Strategy"
      description="Comprehensive brand strategy development that defines your market position, differentiates your offering, and creates lasting competitive advantage."
      categoryIcon={Building}
      services={services}
      ctaTitle="Ready to Define Your Brand?"
      ctaDescription="Let&apos;s develop a brand strategy that positions you for long-term success and sustainable growth."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default BrandStrategy;
