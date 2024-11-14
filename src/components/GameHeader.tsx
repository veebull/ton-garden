import React from 'react';
import { Wallet } from 'lucide-react';

export default function GameHeader() {
  return (
    <div className="bg-green-500 p-4 rounded-xl mx-2 mb-4">
      <div className="flex items-center justify-between">
        <img 
          src="/ton-garden-logo.png" 
          alt="TON Garden"
          className="h-12 w-auto"
          loading="lazy"
        />
        <div className="flex items-center gap-2">
          <div className="bg-green-400/50 rounded-full px-3 py-1 flex items-center gap-1">
            <span className="text-yellow-400">₽</span>
            <span className="text-white">0</span>
          </div>
          <button className="bg-green-400/50 rounded-full p-2">
            <Wallet className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}