'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Users, MessageCircle, Camera, TrendingUp, Heart } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Social Media Strategy & Planning',
      link: '/social-media-marketing/social-media-strategy-and-planning',
      description: 'Comprehensive social media strategies that align with your brand goals and engage your target audience across all platforms.'
    },
    {
      icon: Camera,
      title: 'Content Creation & Management',
      link: '/social-media-marketing/content-creation-and-management',
      description: 'High-quality content creation, scheduling, and community management that builds meaningful connections with your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Social Media Advertising',
      link: '/social-media-marketing/social-media-advertising',
      description: 'Targeted social media ad campaigns across Facebook, Instagram, LinkedIn, and Twitter that drive engagement and conversions.'
    },
    {
      icon: Heart,
      title: 'Community Building & Engagement',
      link: '/social-media-marketing/community-building-and-engagement',
      description: 'Active community management and engagement strategies that foster brand loyalty and create lasting customer relationships.'
    }
  ];

  return (
    <SolutionTemplate
      "Core Growth Solutions"
      title="Social Media Marketing & Brand Engagement"
      description="Build meaningful connections and drive engagement through strategic social media marketing that amplifies your brand across all platforms."
      {Users}
      services={services}
      ctaTitle="Ready to Build Your Social Community?"
      ctaDescription="Let&apos;s create a social media presence that engages your audience and drives meaningful business results."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default SocialMedia;
