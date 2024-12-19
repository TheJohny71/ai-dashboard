import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { GradientText } from '../ui/gradient-text'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    color: string
    icon: LucideIcon
    link: string
    tech: string[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, description, color, icon: Icon, link, tech } = project

  return (
    <div className="group relative rounded-2xl border border-gray-800/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
      <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          {/* Project Header */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-20`} />
              <div className="relative w-full h-full flex items-center justify-center">
                <Icon 
                  className={`w-6 h-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">
                <GradientText gradient={color}>{title}</GradientText>
              </h2>
              <p className="text-gray-400 text-sm">{subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map(item => (
              <span 
                key={item}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700/50"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div>
            <a
              href={link}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${color}`}>
                Explore Project
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Preview Area */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800/50">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600">Preview Area</p>
          </div>
        </div>
      </div>
    </div>
  )
}
