import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/landing/hero-section';
import ProjectsSection from '@/components/landing/projects-section';
import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Next-Generation AI Innovation Lab',
};

export default function HomePage() {
  const projects: Project[] = [
    {
      title: 'Alfie',
      subtitle: 'AI-Powered Assistant',
      description: 'Advanced AI system leveraging state-of-the-art language models to revolutionize task automation and decision support.',
      color: 'from-teal-400 to-purple-500',
      iconSymbol: '✨',
      link: '/apps/alfie',
      tech: ['GPT-4', 'PyTorch', 'React', 'Next.js']
    },
    {
      title: 'LexLiber',
      subtitle: 'AI Research Platform',
      description: 'Neural search-powered research platform that understands context and delivers precise, relevant results instantly.',
      color: 'from-indigo-400 to-purple-500',
      iconSymbol: '📚',
      link: '/apps/lexliber',
      tech: ['BERT', 'Elasticsearch', 'Python', 'FastAPI']
    },
    {
      title: 'Seneca',
      subtitle: 'AI Knowledge System',
      description: 'Self-improving knowledge system that learns from interactions and adapts to evolving information needs.',
      color: 'from-emerald-400 to-teal-500',
      iconSymbol: '🧠',
      link: '/apps/seneca',
      tech: ['Transformers', 'Neo4j', 'TensorFlow', 'GraphQL']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <HeroSection />
      {/* StatsSection removed */}
      <ProjectsSection projects={projects} />
    </main>
  );
}
