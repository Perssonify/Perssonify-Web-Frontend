'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Globe, Code, Smartphone, Zap, Shield } from 'lucide-react';

const WebsiteSolutions: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      link: '/website-solutions/custom-website-development',
      description: 'Fully custom websites built with modern technologies that provide exceptional user experiences and drive business results.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design & Mobile Optimization',
      link: '/website-solutions/responsive-design-and-mobile-optimization',
      description: 'Mobile-first responsive design that ensures your website looks and performs perfectly on all devices and screen sizes.'
    },
    {
      icon: Zap,
      title: 'Performance & Speed Optimization',
      link: '/website-solutions/performance-and-speed-optimization',
      description: 'Website performance optimization that improves loading speeds, user experience, and search engine rankings.'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      link: '/website-solutions/security-and-maintenance',
      description: 'Comprehensive website security, regular updates, and ongoing maintenance to keep your site secure and performing optimally.'
    }
  ];

  return (
    <SolutionTemplate
      category="Core Growth Solutions"
      title="Website Solutions"
      description="Professional website development and optimization that creates seamless user experiences and drives business growth."
      categoryIcon={Globe}
      services={services}
      ctaTitle="Ready to Transform Your Website?"   
      ctaDescription="Let&apos;s create a website that not only looks amazing but also drives conversions and grows your business."
      backLink="/core-growth-solutions"
      backLinkText="View All Core Growth Solutions"
      parentLabel="Growth Solutions"
      parentHref="/growth-solutions"
    />
  );
};

export default WebsiteSolutions;
