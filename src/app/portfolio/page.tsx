import { 
  ArrowRight, 
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import { solutions } from '../data/solutions';

const flowConnectors = [
  'Enriched Analysis',
  'Knowledge Integration'
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Flow Diagram */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="flex flex-col items-center relative">
                {/* App Icon */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${solution.color} p-0.5`}>
                  <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* App Name */}
                <div className="mt-4 text-center">
                  <div className="text-white font-medium">{solution.title}</div>
                  <div className="text-sm text-teal-400">{solution.subtitle}</div>
                </div>

                {/* Connector Arrow and Label */}
                {index < 2 && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                    <ArrowRight className="w-6 h-6 text-gray-600 mb-1" />
                    <div className="text-xs text-gray-500 whitespace-nowrap">
                      {flowConnectors[index]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-4">
            AI Solutions Portfolio
          </h1>
          <p className="text-gray-400">
            Built for seamless integration with leading legal technology platforms including iManage, Elite, and Relativity.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="space-y-8">
          {solutions.map(solution => (
            <div 
              key={solution.id}
              className="p-6 rounded-xl bg-gray-800/30 border border-gray-800/50 hover:bg-gray-800/40 transition-all group"
            >
              {/* App Icon */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${solution.color} p-0.5 mb-4`}>
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-1">
                    {solution.title}
                  </h2>
                  <div className="text-sm text-teal-400 mb-3">
                    {solution.subtitle}
                  </div>
                  <p className="text-gray-400 mb-4">
                    {solution.description}
                  </p>

                  {/* Impact & Practice Areas */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-purple-400">Impact:</span>
                      <span className="text-gray-300">{solution.impact}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-purple-400">Practice Areas:</span>
                      <div className="flex gap-2">
                        {solution.practices.map((practice, i) => (
                          <span 
                            key={i}
                            className="px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 text-xs"
                          >
                            {practice}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/solutions/${solution.id}`}
                  className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
