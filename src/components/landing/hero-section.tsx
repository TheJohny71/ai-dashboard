import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden border-b border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10" />
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Next-Generation AI Innovation Lab
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Exploring the frontiers of artificial intelligence through practical applications and groundbreaking research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
