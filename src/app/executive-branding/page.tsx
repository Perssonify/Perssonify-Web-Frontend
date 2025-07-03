'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { UserCheck, Users, TrendingUp, MessageCircle, Target } from 'lucide-react';

const ExecutiveBranding: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Personal Brand Strategy Development',
      link: '/executive-branding/personal-brand-strategy-development',
      description: 'Strategic personal branding that positions executives as thought leaders and industry authorities in their field.'
    },
    {
      icon: Users,
      title: 'LinkedIn Profile & Content Optimization',
      link: '/executive-branding/linkedin-profile-and-content-optimization',
      description: 'Complete LinkedIn optimization including profile enhancement, content strategy, and engagement tactics for maximum visibility.'
    },
    {
      icon: MessageCircle,
      title: 'Thought Leadership Content Creation',
      link: '/executive-branding/thought-leadership-content-creation',
      description: 'High-quality thought leadership content that showcases expertise and builds credibility with target audiences.'
    },
    {
      icon: TrendingUp,
      title: 'Executive Networking & Engagement',
      link: '/executive-branding/executive-networking-and-engagement',
      description: 'Strategic networking and engagement strategies that build meaningful professional relationships and business opportunities.'
    }
  ];

  return (
    <SolutionTemplate
      category="Specialized Growth Solutions"
      title="Executive Personal Branding & LinkedIn Marketing"
      description="Strategic personal branding that positions executives as thought leaders and drives business growth through enhanced professional presence."
      categoryIcon={UserCheck}
      services={services}
      ctaTitle="Ready to Elevate Your Executive Presence?"
      ctaDescription="Let&apos;s build a personal brand that positions you as a thought leader and drives business opportunities."
      backLink="/specialized-growth-solutions"
      backLinkText="View All Specialized Growth Solutions"
    />
  );
};

export default ExecutiveBranding;
