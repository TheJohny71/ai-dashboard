import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const benefits = [
    'Enhanced Client Service',
    'Accelerated Workflows',
    'Practice Innovation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex items-center justify-center py-12">
      <div className="w-full max-w-6xl mx-auto px-4 relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-3xl" />
        
        {/* Content */}
        <div className="text-center">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            AI Innovation Lab
          </h1>
          
          <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your legal practice with AI tools that enhance attorney capabilities, 
            streamline complex workflows, and deliver superior client outcomes.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 flex items-center gap-4 hover:bg-gray-800/40 transition-all group"
              >
                <CircleCheck className="w-6 h-6 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl text-white font-medium text-lg hover:from-purple-600 hover:to-teal-600 transition-all transform hover:scale-105 hover:shadow-xl shadow-purple-500/25"
          >
            View Solutions Portfolio
          </Link>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
