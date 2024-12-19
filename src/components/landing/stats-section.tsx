import React from 'react';

interface StatItemProps {
  label: string;
  value: string;
  iconSymbol: string;
}

const StatsSection = ({ 
  stats 
}: { 
  stats: StatItemProps[] 
}) => {
  return (
    <div className="border-b border-gray-800/50 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-2xl text-gray-500">{stat.iconSymbol}</span>
              <div>
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
