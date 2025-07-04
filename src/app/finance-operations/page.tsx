'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { FileText, RefreshCw, FileCheck, Database } from 'lucide-react';

const FinanceOperations: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Automated Financial Workflows',
      link: '/finance-operations/automated-financial-workflows',
      description: 'Automating financial workflows for invoice ingestion, approvals, expense reporting, and reconciliations.'
    },
    {
      icon: Database,
      title: 'Data Standardization & Validation',
      link: '/finance-operations/data-standardization-and-validation',
      description: 'Standardizing and validating data across systems for more accurate forecasting and reporting.'
    },
    {
      icon: RefreshCw,
      title: 'Intelligent Exception Handling',
      link: '/finance-operations/intelligent-exception-handling',
      description: 'Implementing intelligent exception handling to reduce delays and manual review.'
    },
    {
      icon: FileCheck,
      title: 'Scalable Finance Operations',
      link: '/finance-operations/scalable-finance-operations',
      description: 'Designing scalable finance operations models that can support rapid growth or acquisition events.'
    }
  ];

  return (
    <SolutionTemplate
      title="Finance Operations"
      description="Unlocking efficiency in financial processes through automation, integration, and strategic optimization."
      services={services}
      ctaTitle="Ready to Optimize Your Finance Operations?"
      ctaDescription="Let&apos;s streamline your financial processes and unlock efficiency."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
      parentLabel="Strategic Solutions"
      parentHref="/strategic-solutions"
    />
  );
};

export default FinanceOperations;
