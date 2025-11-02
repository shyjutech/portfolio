import React from 'react';
import Section from './common/Section';

const PassiveIncome: React.FC = () => {
  return (
    <Section id="passive-income" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Passive Income Insights
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          One of my biggest passions is leveraging my tech skills to create assets that generate income. Here's a glimpse of what's possible with a single Flutter + Firebase app.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-2xl p-4 md:p-8 border-4 border-gray-700">
        <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm text-gray-400">Earnings Dashboard</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 md:p-10 text-center">
            <p className="text-lg text-gray-400 mb-2">Current Monthly Earnings</p>
            <p className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">
                ₹20K – ₹50K
            </p>
            <p className="text-md text-gray-500 mt-2">from a single application</p>
            
            <div className="mt-8">
                <img 
                    src="https://picsum.photos/seed/earnings-graph/800/200"
                    alt="Earnings graph"
                    className="rounded-md opacity-75"
                />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default PassiveIncome;
