import React from 'react';
import { Lock } from 'lucide-react';

export default function GameWorld() {
  return (
    <div className="flex-1 relative">
      {/* Background with clouds */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-300">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
      </div>

      {/* Game platforms */}
      <div className="relative h-full flex flex-col justify-around p-4">
        {/* Upper platform */}
        <div className="relative">
          <div className="h-8 bg-green-600 rounded-lg shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
          </div>
        </div>

        {/* Lower platform with flower */}
        <div className="relative">
          <div className="h-8 bg-green-600 rounded-lg shadow-lg">
            <div className="absolute -top-12 left-8">
              <div className="w-16 h-16">
                <img 
                  src="/flower.png" 
                  alt="Flower"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}