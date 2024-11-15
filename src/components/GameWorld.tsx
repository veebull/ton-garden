import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import BuyPlantsModal from './modals/BuyPlantsModal';
import BuySlotModal from './modals/BuySlotModal';

export default function GameWorld() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);

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
            <button 
              onClick={() => setIsSlotModalOpen(true)}
              className="absolute -top-4 left-0 right-0 flex items-center justify-center"
            >
              <div className="bg-green-700/50 rounded-xl px-8 py-2 flex items-center gap-2">
                <Lock className="w-6 h-6 text-white" />
                <span className="text-white font-medium">Unlock more slots</span>
              </div>
            </button>
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
            <div className="absolute -top-12 flex gap-4">
              {/* Flower */}
              <div className="w-16 h-16">
                <img 
                  src="/flower.png" 
                  alt="Flower"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Empty Plant Box 1 */}
              <button 
                onClick={() => setIsBuyModalOpen(true)}
                className="w-16 h-16 border-4 border-dashed border-green-700/50 rounded-xl flex items-center justify-center hover:bg-green-600/10 transition-colors"
              >
                <Lock className="w-6 h-6 text-green-700/50" />
              </button>
              
              {/* Empty Plant Box 2 */}
              <button 
                onClick={() => setIsBuyModalOpen(true)}
                className="w-16 h-16 border-4 border-dashed border-green-700/50 rounded-xl flex items-center justify-center hover:bg-green-600/10 transition-colors"
              >
                <Lock className="w-6 h-6 text-green-700/50" />
              </button>
            </div>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
            <div className="w-12 h-4 border-b-4 border-green-700 opacity-50" />
          </div>
        </div>
      </div>

      <BuyPlantsModal 
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
      />

      <BuySlotModal
        isOpen={isSlotModalOpen}
        onClose={() => setIsSlotModalOpen(false)}
      />
    </div>
  );
}