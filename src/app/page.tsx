import { Sparkles, BookOpen, Brain, ArrowRight, Cpu, Network, Database, Github } from 'lucide-react';

export default function Home() {
  const topStats = [
    { icon: Cpu, label: 'AI Models', value: '15+' },
    { icon: Network, label: 'Accuracy Rate', value: '98.5%' },
    { icon: Database, label: 'Data Processed', value: '1.2B+' },
    { icon: Github, label: 'Contributors', value: '50+' }
  ];

  const apps = [
    {
      id: 'alfie',
      title: 'Alfie',
      subtitle: 'AI-Powered Assistant',
      description: 'Advanced AI system leveraging state-of-the-art language models to revolutionize task automation and decision support.',
      color: 'from-teal-400 to-purple-500',
      icon: Sparkles,
      link: '/apps/alfie',
      tech: ['GPT-4', 'PyTorch', 'React', 'Next.js']
    },
    {
      id: 'lexliber',
      title: 'LexLiber',
      subtitle: 'AI Research Platform',
      description: 'Neural search-powered research platform that understands context and delivers precise, relevant results instantly.',
      color: 'from-indigo-400 to-purple-500',
      icon: BookOpen,
      link: '/apps/lexliber',
      tech: ['BERT', 'Elasticsearch', 'Python', 'FastAPI']
    },
    {
      id: 'seneca',
      title: 'Seneca',
      subtitle: 'AI Knowledge System',
      description: 'Self-improving knowledge system that learns from interactions and adapts to evolving information needs.',
      color: 'from-emerald-400 to-teal-500',
      icon: Brain,
      link: '/apps/seneca',
      tech: ['Transformers', 'Neo4j', 'TensorFlow', 'GraphQL']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10" />
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Next-Generation AI Innovation Lab
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Exploring the frontiers of artificial intelligence through practical applications and groundbreaking research.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-b border-gray-800/50 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <stat.icon className="w-8 h-8 text-gray-500" />
                <div>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {apps.map(app => (
            <div
              key={app.id}
              className="group relative rounded-2xl border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  {/* App Header */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${app.color} opacity-20`} />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <app.icon 
                          className={`w-6 h-6 bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className={`text-3xl font-bold bg-gradient-to-r ${app.color} bg-clip-text text-transparent mb-1`}>
                        {app.title}
                      </h2>
                      <p className="text-gray-400 text-sm">{app.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400">
                    {app.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div>
                    <a
                      href={app.link}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
                      <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${app.color}`}>
                        Explore Project
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Preview Area */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800/50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-5`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600">Preview Area</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
