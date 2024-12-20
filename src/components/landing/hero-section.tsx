import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const benefits = [
    'Enhanced Client Service',
    'Accelerated Workflows',
    'Practice Innovation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-24 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10" />
        
        <div className="relative max-w-3xl">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            AI Innovation Lab
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Transform your legal practice with AI tools that enhance attorney capabilities, 
            streamline complex workflows, and deliver superior client outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 border border-gray-800/50 rounded-lg p-4 flex items-center gap-3"
              >
                <CircleCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/portfolio"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-teal-600 transition-all text-lg"
          >
            View Solutions Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
