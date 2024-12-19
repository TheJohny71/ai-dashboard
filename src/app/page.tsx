import React from 'react';
import HeroSection from '@/components/landing/hero-section';
import StatsSection from '@/components/landing/stats-section';
import ProjectCard from '@/components/landing/project-card';

export default function Home() {
  const [activeProject, setActiveProject] = React.useState<string | null>(null);

  const stats = [
    { iconSymbol: '💻', label: 'AI Models', value: '15+' },
    { iconSymbol: '🎯', label: 'Accuracy Rate', value: '98.5%' },
    { iconSymbol: '📊', label: 'Data Processed', value: '1.2B+' },
    { iconSymbol: '👥', label: 'Contributors', value: '50+' }
  ];

  const projects = [
    {
      id: 'alfie',
      title: 'Alfie',
      subtitle: 'AI-Powered Assistant',
      description: 'Advanced AI system leveraging state-of-the-art language models to revolutionize task automation and decision support.',
      color: 'from-teal-400 to-purple-500',
      iconSymbol: '✨',
      link: '/apps/alfie',
      tech: ['GPT-4', 'PyTorch', 'React', 'Next.js']
    },
    {
      id: 'lexliber',
      title: 'LexLiber',
      subtitle: 'AI Research Platform',
      description: 'Neural search-powered research platform that understands context and delivers precise, relevant results instantly.',
      color: 'from-indigo-400 to-purple-500',
      iconSymbol: '📚',
      link: '/apps/lexliber',
      tech: ['BERT', 'Elasticsearch', 'Python', 'FastAPI']
    },
    {
      id: 'seneca',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <HeroSection />
      <StatsSection stats={stats} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
              isActive={activeProject === project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
