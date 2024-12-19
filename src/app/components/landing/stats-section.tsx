import { Cpu, Network, Database, Github } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Stat {
  icon: LucideIcon
  label: string
  value: string
}

const stats: Stat[] = [
  { icon: Cpu, label: 'AI Models', value: '15+' },
  { icon: Network, label: 'Accuracy Rate', value: '98.5%' },
  { icon: Database, label: 'Data Processed', value: '1.2B+' },
  { icon: Github, label: 'Contributors', value: '50+' }
]

export function StatsSection() {
  return (
    <div className="border-b border-gray-800/50 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <stat.icon className="w-8 h-8 text-gray-500" />
              <div>
                <div className="text-2xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
