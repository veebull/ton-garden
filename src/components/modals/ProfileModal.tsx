import React from 'react';
import { X, Music } from 'lucide-react';
import { Switch } from '../ui/Switch';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProfileModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-2xl font-bold">PROFILE</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          <h3 className="text-xl font-bold mb-4">Balance</h3>

          {/* TON Balance */}
          <div className="bg-[#FFF8E7] rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <img src="/ton-logo.png" alt="TON" className="w-8 h-8" />
              <div className="flex-1">
                <div className="text-xl font-bold">0.00211852</div>
                <div className="text-gray-500">$0.01130665</div>
              </div>
              <button className="bg-[#4CAF50] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#45A049] transition-colors">
                WITHDRAW
              </button>
            </div>
          </div>

          {/* Garden Balance */}
          <div className="bg-[#FFF8E7] rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold">0.21185206</div>
                <div className="text-gray-500">$0.00211852</div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <h3 className="text-xl font-bold mb-4">Settings</h3>
          
          <div className="bg-[#FFF8E7] rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6" />
                <span className="text-lg font-medium">Music</span>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}