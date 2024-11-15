import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const plants = [
  { id: 'fire', image: '🔥', name: 'Fire Plant' },
  { id: 'cactus', image: '🌵', name: 'Cuddly Cacti' },
  { id: 'corn', image: '🌽', name: 'Sweet Corn' },
];

export default function BuyPlantsModal({ isOpen, onClose }: Props) {
  const [selectedPlant, setSelectedPlant] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-2xl font-bold">BUY MORE PLANTS</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {/* Plant Carousel */}
          <div className="flex justify-between items-center mb-6">
            {plants.map((plant, index) => (
              <button
                key={plant.id}
                onClick={() => setSelectedPlant(index)}
                className={`w-24 h-24 rounded-2xl flex items-center justify-center text-4xl ${
                  index === selectedPlant ? 'bg-[#90EE90]' : 'bg-gray-100'
                }`}
              >
                {plant.image}
              </button>
            ))}
          </div>

          {/* Selected Plant Name */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {plants[selectedPlant].name}
          </h3>

          {/* Profit Info */}
          <div className="bg-[#F0FFF0] rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold">Harvest Profit</span>
                <Info className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <img src="/ton-logo.png" alt="TON" className="w-5 h-5" />
                <span>0.000005513</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="font-bold">Daily Profit</span>
              <div className="flex items-center gap-1">
                <img src="/ton-logo.png" alt="TON" className="w-5 h-5" />
                <span>0.47628</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-bold">Monthly Profit</span>
              <div className="flex items-center gap-1">
                <img src="/ton-logo.png" alt="TON" className="w-5 h-5" />
                <span>14.2884</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2">
              <img src="/ton-logo.png" alt="TON" className="w-6 h-6" />
              <span className="text-2xl font-bold">9.99 TON</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-[#4CAF50] text-white font-bold py-4 rounded-xl text-xl hover:bg-[#45A049] transition-colors">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}