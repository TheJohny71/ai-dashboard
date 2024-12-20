import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
        AI Innovation Lab
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl">
        Empower your firm with advanced AI tools designed to streamline legal research, improve contract review efficiency, and enhance client advisory services.
      </p>
      <div className="mt-8">
        <Link href="#projects" className="inline-block bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded">
          Explore Projects
        </Link>
      </div>
    </section>
  )
}
