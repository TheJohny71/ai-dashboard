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
      description: 'Alfie streamlines repetitive document review tasks, enabling attorneys to focus on strategic client advising. Reduces contract review time by approximately 30%.',
      color: 'from-teal-400 to-purple-500',
      iconSymbol: '✨',
      link: '/apps/alfie',
      tech: ['GPT-4', 'PyTorch', 'React', 'Next.js']
    },
    {
      title: 'LexLiber',
      subtitle: 'AI Research Platform',
      description: 'LexLiber delivers instant, context-aware legal research results. Ideal for complex, multi-jurisdictional matters, tapping into over 1.2B+ data points to accelerate due diligence.',
      color: 'from-indigo-400 to-purple-500',
      iconSymbol: '📚',
      link: '/apps/lexliber',
      tech: ['BERT', 'Elasticsearch', 'Python', 'FastAPI']
    },
    {
      title: 'Seneca',
      subtitle: 'Adaptive Knowledge System',
      description: 'Seneca continuously learns from attorney interactions, providing predictive insights and improved recommendations. It integrates seamlessly with existing legal tech stacks and supports global, multi-lingual practice.',
      color: 'from-emerald-400 to-teal-500',
      iconSymbol: '🧠',
      link: '/apps/seneca',
      tech: ['Transformers', 'Neo4j', 'TensorFlow', 'GraphQL']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <HeroSection />
      <section className="max-w-4xl mx-auto px-4 md:px-0 mt-8 text-gray-300">
        <p className="mb-4">
          Imagine a future where your firm’s attorneys leverage advanced AI insights to deliver faster, more accurate counsel. By 2025, these innovations can reduce manual workloads, improve predictive outcomes, and enhance client satisfaction on a global scale.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Accelerate contract review and research with AI-driven analysis</li>
          <li>Leverage advanced NLP to forecast litigation outcomes</li>
          <li>Scale advisory capabilities across multiple jurisdictions</li>
          <li>Maintain strict data privacy, security, and compliance standards</li>
        </ul>
        <p className="mt-6">All solutions are designed to integrate seamlessly with leading document management, practice management, and compliance systems—ensuring a smooth transition into your firm’s existing workflows.</p>
      </section>
      <ProjectsSection projects={projects} />
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-16 text-center text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Ready to Explore a Pilot Program?</h2>
        <p className="mb-6">Contact us to schedule a private demonstration tailored to your firm’s unique needs, and discover how these AI solutions can enhance your competitive edge.</p>
        <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
          Schedule a Demo
        </a>
      </section>
    </main>
  );
}
