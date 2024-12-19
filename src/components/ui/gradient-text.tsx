import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  gradient?: string
  className?: string
}

export function GradientText({
  children,
  gradient = "from-purple-400 via-teal-400 to-emerald-400",
  className
}: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r bg-clip-text text-transparent",
      gradient,
      className
    )}>
      {children}
    </span>
  )
}
