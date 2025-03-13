
import React from 'react';
import { Database, BarChart3, LineChart, Brain } from 'lucide-react';

const OgImageGenerator = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center relative overflow-hidden p-10">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-10">
        {Array(20).fill(0).map((_, i) => (
          <Database key={`db-${i}`} size={80} className="m-6 text-primary" />
        ))}
        {Array(20).fill(0).map((_, i) => (
          <BarChart3 key={`bar-${i}`} size={80} className="m-6 text-secondary" />
        ))}
        {Array(20).fill(0).map((_, i) => (
          <LineChart key={`line-${i}`} size={80} className="m-6 text-primary" />
        ))}
      </div>
      
      <div className="glass rounded-xl p-10 relative z-10 flex flex-col items-center max-w-3xl text-center">
        <div className="flex gap-6 mb-8">
          <Database size={60} className="text-primary" />
          <BarChart3 size={60} className="text-primary" />
          <Brain size={60} className="text-primary" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Adama LO</h1>
        <h2 className="text-3xl font-semibold text-primary mb-2">Ingénieur BI - Consultant Data</h2>
        <p className="text-xl">Transformer les données en performance</p>
      </div>
    </div>
  );
};

export default OgImageGenerator;
