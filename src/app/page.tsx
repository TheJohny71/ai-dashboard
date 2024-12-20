// src/app/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/landing/hero-section';

export const metadata: Metadata = {
  title: 'AI Innovation Lab',
  description: 'Next-Generation AI Innovation Lab',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <HeroSection />
      
      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-8">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Imagine a future where your firm's attorneys leverage advanced AI insights to deliver faster, more accurate counsel. By 2025, these innovations can reduce manual workloads, improve predictive outcomes, and enhance client satisfaction on a global scale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400">⚡</span>
                </div>
                <div className="text-gray-300">
                  Accelerate contract review and research with AI-driven analysis
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-400">🎯</span>
                </div>
                <div className="text-gray-300">
                  Leverage advanced NLP to forecast litigation outcomes
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400">🌐</span>
                </div>
                <div className="text-gray-300">
                  Scale advisory capabilities across multiple jurisdictions
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-400">🔒</span>
                </div>
                <div className="text-gray-300">
                  Maintain strict data privacy, security, and compliance standards
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg">
            All solutions are designed to integrate seamlessly with leading document management, practice management, and compliance systems—ensuring a smooth transition into your firm's existing workflows.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-24 text-center">
        <div className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-xl p-12 border border-gray-800/50">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Ready to Explore a Pilot Program?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to schedule a private demonstration tailored to your firm's unique needs, and discover how these AI solutions can enhance your competitive edge.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-xl text-white font-medium text-lg hover:from-purple-600 hover:to-teal-600 transition-all transform hover:scale-105 hover:shadow-xl shadow-purple-500/25"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
