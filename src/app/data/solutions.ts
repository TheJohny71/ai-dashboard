import { Sparkles, BookOpen, Brain } from 'lucide-react';
import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    id: 'alfie',
    title: 'Alfie',
    subtitle: 'AI-Powered Assistant',
    description: 'Advanced AI system leveraging state-of-the-art language models to revolutionize task automation and decision support.',
    icon: Sparkles,
    color: 'from-teal-400 to-purple-500',
    impact: 'Reduced contract review time by 70%',
    practices: ['Corporate', 'M&A', 'Real Estate']
  },
  {
    id: 'lexliber',
    title: 'LexLiber',
    subtitle: 'AI Research Platform',
    description: 'Neural search-powered research platform that understands context and delivers precise, relevant results instantly.',
    icon: BookOpen,
    color: 'from-indigo-400 to-purple-500',
    impact: 'Covers 100+ jurisdictions globally',
    practices: ['Litigation', 'Regulatory', 'Compliance']
  },
  {
    id: 'seneca',
    title: 'Seneca',
    subtitle: 'AI Knowledge System',
    description: 'Self-improving knowledge system that learns from interactions and adapts to evolving information needs.',
    icon: Brain,
    color: 'from-emerald-400 to-teal-500',
    impact: 'Knowledge retrieval improved by 45%',
    practices: ['All Practice Areas', 'Knowledge Management']
  }
];
