'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Search, TrendingUp, FileText, BarChart3 } from 'lucide-react';

const SEO: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO & Site Optimization',
      link: '/seo-website-growth/technical-seo-and-site-optimization',
      description: 'Complete technical SEO audits and optimizations that improve site speed, crawlability, and search engine performance.'
    },
    {
      icon: FileText,
      title: 'Content Strategy & SEO Writing',
      link: '/seo-website-growth/content-strategy-and-seo-writing',
      description: 'Strategic content creation and optimization that ranks well in search engines while providing value to your audience.'
    },
    {
      icon: TrendingUp,
      title: 'Keyword Research & Strategy',
      link: '/seo-website-growth/keyword-research-and-strategy',
      description: 'Comprehensive keyword research and competitive analysis to identify high-value opportunities for organic growth.'
    },
    {
      icon: BarChart3,
      title: 'Local SEO & Google My Business',
      link: '/seo-website-growth/local-seo-and-google-my-business',
      description: 'Local search optimization and Google My Business management that drives foot traffic and local customer acquisition.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Search Engine Optimization (SEO) & Website Growth"
      description="Comprehensive SEO strategies that improve search visibility, drive organic traffic, and establish your brand as an authority in your industry."
      categoryIcon={Search}
      services={services}
      ctaTitle="Ready to Dominate Search Results?"
      ctaDescription="Let&apos;s optimize your online presence to drive organic traffic and establish your brand as an industry authority."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
    />
  );
};

export default SEO;
