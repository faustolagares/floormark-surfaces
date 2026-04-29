import { LucideIcon } from 'lucide-react';

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  problem: string;
  solution: string;
  benefitsTitle: string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  outcomeDescription: string;
  metaDescription?: string;
  keywords?: string[];
}
