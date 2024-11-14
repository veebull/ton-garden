import React from 'react';
import { ChevronRight } from 'lucide-react';

type Props = {
  title: string;
  reward: string;
};

export default function MissionItem({ title, reward }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg">
      <div className="w-12 h-12 flex-shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1597307770183-a64d3fff7326?w=100&auto=format&fit=crop&q=60"
          alt="Scroll"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-lg">🎁</span>
          <span className="text-green-600 font-medium">{reward}</span>
        </div>
      </div>

      <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}