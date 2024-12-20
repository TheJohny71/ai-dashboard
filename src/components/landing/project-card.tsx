export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="rounded-lg p-6 bg-gray-900 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-50 pointer-events-none`}></div>
      <div className="relative z-10">
        <div className={`text-4xl ${project.iconSymbol ? '' : 'hidden'}`}>{project.iconSymbol}</div>
        <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
        <p className="text-gray-400">{project.subtitle}</p>
        <p className="mt-2 text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span key={tech} className="bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
          Learn More
        </a>
      </div>
    </div>
  )
}
