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
  // Component code here
}
