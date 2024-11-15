import React, { useState } from 'react';
import { Wallet, Plus } from 'lucide-react';
import MysteryBoxModal from './modals/MysteryBoxModal';
import ProfileModal from './modals/ProfileModal';

export default function GameHeader() {
  const [isMysteryBoxOpen, setIsMysteryBoxOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <div className="bg-[#4CAF50] p-4 rounded-[32px] mx-4 mb-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <h1 className="text-white text-xl font-bold tracking-wide">TON GARDEN</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-[#45A049] rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-amber-400 text-lg">₽</span>
              <span className="text-white font-medium">0</span>
              <span className="text-white/60">•</span>
              <img src="/ton-logo.png" alt="TON" className="w-4 h-4" />
              <span className="text-white font-medium">0</span>
            </div>
            
            <button 
              onClick={() => setIsMysteryBoxOpen(true)}
              className="bg-[#45A049] rounded-full p-3 hover:bg-[#3d8e41] transition-colors"
            >
              <Plus className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={() => setIsProfileOpen(true)}
              className="bg-[#45A049] rounded-full p-3 hover:bg-[#3d8e41] transition-colors"
            >
              <Wallet className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <MysteryBoxModal 
        isOpen={isMysteryBoxOpen}
        onClose={() => setIsMysteryBoxOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}