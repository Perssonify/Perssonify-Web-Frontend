'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Palette, Camera, Video, Brush, Sparkles } from 'lucide-react';

const CreativeSolutions: React.FC = () => {
  const services = [
    {
      icon: Brush,
      title: 'Brand Design & Visual Identity',
      link: '/creative-solutions/brand-design-and-visual-identity',
      description: 'Complete brand design systems including logos, color palettes, typography, and visual guidelines that create lasting impressions.'
    },
    {
      icon: Camera,
      title: 'Photography & Visual Content',
      link: '/creative-solutions/photography-and-visual-content',
      description: 'Professional photography and visual content creation that captures your brand essence and engages your audience.'
    },
    {
      icon: Video,
      title: 'Video Production & Motion Graphics',
      link: '/creative-solutions/video-production-and-motion-graphics',
      description: 'High-quality video content and motion graphics that tell your story and drive engagement across all platforms.'
    },
    {
      icon: Sparkles,
      title: 'Creative Campaign Development',
      link: '/creative-solutions/creative-campaign-development',
      description: 'Innovative creative campaigns that break through the noise and create memorable brand experiences for your audience.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Creative Solutions"
      description="Visually stunning creative assets that capture attention, communicate your brand message, and drive conversions across all marketing channels."
      categoryIcon={Palette}
      services={services}
      ctaTitle="Ready to Create Something Amazing?"
      ctaDescription="Let&apos;s bring your brand to life with creative solutions that captivate your audience and drive results."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default CreativeSolutions;
