'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Shield, FileCheck, Search, AlertTriangle, Database } from 'lucide-react';

const ComplianceGovernance: React.FC = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Digital Audit Trails & Approval Workflows',
      link: '/compliance-governance/digital-audit-trails-and-approval-workflows',
      description: 'Digitizing audit trails and approval workflows to ensure traceability and control across all compliance processes.'
    },
    {
      icon: AlertTriangle,
      title: 'Automated Policy Enforcement',
      link: '/compliance-governance/automated-policy-enforcement',
      description: 'Automating policy enforcement checks for consistent application across the organization and reduced human error.'
    },
    {
      icon: Database,
      title: 'Integrated Documentation Processes',
      link: '/compliance-governance/integrated-documentation-processes',
      description: 'Integrating documentation processes into daily operations for seamless compliance readiness and audit preparation.'
    },
    {
      icon: Search,
      title: 'Governance Alignment Systems',
      link: '/compliance-governance/governance-alignment-systems',
      description: 'Designing systems for governance alignment that reduce human error and audit risk while improving visibility.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Compliance & Governance"
      description="Reducing regulatory burden and risk exposure with streamlined, traceable processes."
      categoryIcon={Shield}
      services={services}
      ctaTitle="Ready to Streamline Your Compliance?"
      ctaDescription="Let&apos;s implement systems that simplify regulatory workflows and reduce compliance risk."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
      parentLabel="Strategic Solutions"
      parentHref="/solutions-by-function"
    />
  );    
};

export default ComplianceGovernance;
